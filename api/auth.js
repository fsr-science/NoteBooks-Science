import { Resend } from 'resend';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const resend = new Resend(process.env.RESEND_API_KEY);

// Mock in-memory storage (replace with Redis/database in production)
const users = new Map();
const resetTokens = new Map();
const captchaAttempts = new Map();

const JWT_SECRET = process.env.JWT_SECRET;
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

// Verify reCAPTCHA token
async function verifyCaptcha(token) {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET}&response=${token}`
    });
    const data = await response.json();
    return data.success && data.score > 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// Register a new user
export async function handleRegister(req, res) {
  try {
    const { email, password, confirmPassword, captchaToken } = req.body;

    // Validate inputs
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    // Verify CAPTCHA
    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return res.status(400).json({ error: 'CAPTCHA verification failed' });
    }

    // Check if user exists
    if (users.has(email)) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    users.set(email, {
      email,
      password: hashedPassword,
      createdAt: new Date()
    });

    // Generate JWT token
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });

    return res.status(201).json({
      message: 'Registration successful',
      token,
      email
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Login user
export async function handleLogin(req, res) {
  try {
    const { email, password, captchaToken } = req.body;

    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }

    // Verify CAPTCHA
    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return res.status(400).json({ error: 'CAPTCHA verification failed' });
    }

    // Find user
    const user = users.get(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare passwords
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });

    return res.status(200).json({
      message: 'Login successful',
      token,
      email
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Request password reset
export async function handleForgotPassword(req, res) {
  try {
    const { email, captchaToken } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Verify CAPTCHA
    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return res.status(400).json({ error: 'CAPTCHA verification failed' });
    }

    // Check if user exists
    const user = users.get(email);
    if (!user) {
      // Don't reveal if user exists for security
      return res.status(200).json({ message: 'If email exists, a reset link will be sent' });
    }

    // Check cooldown (15 minutes)
    const lastReset = resetTokens.get(email);
    if (lastReset && new Date() - lastReset.timestamp < 15 * 60 * 1000) {
      const remaining = Math.ceil((15 * 60 * 1000 - (new Date() - lastReset.timestamp)) / 1000 / 60);
      return res.status(429).json({
        error: `Please wait ${remaining} minutes before requesting another reset`
      });
    }

    // Generate reset token
    const resetToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    resetTokens.set(email, { token: resetToken, timestamp: new Date() });

    // Send email
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Password Reset - NoteBooks',
        html: `
          <h1>Password Reset Request</h1>
          <p>Click the link below to reset your password. This link expires in 1 hour.</p>
          <p>
            <a href="${process.env.APP_URL}/reset-password?token=${resetToken}">
              Reset Password
            </a>
          </p>
          <p>If you didn't request this, please ignore this email.</p>
        `
      });
    } catch (emailError) {
      console.error('Email send error:', emailError);
      return res.status(500).json({ error: 'Failed to send reset email' });
    }

    return res.status(200).json({
      message: 'If email exists, a reset link will be sent'
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Reset password with token
export async function handleResetPassword(req, res) {
  try {
    const { token, newPassword, confirmPassword, captchaToken } = req.body;

    if (!token || !newPassword || !confirmPassword) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    // Verify CAPTCHA
    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return res.status(400).json({ error: 'CAPTCHA verification failed' });
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }

    const email = decoded.email;
    const user = users.get(email);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    users.set(email, { ...user, password: hashedPassword });

    // Clear reset token
    resetTokens.delete(email);

    return res.status(200).json({
      message: 'Password reset successful'
    });
  } catch (error) {
    console.error('Reset password error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Verify JWT token
export async function handleVerifyToken(req, res) {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Token is required' });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return res.status(200).json({
        valid: true,
        email: decoded.email
      });
    } catch (error) {
      return res.status(401).json({
        valid: false,
        error: 'Invalid or expired token'
      });
    }
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Main handler for Vercel function
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { action } = req.query;

  switch (action) {
    case 'register':
      return handleRegister(req, res);
    case 'login':
      return handleLogin(req, res);
    case 'forgot-password':
      return handleForgotPassword(req, res);
    case 'reset-password':
      return handleResetPassword(req, res);
    case 'verify-token':
      return handleVerifyToken(req, res);
    default:
      return res.status(404).json({ error: 'Action not found' });
  }
}
