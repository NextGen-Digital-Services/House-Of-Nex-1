import React, { useState } from 'react';
import Button from '../common/Button';
import { enquiryService } from '../../services/enquiryService';
import { Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

export default function EnquiryForm({ prefilledInterest = [], onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    budget: '',
    preferredDate: '',
    notes: '',
    interests: prefilledInterest
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState(null);

  const interestOptions = [
    'Event Management',
    'Event Décor',
    'Corporate Gifting',
    'Branded Merchandise',
    'Uniforms & Apparel',
    'Employee-Client Kits',
    'Other Bespoke Requirement'
  ];

  const budgetOptions = [
    'Under ₹500,000',
    '₹500,000 - ₹1,500,000',
    '₹1,500,000 - ₹3,500,000',
    '₹3,500,000 - ₹7,500,000',
    '₹7,500,000+'
  ];

  const handleCheckboxChange = (option) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(option);
      if (exists) {
        return { ...prev, interests: prev.interests.filter((i) => i !== option) };
      } else {
        return { ...prev, interests: [...prev.interests, option] };
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const created = enquiryService.create(formData);
    setSubmittedEnquiry(created);
    setSubmitted(true);
    if (onSuccess) onSuccess(created);
  };

  if (submitted) {
    const whatsappUrl = enquiryService.generateWhatsAppUrl(submittedEnquiry);

    return (
      <div className="bg-ivory rounded-2xl p-8 text-center space-y-6 border border-sand">
        <div className="w-16 h-16 bg-olive/15 text-olive rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-serif text-espresso">Enquiry Received</h3>
          <p className="text-sm text-warmcharcoal font-light leading-relaxed max-w-md mx-auto">
            Thank you, <span className="font-semibold text-espresso">{submittedEnquiry?.name}</span>. Our studio team has logged your requirement and will reach out within 24 business hours.
          </p>
        </div>

        <div className="pt-4 space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-olive text-ivory rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-olive-hover transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Continue Instantly on WhatsApp
          </a>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                company: '',
                phone: '',
                email: '',
                budget: '',
                preferredDate: '',
                notes: '',
                interests: []
              });
            }}
            className="text-xs uppercase tracking-wider text-warmcharcoal hover:underline block mx-auto pt-2"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Interests Multi-Select Checkboxes */}
      <div className="space-y-3">
        <label className="block text-xs uppercase tracking-wider font-semibold text-espresso">
          I am interested in: <span className="text-terracotta">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {interestOptions.map((opt) => {
            const isChecked = formData.interests.includes(opt);
            return (
              <label
                key={opt}
                className={`flex items-center gap-3 p-3 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                  isChecked
                    ? 'bg-cream border-terracotta text-espresso shadow-xs'
                    : 'bg-ivory border-sand text-warmcharcoal hover:border-sand/80'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(opt)}
                  className="rounded text-terracotta focus:ring-terracotta accent-terracotta"
                />
                <span>{opt}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-espresso mb-1.5">
            Your Name <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Siddharth Oberoi"
            className="w-full px-4 py-3 bg-ivory border border-sand rounded-lg text-sm text-espresso focus:outline-none focus:border-terracotta"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-espresso mb-1.5">
            Company / Organisation
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Oberoi Global"
            className="w-full px-4 py-3 bg-ivory border border-sand rounded-lg text-sm text-espresso focus:outline-none focus:border-terracotta"
          />
        </div>
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-espresso mb-1.5">
            Phone Number <span className="text-terracotta">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 bg-ivory border border-sand rounded-lg text-sm text-espresso focus:outline-none focus:border-terracotta"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-espresso mb-1.5">
            Email Address <span className="text-terracotta">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full px-4 py-3 bg-ivory border border-sand rounded-lg text-sm text-espresso focus:outline-none focus:border-terracotta"
          />
        </div>
      </div>

      {/* Budget & Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-espresso mb-1.5">
            Approximate Budget (Optional)
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-ivory border border-sand rounded-lg text-sm text-espresso focus:outline-none focus:border-terracotta"
          >
            <option value="">Select budget range...</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-espresso mb-1.5">
            Target Date (Optional)
          </label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-ivory border border-sand rounded-lg text-sm text-espresso focus:outline-none focus:border-terracotta"
          />
        </div>
      </div>

      {/* Tell us about requirement */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-espresso mb-1.5">
          Tell us about your requirement <span className="text-terracotta">*</span>
        </label>
        <textarea
          name="notes"
          required
          rows={4}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Specify quantities, event themes, locations, or special requests..."
          className="w-full px-4 py-3 bg-ivory border border-sand rounded-lg text-sm text-espresso focus:outline-none focus:border-terracotta"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        icon={Sparkles}
      >
        SEND ENQUIRY
      </Button>
    </form>
  );
}
