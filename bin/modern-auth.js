// ===== MODERN EMAIL + PASSWORD AUTH SYSTEM =====

class ModernAuth {
  constructor() {
    this.token = null;
    this.email = null;
    this.isAuthenticated = false;
    this.apiUrl = '/api/auth';
    this.recaptchaSiteKey = null;
    this.loadStoredToken();
  }

  setRecaptchaKey(key) {
    this.recaptchaSiteKey = key;
  }

  loadStoredToken() {
    try {
      const stored = localStorage.getItem('auth_token');
      const storedEmail = localStorage.getItem('auth_email');
      if (stored && storedEmail) {
        this.token = stored;
        this.email = storedEmail;
        this.isAuthenticated = true;
      }
    } catch (e) {
      console.error('[v0] Failed to load stored token:', e);
    }
  }

  saveToken(token, email) {
    try {
      localStorage.setItem('auth_token', token);
      localStorage.setItem('auth_email', email);
      this.token = token;
      this.email = email;
      this.isAuthenticated = true;
    } catch (e) {
      console.error('[v0] Failed to save token:', e);
    }
  }

  clearToken() {
    try {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_email');
      this.token = null;
      this.email = null;
      this.isAuthenticated = false;
    } catch (e) {
      console.error('[v0] Failed to clear token:', e);
    }
  }

  async getCaptchaToken() {
    return new Promise((resolve) => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(this.recaptchaSiteKey, { action: 'submit' }).then(token => {
            resolve(token);
          });
        });
      } else {
        resolve(null);
      }
    });
  }

  async register(email, password, confirmPassword) {
    try {
      const captchaToken = await this.getCaptchaToken();
      
      const response = await fetch(`${this.apiUrl}?action=register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          confirmPassword,
          captchaToken
        })
      });

      const data = await response.json();

      if (!response.ok) {
        return { ok: false, error: data.error || 'Registration failed' };
      }

      this.saveToken(data.token, data.email);
      return { ok: true, data };
    } catch (error) {
      console.error('[v0] Registration error:', error);
      return { ok: false, error: error.message };
    }
  }

  async login(email, password) {
    try {
      const captchaToken = await this.getCaptchaToken();
      
      const response = await fetch(`${this.apiUrl}?action=login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          captchaToken
        })
      });

      const data = await response.json();

      if (!response.ok) {
        return { ok: false, error: data.error || 'Login failed' };
      }

      this.saveToken(data.token, data.email);
      return { ok: true, data };
    } catch (error) {
      console.error('[v0] Login error:', error);
      return { ok: false, error: error.message };
    }
  }

  async forgotPassword(email) {
    try {
      const captchaToken = await this.getCaptchaToken();
      
      const response = await fetch(`${this.apiUrl}?action=forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          captchaToken
        })
      });

      const data = await response.json();

      if (!response.ok) {
        return { ok: false, error: data.error || 'Request failed' };
      }

      return { ok: true, data };
    } catch (error) {
      console.error('[v0] Forgot password error:', error);
      return { ok: false, error: error.message };
    }
  }

  async resetPassword(token, newPassword, confirmPassword) {
    try {
      const captchaToken = await this.getCaptchaToken();
      
      const response = await fetch(`${this.apiUrl}?action=reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          newPassword,
          confirmPassword,
          captchaToken
        })
      });

      const data = await response.json();

      if (!response.ok) {
        return { ok: false, error: data.error || 'Reset failed' };
      }

      return { ok: true, data };
    } catch (error) {
      console.error('[v0] Reset password error:', error);
      return { ok: false, error: error.message };
    }
  }

  logout() {
    this.clearToken();
  }

  getToken() {
    return this.token;
  }

  getEmail() {
    return this.email;
  }

  isLoggedIn() {
    return this.isAuthenticated && !!this.token;
  }
}

// Initialize global auth instance
const ModernAuthInstance = new ModernAuth();

// Export for use in HTML
window.ModernAuthInstance = ModernAuthInstance;
