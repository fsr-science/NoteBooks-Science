// ===== AUTH SYSTEM =====
let adminsData = [];
let currentSession = null;

// ===== RUNTIME CONFIG =====
// SAToken and PAT live exclusively in Vercel environment variables (WM_SATOKEN, WM_PAT).
// /api/gh returns only the SAToken to the browser — the PAT stays server-side always.
async function loadWmConfig() {
  try {
    const r = await fetch('https://ada-one-rho.vercel.app/api/gh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'config' })
    });
    if (r.ok) {
      const cfg = await r.json();
      if (cfg.satoken) window._WM_SATOKEN = cfg.satoken.trim().toUpperCase();
    }
  } catch(e) { /* proxy unreachable — Super Admin login will be unavailable */ }
}

async function loadAdmins() {
  try {
    const r = await fetch('bin/admins.json?' + Date.now());
    if (r.ok) adminsData = (await r.json()).admins || [];
  } catch(e) { adminsData = []; }
}

function doLogin(code) {
  const upper = code.toUpperCase().trim();
  // Super Admin: only works if SAToken was loaded from Vercel proxy — no hardcoded fallback
  if (window._WM_SATOKEN && upper === window._WM_SATOKEN) {
    currentSession = { code: upper, role: 'superadmin', permissions: ['create','delete','modify','approve'], name: 'Super Admin' };
    sessionStorage.setItem('wm_session', JSON.stringify(currentSession));
    return { ok: true };
  }
  const a = adminsData.find(x => x.code === upper);
  if (a) {
    currentSession = { code: upper, role: 'admin', permissions: a.permissions || [], name: a.name || 'Admin' };
    sessionStorage.setItem('wm_session', JSON.stringify(currentSession));
    return { ok: true };
  }
  return { ok: false };
}

function doLogout() {
  currentSession = null;
  sessionStorage.removeItem('wm_session');
  updateAuthUI();
  hideLoginScreen();
}

function restoreSession() {
  try {
    const s = sessionStorage.getItem('wm_session');
    if (s) currentSession = JSON.parse(s);
  } catch(e) {}
}

function isLoggedIn()   { return !!currentSession; }
function isSuperAdmin() { return currentSession?.role === 'superadmin'; }
function isAdmin()      { return ['admin','superadmin'].includes(currentSession?.role); }
function hasPerm(p)     { return currentSession?.permissions?.includes(p); }

function updateAuthUI() {
  const lb = document.getElementById('loginBtnToolbar');
  const ab = document.getElementById('adminPanelBtn');
  const mobAb = document.getElementById('mobOverflowAdminBtn');
  if (!lb) return;
  if (isLoggedIn()) {
    lb.textContent = (isSuperAdmin() ? '👑 ' : '🔑 ') + currentSession.name;
    lb.style.background = 'var(--selected)';
    lb.style.color = 'var(--accent)';
    ab.style.display = '';
    if (mobAb) mobAb.style.display = '';
  } else {
    lb.textContent = '🔑 Login';
    lb.style.background = '';
    lb.style.color = '';
    ab.style.display = 'none';
    if (mobAb) mobAb.style.display = 'none';
  }
  updatePendingBadge();
}

// ===== GUIDANCE =====
function showGuidanceIfNeeded() {
  if (localStorage.getItem('wm_guided')) return;
  const o = document.getElementById('guidanceOverlay');
  o.style.display = 'flex';
  requestAnimationFrame(() => o.classList.add('active'));
  switchGuideTab(isMobile ? 'mobile' : 'desktop');
}

function dismissGuidance() {
  localStorage.setItem('wm_guided', '1');
  const o = document.getElementById('guidanceOverlay');
  o.classList.remove('active');
  setTimeout(() => { o.style.display = 'none'; }, 380);
}

function switchGuideTab(tab) {
  document.getElementById('guideDesktop').style.display = tab === 'desktop' ? '' : 'none';
  document.getElementById('guideMobile').style.display  = tab === 'mobile'  ? '' : 'none';
  document.getElementById('guideTabDesktop').classList.toggle('active', tab === 'desktop');
  document.getElementById('guideTabMobile').classList.toggle('active',  tab === 'mobile');
}

// ===== LOGIN SCREEN =====
function showLoginScreen() {
  const o = document.getElementById('loginOverlay');
  if (isLoggedIn()) {
    document.getElementById('loginViewNormal').style.display = 'none';
    document.getElementById('loginViewLoggedIn').style.display = '';
    document.getElementById('liIcon').textContent = isSuperAdmin() ? '👑' : '✅';
    document.getElementById('liName').textContent = 'Hi, ' + currentSession.name + '!';
    document.getElementById('liRole').textContent = 'Role: ' + currentSession.role + ' · Code: ' + currentSession.code;
    document.getElementById('liAdminBtn').style.display = isAdmin() ? '' : 'none';
  } else {
    document.getElementById('loginViewNormal').style.display = '';
    document.getElementById('loginViewLoggedIn').style.display = 'none';
    clearCodeInputs();
  }
  o.style.display = 'flex';
  requestAnimationFrame(() => o.classList.add('active'));
}

function hideLoginScreen() {
  const o = document.getElementById('loginOverlay');
  o.classList.remove('active');
  setTimeout(() => { o.style.display = 'none'; }, 380);
}

function clearCodeInputs() {
  for (let i = 0; i < 6; i++) {
    const el = document.getElementById('cc' + i);
    if (el) { el.value = ''; el.classList.remove('filled'); }
  }
  setLoginMsg('', '');
}

function codeCharInput(i) {
  const el = document.getElementById('cc' + i);
  el.value = el.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
  el.classList.toggle('filled', el.value.length > 0);
  if (el.value.length === 1 && i < 5) document.getElementById('cc' + (i+1)).focus();
}

function codeCharKey(e, i) {
  if (e.key === 'Backspace' && !document.getElementById('cc' + i).value && i > 0)
    document.getElementById('cc' + (i-1)).focus();
  if (e.key === 'Enter') attemptLogin();
}

function codePaste(e) {
  e.preventDefault();
  const p = (e.clipboardData.getData('text') || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  for (let i = 0; i < p.length; i++) {
    const el = document.getElementById('cc' + i);
    if (el) { el.value = p[i]; el.classList.add('filled'); }
  }
  document.getElementById('cc' + Math.min(p.length, 5))?.focus();
}

function getEnteredCode() {
  return [0,1,2,3,4,5].map(i => document.getElementById('cc'+i)?.value || '').join('');
}

function setLoginMsg(text, type) {
  const el = document.getElementById('loginMsg');
  el.textContent = text;
  el.className = 'login-msg' + (type ? ' ' + type : '');
}

function attemptLogin() {
  const code = getEnteredCode();
  if (code.length < 6) { setLoginMsg('Please enter all 6 characters.', 'err'); return; }
  const result = doLogin(code);
  if (result.ok) {
    setLoginMsg('✓ Access granted!', 'ok');
    updateAuthUI();
    setTimeout(() => { clearCodeInputs(); showLoginScreen(); }, 900);
  } else {
    setLoginMsg('✗ Invalid code. Please try again.', 'err');
    const row = document.getElementById('codeInputRow');
    row.style.animation = 'none'; row.offsetHeight;
    row.style.animation = 'shake 0.42s ease';
  }
}

// ===== ADMIN PANEL =====
function showAdminPanel() {
  // Support both legacy and SSH auth
  const hasAccess = (typeof SSHAuth !== 'undefined' && SSHAuth.isAdmin()) || isAdmin();
  if (!hasAccess) return;
  
  document.getElementById('superAdminSection').style.display = isSuperAdmin() ? '' : 'none';
  if (isSuperAdmin()) renderAdminCodesList();
  loadPendingUploads();
  renderSSHUsersList();
  
  const o = document.getElementById('adminOverlay');
  o.style.display = 'flex';
  requestAnimationFrame(() => o.classList.add('active'));
}

function renderSSHUsersList() {
  const list = document.getElementById('sshUsersList');
  if (!list || typeof SSHAuth === 'undefined') return;
  
  const users = SSHAuth.getUsers();
  const admins = SSHAuth.getAdmins();
  
  if (users.length === 0 && admins.length === 0) {
    list.innerHTML = '<div style="font-size:13px;opacity:.5;padding:6px 0">No SSH users registered.</div>';
    return;
  }
  
  let html = '';
  
  // Show admins first
  admins.forEach(a => {
    html += `
      <div class="admin-code-row">
        <span style="font-size:11px;background:var(--accent);color:white;padding:2px 8px;border-radius:4px">ADMIN</span>
        <span style="font-size:13px;font-weight:600">${a.username}</span>
        <code style="font-size:10px;opacity:.6">${a.fingerprint?.slice(0,24) || 'N/A'}...</code>
        <div style="margin-left:auto">
          ${(a.permissions||[]).map(p=>`<span class="perm-pill">${p}</span>`).join('')}
        </div>
      </div>`;
  });
  
  // Show regular users
  users.forEach(u => {
    html += `
      <div class="admin-code-row">
        <span style="font-size:11px;background:var(--btn-bg);color:var(--fg);padding:2px 8px;border-radius:4px">USER</span>
        <span style="font-size:13px">${u.username}</span>
        <code style="font-size:10px;opacity:.6">${u.fingerprint?.slice(0,24) || 'N/A'}...</code>
        <button onclick="revokeSSHUserFromPanel('${u.id}')" style="margin-left:auto;font-size:11px;padding:3px 9px;border-radius:6px;border:none;background:#ffe0e0;color:#c62828;cursor:pointer">Revoke</button>
      </div>`;
  });
  
  list.innerHTML = html;
}

function revokeSSHUserFromPanel(userId) {
  if (typeof SSHAuth !== 'undefined') {
    SSHAuth.revokeUser(userId);
    renderSSHUsersList();
    showStatus('User revoked');
  }
}

function hideAdminPanel() {
  const o = document.getElementById('adminOverlay');
  o.classList.remove('active');
  setTimeout(() => { o.style.display = 'none'; }, 380);
}

function renderAdminCodesList() {
  const list = document.getElementById('adminCodesList');
  if (!adminsData.length) {
    list.innerHTML = '<div style="font-size:13px;opacity:.5;padding:6px 0">No admin codes created yet.</div>';
    return;
  }
  list.innerHTML = adminsData.map(a => `
    <div class="admin-code-row">
      <span class="mono-badge">${a.code}</span>
      <span style="font-size:13px;opacity:.65">${a.name || 'Admin'}</span>
      <div style="margin-left:auto;display:flex;gap:4px;flex-wrap:wrap;align-items:center">
        ${(a.permissions||[]).map(p=>`<span class="perm-pill">${p}</span>`).join('')}
        <button onclick="revokeAdmin('${a.code}')" style="font-size:11px;padding:3px 9px;border-radius:6px;border:none;background:#ffe0e0;color:#c62828;cursor:pointer;font-family:'Roboto',sans-serif">Revoke</button>
      </div>
    </div>`).join('');
}

function toggleCreateAdminForm() {
  const f = document.getElementById('createAdminForm');
  f.style.display = f.style.display === 'none' ? '' : 'none';
}

function genCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let c = '';
  while (c.length < 6) c += chars[Math.floor(Math.random() * chars.length)];
  if (c === window._WM_SATOKEN || adminsData.find(a => a.code === c)) return genCode();
  return c;
}

async function createNewAdmin() {
  const msgEl = document.getElementById('createAdminMsg');
  let code = document.getElementById('newAdminCodeInput').value.toUpperCase().trim();
  if (!code) code = genCode();
  if (!/^[A-Z0-9]{6}$/.test(code)) { msgEl.textContent = '✗ Must be exactly 6 alphanumeric characters.'; msgEl.style.color = '#e53935'; return; }
  if (window._WM_SATOKEN && code === window._WM_SATOKEN) { msgEl.textContent = '✗ That code is reserved.'; msgEl.style.color = '#e53935'; return; }
  const perms = ['create','delete','modify','approve'].filter(p => document.getElementById('pc-'+p)?.checked);
  adminsData = [...adminsData.filter(a => a.code !== code), { code, permissions: perms, name: 'Admin' }];
  const ok = await saveAdminsToGitHub();
  msgEl.style.color = ok ? '#43a047' : '#fb8c00';
  msgEl.textContent = ok ? `✓ Code ${code} created and saved to repo!` : `⚠ Code ${code} created but could not save to GitHub.`;
  renderAdminCodesList();
  document.getElementById('newAdminCodeInput').value = '';
}

async function revokeAdmin(code) {
  adminsData = adminsData.filter(a => a.code !== code);
  const ok = await saveAdminsToGitHub();
  if (ok) {
    showStatus(`✓ Admin code ${code} revoked and removed from bin/admins.json.`);
  } else {
    await loadAdmins();
    showStatus('✗ Failed to revoke: could not update bin/admins.json on GitHub.');
  }
  renderAdminCodesList();
}

// ===== GITHUB PROXY HELPER =====
// Calls the Vercel /api/gh serverless function.
// Returns { ok, data } or { ok: false, error }.
async function ghProxy(action, payload = {}) {
  try {
    const r = await fetch('https://ada-one-rho.vercel.app/api/gh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...payload })
    });
    const data = await r.json();
    if (!r.ok) return { ok: false, error: data.error || `Proxy error (${r.status})` };
    return { ok: true, data };
  } catch(e) {
    return { ok: false, error: e.message };
  }
}

async function saveAdminsToGitHub() {
  const jsonStr = JSON.stringify({ admins: adminsData }, null, 2);
  const bytes = new TextEncoder().encode(jsonStr);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  const b64 = btoa(binary);
  const getRes = await ghProxy('getFile', { path: 'bin/admins.json' });
  if (!getRes.ok) { showStatus(`✗ Could not read bin/admins.json: ${getRes.error}`); return false; }
  const sha = getRes.data.sha || null;
  const putRes = await ghProxy('putFile', { path: 'bin/admins.json', content: b64, message: 'Update admin codes', sha });
  if (!putRes.ok) { showStatus(`✗ Could not save bin/admins.json: ${putRes.error}`); return false; }
  return true;
}
