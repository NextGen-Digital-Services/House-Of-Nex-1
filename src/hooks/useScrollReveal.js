import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollReveal({ threshold = 0.15, once = true, delay = 0 } = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1],
        delay
      }
    }
  };

  const staggerContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay
      }
    }
  };

  return { ref, isInView, fadeUpVariant, staggerContainerVariant };
}
