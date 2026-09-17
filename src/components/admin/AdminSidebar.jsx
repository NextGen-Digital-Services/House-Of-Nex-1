import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LayoutDashboard, Briefcase, BookOpen, Inbox, Settings, LogOut, Home } from 'lucide-react';

export default function AdminSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard, end: true },
    { name: 'Enquiries', path: '/admin/enquiries', icon: Inbox },
    { name: 'Portfolio Manager', path: '/admin/portfolio', icon: Briefcase },
    { name: 'Case Studies', path: '/admin/case-studies', icon: BookOpen },
    { name: 'Settings', path: '/admin/settings', icon: Settings }
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <aside className="w-64 bg-espresso text-ivory flex flex-col justify-between shrink-0 min-h-screen border-r border-sand/20">
      <div className="p-6 space-y-8">
        {/* Brand */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-terracotta text-ivory flex items-center justify-center font-serif text-sm font-bold rounded">
              N
            </div>
            <span className="font-serif text-lg tracking-tight">HOUSE <span className="italic text-gold">of</span> NEX</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-gold/80 block font-semibold pl-9">
            Admin Management Portal
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-xs uppercase tracking-wider font-medium transition-colors ${
                    isActive
                      ? 'bg-terracotta text-ivory font-semibold shadow-sm'
                      : 'text-sand/80 hover:bg-warmcharcoal hover:text-ivory'
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="p-6 border-t border-sand/20 space-y-3">
        <NavLink
          to="/"
          target="_blank"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider text-sand/70 hover:text-gold transition-colors"
        >
          <Home className="w-4 h-4" /> View Live Website
        </NavLink>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </aside>
  );
}
