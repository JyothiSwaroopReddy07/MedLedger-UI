// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

// Custom provider component
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({ user: null, theme: 'light' });

  const updateUser = (user) => setState((prev) => ({ ...prev, user }));
  const toggleTheme = () => setState((prev) => ({ ...prev, theme: prev.theme === 'light' ? 'dark' : 'light' }));

  return (
    <AppContext.Provider value={{ state, updateUser, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext in components
export const useAppContext = () => useContext(AppContext);
