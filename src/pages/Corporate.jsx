import React, { useEffect } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import CorporateCategoryCard from '../components/corporate/CorporateCategoryCard';
import { corporateCategories } from '../data/corporateCategories';
import { useEnquiry } from '../context/EnquiryContext';
import Button from '../components/common/Button';
import { Sparkles } from 'lucide-react';

export default function Corporate() {
  const { openEnquiryModal } = useEnquiry();

  useEffect(() => {
    document.title = "Corporate Brand Experiences | House of Nex";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold">
            VERTICAL 02 — CORPORATE BRAND EXPERIENCES
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-espresso">
            Brand touchpoints designed to inspire loyalty
          </h1>
          <p className="text-base md:text-lg text-warmcharcoal font-light leading-relaxed">
            Executive Diwali gifting, curated employee onboarding boxes, high-utility merchandise, and custom corporate uniforms engineered with editorial restraint.
          </p>
          <div className="w-16 h-0.5 bg-terracotta mx-auto pt-2" />
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {corporateCategories.map((cat) => (
            <CorporateCategoryCard
              key={cat.id}
              category={cat}
              onEnquire={(title) => openEnquiryModal(title)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-espresso text-ivory rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-serif">
            Need custom corporate gifting or employee merchandise?
          </h3>
          <p className="text-sm md:text-base text-sand/80 font-light max-w-xl mx-auto">
            We handle design, artisanal sourcing, custom foil packaging, laser engraving, and worldwide multi-location fulfillment.
          </p>
          <Button
            onClick={() => openEnquiryModal('Corporate Gifting')}
            variant="gold"
            size="lg"
            icon={Sparkles}
            className="text-espresso font-semibold"
          >
            REQUEST CORPORATE CATALOGUE & QUOTE
          </Button>
        </div>

      </div>
    </div>
  );
}
