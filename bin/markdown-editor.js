// Markdown Editor Module
// Enables in-browser temporary editing of markdown files with live preview
// All edits are stored in sessionStorage and can be reverted

const MarkdownEditor = (() => {
  const EDITOR_STORAGE_PREFIX = 'md-editor-';
  
  /**
   * Create an editor UI for markdown content
   * @param {HTMLElement} container - Container to render editor in
   * @param {string} filePath - Path of the file being edited
   * @param {string} originalContent - Original markdown content
   * @param {function} onClose - Callback when editor is closed
   */
  function createEditorUI(container, filePath, originalContent, onClose) {
    const storageKey = EDITOR_STORAGE_PREFIX + btoa(filePath);
    const savedContent = sessionStorage.getItem(storageKey) || originalContent;
    
    // Create editor wrapper
    const editorWrapper = document.createElement('div');
    editorWrapper.className = 'markdown-editor-wrapper';
    
    // Editor toolbar
    const toolbar = document.createElement('div');
    toolbar.className = 'markdown-editor-toolbar';
    toolbar.innerHTML = `
      <div class="editor-toolbar-group">
        <span class="editor-label">Edit Mode</span>
        <button class="editor-btn editor-btn-icon" title="Bold" onclick="MarkdownEditor.insertFormat(event, '**', '**')">
          <strong>B</strong>
        </button>
        <button class="editor-btn editor-btn-icon" title="Italic" onclick="MarkdownEditor.insertFormat(event, '*', '*')">
          <em>I</em>
        </button>
        <button class="editor-btn editor-btn-icon" title="Heading" onclick="MarkdownEditor.insertFormat(event, '# ', '')">
          H
        </button>
        <button class="editor-btn editor-btn-icon" title="Code" onclick="MarkdownEditor.insertFormat(event, '\\`', '\\`')">
          &lt;/&gt;
        </button>
        <button class="editor-btn editor-btn-icon" title="Link" onclick="MarkdownEditor.insertLink(event)">
          🔗
        </button>
      </div>
      <div class="editor-toolbar-group">
        <button class="editor-btn editor-btn-primary" id="saveEditsBtn" onclick="MarkdownEditor.saveEdits(event)">
          ✓ Done Editing
        </button>
        <button class="editor-btn editor-btn-secondary" id="revertEditsBtn" onclick="MarkdownEditor.revertEdits(event)" title="Restore original content">
          ↻ Revert
        </button>
      </div>
    `;
    
    // Split pane container
    const splitContainer = document.createElement('div');
    splitContainer.className = 'markdown-editor-split';
    
    // Editor pane
    const editorPane = document.createElement('div');
    editorPane.className = 'markdown-editor-pane';
    
    const textarea = document.createElement('textarea');
    textarea.className = 'markdown-editor-input';
    textarea.id = 'markdown-textarea-' + Math.random().toString(36).substr(2, 9);
    textarea.value = savedContent;
    textarea.spellcheck = true;
    textarea.addEventListener('input', (e) => {
      sessionStorage.setItem(storageKey, e.target.value);
      updatePreview(e.target.value, previewPane, filePath);
    });
    
    editorPane.appendChild(textarea);
    
    // Preview pane
    const previewPane = document.createElement('div');
    previewPane.className = 'markdown-editor-preview-pane';
    
    const previewLabel = document.createElement('div');
    previewLabel.className = 'editor-preview-label';
    previewLabel.textContent = '👁️ Live Preview';
    
    const previewContent = document.createElement('div');
    previewContent.className = 'markdown-editor-preview';
    
    previewPane.appendChild(previewLabel);
    previewPane.appendChild(previewContent);
    
    splitContainer.appendChild(editorPane);
    splitContainer.appendChild(previewPane);
    
    editorWrapper.appendChild(toolbar);
    editorWrapper.appendChild(splitContainer);
    
    // Set up preview update
    updatePreview(savedContent, previewPane, filePath);
    
    // Store references for later access
    editorWrapper._textarea = textarea;
    editorWrapper._originalContent = originalContent;
    editorWrapper._filePath = filePath;
    editorWrapper._storageKey = storageKey;
    editorWrapper._onClose = onClose;
    
    container.innerHTML = '';
    container.appendChild(editorWrapper);
    
    // Focus textarea
    textarea.focus();
    textarea.select();
    
    return editorWrapper;
  }
  
  /**
   * Update live preview
   */
  function updatePreview(content, previewPane, filePath) {
    const previewContent = previewPane.querySelector('.markdown-editor-preview');
    try {
      previewContent.innerHTML = markdownToHTML(content, filePath);
      // Initialize markdown features in preview
      setTimeout(() => {
        const featuresCode = previewContent.innerHTML;
        previewContent.innerHTML = featuresCode;
        initMarkdownFeatures(previewContent);
      }, 0);
    } catch (e) {
      previewContent.innerHTML = `<div style="color:#ef4444;padding:16px;font-size:13px">Preview error: ${e.message}</div>`;
    }
  }
  
  /**
   * Insert formatting at cursor
   */
  function insertFormat(event, before, after) {
    event.preventDefault();
    const textarea = document.querySelector('.markdown-editor-input');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end) || 'text';
    
    const newText = text.substring(0, start) + before + selectedText + after + text.substring(end);
    textarea.value = newText;
    textarea.selectionStart = start + before.length;
    textarea.selectionEnd = start + before.length + selectedText.length;
    
    // Trigger input event to update preview and storage
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    textarea.focus();
  }
  
  /**
   * Insert link
   */
  function insertLink(event) {
    event.preventDefault();
    const url = prompt('Enter URL:', 'https://');
    if (!url) return;
    const linkText = prompt('Enter link text:', 'link');
    if (!linkText) return;
    
    const textarea = document.querySelector('.markdown-editor-input');
    const start = textarea.selectionStart;
    const text = textarea.value;
    const linkMarkdown = `[${linkText}](${url})`;
    
    const newText = text.substring(0, start) + linkMarkdown + text.substring(start);
    textarea.value = newText;
    textarea.selectionStart = start + linkMarkdown.length;
    
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    textarea.focus();
  }
  
  /**
   * Save edits and close editor
   */
  function saveEdits(event) {
    event.preventDefault();
    const editorWrapper = event.target.closest('.markdown-editor-wrapper');
    const content = editorWrapper._textarea.value;
    const storageKey = editorWrapper._storageKey;
    
    // Keep in session storage for this session
    sessionStorage.setItem(storageKey, content);
    
    // Close editor and show message
    if (editorWrapper._onClose) {
      editorWrapper._onClose(content);
    }
  }
  
  /**
   * Revert to original content
   */
  function revertEdits(event) {
    event.preventDefault();
    const editorWrapper = event.target.closest('.markdown-editor-wrapper');
    
    if (!confirm('Are you sure you want to revert all changes? This will restore the original content.')) {
      return;
    }
    
    const textarea = editorWrapper._textarea;
    const originalContent = editorWrapper._originalContent;
    
    textarea.value = originalContent;
    sessionStorage.removeItem(editorWrapper._storageKey);
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    
    showStatus('✓ Reverted to original content');
  }
  
  /**
   * Clear editor session storage for a file
   */
  function clearSession(filePath) {
    const storageKey = EDITOR_STORAGE_PREFIX + btoa(filePath);
    sessionStorage.removeItem(storageKey);
  }
  
  /**
   * Check if a file has unsaved edits
   */
  function hasUnsavedEdits(filePath) {
    const storageKey = EDITOR_STORAGE_PREFIX + btoa(filePath);
    return sessionStorage.getItem(storageKey) !== null;
  }
  
  /**
   * Get saved content for a file
   */
  function getSavedContent(filePath) {
    const storageKey = EDITOR_STORAGE_PREFIX + btoa(filePath);
    return sessionStorage.getItem(storageKey);
  }
  
  // Public API
  return {
    createEditorUI,
    insertFormat,
    insertLink,
    saveEdits,
    revertEdits,
    clearSession,
    hasUnsavedEdits,
    getSavedContent
  };
})();
