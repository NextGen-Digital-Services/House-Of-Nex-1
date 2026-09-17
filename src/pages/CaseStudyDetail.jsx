import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CaseStudyLayout from '../components/caseStudy/CaseStudyLayout';
import { caseStudyService } from '../services/caseStudyService';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [study, setStudy] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = caseStudyService.getBySlug(slug);
    if (found) {
      setStudy(found);
      document.title = `${found.title} | House of Nex Case Study`;
    } else {
      // Fall back or redirect
      navigate('/our-work', { replace: true });
    }
  }, [slug, navigate]);

  if (!study) return null;

  return <CaseStudyLayout study={study} />;
}
