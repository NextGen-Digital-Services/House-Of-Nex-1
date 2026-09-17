import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import DataTable from '../../components/admin/DataTable';
import ImageUrlField from '../../components/admin/ImageUrlField';
import Button from '../../components/common/Button';
import { portfolioService } from '../../services/portfolioService';
import { Plus, Edit2, Trash2, X, RefreshCw } from 'lucide-react';

export default function AdminPortfolio() {
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Corporate Events',
    client: '',
    image: '',
    description: '',
    hasCaseStudy: false,
    slug: '',
    tags: ''
  });

  const refreshList = () => {
    setItems(portfolioService.getAll());
  };

  useEffect(() => {
    document.title = "Portfolio Manager | House of Nex Admin";
    refreshList();
  }, []);

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      category: 'Corporate Events',
      client: '',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
      description: '',
      hasCaseStudy: false,
      slug: '',
      tags: 'Gifting, Executive'
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      category: item.category,
      client: item.client || '',
      image: item.image || '',
      description: item.description || '',
      hasCaseStudy: !!item.hasCaseStudy,
      slug: item.slug || '',
      tags: (item.tags || []).join(', ')
    });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this portfolio item?')) {
      portfolioService.delete(id);
      refreshList();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean)
    };

    if (editingItem) {
      portfolioService.update(editingItem.id, payload);
    } else {
      portfolioService.create(payload);
    }

    setIsEditing(false);
    refreshList();
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset portfolio items to seed default list?')) {
      portfolioService.resetToDefault();
      refreshList();
    }
  };

  const columns = [
    {
      header: 'Item',
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-cream shrink-0 border border-sand">
            <img src={row.image} alt={row.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="font-semibold text-espresso block">{row.title}</span>
            <span className="text-[10px] text-warmcharcoal/60">{row.client}</span>
          </div>
        </div>
      )
    },
    { header: 'Category', accessorKey: 'category' },
    {
      header: 'Case Study',
      cell: (row) => (
        <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold ${row.hasCaseStudy ? 'bg-terracotta/15 text-terracotta' : 'bg-sand/30 text-warmcharcoal'}`}>
          {row.hasCaseStudy ? 'Yes' : 'No'}
        </span>
      )
    },
    { header: 'Date', accessorKey: 'date' },
    {
      header: 'Actions',
      cell: (row) => (
        <div className="flex items-center gap-2">
          <button onClick={() => handleOpenEdit(row)} className="p-1 text-warmcharcoal hover:text-espresso">
            <Edit2 className="w-4 h-4" />
          </button>
          <button onClick={() => handleDelete(row.id)} className="p-1 text-red-500 hover:text-red-700">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="flex min-h-screen bg-ivory">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          title="Portfolio Manager"
          subtitle="Manage showcase projects, images, categories, and case study links. Persists live to localStorage."
        />

        <main className="p-8 space-y-6 flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif text-espresso">Portfolio Database ({items.length})</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={handleResetDefaults}
                className="text-xs uppercase tracking-wider text-warmcharcoal hover:text-espresso flex items-center gap-1.5 px-3 py-2 border border-sand rounded-lg"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset Seed Data
              </button>

              <Button onClick={handleOpenAdd} variant="primary" size="sm" icon={Plus}>
                Add Portfolio Item
              </Button>
            </div>
          </div>

          <DataTable columns={columns} data={items} />

          {/* Edit / Add Modal */}
          {isEditing && (
            <div className="fixed inset-0 z-50 bg-espresso/80 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-ivory rounded-2xl p-6 md:p-8 max-w-xl w-full border border-sand space-y-4 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between border-b border-sand pb-4">
                  <h3 className="text-xl font-serif text-espresso">
                    {editingItem ? 'Edit Portfolio Item' : 'New Portfolio Item'}
                  </h3>
                  <button onClick={() => setIsEditing(false)} className="p-1 text-warmcharcoal hover:text-espresso">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block uppercase tracking-wider font-semibold mb-1">Title</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-wider font-semibold mb-1">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                      >
                        <option value="Corporate Events">Corporate Events</option>
                        <option value="Kids">Kids & Family</option>
                        <option value="Décor">Theme Décor</option>
                        <option value="Gifting">Corporate Gifting</option>
                        <option value="Merchandise">Merchandise</option>
                        <option value="Apparel">Uniforms & Apparel</option>
                        <option value="Kits">Employee-Event Kits</option>
                        <option value="Brand Activations">Brand Activations</option>
                      </select>
                    </div>

                    <div>
                      <label className="block uppercase tracking-wider font-semibold mb-1">Client Name</label>
                      <input
                        type="text"
                        value={formData.client}
                        onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                        placeholder="e.g. Apex Capital"
                        className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                      />
                    </div>
                  </div>

                  <ImageUrlField
                    label="Unsplash Image URL"
                    value={formData.image}
                    onChange={(url) => setFormData({ ...formData, image: url })}
                  />

                  <div>
                    <label className="block uppercase tracking-wider font-semibold mb-1">Description</label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider font-semibold mb-1">Tags (comma separated)</label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="Diwali, Festive, C-Suite"
                      className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 uppercase font-semibold text-warmcharcoal">
                      Cancel
                    </button>
                    <Button type="submit" variant="primary" size="sm">
                      Save Item
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
