import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import Button from '../../components/common/Button';
import { Save, Check } from 'lucide-react';

const SETTINGS_KEY = 'house_of_nex_settings';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    studioName: 'House of Nex Studio',
    phone: '+91 98765 43210',
    whatsappNumber: '919876543210',
    email: 'hello@houseofnex.com',
    address: 'Level 4, Nex Towers, Bandra Kurla Complex, Mumbai, MH 400051',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    document.title = "Studio Settings | House of Nex Admin";
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      if (data) {
        setSettings(JSON.parse(data));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex min-h-screen bg-ivory">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          title="Studio Settings"
          subtitle="Configure default contact details, WhatsApp routing number, and studio social handles."
        />

        <main className="p-8 space-y-6 flex-1 max-w-4xl">
          {saved && (
            <div className="p-4 bg-olive/20 text-olive text-xs font-semibold rounded-lg flex items-center gap-2 border border-olive/30">
              <Check className="w-4 h-4" /> Studio settings saved to localStorage successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-ivory rounded-xl border border-sand p-6 md:p-8 space-y-6 shadow-sm">
            <div className="space-y-4 text-xs">
              <h3 className="text-lg font-serif text-espresso border-b border-sand pb-2">Public Contact Details</h3>

              <div>
                <label className="block uppercase tracking-wider font-semibold text-espresso mb-1">Studio Name</label>
                <input
                  type="text"
                  name="studioName"
                  value={settings.studioName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider font-semibold text-espresso mb-1">Display Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={settings.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider font-semibold text-espresso mb-1">WhatsApp Target Number</label>
                  <input
                    type="text"
                    name="whatsappNumber"
                    value={settings.whatsappNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wider font-semibold text-espresso mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider font-semibold text-espresso mb-1">Physical Address</label>
                <textarea
                  rows={2}
                  name="address"
                  value={settings.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                />
              </div>

              <h3 className="text-lg font-serif text-espresso border-b border-sand pb-2 pt-4">Social Handles</h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider font-semibold text-espresso mb-1">Instagram URL</label>
                  <input
                    type="url"
                    name="instagram"
                    value={settings.instagram}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider font-semibold text-espresso mb-1">LinkedIn URL</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={settings.linkedin}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-sand rounded-lg bg-cream text-espresso"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-sand flex justify-end">
              <Button type="submit" variant="primary" size="md" icon={Save}>
                Save Settings Changes
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
