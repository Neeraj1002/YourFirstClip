import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  fetchPortfolios,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} from '../../Api/Admin/portfoliosApi';

// Create the PortfolioContext
const PortfolioContext = createContext();

// Custom hook to access PortfolioContext easily
export const usePortfolio = () => useContext(PortfolioContext);

// PortfolioProvider component
export const PortfolioProvider = ({ children }) => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Helper function to handle and set API errors in the context
  const handleError = (err) => {
    setError(err.message);
  };

  // Fetch all portfolios
  const loadPortfolios = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPortfolios();
      setPortfolios(data.data); // Assuming API response structure has `data` property with portfolio list
     
    } catch (err) {
      handleError(err); // Use helper function to handle error
    } finally {
      setLoading(false);
    }
  };

  // Create a new portfolio
  const addPortfolio = async (portfolioData) => {
    setLoading(true);
    setError(null);
    try {
      const newPortfolio = await createPortfolio(portfolioData);
      setPortfolios((prevPortfolios) => [...prevPortfolios, newPortfolio.data]);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  // Update an existing portfolio
  const editPortfolio = async (id, updatedData) => {
    setLoading(true);
    setError(null);
    try {
      const updatedPortfolio = await updatePortfolio(id, updatedData);
      setPortfolios((prevPortfolios) =>
        prevPortfolios.map((portfolio) =>
          portfolio.id === id ? updatedPortfolio.data : portfolio
        )
      );
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete a portfolio
  const removePortfolio = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deletePortfolio(id);
      setPortfolios((prevPortfolios) =>
        prevPortfolios.filter((portfolio) => portfolio.id !== id)
      );
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch portfolios on component mount
  useEffect(() => {
    loadPortfolios();
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        portfolios,
        loading,
        error,
        loadPortfolios,
        addPortfolio,
        editPortfolio,
        removePortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};