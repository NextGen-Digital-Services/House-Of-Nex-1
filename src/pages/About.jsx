import React, { useEffect } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import TeamGrid from '../components/about/TeamGrid';
import Button from '../components/common/Button';
import { useEnquiry } from '../context/EnquiryContext';
import { Sparkles, Award, Compass, HeartHandshake } from 'lucide-react';

export default function About() {
  const { openEnquiryModal } = useEnquiry();

  useEffect(() => {
    document.title = "About Us | House of Nex Studio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-24 bg-ivory space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Brand Story Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
              THE HOUSE OF NEX STORY
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-espresso leading-tight">
              Crafting spatial art & bespoke touchpoints since 2018.
            </h1>
            <p className="text-base text-warmcharcoal font-light leading-relaxed">
              House of Nex was born out of a desire to eliminate the divide between spatial event design and luxury corporate brand execution. We recognized that discerning clients were exhausted by working with fragmented vendors — managing event planners for galas, separate gifting houses for Diwali, and disconnected suppliers for branded merchandise.
            </p>
            <p className="text-base text-warmcharcoal font-light leading-relaxed">
              We unified these distinct disciplines into a single boutique creative studio operating under Amalfi Gold editorial principles: warm, refined aesthetics, tactile natural materials, uncompromising production quality, and white-glove hospitality.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-ivory">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
                alt="House of Nex Creative Studio Team in Action"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="bg-cream rounded-xl p-8 border border-sand space-y-3">
            <Compass className="w-8 h-8 text-terracotta" />
            <h3 className="text-xl font-serif text-espresso">Uncompromising Craft</h3>
            <p className="text-xs text-warmcharcoal font-light leading-relaxed">
              We source organic Pima cottons, hand-hammered metals, FSC-certified papers, and sustainable botanical florals for every installation and hamper.
            </p>
          </div>

          <div className="bg-cream rounded-xl p-8 border border-sand space-y-3">
            <Award className="w-8 h-8 text-gold" />
            <h3 className="text-xl font-serif text-espresso">Editorial Precision</h3>
            <p className="text-xs text-warmcharcoal font-light leading-relaxed">
              Every stage set, foil-stamped sleeve, and gift box is designed with minimalist elegance, avoiding generic stock clutter and loud logos.
            </p>
          </div>

          <div className="bg-cream rounded-xl p-8 border border-sand space-y-3">
            <HeartHandshake className="w-8 h-8 text-olive" />
            <h3 className="text-xl font-serif text-espresso">White-Glove Service</h3>
            <p className="text-xs text-warmcharcoal font-light leading-relaxed">
              Direct accountability from studio founders and senior production leads from concept approval through overnight setup and final delivery.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="space-y-8 pt-8">
          <SectionHeading
            tagline="STUDIO LEADERSHIP"
            title="Meet the Minds Behind the Magic"
            subtitle="Architects, spatial designers, luxury sourcing experts, and event production directors."
          />
          <TeamGrid />
        </div>

        {/* CTA */}
        <div className="bg-espresso text-ivory rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-serif">Work with our creative studio team</h3>
          <p className="text-sm text-sand/80 font-light max-w-lg mx-auto">
            Ready to bring your next event summit or corporate gifting campaign to life?
          </p>
          <Button
            onClick={() => openEnquiryModal()}
            variant="primary"
            size="lg"
            icon={Sparkles}
          >
            START A CONVERSATION
          </Button>
        </div>

      </div>
    </div>
  );
}
