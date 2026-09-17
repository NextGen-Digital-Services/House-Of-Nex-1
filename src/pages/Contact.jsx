import React, { useEffect } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/enquiry/EnquiryForm';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const whatsappUrl = 'https://wa.me/919876543210?text=' + encodeURIComponent('Hello House of Nex studio team, I am reaching out regarding a project enquiry.');

  useEffect(() => {
    document.title = "Contact Us & Enquire | House of Nex";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeading
          tagline="GET IN TOUCH WITH OUR STUDIO"
          title="Let's build something extraordinary together"
          subtitle="Fill out our studio enquiry form below or connect with us directly via phone, email, or WhatsApp."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Studio Details & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-cream rounded-2xl p-8 border border-sand space-y-6">
              <h3 className="text-xl font-serif text-espresso">Studio Office</h3>
              
              <div className="space-y-4 text-sm text-warmcharcoal font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-espresso font-semibold">House of Nex Main Studio</strong>
                    <span>Level 4, Nex Towers, Bandra Kurla Complex, Mumbai, MH 400051, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-terracotta shrink-0" />
                  <div>
                    <strong className="block text-espresso font-semibold">Studio Phone</strong>
                    <a href="tel:+919876543210" className="hover:text-terracotta transition-colors">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-terracotta shrink-0" />
                  <div>
                    <strong className="block text-espresso font-semibold">Email Desk</strong>
                    <a href="mailto:hello@houseofnex.com" className="hover:text-terracotta transition-colors">hello@houseofnex.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-terracotta shrink-0" />
                  <div>
                    <strong className="block text-espresso font-semibold">Hours of Operation</strong>
                    <span>Monday – Saturday: 9:30 AM – 7:30 PM IST</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sand/60">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-olive text-ivory rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-olive-hover transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Direct WhatsApp Connect
                </a>
              </div>
            </div>

            {/* Interactive Map Block */}
            <div className="bg-cream rounded-2xl overflow-hidden border border-sand h-64 relative shadow-sm">
              <iframe
                title="House of Nex Studio Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.796349918237!2d72.8687!3d19.0657!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123456789%3A0x0!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Full Enquiry Form */}
          <div className="lg:col-span-7 bg-ivory rounded-2xl p-8 md:p-10 border border-sand shadow-card">
            <h3 className="text-2xl font-serif text-espresso mb-6">
              Studio Project Enquiry Form
            </h3>
            <EnquiryForm />
          </div>

        </div>

      </div>
    </div>
  );
}
