import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Calendar, Gift, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhatWeDoSection() {
  const { ref, isInView, fadeUpVariant } = useScrollReveal();

  const eventsList = [
    'Corporate Summits & Conferences',
    'Kids & Family Milestone Birthdays',
    'Theme Décor & Spatial Architecture',
    'Experiential Brand Activations & Pop-Ups',
    'Gala Dinners & Award Ceremonies',
    'End-to-End Planning & Technical Execution'
  ];

  const corporateList = [
    'Festive & Executive Client Gifting',
    'Employee Onboarding & Swag Kits',
    'Branded Lifestyle Merchandise & Drinkware',
    'Bespoke Corporate Apparel & Uniforms',
    'Conference & Summit Delegate Kits',
    'Custom Rigid Box Packaging & Fulfillment'
  ];

  return (
    <section ref={ref} className="py-24 bg-cream/60 border-y border-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="OUR TWO CORE VERTICALS"
          title="Two connected domains. One creative studio."
          subtitle="Whether orchestrating an unforgettable celebration or engineering luxury brand touchpoints for your corporation, House of Nex brings uncompromising craft and seamless execution."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Events & Experiences */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-ivory rounded-2xl p-8 md:p-10 border border-sand shadow-card flex flex-col justify-between hover:border-terracotta/40 transition-all duration-300"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">Vertical 01</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-serif text-espresso">
                  Events & Experiences
                </h3>
                <p className="text-sm text-warmcharcoal font-light leading-relaxed">
                  Immersive spatial design, technical stage direction, and flawless hospitality for high-stakes corporate gatherings and intimate family celebrations.
                </p>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden shadow-inner my-4">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
                  alt="Events & Experiences by House of Nex"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <ul className="space-y-2.5">
                {eventsList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-warmcharcoal">
                    <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-sand/40">
              <Link to="/events">
                <Button variant="primary" size="md" icon={ArrowRight} fullWidth>
                  Explore Events Vertical
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Corporate Brand Experiences */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-ivory rounded-2xl p-8 md:p-10 border border-sand shadow-card flex flex-col justify-between hover:border-gold/60 transition-all duration-300"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold-hover flex items-center justify-center">
                  <Gift className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">Vertical 02</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-serif text-espresso">
                  Corporate Brand Experiences
                </h3>
                <p className="text-sm text-warmcharcoal font-light leading-relaxed">
                  Bespoke executive gifting hampers, curated employee onboarding kits, branded lifestyle merchandise, and high-quality custom apparel.
                </p>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden shadow-inner my-4">
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
                  alt="Corporate Gifting & Merchandise by House of Nex"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <ul className="space-y-2.5">
                {corporateList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-warmcharcoal">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-sand/40">
              <Link to="/corporate">
                <Button variant="secondary" size="md" icon={ArrowRight} fullWidth>
                  Explore Corporate Vertical
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
