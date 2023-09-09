import React, { createContext, useContext, useState } from 'react';

const MainNavigationContext = createContext();

export function MainNavigationProvider({ children }) {
  const [mainNavigationHeight, setMainNavigationHeight] = useState(0);

  return (
    <MainNavigationContext.Provider value={{ mainNavigationHeight, setMainNavigationHeight }}>
      {children}
    </MainNavigationContext.Provider>
  );
};

export function useMainNavigation() {
  return useContext(MainNavigationContext);
};