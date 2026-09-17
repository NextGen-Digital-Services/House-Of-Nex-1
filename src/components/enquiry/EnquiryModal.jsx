import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEnquiry } from '../../context/EnquiryContext';
import EnquiryForm from './EnquiryForm';
import { X, Sparkles } from 'lucide-react';

export default function EnquiryModal() {
  const { isModalOpen, initialInterest, closeEnquiryModal } = useEnquiry();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEnquiryModal}
            className="fixed inset-0 bg-espresso/80 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-ivory rounded-2xl shadow-2xl border border-sand p-6 sm:p-8 md:p-10 z-10 my-8 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeEnquiryModal}
              className="absolute top-5 right-5 p-2 text-warmcharcoal hover:text-espresso rounded-full hover:bg-cream transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-terracotta font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Direct Studio Channel
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-espresso">
                Start a Conversation with House of Nex
              </h2>
              <p className="text-xs sm:text-sm text-warmcharcoal font-light leading-relaxed">
                Tell us about your upcoming event, corporate gifting rollout, or apparel requirement. We respond within 24 hours with tailored options.
              </p>
            </div>

            {/* Form */}
            <EnquiryForm prefilledInterest={initialInterest} onSuccess={() => {}} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
