import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePortfolio } from '../../../Context/Admin/PortfolioContext';
import PortfolioForm from '../../Component/Portfolio/PortfolioForm';

const NewPortfolioPage = () => {
  const navigate = useNavigate();
  const { addPortfolio, loading, error } = usePortfolio(); // Use context functions and state

  // Save handler
  const handleSave = async (portfolioData) => {
    await addPortfolio(portfolioData); // Call addPortfolio from context
    navigate('/admin/admin-portfolios'); // Redirect after saving the portfolio
  };

  // Cancel handler
  const handleCancel = () => {
    navigate('/admin/admin-portfolios'); // Redirect on cancel
  };

  return (
    <div className="w-full">

      {/* Error Message */}
      {error && (
        <div className="mb-4 text-red-600 bg-red-100 p-2 rounded">
          {error}
        </div>
      )}

      {/* Portfolio Form */}
      <PortfolioForm onSave={handleSave} onCancel={handleCancel} />

      {/* Loading Indicator */}
      {loading && (
        <div className="mt-4 text-center text-blue-500 font-semibold">
          Saving portfolio...
        </div>
      )}
    </div>
  );
};

export default NewPortfolioPage;
