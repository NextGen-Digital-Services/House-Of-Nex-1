import { initialCaseStudies } from '../data/caseStudies';

const CASE_STUDIES_KEY = 'house_of_nex_case_studies';

function getStoredCaseStudies() {
  try {
    const data = localStorage.getItem(CASE_STUDIES_KEY);
    if (!data) {
      localStorage.setItem(CASE_STUDIES_KEY, JSON.stringify(initialCaseStudies));
      return initialCaseStudies;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to read case studies from localStorage', error);
    return initialCaseStudies;
  }
}

function saveStoredCaseStudies(studies) {
  try {
    localStorage.setItem(CASE_STUDIES_KEY, JSON.stringify(studies));
  } catch (error) {
    console.error('Failed to save case studies to localStorage', error);
  }
}

export const caseStudyService = {
  getAll: () => getStoredCaseStudies(),

  getBySlug: (slug) => {
    const studies = getStoredCaseStudies();
    return studies.find((s) => s.slug === slug);
  },

  create: (studyData) => {
    const studies = getStoredCaseStudies();
    const newStudy = {
      id: 'cs-' + Date.now(),
      slug: studyData.slug || studyData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      gallery: studyData.gallery || [],
      stats: studyData.stats || [],
      ...studyData
    };
    const updated = [newStudy, ...studies];
    saveStoredCaseStudies(updated);
    return newStudy;
  },

  update: (id, studyData) => {
    const studies = getStoredCaseStudies();
    const index = studies.findIndex((s) => s.id === id);
    if (index === -1) return null;

    studies[index] = { ...studies[index], ...studyData };
    saveStoredCaseStudies(studies);
    return studies[index];
  },

  delete: (id) => {
    const studies = getStoredCaseStudies();
    const updated = studies.filter((s) => s.id !== id);
    saveStoredCaseStudies(updated);
    return true;
  },

  resetToDefault: () => {
    saveStoredCaseStudies(initialCaseStudies);
    return initialCaseStudies;
  }
};
