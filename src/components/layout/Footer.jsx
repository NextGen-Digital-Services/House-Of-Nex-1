import React from 'react';
import { Link } from 'react-router-dom';
import { useEnquiry } from '../../context/EnquiryContext';
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Footer() {
  const { openEnquiryModal } = useEnquiry();
  const { isAuthenticated } = useAuth();
  const whatsappUrl = 'https://wa.me/919876543210?text=' + encodeURIComponent('Hello House of Nex team, I would like to enquire about your services.');

  return (
    <footer className="bg-espresso text-ivory pt-16 pb-24 md:pb-16 border-t border-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-sand/20">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 bg-terracotta text-ivory flex items-center justify-center font-serif text-xl font-bold rounded">
                N
              </div>
              <span className="font-serif text-2xl text-ivory tracking-tight">
                HOUSE <span className="italic text-gold">of</span> NEX
              </span>
            </Link>
            <p className="text-sm text-sand/80 font-light leading-relaxed max-w-sm">
              We create experiences people remember. A boutique creative studio specializing in corporate events, executive gifting, branded merchandise, and bespoke spatial setups.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-sand/10 flex items-center justify-center text-gold hover:bg-gold hover:text-espresso transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-sand/10 flex items-center justify-center text-gold hover:bg-gold hover:text-espresso transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-sand/10 flex items-center justify-center text-gold hover:bg-gold hover:text-espresso transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Vertical 1: Events */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
              Events & Experiences
            </h3>
            <ul className="space-y-2.5 text-sm text-sand/80 font-light">
              <li><Link to="/events#corporate-events" className="hover:text-gold transition-colors">Corporate Summits & Galas</Link></li>
              <li><Link to="/events#kids-family-events" className="hover:text-gold transition-colors">Kids & Family Celebrations</Link></li>
              <li><Link to="/events#theme-decor" className="hover:text-gold transition-colors">Theme & Spatial Décor</Link></li>
              <li><Link to="/events#experiential-setups" className="hover:text-gold transition-colors">Brand Pop-Ups & Activations</Link></li>
              <li><Link to="/our-work" className="hover:text-gold transition-colors flex items-center gap-1">View Event Case Studies <ArrowUpRight className="w-3 h-3 text-gold" /></Link></li>
            </ul>
          </div>

          {/* Vertical 2: Corporate */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
              Corporate Experiences
            </h3>
            <ul className="space-y-2.5 text-sm text-sand/80 font-light">
              <li><Link to="/corporate#corporate-gifting" className="hover:text-gold transition-colors">Festive & Executive Gifting</Link></li>
              <li><Link to="/corporate#branded-merchandise" className="hover:text-gold transition-colors">Branded Lifestyle Merchandise</Link></li>
              <li><Link to="/corporate#employee-event-kits" className="hover:text-gold transition-colors">Onboarding & Event Kits</Link></li>
              <li><Link to="/corporate#uniforms-apparel" className="hover:text-gold transition-colors">Custom Apparel & Uniforms</Link></li>
              <li><button onClick={() => openEnquiryModal()} className="hover:text-gold transition-colors text-left flex items-center gap-1">Request Catalogue <ArrowUpRight className="w-3 h-3 text-gold" /></button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
              Contact Studio
            </h3>
            <div className="space-y-3 text-sm text-sand/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-1" />
                <span>House of Nex Studio, Bandra Kurla Complex, Mumbai, MH 400051</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-terracotta shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-terracotta shrink-0" />
                <a href="mailto:hello@houseofnex.com" className="hover:text-gold transition-colors">hello@houseofnex.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sand/60 font-light">
          <p>© {new Date().getFullYear()} House of Nex / NEXGIFTING + Events. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
            <Link to="/admin/login" className="hover:text-gold transition-colors flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
