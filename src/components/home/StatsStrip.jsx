import React from 'react';
import AnimatedCounter from '../common/AnimatedCounter';

export default function StatsStrip() {
  const stats = [
    { end: 500, suffix: '+', label: 'Events Delivered' },
    { end: 150, suffix: '+', label: 'Corporate Clients' },
    { end: 18, suffix: '+', label: 'Cities & Regions Served' },
    { end: 8, suffix: '+', label: 'Years of Studio Mastery' }
  ];

  return (
    <section className="bg-espresso text-ivory py-16 border-y border-sand/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-sand/20">
          {stats.map((stat, idx) => (
            <AnimatedCounter
              key={idx}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
