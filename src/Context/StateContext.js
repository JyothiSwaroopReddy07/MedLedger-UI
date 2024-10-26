// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

// Custom provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext in components
export const useAppContext = () => useContext(AppContext);
