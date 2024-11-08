
import React from 'react';
import { PortfolioProvider } from './Context/Admin/PortfolioContext';


export const AppProvider = ({ children }) => {
  return (
      <PortfolioProvider>
          {children}
      </PortfolioProvider>
  );
};

export default AppProvider;
