// Mock Authentication Service for Admin Portal
// Placeholder for production authentication API

const AUTH_KEY = 'house_of_nex_auth_session';

// Hardcoded admin credentials for mock authentication
const ADMIN_CREDENTIALS = {
  email: 'admin@houseofnex.com',
  password: 'nex2025!'
};

export const authService = {
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          email.toLowerCase().trim() === ADMIN_CREDENTIALS.email.toLowerCase() &&
          password === ADMIN_CREDENTIALS.password
        ) {
          const session = {
            user: { email: ADMIN_CREDENTIALS.email, name: 'Admin User', role: 'Administrator' },
            token: 'mock-jwt-token-nex-2025',
            loginTime: new Date().toISOString()
          };
          localStorage.setItem(AUTH_KEY, JSON.stringify(session));
          resolve(session);
        } else {
          reject(new Error('Invalid email or password. Use admin@houseofnex.com / nex2025!'));
        }
      }, 400);
    });
  },

  logout: () => {
    localStorage.removeItem(AUTH_KEY);
  },

  getCurrentSession: () => {
    try {
      const data = localStorage.getItem(AUTH_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  isAuthenticated: () => {
    const session = authService.getCurrentSession();
    return !!session && !!session.token;
  }
};
