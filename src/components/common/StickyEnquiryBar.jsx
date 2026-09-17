import React from 'react';
import { useEnquiry } from '../../context/EnquiryContext';
import { Sparkles, MessageCircle } from 'lucide-react';

export default function StickyEnquiryBar() {
  const { openEnquiryModal } = useEnquiry();
  const whatsappUrl = 'https://wa.me/919876543210?text=' + encodeURIComponent('Hello House of Nex team, I would like to enquire about your services.');

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-espresso/95 backdrop-blur-md text-ivory border-t border-sand/30 p-3 flex items-center justify-between gap-3 shadow-2xl">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-4 bg-olive text-ivory rounded-md text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>
      <button
        onClick={() => openEnquiryModal()}
        className="flex-[1.5] py-2.5 px-4 bg-terracotta text-ivory rounded-md text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
      >
        <Sparkles className="w-4 h-4 text-gold" />
        Enquire Now
      </button>
    </div>
  );
}
