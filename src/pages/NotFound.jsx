import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { Home } from 'lucide-react';

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found | House of Nex";
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4 bg-ivory text-center">
      <div className="max-w-md space-y-6">
        <span className="font-serif text-8xl text-terracotta block font-light">404</span>
        <h1 className="text-3xl font-serif text-espresso">Page Not Found</h1>
        <p className="text-sm text-warmcharcoal font-light leading-relaxed">
          The page or case study you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>
        <Link to="/" className="inline-block pt-4">
          <Button variant="primary" size="md" icon={Home}>
            RETURN TO HOMEPAGE
          </Button>
        </Link>
      </div>
    </div>
  );
}
