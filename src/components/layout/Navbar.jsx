import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useEnquiry } from '../../context/EnquiryContext';
import Button from '../common/Button';
import MobileNav from './MobileNav';
import { Menu, X, Sparkles, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openEnquiryModal } = useEnquiry();
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'EVENTS', path: '/events' },
    { name: 'CORPORATE', path: '/corporate' },
    { name: 'OUR WORK', path: '/our-work' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-sand/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-espresso text-gold flex items-center justify-center font-serif text-xl font-bold rounded group-hover:bg-terracotta group-hover:text-ivory transition-colors">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-tight text-espresso font-normal leading-none">
              HOUSE <span className="italic text-terracotta">of</span> NEX
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-warmcharcoal font-semibold mt-1">
              Events • Gifting • Merchandise
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.18em] font-medium transition-colors hover:text-terracotta relative py-1 ${
                  isActive
                    ? 'text-terracotta font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-terracotta'
                    : 'text-warmcharcoal'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {isAuthenticated && (
            <Link
              to="/admin"
              className="text-xs uppercase tracking-wider font-semibold text-olive hover:text-espresso flex items-center gap-1.5 bg-cream px-3 py-1.5 rounded border border-sand"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Admin Portal
            </Link>
          )}

          <Button
            onClick={() => openEnquiryModal()}
            variant="primary"
            size="sm"
            icon={Sparkles}
          >
            Enquire Now
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-espresso hover:text-terracotta focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        onEnquire={() => {
          setMobileMenuOpen(false);
          openEnquiryModal();
        }}
      />
    </header>
  );
}
