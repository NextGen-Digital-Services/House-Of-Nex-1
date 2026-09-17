const ENQUIRIES_KEY = 'house_of_nex_enquiries';

const INITIAL_ENQUIRIES = [
  {
    id: 'enq-101',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    name: 'Siddharth Oberoi',
    company: 'Oberoi Financial Corp',
    phone: '+91 98200 12345',
    email: 'siddharth@oberoifinancial.com',
    budget: '₹5,000,000 - ₹10,000,000',
    interests: ['Corporate Gifting', 'Employee-Client Kits'],
    preferredDate: '2026-10-15',
    notes: 'Looking for luxury Diwali hampers for 500 top-tier wealth management clients. Require laser-engraved leather goods.',
    status: 'New'
  },
  {
    id: 'enq-102',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    name: 'Priya Sharma',
    company: 'Zenith Tech Solutions',
    phone: '+91 98111 67890',
    email: 'priya.s@zenithtech.io',
    budget: '₹2,500,000 - ₹5,000,000',
    interests: ['Event Management', 'Theme Décor'],
    preferredDate: '2026-11-20',
    notes: 'Annual tech summit and gala dinner for 350 people. Need complete stage layout, AV management, and guest hospitality.',
    status: 'Contacted'
  }
];

function getStoredEnquiries() {
  try {
    const data = localStorage.getItem(ENQUIRIES_KEY);
    if (!data) {
      localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(INITIAL_ENQUIRIES));
      return INITIAL_ENQUIRIES;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to get enquiries from localStorage', error);
    return INITIAL_ENQUIRIES;
  }
}

function saveStoredEnquiries(items) {
  try {
    localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Failed to save enquiries to localStorage', error);
  }
}

export const enquiryService = {
  getAll: () => getStoredEnquiries(),

  create: (enquiryData) => {
    const enquiries = getStoredEnquiries();
    const newEnquiry = {
      id: 'enq-' + Date.now(),
      createdAt: new Date().toISOString(),
      status: 'New',
      ...enquiryData
    };
    const updated = [newEnquiry, ...enquiries];
    saveStoredEnquiries(updated);
    return newEnquiry;
  },

  updateStatus: (id, status) => {
    const enquiries = getStoredEnquiries();
    const index = enquiries.findIndex((e) => e.id === id);
    if (index === -1) return null;

    enquiries[index].status = status;
    saveStoredEnquiries(enquiries);
    return enquiries[index];
  },

  delete: (id) => {
    const enquiries = getStoredEnquiries();
    const updated = enquiries.filter((e) => e.id !== id);
    saveStoredEnquiries(updated);
    return true;
  },

  generateWhatsAppUrl: (enquiry) => {
    const phone = '919876543210'; // Client default WhatsApp
    const text = `*New Enquiry from House of Nex Website*%0A%0A` +
      `*Name:* ${encodeURIComponent(enquiry.name || 'N/A')}%0A` +
      `*Company:* ${encodeURIComponent(enquiry.company || 'N/A')}%0A` +
      `*Interests:* ${encodeURIComponent((enquiry.interests || []).join(', ') || 'General Enquiry')}%0A` +
      `*Budget:* ${encodeURIComponent(enquiry.budget || 'Not specified')}%0A` +
      `*Notes:* ${encodeURIComponent(enquiry.notes || 'No message provided')}`;

    return `https://wa.me/${phone}?text=${text}`;
  }
};
