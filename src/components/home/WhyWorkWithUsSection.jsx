import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Lightbulb, Sliders, ShieldCheck, Eye, Layers } from 'lucide-react';

export default function WhyWorkWithUsSection() {
  const { ref, isInView, staggerContainerVariant, fadeUpVariant } = useScrollReveal();

  const reasons = [
    {
      icon: Lightbulb,
      title: 'Creative Thinking',
      description: 'We conceptualize bespoke narratives tailored specifically to your brand or celebration, avoiding off-the-shelf templates and generic event formulas.'
    },
    {
      icon: Sliders,
      title: 'Customisation at Scale',
      description: 'From individualized laser-engraved executive hampers to custom-fabricated stage set architecture, every touchpoint reflects your exact identity.'
    },
    {
      icon: ShieldCheck,
      title: 'End-to-End Execution',
      description: 'We take 100% ownership of spatial design, material sourcing, technical AV production, logistics, and guest hospitality without multi-vendor friction.'
    },
    {
      icon: Eye,
      title: 'Attention to Detail',
      description: 'Uncompromising editorial precision in paper weight, ribbon texture, ambient light warmth, stage acoustic flow, and guest touchpoints.'
    },
    {
      icon: Layers,
      title: 'One Creative Partner',
      description: 'Eliminate coordinating separate event planners, gifting suppliers, and merchandise vendors — House of Nex unifies your entire experiential footprint.'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="THE HOUSE OF NEX ADVANTAGE"
          title="Why discerning brands and hosts choose us"
          subtitle="A creative studio engineered to bridge spatial experience, luxury product design, and flawless production."
          centered
          className="mb-16"
        />

        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            const isFullWidthMobile = idx === reasons.length - 1;

            return (
              <motion.div
                key={idx}
                variants={fadeUpVariant}
                className={`bg-ivory rounded-xl p-8 border border-sand/70 shadow-sm hover:shadow-md transition-shadow ${
                  isFullWidthMobile ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-terracotta/10 text-terracotta flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-espresso mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-warmcharcoal font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
