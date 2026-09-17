import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export default function PortfolioCard({ item }) {
  const { openEnquiryModal } = useEnquiry();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bg-ivory rounded-xl border border-sand shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      <div>
        <div className="relative aspect-[4/3] overflow-hidden bg-sand/20">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-espresso/90 text-gold text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
            {item.category}
          </div>
        </div>

        <div className="p-5 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-warmcharcoal/70 uppercase tracking-wider">
            <span>{item.client}</span>
            <span>{item.date}</span>
          </div>

          <h3 className="text-lg font-serif text-espresso group-hover:text-terracotta transition-colors leading-snug">
            {item.title}
          </h3>

          <p className="text-xs text-warmcharcoal font-light leading-relaxed line-clamp-2">
            {item.description}
          </p>

          {item.tags && item.tags.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-1.5">
              {item.tags.map((tag, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-cream text-warmcharcoal/80">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 border-t border-sand/40 flex items-center justify-between">
        {item.hasCaseStudy ? (
          <Link
            to={`/our-work/${item.slug}`}
            className="text-xs uppercase tracking-wider font-semibold text-terracotta flex items-center gap-1 hover:underline"
          >
            Read Case Study <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <button
            onClick={() => openEnquiryModal(item.category)}
            className="text-xs uppercase tracking-wider font-semibold text-warmcharcoal hover:text-terracotta flex items-center gap-1"
          >
            Enquire for Similar <Sparkles className="w-3.5 h-3.5 text-gold" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
