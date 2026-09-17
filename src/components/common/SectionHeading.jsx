import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  tagline,
  title,
  subtitle,
  centered = false,
  className = ''
}) {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {tagline && (
        <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-terracotta">
          {tagline}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-espresso leading-[1.15] font-normal">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base md:text-lg text-warmcharcoal font-light leading-relaxed pt-1">
          {subtitle}
        </p>
      )}
      <div className={`w-12 h-[2px] bg-gold mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
