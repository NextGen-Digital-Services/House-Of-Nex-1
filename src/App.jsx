import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { EnquiryProvider } from './context/EnquiryContext';
import AppRouter from './router/AppRouter';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EnquiryProvider>
          <AppRouter />
        </EnquiryProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
