import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Sparkles, Calendar, MapPin, Building2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEnquiry } from '../../context/EnquiryContext';

export default function CaseStudyLayout({ study }) {
  const { openEnquiryModal } = useEnquiry();

  if (!study) return null;

  return (
    <article className="py-24 bg-ivory">
      {/* Top Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link
          to="/our-work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-warmcharcoal hover:text-terracotta mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Our Work
        </Link>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest text-terracotta font-semibold">
            <span>{study.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {study.location}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-espresso leading-tight font-normal">
            {study.title}
          </h1>

          <p className="text-lg sm:text-xl text-warmcharcoal font-light leading-relaxed">
            {study.subtitle}
          </p>

          <div className="pt-6 border-t border-sand flex flex-wrap gap-8 text-xs uppercase tracking-wider text-warmcharcoal">
            <div>
              <span className="text-[10px] text-warmcharcoal/60 block font-normal">Client</span>
              <span className="font-semibold text-espresso">{study.client}</span>
            </div>
            <div>
              <span className="text-[10px] text-warmcharcoal/60 block font-normal">Date Delivered</span>
              <span className="font-semibold text-espresso">{study.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Full-Bleed Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Key Stats Strip */}
      {study.stats && study.stats.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-cream rounded-xl p-8 border border-sand grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-sand/60">
            {study.stats.map((stat, idx) => (
              <div key={idx} className="pt-4 md:pt-0">
                <span className="block text-3xl md:text-4xl font-serif text-espresso font-semibold">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-warmcharcoal mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4-Part Structure: Brief -> Approach -> Execution -> Result */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* The Brief */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">01 / CONCEPT</span>
            <div className="h-px bg-sand flex-1" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-espresso">The Brief</h2>
          <p className="text-base text-warmcharcoal font-light leading-relaxed">
            {study.brief}
          </p>
        </section>

        {/* Our Approach */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">02 / STRATEGY</span>
            <div className="h-px bg-sand flex-1" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-espresso">Our Approach</h2>
          <p className="text-base text-warmcharcoal font-light leading-relaxed">
            {study.approach}
          </p>
        </section>

        {/* The Execution */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">03 / PRODUCTION</span>
            <div className="h-px bg-sand flex-1" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-espresso">The Execution</h2>
          <p className="text-base text-warmcharcoal font-light leading-relaxed">
            {study.execution}
          </p>
        </section>

        {/* Image Gallery */}
        {study.gallery && study.gallery.length > 0 && (
          <section className="py-6">
            <h3 className="text-xs uppercase tracking-widest text-espresso font-semibold mb-6">
              Gallery & Detail Snapshots
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.gallery.map((imgUrl, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <img
                    src={imgUrl}
                    alt={`${study.title} gallery snapshot ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* The Result */}
        <section className="space-y-4 bg-cream/60 p-8 rounded-xl border border-sand">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold">04 / OUTCOME</span>
            <div className="h-px bg-sand flex-1" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-espresso">The Result</h2>
          <p className="text-base text-warmcharcoal font-light leading-relaxed">
            {study.result}
          </p>
        </section>

        {/* Bottom CTA Card */}
        <div className="bg-espresso text-ivory rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-serif">Have a similar project requirement?</h3>
          <p className="text-sm text-sand/80 font-light max-w-xl mx-auto">
            Let House of Nex bring the same editorial precision and flawless execution to your upcoming celebration or executive brand rollout.
          </p>
          <Button
            onClick={() => openEnquiryModal(study.category)}
            variant="primary"
            size="lg"
            icon={Sparkles}
          >
            Enquire For Similar Project
          </Button>
        </div>

      </div>
    </article>
  );
}
