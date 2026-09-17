import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function ImageUrlField({ label, value, onChange, placeholder = 'https://images.unsplash.com/photo-...' }) {
  return (
    <div className="space-y-2">
      <label className="block text-xs uppercase tracking-wider font-semibold text-espresso">
        {label}
      </label>
      <div className="flex gap-4 items-start">
        <div className="flex-1">
          <input
            type="url"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-2.5 bg-ivory border border-sand rounded-lg text-xs text-espresso focus:outline-none focus:border-terracotta"
          />
          <p className="text-[10px] text-warmcharcoal/60 mt-1">
            Provide a direct Unsplash photo URL. Format example: <code className="text-terracotta">https://images.unsplash.com/photo-...</code>
          </p>
        </div>

        <div className="w-16 h-16 rounded-lg bg-cream border border-sand overflow-hidden shrink-0 flex items-center justify-center relative">
          {value ? (
            <img
              src={value}
              alt="Preview"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=100';
              }}
            />
          ) : (
            <ImageIcon className="w-6 h-6 text-sand" />
          )}
        </div>
      </div>
    </div>
  );
}
