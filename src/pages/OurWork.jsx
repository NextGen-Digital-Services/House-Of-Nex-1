import React, { useEffect, useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import PortfolioGrid from '../components/work/PortfolioGrid';
import { portfolioService } from '../services/portfolioService';

export default function OurWork() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    document.title = "Our Work & Case Studies | House of Nex";
    window.scrollTo(0, 0);
    setItems(portfolioService.getAll());
  }, []);

  return (
    <div className="pt-28 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          tagline="PORTFOLIO & CASE STUDIES"
          title="Our Selected Body of Work"
          subtitle="A curated look into corporate summits, festive gifting suites, themed milestone birthdays, and custom apparel rollouts."
          centered
        />

        <PortfolioGrid items={items} />
      </div>
    </div>
  );
}
