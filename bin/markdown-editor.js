// Markdown Editor Module
// Enables in-browser temporary editing of markdown files with live preview
// All edits are stored in sessionStorage and can be reverted

const MarkdownEditor = (() => {
  const EDITOR_STORAGE_PREFIX = 'md-editor-';

  // ─── Format Actions (moved out of inline onclick to avoid template-literal escaping issues) ───

  const FORMAT_ACTIONS = {
    bold:    { before: '**', after: '**' },
    italic:  { before: '*',  after: '*'  },
    heading: { before: '# ', after: ''   },
    code:    { before: '`',  after: '`'  },
    strike:  { before: '~~', after: '~~' },
    quote:   { before: '> ', after: ''   },
    ul:      { before: '- ', after: ''   },
    ol:      { before: '1. ', after: ''  },
  };

  // ─── Helpers ───────────────────────────────────────────────────────────────

  function getActiveTextarea() {
    return document.querySelector('.mde-textarea');
  }

  function getEditorWrapper(el) {
    return el.closest('.mde-wrapper');
  }

  function showStatus(message, type = 'success') {
    let bar = document.querySelector('.mde-status-bar');
    if (!bar) return;
    bar.textContent = message;
    bar.className = `mde-status-bar mde-status-${type} mde-status-visible`;
    clearTimeout(bar._hideTimer);
    bar._hideTimer = setTimeout(() => {
      bar.className = 'mde-status-bar';
    }, 2500);
  }

  // ─── Core: insert text formatting at cursor ────────────────────────────────

  function insertFormat(before, after, textarea) {
    const ta = textarea || getActiveTextarea();
    if (!ta) return;

    const start  = ta.selectionStart;
    const end    = ta.selectionEnd;
    const text   = ta.value;
    const sel    = text.substring(start, end) || 'text';
    const prefix = before.endsWith(' ') && sel.startsWith(' ') ? before.trimEnd() : before;

    ta.value = text.substring(0, start) + prefix + sel + after + text.substring(end);
    ta.selectionStart = start + prefix.length;
    ta.selectionEnd   = start + prefix.length + sel.length;

    ta.dispatchEvent(new Event('input', { bubbles: true }));
    ta.focus();
  }

  function insertLink(textarea) {
    const ta = textarea || getActiveTextarea();
    if (!ta) return;

    const url = prompt('Enter URL:', 'https://');
    if (!url) return;
    const linkText = prompt('Enter link text:', ta.value.substring(ta.selectionStart, ta.selectionEnd) || 'link');
    if (linkText == null) return;

    const start = ta.selectionStart;
    const md    = `[${linkText}](${url})`;
    ta.value    = ta.value.substring(0, start) + md + ta.value.substring(ta.selectionEnd);
    ta.selectionStart = ta.selectionEnd = start + md.length;

    ta.dispatchEvent(new Event('input', { bubbles: true }));
    ta.focus();
  }

  function insertTable(textarea) {
    const ta = textarea || getActiveTextarea();
    if (!ta) return;

    const cols = parseInt(prompt('Number of columns:', '3'), 10);
    const rows = parseInt(prompt('Number of data rows:', '2'), 10);
    if (!cols || !rows || cols < 1 || rows < 1) return;

    const header = '| ' + Array.from({ length: cols }, (_, i) => `Header ${i + 1}`).join(' | ') + ' |';
    const divider = '| ' + Array(cols).fill('---').join(' | ') + ' |';
    const dataRow = '| ' + Array(cols).fill('Cell').join(' | ') + ' |';
    const table = [header, divider, ...Array(rows).fill(dataRow)].join('\n');

    const start = ta.selectionStart;
    ta.value = ta.value.substring(0, start) + '\n' + table + '\n' + ta.value.substring(ta.selectionEnd);
    ta.selectionStart = ta.selectionEnd = start + table.length + 2;

    ta.dispatchEvent(new Event('input', { bubbles: true }));
    ta.focus();
  }

  // ─── Word / character count ────────────────────────────────────────────────

  function getStats(text) {
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const chars  = text.length;
    const lines  = text === '' ? 0 : text.split('\n').length;
    return { words, chars, lines };
  }

  function updateStats(textarea, statsEl) {
    if (!statsEl) return;
    const { words, chars, lines } = getStats(textarea.value);
    statsEl.textContent = `${words} words · ${chars} chars · ${lines} lines`;
  }

  // ─── Keyboard shortcuts ────────────────────────────────────────────────────

  function attachShortcuts(textarea) {
    textarea.addEventListener('keydown', (e) => {
      if (!e.ctrlKey && !e.metaKey) return;

      const map = {
        b: 'bold', i: 'italic', k: 'link',
      };

      const key = e.key.toLowerCase();
      if (key === 'k') {
        e.preventDefault();
        insertLink(textarea);
        return;
      }
      if (map[key]) {
        e.preventDefault();
        const { before, after } = FORMAT_ACTIONS[map[key]];
        insertFormat(before, after, textarea);
      }
      // Ctrl+Z handled natively; Ctrl+S triggers save
      if (key === 's') {
        e.preventDefault();
        const wrapper = getEditorWrapper(textarea);
        if (wrapper && wrapper._onClose) {
          wrapper._onClose(textarea.value);
          showStatus('✓ Saved');
        }
      }
    });

    // Tab key → insert 2 spaces instead of losing focus
    textarea.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      e.preventDefault();
      const start = textarea.selectionStart;
      const end   = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 2;
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
    });
  }

  // ─── Live preview ──────────────────────────────────────────────────────────

  function updatePreview(content, previewEl) {
    try {
      if (typeof markdownToHTML === 'function') {
        previewEl.innerHTML = markdownToHTML(content);
        if (typeof initMarkdownFeatures === 'function') {
          initMarkdownFeatures(previewEl);
        }
      } else {
        // Basic fallback renderer
        previewEl.innerHTML = basicMarkdownFallback(content);
      }
    } catch (e) {
      previewEl.innerHTML = `<p style="color:#ef4444;font-size:13px">Preview error: ${e.message}</p>`;
    }
  }

  /** Minimal fallback if markdownToHTML isn't available */
  function basicMarkdownFallback(md) {
    return md
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/^#{6}\s(.+)/gm, '<h6>$1</h6>')
      .replace(/^#{5}\s(.+)/gm, '<h5>$1</h5>')
      .replace(/^#{4}\s(.+)/gm, '<h4>$1</h4>')
      .replace(/^#{3}\s(.+)/gm, '<h3>$1</h3>')
      .replace(/^#{2}\s(.+)/gm, '<h2>$1</h2>')
      .replace(/^#{1}\s(.+)/gm, '<h1>$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/~~(.+?)~~/g, '<del>$1</del>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
      .replace(/^---$/gm, '<hr>')
      .replace(/^- (.+)/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
      .replace(/\n\n+/g, '</p><p>')
      .replace(/^(?!<[a-z])/gm, '')
      .replace(/(.+)/s, '<p>$1</p>');
  }

  // ─── UI Builder ────────────────────────────────────────────────────────────

  function buildStyles() {
    if (document.getElementById('mde-styles')) return;
    const style = document.createElement('style');
    style.id = 'mde-styles';
    style.textContent = `
      .mde-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        font-family: system-ui, sans-serif;
        background: #0f1117;
        color: #e2e8f0;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 32px rgba(0,0,0,0.4);
      }

      /* ── Toolbar ── */
      .mde-toolbar {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 8px 12px;
        background: #1a1d27;
        border-bottom: 1px solid #2d3148;
        flex-wrap: wrap;
      }
      .mde-toolbar-sep {
        width: 1px;
        height: 20px;
        background: #2d3148;
        margin: 0 4px;
      }
      .mde-toolbar-right {
        margin-left: auto;
        display: flex;
        gap: 6px;
        align-items: center;
      }
      .mde-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 4px 10px;
        border: 1px solid transparent;
        border-radius: 5px;
        font-size: 13px;
        cursor: pointer;
        transition: background 0.15s, border-color 0.15s, color 0.15s;
        background: transparent;
        color: #94a3b8;
        line-height: 1;
        font-family: inherit;
        min-width: 28px;
        height: 28px;
      }
      .mde-btn:hover {
        background: #2d3148;
        color: #e2e8f0;
        border-color: #3d4268;
      }
      .mde-btn:active { transform: scale(0.95); }
      .mde-btn.active { background: #2d3148; color: #60a5fa; border-color: #3d4268; }
      .mde-btn-icon { font-weight: 700; font-size: 12px; }
      .mde-btn-primary {
        background: #2563eb;
        color: #fff;
        border-color: #1d4ed8;
        padding: 4px 14px;
      }
      .mde-btn-primary:hover { background: #1d4ed8; color: #fff; border-color: #1e40af; }
      .mde-btn-danger {
        background: transparent;
        color: #f87171;
        border-color: #7f1d1d44;
      }
      .mde-btn-danger:hover { background: #7f1d1d55; border-color: #f87171; color: #fca5a5; }

      /* ── Toggle bar (edit / preview / split) ── */
      .mde-view-toggle {
        display: flex;
        gap: 2px;
        background: #0f1117;
        border: 1px solid #2d3148;
        border-radius: 6px;
        padding: 2px;
      }
      .mde-view-toggle .mde-btn {
        border-radius: 4px;
        font-size: 11px;
        padding: 3px 9px;
        height: 24px;
      }
      .mde-view-toggle .mde-btn.active {
        background: #2563eb;
        color: #fff;
        border-color: transparent;
      }

      /* ── Split / single pane ── */
      .mde-split {
        display: flex;
        flex: 1;
        overflow: hidden;
        position: relative;
      }
      .mde-split[data-view="edit"]    .mde-preview-pane  { display: none; }
      .mde-split[data-view="preview"] .mde-editor-pane   { display: none; }
      .mde-split[data-view="preview"] .mde-preview-pane  { border-left: none; }

      .mde-editor-pane, .mde-preview-pane {
        flex: 1;
        overflow-y: auto;
        min-width: 0;
      }
      .mde-preview-pane {
        border-left: 1px solid #2d3148;
        padding: 20px 24px;
      }

      .mde-textarea {
        width: 100%;
        height: 100%;
        resize: none;
        border: none;
        outline: none;
        background: #0f1117;
        color: #cbd5e1;
        font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
        font-size: 13.5px;
        line-height: 1.7;
        padding: 20px 24px;
        box-sizing: border-box;
        tab-size: 2;
        caret-color: #60a5fa;
      }
      .mde-textarea::selection { background: #2563eb44; }
      .mde-textarea::placeholder { color: #334155; }

      /* ── Preview pane content ── */
      .mde-preview-pane h1, .mde-preview-pane h2,
      .mde-preview-pane h3, .mde-preview-pane h4 { color: #f1f5f9; margin: 1.1em 0 0.4em; }
      .mde-preview-pane h1 { font-size: 1.7em; border-bottom: 1px solid #2d3148; padding-bottom: 0.3em; }
      .mde-preview-pane h2 { font-size: 1.3em; }
      .mde-preview-pane p  { line-height: 1.75; color: #94a3b8; margin: 0.6em 0; }
      .mde-preview-pane a  { color: #60a5fa; }
      .mde-preview-pane code {
        background: #1e2235; padding: 2px 6px; border-radius: 4px;
        font-size: 0.88em; color: #a5b4fc; font-family: monospace;
      }
      .mde-preview-pane pre code {
        display: block; padding: 16px; overflow-x: auto;
        background: #1a1d27; border-radius: 6px; border: 1px solid #2d3148;
      }
      .mde-preview-pane blockquote {
        border-left: 3px solid #2563eb; margin: 0; padding: 8px 16px;
        background: #1a1d27; border-radius: 0 6px 6px 0; color: #64748b;
      }
      .mde-preview-pane hr { border: none; border-top: 1px solid #2d3148; margin: 1.5em 0; }
      .mde-preview-pane ul, .mde-preview-pane ol { padding-left: 1.5em; color: #94a3b8; }
      .mde-preview-pane li { margin: 0.25em 0; }
      .mde-preview-pane table {
        border-collapse: collapse; width: 100%; font-size: 13px;
      }
      .mde-preview-pane th, .mde-preview-pane td {
        border: 1px solid #2d3148; padding: 6px 12px; text-align: left;
      }
      .mde-preview-pane th { background: #1a1d27; color: #e2e8f0; }
      .mde-preview-pane img { max-width: 100%; border-radius: 6px; }

      /* ── Status / footer bar ── */
      .mde-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 14px;
        background: #1a1d27;
        border-top: 1px solid #2d3148;
        font-size: 11.5px;
        color: #475569;
        gap: 12px;
      }
      .mde-stats { flex: 1; }
      .mde-shortcut-hint { color: #334155; font-size: 11px; }

      .mde-status-bar {
        position: absolute;
        bottom: 36px;
        left: 50%;
        transform: translateX(-50%);
        background: #1e293b;
        border: 1px solid #2d3148;
        color: #94a3b8;
        font-size: 12px;
        padding: 6px 16px;
        border-radius: 999px;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        white-space: nowrap;
        z-index: 10;
      }
      .mde-status-bar.mde-status-visible { opacity: 1; }
      .mde-status-success { color: #4ade80; border-color: #14532d55; background: #052e1655; }
      .mde-status-error   { color: #f87171; border-color: #7f1d1d55; background: #450a0a55; }

      /* ── Unsaved indicator ── */
      .mde-unsaved-dot {
        width: 7px; height: 7px;
        border-radius: 50%;
        background: #facc15;
        display: inline-block;
        margin-left: 5px;
        vertical-align: middle;
        opacity: 0;
        transition: opacity 0.2s;
      }
      .mde-unsaved-dot.visible { opacity: 1; }
    `;
    document.head.appendChild(style);
  }

  // ─── Main: createEditorUI ──────────────────────────────────────────────────

  /**
   * Create an editor UI for markdown content.
   * @param {HTMLElement} container       - Container to render editor in
   * @param {string}      filePath        - Path of the file being edited
   * @param {string}      originalContent - Original markdown content
   * @param {function}    onClose         - Callback(newContent) when editor is closed
   */
  function createEditorUI(container, filePath, originalContent, onClose) {
    buildStyles();

    const storageKey   = EDITOR_STORAGE_PREFIX + btoa(filePath);
    const savedContent = sessionStorage.getItem(storageKey) ?? originalContent;

    // ── Wrapper ──────────────────────────────────────────────────────────────
    const wrapper = document.createElement('div');
    wrapper.className = 'mde-wrapper';

    // ── Toolbar ──────────────────────────────────────────────────────────────
    const toolbar = document.createElement('div');
    toolbar.className = 'mde-toolbar';

    function makeBtn(label, title, cls, onClick) {
      const btn = document.createElement('button');
      btn.type      = 'button';
      btn.className = `mde-btn ${cls || ''}`.trim();
      btn.title     = title || label;
      btn.innerHTML = label;
      btn.addEventListener('click', onClick);
      return btn;
    }

    const formatBtns = [
      { label: '<strong>B</strong>',  title: 'Bold (Ctrl+B)',           key: 'bold'    },
      { label: '<em>I</em>',          title: 'Italic (Ctrl+I)',         key: 'italic'  },
      { label: '<del>S</del>',        title: 'Strikethrough',            key: 'strike'  },
      { label: 'H',                   title: 'Heading',                  key: 'heading' },
      { label: '&lt;/&gt;',           title: 'Inline code',              key: 'code'    },
      { label: '❝',                   title: 'Blockquote',               key: 'quote'   },
      { label: '• List',              title: 'Unordered list',           key: 'ul'      },
      { label: '1. List',             title: 'Ordered list',             key: 'ol'      },
    ];

    formatBtns.forEach(({ label, title, key }) => {
      const { before, after } = FORMAT_ACTIONS[key];
      toolbar.appendChild(makeBtn(label, title, 'mde-btn-icon', () => {
        insertFormat(before, after, textarea);
      }));
    });

    const sep1 = document.createElement('div');
    sep1.className = 'mde-toolbar-sep';
    toolbar.appendChild(sep1);

    toolbar.appendChild(makeBtn('🔗 Link', 'Insert link (Ctrl+K)', '', () => insertLink(textarea)));
    toolbar.appendChild(makeBtn('⊞ Table', 'Insert table', '', () => insertTable(textarea)));

    // View-toggle group
    const viewToggle = document.createElement('div');
    viewToggle.className = 'mde-view-toggle';

    const views = [
      { label: '✏️ Edit',    value: 'edit'    },
      { label: '⚡ Split',   value: 'split'   },
      { label: '👁 Preview', value: 'preview' },
    ];

    views.forEach(({ label, value }) => {
      const btn = makeBtn(label, '', '', () => {
        splitEl.dataset.view = value;
        viewToggle.querySelectorAll('.mde-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (value !== 'edit') updatePreview(textarea.value, previewContent);
      });
      if (value === 'split') btn.classList.add('active');
      viewToggle.appendChild(btn);
    });

    const rightGroup = document.createElement('div');
    rightGroup.className = 'mde-toolbar-right';

    const unsavedDot = document.createElement('span');
    unsavedDot.className = 'mde-unsaved-dot';
    unsavedDot.title = 'Unsaved changes';

    const saveBtn   = makeBtn('✓ Done', 'Save & close (Ctrl+S)', 'mde-btn-primary', () => {
      sessionStorage.setItem(storageKey, textarea.value);
      if (onClose) onClose(textarea.value);
      showStatus('✓ Saved');
      unsavedDot.classList.remove('visible');
    });

    const revertBtn = makeBtn('↻ Revert', 'Revert to original', 'mde-btn-danger', () => {
      if (!confirm('Revert all changes and restore original content?')) return;
      textarea.value = originalContent;
      sessionStorage.removeItem(storageKey);
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
      showStatus('↻ Reverted to original');
      unsavedDot.classList.remove('visible');
    });

    rightGroup.append(unsavedDot, viewToggle, saveBtn, revertBtn);
    toolbar.appendChild(rightGroup);

    // ── Split pane ───────────────────────────────────────────────────────────
    const splitEl = document.createElement('div');
    splitEl.className = 'mde-split';
    splitEl.dataset.view = 'split';

    const editorPane = document.createElement('div');
    editorPane.className = 'mde-editor-pane';

    const textarea = document.createElement('textarea');
    textarea.className   = 'mde-textarea';
    textarea.value       = savedContent;
    textarea.spellcheck  = true;
    textarea.placeholder = 'Start writing markdown…';

    editorPane.appendChild(textarea);

    const previewPane = document.createElement('div');
    previewPane.className = 'mde-preview-pane';

    const previewContent = document.createElement('div');
    previewPane.appendChild(previewContent);

    splitEl.append(editorPane, previewPane);

    // ── Footer / status ──────────────────────────────────────────────────────
    const footer = document.createElement('div');
    footer.className = 'mde-footer';

    const statsEl = document.createElement('span');
    statsEl.className = 'mde-stats';

    const hint = document.createElement('span');
    hint.className = 'mde-shortcut-hint';
    hint.textContent = 'Ctrl+B Bold · Ctrl+I Italic · Ctrl+K Link · Ctrl+S Save · Tab → 2 spaces';

    footer.append(statsEl, hint);

    // Status toast (absolute inside wrapper)
    const statusBar = document.createElement('div');
    statusBar.className = 'mde-status-bar';

    wrapper.append(toolbar, splitEl, footer, statusBar);

    // ── Wire up textarea events ──────────────────────────────────────────────
    textarea.addEventListener('input', (e) => {
      const val = e.target.value;
      sessionStorage.setItem(storageKey, val);
      updatePreview(val, previewContent);
      updateStats(textarea, statsEl);
      unsavedDot.classList.add('visible');
    });

    attachShortcuts(textarea);

    // ── Store references ─────────────────────────────────────────────────────
    wrapper._textarea        = textarea;
    wrapper._originalContent = originalContent;
    wrapper._filePath        = filePath;
    wrapper._storageKey      = storageKey;
    wrapper._onClose         = onClose;

    // ── Mount ────────────────────────────────────────────────────────────────
    container.innerHTML = '';
    container.appendChild(wrapper);

    // Initial render
    updatePreview(savedContent, previewContent);
    updateStats(textarea, statsEl);
    if (savedContent !== originalContent) unsavedDot.classList.add('visible');

    textarea.focus();

    return wrapper;
  }

  // ─── Session helpers ───────────────────────────────────────────────────────

  function clearSession(filePath) {
    sessionStorage.removeItem(EDITOR_STORAGE_PREFIX + btoa(filePath));
  }

  function hasUnsavedEdits(filePath) {
    return sessionStorage.getItem(EDITOR_STORAGE_PREFIX + btoa(filePath)) !== null;
  }

  function getSavedContent(filePath) {
    return sessionStorage.getItem(EDITOR_STORAGE_PREFIX + btoa(filePath));
  }

  // ─── Public API ───────────────────────────────────────────────────────────

  return {
    createEditorUI,
    // Exposed for any external callers that still use the old API
    insertFormat: (before, after) => insertFormat(before, after),
    insertLink:   ()              => insertLink(),
    insertTable:  ()              => insertTable(),
    clearSession,
    hasUnsavedEdits,
    getSavedContent,
    showStatus,
  };
})();