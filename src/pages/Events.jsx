import React, { useEffect } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import EventCategoryCard from '../components/events/EventCategoryCard';
import { eventCategories } from '../data/eventCategories';
import { useEnquiry } from '../context/EnquiryContext';
import Button from '../components/common/Button';
import { Sparkles } from 'lucide-react';

export default function Events() {
  const { openEnquiryModal } = useEnquiry();

  useEffect(() => {
    document.title = "Events & Experiences | House of Nex";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
            VERTICAL 01 — EVENTS & EXPERIENCES
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-espresso">
            Moments crafted with spatial art & precision
          </h1>
          <p className="text-base md:text-lg text-warmcharcoal font-light leading-relaxed">
            From high-stakes corporate conferences and brand launches to whimsical children’s celebrations and bespoke floral environments.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto pt-2" />
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {eventCategories.map((cat) => (
            <EventCategoryCard
              key={cat.id}
              category={cat}
              onEnquire={(title) => openEnquiryModal(title)}
            />
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-cream rounded-2xl p-8 md:p-12 border border-sand text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-serif text-espresso">
            Planning an upcoming event or celebration?
          </h3>
          <p className="text-sm md:text-base text-warmcharcoal font-light max-w-xl mx-auto">
            Our event directors work with you to handle spatial renders, stage craft, lighting design, catering curation, and logistics.
          </p>
          <Button
            onClick={() => openEnquiryModal('Event Management')}
            variant="primary"
            size="lg"
            icon={Sparkles}
          >
            ENQUIRE FOR EVENT PLANNING
          </Button>
        </div>

      </div>
    </div>
  );
}
