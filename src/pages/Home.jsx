import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import WhatWeDoSection from '../components/home/WhatWeDoSection';
import FeaturedWorkSection from '../components/home/FeaturedWorkSection';
import StatsStrip from '../components/home/StatsStrip';
import WhyWorkWithUsSection from '../components/home/WhyWorkWithUsSection';
import Button from '../components/common/Button';
import { useEnquiry } from '../context/EnquiryContext';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const { openEnquiryModal } = useEnquiry();

  useEffect(() => {
    document.title = "House of Nex | Events & Corporate Brand Experiences";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatWeDoSection />
      <FeaturedWorkSection />
      <StatsStrip />
      <WhyWorkWithUsSection />

      {/* Full-width Terracotta CTA Banner */}
      <section className="bg-terracotta text-ivory py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold">
            GET STARTED TODAY
          </span>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            Have a requirement in mind?
          </h2>
          <p className="text-base md:text-lg text-ivory/90 font-light max-w-2xl mx-auto">
            Whether planning an executive summit, curating Diwali hampers, or manufacturing bespoke apparel, our creative studio is ready to execute.
          </p>
          <div className="pt-4">
            <Button
              onClick={() => openEnquiryModal()}
              variant="gold"
              size="lg"
              icon={Sparkles}
              className="text-espresso font-semibold"
            >
              ENQUIRE WITH US NOW
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
