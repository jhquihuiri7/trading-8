'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type GlobalContextType = {
  globalData: string[];
  setGlobalData: (data: string[]) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [globalData, setGlobalData] = useState<string[]>([]); 

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within GlobalProvider');
  }
  return context;
};
