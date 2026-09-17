import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCounter } from '../../hooks/useCounter';

export default function AnimatedCounter({ end, suffix = '', label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCounter(end, 2000, isInView);

  return (
    <div ref={ref} className="text-center p-4">
      <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-espresso font-light">
        {count}
        <span className="text-terracotta">{suffix}</span>
      </div>
      {label && (
        <p className="text-xs md:text-sm uppercase tracking-widest text-warmcharcoal mt-2 font-medium">
          {label}
        </p>
      )}
    </div>
  );
}
