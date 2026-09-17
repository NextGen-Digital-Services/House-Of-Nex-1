import React, { createContext, useContext, useState } from 'react';

const EnquiryContext = createContext();

export function EnquiryProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialInterest, setInitialInterest] = useState([]);

  const openEnquiryModal = (interest = null) => {
    if (interest) {
      setInitialInterest([interest]);
    } else {
      setInitialInterest([]);
    }
    setIsModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsModalOpen(false);
  };

  return (
    <EnquiryContext.Provider
      value={{
        isModalOpen,
        initialInterest,
        openEnquiryModal,
        closeEnquiryModal
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
}
