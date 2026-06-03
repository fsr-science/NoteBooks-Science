// Main JavaScript for the NoteBooks file explorer app
// This file handles the UI interactions, file fetching, previewing, and all client-side logic.

const listView = document.getElementById("listView");
const pathNav = document.getElementById("pathNav");
const splash = document.getElementById("splash");
const contextMenu = document.getElementById("contextMenu");
const previewContainer = document.getElementById("previewContainer");
const mobilePreview = document.getElementById("mobilePreview");
const mobilePreviewContent = document.getElementById("mobilePreviewContent");
const mobilePreviewTitle = document.getElementById("mobilePreviewTitle");
const taskbar = document.getElementById("taskbar");
const statusEl = document.getElementById("status");

let currentNode = null;
let pathHistory = [];
let selected = null;
let previewId = 0;
const windows = {};
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
let updateDismissed = false;

// Runtime config loaded from /api/config (populated from Vercel env vars).
// Fallbacks keep the app functional when running outside Vercel (e.g. local dev).
let appConfig = {
  GITHUB_REPO:   '',
  GITHUB_BRANCH: 'main',
  APP_URL:       '',
  GITPAGE_URL:   '',
};

async function fetchConfig() {
  try {
    const res = await fetch('/api/config');
    if (res.ok) {
      const data = await res.json();
      appConfig = { ...appConfig, ...data };
    }
  } catch (e) {
    console.warn('fetchConfig failed — using defaults:', e);
  }
}

const EXCLUDED_ROOT_FILES = [
  "fmtree.py", "files.json", "index.html", "favicon.png", "tree.py", "autocommit.ps1"
];

const FILE_ICONS = {
  folder: "📁",
  md: "📝",
  markdown: "📝",
  pdf: "📕",
  txt: "📄",
  json: "🔧",
  js: "📜",
  html: "🌐",
  css: "🎨",
  py: "🐍",
  jpg: "🖼️",
  jpeg: "🖼️",
  png: "🖼️",
  gif: "🖼️",
  svg: "🖼️",
  doc:  "📘", docx: "📘",
  xls:  "📗", xlsx: "📗",
  ppt:  "📙", pptx: "📙",
  default: "📄"
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then(() => {
    console.log("Service Worker registered");
  }).catch(err => {
    console.error("SW registration failed:", err);
  });
}

let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

function dismissUpdateNotice() {
  document.getElementById("updateNotice").style.display = "none";
  updateDismissed = true;
}

function showStatus(message, isLoading = false) {
  statusEl.innerHTML = isLoading ? `<span class="loader"></span>${message}` : message;
  statusEl.classList.add("visible");
  setTimeout(() => {
    statusEl.classList.remove("visible");
  }, 3000);
}

// Function to automatically fetch and generate the file tree
async function generateFileTree() {
  showStatus("Generating file tree...", true);
  
  try {
    // This would be a server-side operation in reality
    // For this example, we'll just add a timestamp to show the concept
    const timestamp = new Date().toISOString();
    showStatus(`Tree generated at: ${timestamp}`);
    
    // In a real implementation, you would call your backend API to regenerate files.json
    // For now, we'll just refresh what we have
    await fetchTree();
  } catch (error) {
    showStatus("Failed to generate tree: " + error.message);
  }
}

function refreshFiles() {
  fetchTree();
  showStatus("Refreshing files list…");
}

async function fetchTree() {
  showStatus("Loading files...", true);

  try {
    const res = await fetch("files.json?" + new Date().getTime());
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const tree = await res.json();
    const raw = JSON.stringify(tree, Object.keys(tree).sort());

    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(raw));
    lastHash = Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
    initialLoadComplete = true;

    try {
      lastCommit = await fetchLatestCommit();
    } catch (e) {
      console.warn("Failed to fetch initial commit:", e);
    }

    currentNode = tree;
    pathHistory = [];
    renderFolder(tree);
    updatePathNav();

    const fontPromise = new Promise((resolve) => {
  const testSpan = document.createElement("span");
  testSpan.textContent = "A quick brown fox jumps";
  testSpan.style.position = "absolute";
  testSpan.style.visibility = "hidden";
  testSpan.style.fontSize = "32px";
  testSpan.style.fontFamily = "sans-serif";

  document.body.appendChild(testSpan);
  const baseWidth = testSpan.offsetWidth;

  testSpan.style.fontFamily = '"Roboto", sans-serif';

  requestAnimationFrame(() => {
    const testWidth = testSpan.offsetWidth;
    document.body.removeChild(testSpan);

    if (testWidth !== baseWidth) {
      console.log("Roboto is present.");
    } else {
      console.warn("Roboto not rendered. Falling back.");
      showStatus("Roboto font not available. Falling back to system font.");
    }

    resolve(); // Always resolve — don't block the splash or file loading
  });
});


    Promise.all([
      fontPromise,
      new Promise(res => setTimeout(res, 500))
    ]).then(() => {
      splash.style.opacity = 0;
      setTimeout(() => {
        splash.style.display = 'none';
      }, 600);

      if (!window.updateCheckStarted) {
        window.updateCheckStarted = true;
        setTimeout(() => setInterval(checkForUpdate, 20000), 5000);
      }

      showStatus("Files loaded successfully!");
    }).catch(error => {
      showStatus("Error loading files: " + error.message);
      console.error("Error fetching tree:", error);
    });

  } catch (error) {
    showStatus("Failed to generate tree: " + error.message);
    console.error(error);
    // Ensure splash is always dismissed even on fatal error
    splash.style.opacity = 0;
    setTimeout(() => { splash.style.display = 'none'; }, 600);
  }
}


	

function getFileIcon(file) {
  if (file.type === "folder") return FILE_ICONS.folder;
  
  const ext = file.name.split('.').pop().toLowerCase();
  return FILE_ICONS[ext] || FILE_ICONS.default;
}

function getFileTypeClass(file) {
  if (file.type === "folder") return "folder";

  const ext = file.name.split('.').pop().toLowerCase();

  if (["jpg", "jpeg", "png", "gif", "svg", "webp"].includes(ext)) {
    return "image";
  }

  return ext; // returns 'py', 'html', 'css', etc.
}


function renderFolder(node) {
  listView.innerHTML = "";
  selected = null;
  
  const children = (node.children || []).filter(item => {
    // Exclude .github/ folder
    if (item.type === "folder" && item.name === ".github") return false;
    // Exclude internal waiting-list folder from public browser
    if (pathHistory.length === 0 && item.type === "folder" && item.name === "waiting-list") return false;
    // Fix #6: exclude system files only at root level (pathHistory empty = we are at root)
    if (pathHistory.length === 0 && item.type === "file" && EXCLUDED_ROOT_FILES.includes(item.name)) return false;
    return true;
  });
  
  // Sort folders first, then files alphabetically
  children.sort((a, b) => {
    if (a.type === b.type) {
      return a.name.localeCompare(b.name);
    }
    return a.type === "folder" ? -1 : 1;
  });

  if (children.length === 0) {
    listView.innerHTML = `
      <div class="empty-state">
        <div class="icon">📂</div>
        <h3>This folder is empty</h3>
        <p>No files or folders to display</p>
      </div>
    `;
    return;
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const item = document.createElement("div");
    item.className = "file-item";
    item.setAttribute("data-index", i);
    // Fix #4 prep: store child reference so downloadFile can access it directly
    item._childData = child;
    
    const fileIcon = getFileIcon(child);
    const fileTypeClass = getFileTypeClass(child);
    
    item.innerHTML = `
      <div class="file-icon" data-type="${fileTypeClass}">${fileIcon}</div>
      <div class="file-name">${child.name}</div>
      <div class="file-actions">
        ${child.type === "file" ? `
          <div class="file-action" onclick="previewFile(event, ${i})">👁️</div>
          <div class="file-action" onclick="downloadFile(event, ${i})">📥</div>
          ${isAdmin() ? `<div class="file-action file-action--delete" onclick="deleteFile(event, ${i})" title="Delete file">🗑️</div>` : ''}
        ` : ''}
      </div>
      ${child.type === "file" ? `<div class="file-action-mob" onclick="openMobFileSheet(event, ${i})">⋯</div>` : ''}
    `;

    item.onclick = (e) => {
      // Clear previous selection
      document.querySelectorAll('.file-item.selected').forEach(el => 
        el.classList.remove('selected')
      );
      
      // Set new selection
      item.classList.add('selected');
      selected = child;
      
      // Handle single click to open
      if (child.type === "folder") {
        pathHistory.push(currentNode);
        currentNode = child;
        renderFolder(child);
        updatePathNav();
      } else {
        // For files, open preview immediately (single click behavior)
        if (!e.target.closest('.file-action')) {
          handlePreview();
        }
      }
    };
    
    item.oncontextmenu = e => {
      e.preventDefault();
      // Clear previous selection
      document.querySelectorAll('.file-item.selected').forEach(el => 
        el.classList.remove('selected')
      );
      
      // Set new selection
      item.classList.add('selected');
      selected = child;
      showContextMenu(e.pageX, e.pageY);
    };

    listView.appendChild(item);
    
    // Add a small delay between each item animation
    item.style.animationDelay = `${i * 30}ms`;
  }
}

function startDrag(e, id) {
  const el = windows[id];
  if (!el) return;

  const startX = e.clientX;
  const startY = e.clientY;
  const startLeft = parseInt(el.style.left, 10) || 0;
  const startTop = parseInt(el.style.top, 10) || 0;

  function onMouseMove(ev) {
    el.style.left = startLeft + (ev.clientX - startX) + "px";
    el.style.top = startTop + (ev.clientY - startY) + "px";
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}

function updatePathNav() {
  const allSegments = []; // build full list first

  // Build full path segment list
  for (let i = 0; i < pathHistory.length; i++) {
    allSegments.push({ name: pathHistory[i].name, action: `goToPath(${i})` });
  }
  if (currentNode && currentNode !== pathHistory[pathHistory.length - 1]) {
    allSegments.push({ name: currentNode.name, action: null }); // current — not clickable
  }

  // On mobile truncate to last 2 segments with a … prefix
  const maxVisible = isMobile ? 2 : Infinity;
  const truncated = allSegments.length > maxVisible;
  const visible = truncated ? allSegments.slice(-maxVisible) : allSegments;

  let html = `<span class="path-segment" onclick="goToRoot()">☁️</span>`;
  if (truncated) {
    html += `<span class="path-separator">/</span><span class="path-crumb-ellipsis">…</span>`;
  }
  visible.forEach(seg => {
    html += `<span class="path-separator">/</span>`;
    html += seg.action
      ? `<span class="path-segment" onclick="${seg.action}">${seg.name}</span>`
      : `<span class="path-segment">${seg.name}</span>`;
  });

  pathNav.innerHTML = html;
}

function goToRoot() {
  fetchTree(); // Refresh and go to root
}

function goToPath(index) {
  currentNode = pathHistory[index];
  pathHistory = pathHistory.slice(0, index);
  renderFolder(currentNode);
  updatePathNav();
}

function goUp() {
  if (pathHistory.length > 0) {
    currentNode = pathHistory.pop();
    renderFolder(currentNode);
    updatePathNav();
  }
}

function previewFile(e, index) {
  e.stopPropagation();
  const items = document.querySelectorAll('.file-item');
  if (index >= 0 && index < items.length) {
    // item.click() sets selected AND opens preview via its own onclick handler
    items[index].click();
  }
}

function downloadFile(e, index) {
  e.stopPropagation();
  const items = document.querySelectorAll('.file-item');
  if (index >= 0 && index < items.length) {
    // Fix #4: set selection directly using stored _childData — no click() to avoid opening a preview
    document.querySelectorAll('.file-item.selected').forEach(el => el.classList.remove('selected'));
    items[index].classList.add('selected');
    selected = items[index]._childData;
    handleDownload();
  }
}

let _pendingDeletePath = null;
let _pendingDeleteName = null;

function deleteFile(e, index) {
  e.stopPropagation();
  if (!isAdmin()) return;
  const items = document.querySelectorAll('.file-item');
  if (index < 0 || index >= items.length) return;
  const child = items[index]._childData;
  _pendingDeletePath = child.path;
  _pendingDeleteName = child.name;

  if (isMobile) {
    document.getElementById('deleteMobileMsg').textContent =
      `"${child.name}" will be permanently removed from the repository.`;
    const o = document.getElementById('deleteMobileOverlay');
    o.style.display = 'flex';
    requestAnimationFrame(() => o.classList.add('active'));
  } else {
    document.getElementById('deleteConfirmMsg').textContent =
      `"${child.name}" will be permanently removed from the repository. This cannot be undone.`;
    document.getElementById('deleteConfirm').style.display = 'flex';
  }
}

function cancelDeleteFile() {
  _pendingDeletePath = null;
  _pendingDeleteName = null;
  document.getElementById('deleteConfirm').style.display = 'none';
  const o = document.getElementById('deleteMobileOverlay');
  o.classList.remove('active');
  setTimeout(() => { o.style.display = 'none'; }, 380);
}

async function confirmDeleteFile() {
  if (!_pendingDeletePath || !_pendingDeleteName) return;
  const path = _pendingDeletePath;
  const name = _pendingDeleteName;
  cancelDeleteFile();
  showStatus(`Deleting "${name}"…`, true);
  const getRes = await ghProxy('getFile', { path });
  if (!getRes.ok || !getRes.data.sha) {
    showStatus(`✗ Could not retrieve file info: ${getRes.error || 'file not found'}`);
    return;
  }
  const delRes = await ghProxy('deleteFile', { path, sha: getRes.data.sha, message: `Delete: ${path}` });
  if (delRes.ok) {
    showStatus(`✓ "${name}" deleted.`);
    fetchTree();
  } else {
    showStatus(`✗ Delete failed: ${delRes.error}`);
  }
}

function closeWindow(id) {
  const win = windows[id];
  if (win) {
    win.remove();
    delete windows[id];
    updateTaskbar();
  }
}

function minimizeWindow(id) {
  const win = windows[id];
  if (win) {
    win.style.display = "none";
    updateTaskbar();
  }
}
function showTaskbarContextMenu(x, y, id) {
  const menu = document.getElementById("taskbarContextMenu");
  menu.innerHTML = `
    <button onclick="restoreFromTaskbar('${id}')">🗖 Restore</button>
    <button onclick="minimizeWindow('${id}')">🗕 Minimize</button>
    <button onclick="closeWindow('${id}')">✖ Close</button>
  `;
  menu.style.top = y + "px";
  menu.style.left = x + "px";
  menu.style.display = "flex";
}

document.addEventListener("click", () => {
  document.getElementById("taskbarContextMenu").style.display = "none";
});

function restoreFromTaskbar(id) {
  const win = windows[id];
  if (win) {
    win.style.display = "block";
    updateTaskbar();
  }
}

function updateTaskbar() {
  const minimized = Object.entries(windows).filter(([_, el]) => el.style.display === "none");
  
  if (minimized.length === 0) {
    taskbar.style.display = "none";
    taskbar.innerHTML = "";
    return;
  }

  taskbar.style.display = "flex";
  taskbar.innerHTML = "";

  for (const [id, el] of Object.entries(windows)) {
  if (el.style.display === "none") {
    const icon = document.createElement("div");
    icon.className = "task-icon";
    icon.dataset.name = el.querySelector(".title")?.textContent || "File";
    icon.textContent = "📄";

    icon.onclick = () => {
      el.style.display = "block";
      updateTaskbar();
    };

    icon.oncontextmenu = (e) => {
      e.preventDefault();
      showTaskbarContextMenu(e.pageX, e.pageY, id);
    };

    taskbar.appendChild(icon);
  }
}
	}
function toggleFullscreen(id, forceFull = false) {
  const w = windows[id];
  if (!w) return;

  const isFullscreen = w.classList.contains("fullscreen");

  if (forceFull && !isFullscreen) {
    w.classList.add("fullscreen");
    return;
  }

  if (isFullscreen) {
    w.classList.remove("fullscreen");

    // ✅ Remove mobile override styles
    w.style.removeProperty("top");
    w.style.removeProperty("left");

    // ✅ Then set fallback desktop positions
    w.style.top = "100px";
    w.style.left = "100px";
    w.style.width = "80vw";
    w.style.height = "80vh";
  } else {
    w.classList.add("fullscreen");
    w.style.top = "0";
    w.style.left = "0";
    w.style.width = "100vw";
    w.style.height = "100vh";
  }
}


function showContextMenu(x, y) {
  contextMenu.style.top = y + 'px';
  contextMenu.style.left = x + 'px';
  contextMenu.style.display = 'flex';
}

function handlePreview() {
  if (selected && selected.type === "file") {
    isMobile
      ? openMobilePreview(selected.path, selected.name)
      : openPreview(selected.path, selected.name);
  }
  contextMenu.style.display = 'none';
}

function handleDownload() {
  if (selected && selected.type === "file") {
    const a = document.createElement("a");
    a.href = selected.path;
    a.download = selected.name;
    a.click();
    showStatus(`Downloading: ${selected.name}`);
  }
  contextMenu.style.display = 'none';
}

function openMobilePreview(path, filename) {
  mobilePreviewTitle.textContent = filename;
  fetchFileContent(path, filename, mobilePreviewContent);
  mobilePreview.style.display = "flex";
}

function closeMobilePreview() {
  mobilePreview.style.display = "none";
  mobilePreviewContent.innerHTML = "";
}

function openPreview(path, filename) {
  const id = 'preview-' + (++previewId);
  const win = document.createElement("div");
  win.className = "floating-window";
  win.style.top = `${100 + previewId * 10}px`;
  win.style.left = `${100 + previewId * 10}px`;
  win.dataset.id = id;
  
  const ext = filename.split('.').pop().toLowerCase();
  const isMarkdown = ext === 'md' || ext === 'markdown';
  const isFullScreen = isMarkdown || ext === 'pdf' || ext === 'html' || ext === 'htm'
    || ext === 'doc' || ext === 'docx' || ext === 'xls' || ext === 'xlsx' || ext === 'ppt' || ext === 'pptx';

  const editButtonHTML = isMarkdown 
    ? `<button onclick="toggleMarkdownEditMode('${id}')" title="Edit markdown">✎ Edit</button>`
    : '';

  win.innerHTML = `
    <div class="title-bar" onmousedown="startDrag(event, '${id}')">
      <div class="title">${filename}</div>
      <div class="buttons">
        ${editButtonHTML}
        <button onclick="minimizeWindow('${id}')">🗕</button>
        <button onclick="toggleFullscreen('${id}')">🗖</button>
        <button onclick="closeWindow('${id}')">✖</button>
      </div>
    </div>
    <div class="preview-body" id="${id}-body">Loading...</div>
  `;
  previewContainer.appendChild(win);
  windows[id] = win;

  // Store metadata on the window for editor mode
  win._filePath = path;
  win._filename = filename;
  win._isMarkdown = isMarkdown;
  win._originalContent = null;
  win._editMode = false;

  const container = document.getElementById(id + "-body");
  fetchFileContent(path, filename, container);
  updateTaskbar();
  
  // Auto fullscreen for markdown and PDF
  if (isFullScreen) {
    setTimeout(() => toggleFullscreen(id, true), 100);
  }
}

async function fetchFileContent(path, filename, container) {
  const ext = (filename.includes('.') ? filename : path).split('.').pop().toLowerCase();

  container.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100%;"><span class="loader"></span> Loading...</div>';

  // On Vercel, static repo files are not served directly — route through /api/raw (GitHub PAT proxy).
  // On GitHub Pages, files are served as static assets so fetch(path) works directly.
  const isGitHubPages = window.location.hostname.endsWith('github.io');
  const fetchUrl = (p) => isGitHubPages
    ? `https://raw.githubusercontent.com/${appConfig.GITHUB_REPO}/${appConfig.GITHUB_BRANCH}/${p}`
    : `${window.location.origin}/api/raw?path=${encodeURIComponent(p)}`;
  const rawUrl = `${window.location.origin}/api/raw?path=${path}`;

  try {
    if (/\.(png|jpe?g|gif|bmp|webp|svg)$/i.test(filename)) {
      container.innerHTML = `<img src="${fetchUrl(path)}" style="max-width:100%;height:auto;display:block;margin:auto;" alt="${filename}" />`;

    } else if (/\.(mp3|wav|ogg|flac)$/i.test(filename)) {
      container.innerHTML = `<audio controls src="${fetchUrl(path)}" style="width:100%;display:block;margin-top:20px"></audio>`;

    } else if (/\.(mp4|webm)$/i.test(filename)) {
      container.innerHTML = `<video controls src="${fetchUrl(path)}" style="max-width:100%;max-height:100%;display:block;margin:auto"></video>`;

    } else if (/\.(docx?|xlsx?|pptx?)$/i.test(filename.includes('.') ? filename : path)) {
      // Google Docs viewer — works with any publicly accessible URL, no domain whitelist
      const viewerUrl = `https://docs.google.com/gviewer?embedded=true&url=${encodeURIComponent(rawUrl)}`;
      container.style.cssText = 'padding:0;overflow:hidden;display:flex;flex-direction:column;flex-grow:1;min-height:0;';
      container.innerHTML = `<iframe src="${viewerUrl}" style="flex:1;min-height:0;width:100%;border:none;display:block;" allowfullscreen></iframe>`;

    } else if (ext === 'html' || ext === 'htm') {
      container.style.cssText = 'padding:0;overflow:hidden;display:flex;flex-direction:column;flex-grow:1;min-height:0;';
      container.innerHTML = `<iframe src="${fetchUrl(path)}" style="flex:1;min-height:0;width:100%;border:none;display:block;"></iframe>`;

    } else if (ext === 'pdf') {
      container.style.cssText = 'padding:0;overflow:hidden;display:flex;flex-direction:column;flex-grow:1;min-height:0;';
      container.innerHTML = `<iframe src="${fetchUrl(path)}" style="flex:1;min-height:0;width:100%;border:none;display:block;"></iframe>`;

    } else if (ext === 'md' || ext === 'markdown') {
      const response = await fetch(fetchUrl(path));
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const text = await response.text();
      
      // Store original content on the window for editor mode
      const winElement = document.querySelector(`[data-id="preview-${previewId}"]`);
      if (winElement) {
        winElement._originalContent = text;
      }
      
      const wrapper = document.createElement('div');
      wrapper.className = 'markdown-content';
      wrapper.innerHTML = markdownToHTML(text, path);
      container.innerHTML = '';
      container.appendChild(wrapper);
      setTimeout(function () { initMarkdownFeatures(wrapper); }, 0);

    } else {
      // All other file types: display as plain text
      try {
        const response = await fetch(fetchUrl(path));
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const text = await response.text();
        container.innerHTML = `<pre style="margin:0;white-space:pre-wrap;font-family:Consolas,monospace;font-size:13px;line-height:1.5">${escapeHTML(text)}</pre>`;
      } catch (error) {
        container.innerHTML = `<div class="error">Error loading file: ${error.message}</div>`;
      }
    }
  } catch (error) {
    container.innerHTML = `<div class="error">Error: ${error.message}</div>`;
  }
}

function escapeHTML(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

document.addEventListener("click", (e) => {
  const isItem = e.target.closest(".file-item");
  const isContext = e.target.closest(".context-menu");
  if (!isItem && !isContext) {
    document.querySelectorAll('.file-item.selected').forEach(el => el.classList.remove('selected'));
    selected = null;
    contextMenu.style.display = "none";
  }
});

const manifest = {
  name: "Root",
  short_name: "Root",
  start_url: ".",
  display: "standalone",
  background_color: "#1e1e1e",
  theme_color: "#1e1e1e",
  icons: [
    {
      src: "favicon.png",
      sizes: "192x192",
      type: "image/png"
    }
  ]
};

// Fix #8: manifest.json is already declared in <head> via static <link rel="manifest">.
// The dynamic blob manifest below was a duplicate and has been removed.

// --- GitHub Pages → Vercel popup ---
function hasVercelDismissCookie() {
  return document.cookie.split(';').some(c => c.trim().startsWith('vercel_redirect_dismissed=1'));
}

function goToVercel() {
  document.cookie = 'vercel_redirect_dismissed=1; max-age=31536000; path=/; SameSite=Lax';
  window.location.href = appConfig.APP_URL;
}

function dismissVercelPopup() {
  document.cookie = 'vercel_redirect_dismissed=1; max-age=31536000; path=/; SameSite=Lax';
  const popup = document.getElementById('vercelPopup');
  popup.classList.remove('visible');
  setTimeout(() => { popup.style.display = 'none'; }, 400);
}

function maybeShowVercelPopup() {
  if (hasVercelDismissCookie()) return;
  if (appConfig.GITPAGE_URL && window.location.hostname === new URL(appConfig.GITPAGE_URL).hostname) {
    setTimeout(() => {
      document.getElementById('vercelPopup').classList.add('visible');
    }, 1800);
  }
}

// --- Community ---
function openCommunity() {
  const path = 'primenotepad.rf.gd';
  if (isMobile) {
    openMobilePreview(path, 'Community 💬');
  } else {
    openPreview(path, 'Community 💬');
  }
}

/**
 * Toggle between view and edit modes for markdown files
 */
function toggleMarkdownEditMode(windowId) {
  const winElement = document.querySelector(`[data-id="${windowId}"]`);
  if (!winElement || !winElement._isMarkdown) return;

  const container = document.getElementById(windowId + "-body");
  const editBtn = winElement.querySelector('.title-bar button[title="Edit markdown"]');
  
  if (winElement._editMode) {
    // Switch back to view mode
    winElement._editMode = false;
    editBtn.textContent = '✎ Edit';
    editBtn.title = 'Edit markdown';
    
    // Render the original content (with any session edits)
    const content = MarkdownEditor.getSavedContent(winElement._filePath) || winElement._originalContent;
    const wrapper = document.createElement('div');
    wrapper.className = 'markdown-content';
    wrapper.innerHTML = markdownToHTML(content, winElement._filePath);
    container.innerHTML = '';
    container.appendChild(wrapper);
    setTimeout(() => initMarkdownFeatures(wrapper), 0);
    
    showStatus('✓ View mode');
  } else {
    // Switch to edit mode
    winElement._editMode = true;
    editBtn.textContent = '👁️ View';
    editBtn.title = 'Return to view mode';
    
    // Create the editor UI
    const onClose = (editedContent) => {
      // User clicked "Done Editing" — show updated preview
      const wrapper = document.createElement('div');
      wrapper.className = 'markdown-content';
      wrapper.innerHTML = markdownToHTML(editedContent, winElement._filePath);
      container.innerHTML = '';
      container.appendChild(wrapper);
      setTimeout(() => initMarkdownFeatures(wrapper), 0);
      
      // Switch back to view mode
      winElement._editMode = false;
      editBtn.textContent = '✎ Edit';
      editBtn.title = 'Edit markdown';
      
      showStatus('✓ Changes applied (session-only)');
    };
    
    MarkdownEditor.createEditorUI(
      container, 
      winElement._filePath, 
      winElement._originalContent, 
      onClose
    );
    
    showStatus('📝 Edit mode — changes are temporary (session storage)');
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  await fetchConfig();
  fetchTree();
  maybeShowVercelPopup();
});


// --- API proxy for fetching raw file contents with GitHub PAT authentication on Vercel ---
// This is used in production to securely fetch files from private repos, since GitHub Pages cannot use a PAT and can only serve public assets directly.
