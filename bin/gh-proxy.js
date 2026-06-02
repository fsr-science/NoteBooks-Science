// bin/gh-proxy.js — GitHub API abstraction
// Reads credentials from the global S (settings) object.
// S must expose: S.pat, S.repo.owner, S.repo.repo
// Falls back to calling /api/gh.js serverless function if direct API fails.

// Initialize global S object with defaults if not already defined
if (typeof window !== 'undefined' && !window.S) {
  window.S = {
    repo: {
      owner: 'fsr-science',
      repo: 'NoteBooks-Science'
    },
    pat: null  // Will be set from localStorage or auth system if available
  };
}

async function ghProxy(action, params = {}) {
  const owner = window.S?.repo?.owner || 'fsr-science';
  const repo  = window.S?.repo?.repo || 'NoteBooks-Science';
  const pat   = window.S?.pat;

  if (!owner || !repo) {
    console.error('[ghProxy] owner/repo not configured');
    return { ok: false, error: 'repo not configured' };
  }

  const BASE    = `https://api.github.com/repos/${owner}/${repo}`;
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    ...(pat ? { 'Authorization': `token ${pat}` } : {}),
  };

  try {
    let url, options;

    switch (action) {

      // ── read ─────────────────────────────────────────────────
      case 'getFile':
      case 'getFileContent': {
        url = `${BASE}/contents/${params.path}`;
        if (params.ref) url += `?ref=${encodeURIComponent(params.ref)}`;
        options = { headers };
        break;
      }

      case 'latestCommit':
      case 'getLatestCommit': {
        url = `${BASE}/commits?per_page=1`;
        if (params.path) url += `&path=${encodeURIComponent(params.path)}`;
        options = { headers };
        break;
      }

      case 'getTree': {
        const sha = params.sha || 'HEAD';
        url = `${BASE}/git/trees/${sha}${params.recursive ? '?recursive=1' : ''}`;
        options = { headers };
        break;
      }

      // ── write (PAT required) ──────────────────────────────────
      case 'deleteFile': {
        if (!pat) return { ok: false, error: 'deleteFile requires a PAT' };
        if (!params.path) return { ok: false, error: 'deleteFile requires params.path' };
        if (!params.sha)  return { ok: false, error: 'deleteFile requires params.sha (blob sha)' };

        url = `${BASE}/contents/${params.path}`;
        options = {
          method: 'DELETE',
          headers: { ...headers, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: params.message || `Delete ${params.path}`,
            sha:     params.sha,
            ...(params.branch ? { branch: params.branch } : {}),
          }),
        };
        break;
      }

      default:
        console.warn('[ghProxy] Unknown action:', action);
        return { ok: false, error: `Unknown action: ${action}` };
    }

    const res = await fetch(url, options);

    // 404 on getFile is a normal "file doesn't exist" — surface it cleanly
    if (action === 'getFile' || action === 'getFileContent') {
      if (res.status === 404) return { ok: false, notFound: true, status: 404 };
    }

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      console.error(`[ghProxy] ${action} → HTTP ${res.status}`, body);
      return { ok: false, error: `GitHub ${res.status}`, status: res.status, body };
    }

    const data = await res.json();
    return { ok: true, data };

  } catch (e) {
    console.error('[ghProxy] Network error:', e);
    return { ok: false, error: e.message };
  }
}

window.ghProxy = ghProxy;