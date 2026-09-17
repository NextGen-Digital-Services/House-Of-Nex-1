import React from 'react';
import { motion } from 'framer-motion';
import { useEnquiry } from '../../context/EnquiryContext';
import Button from '../common/Button';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const { openEnquiryModal } = useEnquiry();
  const whatsappUrl = 'https://wa.me/919876543210?text=' + encodeURIComponent('Hello House of Nex, I would like to start a conversation about our event/gifting requirement.');

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-ivory">
      {/* Background Subtle Floral / Architecture Watermark Accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#B5502E_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-7 space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cream border border-sand/80 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              Events • Corporate Gifting • Brand Merchandise • Experiences
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-espresso leading-[1.08] font-normal">
              We create <span className="italic text-terracotta">experiences</span> people remember.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-warmcharcoal font-light leading-relaxed max-w-2xl">
              Events, corporate gifting, branded merchandise and bespoke setups — thoughtfully designed and professionally executed for brands, corporations, and celebratory milestones.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link to="/our-work">
                <Button variant="primary" size="lg" icon={ArrowRight} fullWidth className="sm:w-auto">
                  Explore Our Work
                </Button>
              </Link>
              
              <Button
                onClick={() => openEnquiryModal()}
                variant="outline"
                size="lg"
                icon={Sparkles}
                fullWidth
                className="sm:w-auto"
              >
                Start a Conversation
              </Button>
            </div>

            {/* Micro Credibility */}
            <div className="pt-6 border-t border-sand/60 flex items-center gap-8 text-xs uppercase tracking-wider text-warmcharcoal/80 font-medium">
              <div>
                <span className="block text-lg font-serif text-espresso font-semibold">500+</span>
                <span>Events Delivered</span>
              </div>
              <div className="w-px h-8 bg-sand" />
              <div>
                <span className="block text-lg font-serif text-espresso font-semibold">150+</span>
                <span>Corporate Clients</span>
              </div>
              <div className="w-px h-8 bg-sand" />
              <div>
                <span className="block text-lg font-serif text-espresso font-semibold">100%</span>
                <span>Bespoke Creation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-ivory">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
                  alt="House of Nex Premium Event Experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block">Case Study Highlight</span>
                  <p className="font-serif text-lg font-normal">Nexus Annual Leadership Summit & Gala</p>
                </div>
              </div>

              {/* Overlapping Floating Secondary Image */}
              <div className="absolute -bottom-8 -left-8 w-44 sm:w-52 aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-ivory hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80"
                  alt="House of Nex Executive Corporate Gifting"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Amalfi Gold Stamp */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold text-espresso rounded-full p-2 flex flex-col items-center justify-center text-center shadow-lg border-2 border-ivory">
                <span className="font-serif text-xs font-bold uppercase tracking-tight">House of</span>
                <span className="font-serif text-sm font-extrabold italic text-terracotta">NEX</span>
                <span className="text-[8px] tracking-widest uppercase font-semibold mt-0.5">Est. 2018</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
