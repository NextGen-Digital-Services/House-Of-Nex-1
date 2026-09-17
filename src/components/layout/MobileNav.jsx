import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import { Sparkles, MessageCircle, X, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function MobileNav({ isOpen, onClose, links, onEnquire }) {
  const { isAuthenticated } = useAuth();
  const whatsappUrl = 'https://wa.me/919876543210?text=' + encodeURIComponent('Hello House of Nex team, I would like to enquire about your services.');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="lg:hidden fixed inset-0 z-40 bg-ivory/98 backdrop-blur-xl pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto"
        >
          <div className="space-y-6 pt-4">
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `text-2xl font-serif tracking-tight py-2 border-b border-sand/40 flex items-center justify-between ${
                      isActive ? 'text-terracotta font-normal pl-2' : 'text-espresso'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans uppercase tracking-widest text-gold font-bold">→</span>
                </NavLink>
              ))}
            </nav>

            {isAuthenticated && (
              <Link
                to="/admin"
                onClick={onClose}
                className="flex items-center gap-2 p-3 bg-cream rounded-lg text-xs uppercase tracking-wider font-semibold text-olive border border-sand"
              >
                <ShieldCheck className="w-4 h-4" />
                Go to Admin Dashboard
              </Link>
            )}
          </div>

          <div className="space-y-4 pt-8 border-t border-sand">
            <Button
              onClick={onEnquire}
              variant="primary"
              size="lg"
              fullWidth
              icon={Sparkles}
            >
              ENQUIRE WITH US
            </Button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-olive text-ivory rounded-lg text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>

            <div className="text-center pt-4 text-xs text-warmcharcoal font-light">
              <p>House of Nex © 2026</p>
              <p className="mt-1 text-[10px] text-warmcharcoal/70">Events • Gifting • Merchandise</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
