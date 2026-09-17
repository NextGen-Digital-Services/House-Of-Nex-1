import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/common/Button';
import { ShieldCheck, Lock, Mail, AlertCircle } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('admin@houseofnex.com');
  const [password, setPassword] = useState('nex2025!');
  const [errorMessage, setErrorMessage] = useState('');
  const { login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin';

  useEffect(() => {
    document.title = "Admin Login | House of Nex Portal";
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    const result = await login(email, password);
    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setErrorMessage(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-ivory rounded-2xl border border-sand shadow-2xl p-8 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-espresso text-gold flex items-center justify-center font-serif text-2xl font-bold rounded-xl mx-auto">
            N
          </div>
          <h1 className="text-2xl font-serif text-espresso">Admin Portal Sign In</h1>
          <p className="text-xs text-warmcharcoal font-light">
            Enter administrator credentials to manage enquiries, portfolio, and case studies.
          </p>
        </div>

        {errorMessage && (
          <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg flex items-center gap-2 border border-red-200">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-espresso mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-warmcharcoal/50 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-cream border border-sand rounded-lg text-xs text-espresso focus:outline-none focus:border-terracotta"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-espresso mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-warmcharcoal/50 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-cream border border-sand rounded-lg text-xs text-espresso focus:outline-none focus:border-terracotta"
              />
            </div>
          </div>

          <div className="p-3 bg-cream/70 rounded-lg text-[11px] text-warmcharcoal space-y-1 border border-sand/40">
            <span className="font-semibold block text-espresso">Demo Login Credentials:</span>
            <p>Email: <code className="text-terracotta font-mono">admin@houseofnex.com</code></p>
            <p>Password: <code className="text-terracotta font-mono">nex2025!</code></p>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            fullWidth
            disabled={loading}
            icon={ShieldCheck}
          >
            {loading ? 'Authenticating...' : 'Sign In to Portal'}
          </Button>
        </form>

        <div className="text-center text-[11px] text-warmcharcoal/60">
          House of Nex © 2026 Admin Operations
        </div>

      </div>
    </div>
  );
}
