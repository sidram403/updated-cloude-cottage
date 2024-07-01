import React, { createContext, useState } from 'react';

export const GuestContext = createContext();

export const GuestProvider = ({ children }) => {
    const [selectedGuest, setSelectedGuest] = useState("Guest");
  
    return (
      <GuestContext.Provider value={{ selectedGuest, setSelectedGuest }}>
        {children}
      </GuestContext.Provider>
    );
  };