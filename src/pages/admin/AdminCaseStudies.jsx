import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import DataTable from '../../components/admin/DataTable';
import ImageUrlField from '../../components/admin/ImageUrlField';
import Button from '../../components/common/Button';
import { caseStudyService } from '../../services/caseStudyService';
import { Plus, Edit2, Trash2, X, RefreshCw } from 'lucide-react';

export default function AdminCaseStudies() {
  const [studies, setStudies] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudy, setEditingStudy] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    client: '',
    category: 'Corporate Gifting',
    location: '',
    heroImage: '',
    brief: '',
    approach: '',
    execution: '',
    result: '',
    galleryText: ''
  });

  const refreshList = () => {
    setStudies(caseStudyService.getAll());
  };

  useEffect(() => {
    document.title = "Case Studies Manager | House of Nex Admin";
    refreshList();
  }, []);

  const handleOpenAdd = () => {
    setEditingStudy(null);
    setFormData({
      title: '',
      subtitle: '',
      client: '',
      category: 'Corporate Events',
      location: 'Mumbai, India',
      heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      brief: '',
      approach: '',
      execution: '',
      result: '',
      galleryText: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800'
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (study) => {
    setEditingStudy(study);
    setFormData({
      title: study.title,
      subtitle: study.subtitle || '',
      client: study.client || '',
      category: study.category || 'Corporate Events',
      location: study.location || '',
      heroImage: study.heroImage || '',
      brief: study.brief || '',
      approach: study.approach || '',
      execution: study.execution || '',
      result: study.result || '',
      galleryText: (study.gallery || []).join('\n')
    });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this case study?')) {
      caseStudyService.delete(id);
      refreshList();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      gallery: formData.galleryText.split('\n').map(u => u.trim()).filter(Boolean)
    };

    if (editingStudy) {
      caseStudyService.update(editingStudy.id, payload);
    } else {
      caseStudyService.create(payload);
    }

    setIsEditing(false);
    refreshList();
  };

  const columns = [
    {
      header: 'Case Study Title',
      cell: (row) => (
        <div>
          <span className="font-semibold text-espresso block">{row.title}</span>
          <span className="text-[10px] text-warmcharcoal/60">{row.client} • {row.location}</span>
        </div>
      )
    },
    { header: 'Category', accessorKey: 'category' },
    { header: 'Slug', accessorKey: 'slug' },
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
          title="Case Studies Manager"
          subtitle="Manage full editorial case studies: Brief, Approach, Execution, Result, and Photo Gallery."
        />

        <main className="p-8 space-y-6 flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif text-espresso">Published Case Studies ({studies.length})</h2>
            <Button onClick={handleOpenAdd} variant="primary" size="sm" icon={Plus}>
              Create New Case Study
            </Button>
          </div>

          <DataTable columns={columns} data={studies} />

          {/* Modal Form */}
          {isEditing && (
            <div className="fixed inset-0 z-50 bg-espresso/80 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-ivory rounded-2xl p-6 md:p-8 max-w-3xl w-full border border-sand space-y-4 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between border-b border-sand pb-4">
                  <h3 className="text-xl font-serif text-espresso">
                    {editingStudy ? 'Edit Editorial Case Study' : 'Create Editorial Case Study'}
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
                      <label className="block uppercase tracking-wider font-semibold mb-1">Client</label>
                      <input
                        type="text"
                        value={formData.client}
                        onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                        className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                      />
                    </div>
                    <div>
                      <label className="block uppercase tracking-wider font-semibold mb-1">Category</label>
                      <input
                        type="text"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                      />
                    </div>
                  </div>

                  <ImageUrlField
                    label="Hero Image URL"
                    value={formData.heroImage}
                    onChange={(url) => setFormData({ ...formData, heroImage: url })}
                  />

                  {/* Brief */}
                  <div>
                    <label className="block uppercase tracking-wider font-semibold mb-1 text-gold">1. The Brief</label>
                    <textarea
                      rows={3}
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                    />
                  </div>

                  {/* Approach */}
                  <div>
                    <label className="block uppercase tracking-wider font-semibold mb-1 text-gold">2. Our Approach</label>
                    <textarea
                      rows={3}
                      value={formData.approach}
                      onChange={(e) => setFormData({ ...formData, approach: e.target.value })}
                      className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                    />
                  </div>

                  {/* Execution */}
                  <div>
                    <label className="block uppercase tracking-wider font-semibold mb-1 text-gold">3. The Execution</label>
                    <textarea
                      rows={3}
                      value={formData.execution}
                      onChange={(e) => setFormData({ ...formData, execution: e.target.value })}
                      className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                    />
                  </div>

                  {/* Result */}
                  <div>
                    <label className="block uppercase tracking-wider font-semibold mb-1 text-terracotta">4. The Result</label>
                    <textarea
                      rows={3}
                      value={formData.result}
                      onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                      className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                    />
                  </div>

                  {/* Gallery URLs */}
                  <div>
                    <label className="block uppercase tracking-wider font-semibold mb-1">Gallery Image URLs (1 per line)</label>
                    <textarea
                      rows={3}
                      value={formData.galleryText}
                      onChange={(e) => setFormData({ ...formData, galleryText: e.target.value })}
                      placeholder="https://images.unsplash.com/photo-1&#10;https://images.unsplash.com/photo-2"
                      className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso font-mono text-[11px]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 uppercase font-semibold text-warmcharcoal">
                      Cancel
                    </button>
                    <Button type="submit" variant="primary" size="sm">
                      Save Case Study
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
