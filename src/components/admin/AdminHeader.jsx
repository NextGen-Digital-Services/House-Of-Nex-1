import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Shield } from 'lucide-react';

export default function AdminHeader({ title, subtitle }) {
  const { user } = useAuth();

  return (
    <header className="bg-ivory border-b border-sand px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-serif text-espresso">{title}</h1>
        {subtitle && <p className="text-xs text-warmcharcoal font-light mt-1">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3 bg-cream px-4 py-2 rounded-lg border border-sand">
        <div className="w-8 h-8 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center font-bold text-xs">
          <User className="w-4 h-4" />
        </div>
        <div className="text-left">
          <span className="block text-xs font-semibold text-espresso">{user?.name || 'Administrator'}</span>
          <span className="block text-[10px] text-warmcharcoal/70">{user?.email || 'admin@houseofnex.com'}</span>
        </div>
      </div>
    </header>
  );
}
