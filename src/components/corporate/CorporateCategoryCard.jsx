import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function CorporateCategoryCard({ category, onEnquire }) {
  return (
    <motion.div
      id={category.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-ivory rounded-2xl border border-sand shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
    >
      <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            Corporate Domain
          </span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-espresso leading-tight">
            {category.title}
          </h3>
          <p className="text-sm md:text-base text-warmcharcoal font-light leading-relaxed">
            {category.description}
          </p>

          <div className="pt-4 border-t border-sand/40">
            <h4 className="text-xs uppercase tracking-wider text-espresso font-semibold mb-3">
              Included Offerings & Features:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {category.services.map((service, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-warmcharcoal font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-sand/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="text-xs text-warmcharcoal/80 italic">
            {category.highlights.join(' • ')}
          </div>
          <Button
            onClick={() => onEnquire(category.title)}
            variant="gold"
            size="md"
            icon={Sparkles}
            className="shrink-0 text-espresso"
          >
            Get a Quote for this
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
