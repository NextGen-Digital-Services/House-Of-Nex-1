import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PortfolioFilterBar from './PortfolioFilterBar';
import PortfolioCard from './PortfolioCard';

export default function PortfolioGrid({ items }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Corporate Events',
    'Kids',
    'Birthdays',
    'Theme Events',
    'Décor',
    'Gifting',
    'Merchandise',
    'Apparel',
    'Kits',
    'Brand Activations'
  ];

  const filteredItems = items.filter((item) => {
    if (activeCategory === 'All') return true;
    const catLower = item.category.toLowerCase();
    const filterLower = activeCategory.toLowerCase();
    
    if (filterLower === 'corporate events') return catLower.includes('corporate') || catLower.includes('events');
    if (filterLower === 'birthdays') return catLower.includes('birthday') || catLower.includes('kids');
    if (filterLower === 'theme events') return catLower.includes('theme') || catLower.includes('gala');
    
    return catLower.includes(filterLower);
  });

  return (
    <div className="space-y-8">
      <PortfolioFilterBar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-cream/40 rounded-xl border border-sand">
          <p className="font-serif text-lg text-espresso">No projects found for "{activeCategory}".</p>
          <p className="text-xs text-warmcharcoal mt-1">Try selecting another filter or view all work.</p>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
