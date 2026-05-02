// ===== SSH-STYLE AUTHENTICATION SYSTEM =====
// Browser-based public key authentication with challenge-response

const SSH_AUTH_STORAGE_KEY = 'nb_ssh_users';
const SSH_SESSION_KEY = 'nb_ssh_session';
const SSH_ADMIN_STORAGE_KEY = 'nb_ssh_admins';

let sshSession = null;
let sshUsers = [];
let sshAdmins = [];

// ===== INITIALIZATION =====
async function initSSHAuth() {
  loadSSHUsers();
  loadSSHAdmins();
  restoreSSHSession();
  updateSSHAuthUI();
}

// ===== USER STORAGE =====
function loadSSHUsers() {
  try {
    const stored = localStorage.getItem(SSH_AUTH_STORAGE_KEY);
    sshUsers = stored ? JSON.parse(stored) : [];
  } catch (e) {
    sshUsers = [];
  }
}

function saveSSHUsers() {
  localStorage.setItem(SSH_AUTH_STORAGE_KEY, JSON.stringify(sshUsers));
}

function loadSSHAdmins() {
  try {
    const stored = localStorage.getItem(SSH_ADMIN_STORAGE_KEY);
    sshAdmins = stored ? JSON.parse(stored) : [];
  } catch (e) {
    sshAdmins = [];
  }
}

function saveSSHAdmins() {
  localStorage.setItem(SSH_ADMIN_STORAGE_KEY, JSON.stringify(sshAdmins));
}

// ===== SESSION MANAGEMENT =====
function restoreSSHSession() {
  try {
    const stored = sessionStorage.getItem(SSH_SESSION_KEY);
    if (stored) {
      const session = JSON.parse(stored);
      // Check if session is still valid (24 hour expiry)
      if (session.expiresAt && Date.now() < session.expiresAt) {
        sshSession = session;
      } else {
        sessionStorage.removeItem(SSH_SESSION_KEY);
      }
    }
  } catch (e) {
    sshSession = null;
  }
}

function setSSHSession(user) {
  sshSession = {
    ...user,
    token: SSHCrypto.generateSessionToken(),
    createdAt: Date.now(),
    expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
  };
  sessionStorage.setItem(SSH_SESSION_KEY, JSON.stringify(sshSession));
}

function clearSSHSession() {
  sshSession = null;
  sessionStorage.removeItem(SSH_SESSION_KEY);
}

// ===== REGISTRATION =====
async function registerSSHUser(username) {
  if (!username || username.length < 3) {
    throw new Error('Username must be at least 3 characters');
  }
  
  // Check if username already exists
  if (sshUsers.find(u => u.username.toLowerCase() === username.toLowerCase())) {
    throw new Error('Username already registered');
  }
  
  // Generate key pair
  const keyPair = await SSHCrypto.generateKeyPair();
  
  // Hash public key for storage
  const publicKeyHash = await SSHCrypto.hashPublicKey(keyPair.publicKey);
  
  // Create user record
  const user = {
    id: crypto.randomUUID(),
    username: username,
    publicKeyHash: publicKeyHash,
    publicKey: keyPair.publicKey, // Store for verification
    fingerprint: keyPair.fingerprint,
    role: 'user',
    createdAt: Date.now()
  };
  
  sshUsers.push(user);
  saveSSHUsers();
  
  // Return private key - THIS IS THE ONLY TIME IT'S SHOWN
  return {
    privateKey: keyPair.privateKey,
    fingerprint: keyPair.fingerprint,
    username: username
  };
}

// ===== ADMIN REGISTRATION =====
async function registerSSHAdmin(username, permissions = ['create', 'delete', 'modify', 'approve']) {
  if (!username || username.length < 3) {
    throw new Error('Username must be at least 3 characters');
  }
  
  // Generate key pair
  const keyPair = await SSHCrypto.generateKeyPair();
  const publicKeyHash = await SSHCrypto.hashPublicKey(keyPair.publicKey);
  
  // Create admin record
  const admin = {
    id: crypto.randomUUID(),
    username: username,
    publicKeyHash: publicKeyHash,
    publicKey: keyPair.publicKey,
    fingerprint: keyPair.fingerprint,
    role: 'admin',
    permissions: permissions,
    createdAt: Date.now()
  };
  
  // Remove existing admin with same username
  sshAdmins = sshAdmins.filter(a => a.username.toLowerCase() !== username.toLowerCase());
  sshAdmins.push(admin);
  saveSSHAdmins();
  
  return {
    privateKey: keyPair.privateKey,
    fingerprint: keyPair.fingerprint,
    username: username
  };
}

// ===== LOGIN =====
async function loginWithSSHKey(privateKeyPem) {
  try {
    // Derive public key from private key
    const publicKey = await SSHCrypto.derivePublicKey(privateKeyPem);
    const publicKeyHash = await SSHCrypto.hashPublicKey(publicKey);
    
    // First check admins
    let user = sshAdmins.find(a => a.publicKeyHash === publicKeyHash);
    
    // Then check regular users
    if (!user) {
      user = sshUsers.find(u => u.publicKeyHash === publicKeyHash);
    }
    
    if (!user) {
      throw new Error('Key not recognized. Please register first.');
    }
    
    // Generate and sign challenge
    const challenge = SSHCrypto.generateChallenge();
    const signature = await SSHCrypto.signChallenge(privateKeyPem, challenge);
    
    // Verify signature
    const isValid = await SSHCrypto.verifySignature(user.publicKey, challenge, signature);
    
    if (!isValid) {
      throw new Error('Challenge verification failed. Invalid key.');
    }
    
    // Create session
    setSSHSession({
      id: user.id,
      username: user.username,
      role: user.role,
      permissions: user.permissions || [],
      fingerprint: user.fingerprint
    });
    
    updateSSHAuthUI();
    
    return {
      success: true,
      username: user.username,
      role: user.role
    };
  } catch (error) {
    throw new Error(error.message || 'Login failed');
  }
}

// ===== LOGOUT =====
function logoutSSH() {
  clearSSHSession();
  updateSSHAuthUI();
}

// ===== AUTH CHECKS =====
function isSSHLoggedIn() {
  return sshSession !== null;
}

function isSSHAdmin() {
  return sshSession?.role === 'admin' || sshSession?.role === 'superadmin';
}

function hasSSHPermission(permission) {
  return sshSession?.permissions?.includes(permission);
}

function getSSHSession() {
  return sshSession;
}

// ===== ADMIN FUNCTIONS =====
function getSSHUsers() {
  return sshUsers.map(u => ({
    id: u.id,
    username: u.username,
    fingerprint: u.fingerprint,
    role: u.role,
    createdAt: u.createdAt
  }));
}

function getSSHAdmins() {
  return sshAdmins.map(a => ({
    id: a.id,
    username: a.username,
    fingerprint: a.fingerprint,
    permissions: a.permissions,
    createdAt: a.createdAt
  }));
}

function revokeSSHUser(userId) {
  sshUsers = sshUsers.filter(u => u.id !== userId);
  saveSSHUsers();
}

function revokeSSHAdmin(adminId) {
  sshAdmins = sshAdmins.filter(a => a.id !== adminId);
  saveSSHAdmins();
}

// ===== KEY ROTATION =====
async function rotateAdminKey(adminId) {
  const admin = sshAdmins.find(a => a.id === adminId);
  if (!admin) {
    throw new Error('Admin not found');
  }
  
  const keyPair = await SSHCrypto.generateKeyPair();
  const publicKeyHash = await SSHCrypto.hashPublicKey(keyPair.publicKey);
  
  admin.publicKeyHash = publicKeyHash;
  admin.publicKey = keyPair.publicKey;
  admin.fingerprint = keyPair.fingerprint;
  admin.rotatedAt = Date.now();
  
  saveSSHAdmins();
  
  // If rotating own key, logout
  if (sshSession && sshSession.id === adminId) {
    clearSSHSession();
    updateSSHAuthUI();
  }
  
  return {
    privateKey: keyPair.privateKey,
    fingerprint: keyPair.fingerprint,
    username: admin.username
  };
}

// ===== UI UPDATE =====
function updateSSHAuthUI() {
  const loginBtn = document.getElementById('loginBtnToolbar');
  const adminBtn = document.getElementById('adminPanelBtn');
  const mobAdminBtn = document.getElementById('mobOverflowAdminBtn');
  
  if (!loginBtn) return;
  
  if (isSSHLoggedIn()) {
    const icon = isSSHAdmin() ? '&#x1F511;' : '&#x2713;';
    loginBtn.innerHTML = `${icon} ${sshSession.username}`;
    loginBtn.style.background = 'var(--selected)';
    loginBtn.style.color = 'var(--accent)';
    
    if (adminBtn && isSSHAdmin()) {
      adminBtn.style.display = '';
    }
    if (mobAdminBtn && isSSHAdmin()) {
      mobAdminBtn.style.display = '';
    }
  } else {
    loginBtn.innerHTML = '&#x1F511; SSH Login';
    loginBtn.style.background = '';
    loginBtn.style.color = '';
    
    if (adminBtn) adminBtn.style.display = 'none';
    if (mobAdminBtn) mobAdminBtn.style.display = 'none';
  }
}

// ===== SYSTEM LOGS =====
const SSH_LOGS_KEY = 'nb_ssh_logs';
const MAX_LOGS = 500;

function logSSHEvent(action, details = {}) {
  try {
    let logs = JSON.parse(localStorage.getItem(SSH_LOGS_KEY) || '[]');
    logs.push({
      timestamp: Date.now(),
      action,
      user: sshSession?.username || 'anonymous',
      ...details
    });
    
    // Keep only last MAX_LOGS entries
    if (logs.length > MAX_LOGS) {
      logs = logs.slice(-MAX_LOGS);
    }
    
    localStorage.setItem(SSH_LOGS_KEY, JSON.stringify(logs));
  } catch (e) {
    console.error('Failed to log SSH event:', e);
  }
}

function getSSHLogs(limit = 50) {
  try {
    const logs = JSON.parse(localStorage.getItem(SSH_LOGS_KEY) || '[]');
    return logs.slice(-limit).reverse();
  } catch (e) {
    return [];
  }
}

function clearSSHLogs() {
  localStorage.setItem(SSH_LOGS_KEY, '[]');
}

// Export for global use
if (typeof window !== 'undefined') {
  window.SSHAuth = {
    init: initSSHAuth,
    register: registerSSHUser,
    registerAdmin: registerSSHAdmin,
    login: loginWithSSHKey,
    logout: logoutSSH,
    isLoggedIn: isSSHLoggedIn,
    isAdmin: isSSHAdmin,
    hasPermission: hasSSHPermission,
    getSession: getSSHSession,
    getUsers: getSSHUsers,
    getAdmins: getSSHAdmins,
    revokeUser: revokeSSHUser,
    revokeAdmin: revokeSSHAdmin,
    rotateKey: rotateAdminKey,
    log: logSSHEvent,
    getLogs: getSSHLogs,
    clearLogs: clearSSHLogs
  };
}
