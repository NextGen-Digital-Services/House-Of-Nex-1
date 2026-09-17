import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Corporate from '../pages/Corporate';
import OurWork from '../pages/OurWork';
import CaseStudyDetail from '../pages/CaseStudyDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminPortfolio from '../pages/admin/AdminPortfolio';
import AdminCaseStudies from '../pages/admin/AdminCaseStudies';
import AdminEnquiries from '../pages/admin/AdminEnquiries';
import AdminSettings from '../pages/admin/AdminSettings';

import ProtectedRoute from '../components/admin/ProtectedRoute';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFloatButton from '../components/common/WhatsAppFloatButton';
import StickyEnquiryBar from '../components/common/StickyEnquiryBar';
import EnquiryModal from '../components/enquiry/EnquiryModal';

export default function AppRouter() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public Showcase Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/our-work/:slug" element={<CaseStudyDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Portal Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/portfolio"
          element={
            <ProtectedRoute>
              <AdminPortfolio />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/case-studies"
          element={
            <ProtectedRoute>
              <AdminCaseStudies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/enquiries"
          element={
            <ProtectedRoute>
              <AdminEnquiries />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <AdminSettings />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <WhatsAppFloatButton />}
      {!isAdminRoute && <StickyEnquiryBar />}
      <EnquiryModal />
    </>
  );
}
