import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import { enquiryService } from '../../services/enquiryService';
import { portfolioService } from '../../services/portfolioService';
import { caseStudyService } from '../../services/caseStudyService';
import { Inbox, Briefcase, BookOpen, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    document.title = "Admin Dashboard | House of Nex";
    setEnquiries(enquiryService.getAll());
    setPortfolio(portfolioService.getAll());
    setCaseStudies(caseStudyService.getAll());
  }, []);

  const newEnquiriesCount = enquiries.filter(e => e.status === 'New').length;

  return (
    <div className="flex min-h-screen bg-ivory">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          title="Dashboard Overview"
          subtitle="Real-time studio metrics, recent enquiries, and portfolio system status."
        />

        <main className="p-8 space-y-8 flex-1">
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-ivory rounded-xl border border-sand p-6 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-warmcharcoal block">Total Enquiries</span>
                <span className="text-3xl font-serif text-espresso mt-1 block font-semibold">{enquiries.length}</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center">
                <Inbox className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-ivory rounded-xl border border-sand p-6 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-warmcharcoal block">New This Week</span>
                <span className="text-3xl font-serif text-terracotta mt-1 block font-semibold">{newEnquiriesCount}</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold-hover flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-ivory rounded-xl border border-sand p-6 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-warmcharcoal block">Portfolio Items</span>
                <span className="text-3xl font-serif text-espresso mt-1 block font-semibold">{portfolio.length}</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-olive/15 text-olive flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-ivory rounded-xl border border-sand p-6 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-warmcharcoal block">Case Studies</span>
                <span className="text-3xl font-serif text-espresso mt-1 block font-semibold">{caseStudies.length}</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-espresso text-gold flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Recent Enquiries Preview */}
          <div className="bg-ivory rounded-xl border border-sand p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-serif text-espresso">Recent Client Enquiries</h2>
              <Link to="/admin/enquiries" className="text-xs uppercase tracking-wider font-semibold text-terracotta flex items-center gap-1 hover:underline">
                View All Enquiries <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="divide-y divide-sand/50">
              {enquiries.slice(0, 5).map((item) => (
                <div key={item.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-espresso block">{item.name} ({item.company || 'Individual'})</span>
                    <span className="text-warmcharcoal/70">Interests: {(item.interests || []).join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold ${
                      item.status === 'New' ? 'bg-terracotta/15 text-terracotta' :
                      item.status === 'Contacted' ? 'bg-gold/20 text-espresso' : 'bg-olive/20 text-olive'
                    }`}>
                      {item.status}
                    </span>
                    <span className="text-warmcharcoal/50 text-[11px]">{new Date(item.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
