import React from 'react';

export default function PortfolioFilterBar({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
              isActive
                ? 'bg-espresso text-ivory shadow-sm'
                : 'bg-cream text-warmcharcoal hover:bg-sand/50'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
