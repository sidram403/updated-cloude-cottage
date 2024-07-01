import React, { createContext, useState } from 'react';

export const CottageContext = createContext();

export const CottageProvider = ({ children }) => {
  const [selectedCottage, setSelectedCottage] = useState("Cottages");

  return (
    <CottageContext.Provider value={{ selectedCottage, setSelectedCottage }}>
      {children}
    </CottageContext.Provider>
  );
};