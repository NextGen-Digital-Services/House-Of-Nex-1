import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { initialPortfolioItems } from '../../data/portfolioItems';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export default function FeaturedWorkSection() {
  const { ref, isInView, staggerContainerVariant, fadeUpVariant } = useScrollReveal();
  const { openEnquiryModal } = useEnquiry();
  const featured = initialPortfolioItems.slice(0, 6);

  return (
    <section ref={ref} className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            tagline="SELECTED PORTFOLIO"
            title="A showcase of craft and precision"
            subtitle="Explore our curated portfolio of executive summits, festive gifting suites, and bespoke spatial transformations."
          />

          <Link to="/our-work" className="shrink-0">
            <Button variant="outline" size="md" icon={ArrowUpRight}>
              View All Work
            </Button>
          </Link>
        </div>

        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featured.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUpVariant}
              className="group bg-cream/40 rounded-xl overflow-hidden border border-sand/60 hover:border-terracotta/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-sand/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-espresso/90 text-gold text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-warmcharcoal/70">
                    <span>{item.client}</span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-xl font-serif text-espresso group-hover:text-terracotta transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-warmcharcoal font-light leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-sand/30">
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
