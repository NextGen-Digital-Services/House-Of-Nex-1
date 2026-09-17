import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import DataTable from '../../components/admin/DataTable';
import { enquiryService } from '../../services/enquiryService';
import { Trash2, MessageCircle, ExternalLink } from 'lucide-react';

export default function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);

  const refreshList = () => {
    setEnquiries(enquiryService.getAll());
  };

  useEffect(() => {
    document.title = "Enquiries Inbox | House of Nex Admin";
    refreshList();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    enquiryService.updateStatus(id, newStatus);
    refreshList();
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this enquiry record?')) {
      enquiryService.delete(id);
      refreshList();
    }
  };

  const columns = [
    {
      header: 'Client & Company',
      cell: (row) => (
        <div>
          <span className="font-semibold text-espresso block">{row.name}</span>
          <span className="text-[11px] text-warmcharcoal/70">{row.company || 'Private Client'}</span>
          <span className="text-[10px] text-warmcharcoal/50 block font-mono mt-0.5">{row.email} • {row.phone}</span>
        </div>
      )
    },
    {
      header: 'Interests',
      cell: (row) => (
        <div className="flex flex-wrap gap-1 max-w-xs">
          {(row.interests || []).map((int, i) => (
            <span key={i} className="px-2 py-0.5 rounded bg-cream text-[10px] font-medium text-espresso border border-sand/50">
              {int}
            </span>
          ))}
        </div>
      )
    },
    {
      header: 'Budget & Date',
      cell: (row) => (
        <div className="text-[11px]">
          <span className="block font-semibold text-espresso">{row.budget || 'Unspecified'}</span>
          <span className="text-warmcharcoal/60">{row.preferredDate ? `Target: ${row.preferredDate}` : 'No date'}</span>
        </div>
      )
    },
    {
      header: 'Status',
      cell: (row) => (
        <select
          value={row.status || 'New'}
          onChange={(e) => handleStatusChange(row.id, e.target.value)}
          className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider focus:outline-none cursor-pointer border ${
            row.status === 'New'
              ? 'bg-terracotta/15 text-terracotta border-terracotta/30'
              : row.status === 'Contacted'
              ? 'bg-gold/20 text-espresso border-gold/40'
              : 'bg-olive/20 text-olive border-olive/40'
          }`}
        >
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Closed">Closed</option>
        </select>
      )
    },
    {
      header: 'Notes & Actions',
      cell: (row) => {
        const waUrl = enquiryService.generateWhatsAppUrl(row);
        return (
          <div className="flex items-center gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 bg-olive text-ivory rounded text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1 hover:bg-olive-hover"
              title="Open WhatsApp Chat"
            >
              <MessageCircle className="w-3 h-3" /> WA
            </a>

            <button
              onClick={() => handleDelete(row.id)}
              className="p-1 text-red-500 hover:text-red-700"
              title="Delete enquiry"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      }
    }
  ];

  return (
    <div className="flex min-h-screen bg-ivory">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          title="Client Enquiries Inbox"
          subtitle="View, track, and respond to incoming studio leads and project requirements."
        />

        <main className="p-8 space-y-6 flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif text-espresso">Submitted Enquiries ({enquiries.length})</h2>
          </div>

          <DataTable columns={columns} data={enquiries} emptyMessage="No client enquiries logged yet." />
        </main>
      </div>
    </div>
  );
}
