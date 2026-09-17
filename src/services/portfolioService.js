import { initialPortfolioItems } from '../data/portfolioItems';

const PORTFOLIO_KEY = 'house_of_nex_portfolio_items';

function getStoredItems() {
  try {
    const data = localStorage.getItem(PORTFOLIO_KEY);
    if (!data) {
      localStorage.setItem(PORTFOLIO_KEY, JSON.stringify(initialPortfolioItems));
      return initialPortfolioItems;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to get portfolio items from localStorage', error);
    return initialPortfolioItems;
  }
}

function saveStoredItems(items) {
  try {
    localStorage.setItem(PORTFOLIO_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Failed to save portfolio items to localStorage', error);
  }
}

export const portfolioService = {
  getAll: () => getStoredItems(),

  getBySlug: (slug) => {
    const items = getStoredItems();
    return items.find((item) => item.slug === slug);
  },

  create: (itemData) => {
    const items = getStoredItems();
    const newItem = {
      id: 'item-' + Date.now(),
      slug: itemData.slug || itemData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      ...itemData
    };
    const updated = [newItem, ...items];
    saveStoredItems(updated);
    return newItem;
  },

  update: (id, itemData) => {
    const items = getStoredItems();
    const index = items.findIndex((i) => i.id === id);
    if (index === -1) return null;

    items[index] = { ...items[index], ...itemData };
    saveStoredItems(items);
    return items[index];
  },

  delete: (id) => {
    const items = getStoredItems();
    const updated = items.filter((i) => i.id !== id);
    saveStoredItems(updated);
    return true;
  },

  resetToDefault: () => {
    saveStoredItems(initialPortfolioItems);
    return initialPortfolioItems;
  }
};
