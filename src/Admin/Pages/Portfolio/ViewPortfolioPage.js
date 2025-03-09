import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PortfolioForm from '../../Component/Portfolio/PortfolioForm';
import { usePortfolio } from '../../../Context/Admin/PortfolioContext';
import ToastMessage, { notifyError } from '../../Component/Common/ToastMessage';

const ViewPortfolioPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { portfolios, loadPortfolios, loading, error } = usePortfolio();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    // Fetch portfolios if not already loaded
    if (!portfolios.length) {
      loadPortfolios();
    } else {
      const existingPortfolio = portfolios.find((p) => p.id === parseInt(id));
      if (existingPortfolio) {
        setPortfolio(existingPortfolio);
      } else {
        notifyError('Portfolio not found');
        navigate('/admin/portfolios');
      }
    }
  }, [id, portfolios, loadPortfolios, navigate]);

  const handleBack = () => {
    navigate('/admin/portfolios'); // Navigate back to the portfolios list
  };

  return (
    <div className="w-full">

      {/* Display form only if portfolio is loaded */}
      {portfolio ? (
        <PortfolioForm portfolio={portfolio} isViewOnly={true} />
      ) : (
        <div className="text-center text-blue-500 font-semibold">
          {loading ? 'Loading portfolio...' : 'Portfolio not found.'}
        </div>
      )}

      {/* Back Button */}
      <div className="flex justify-end mt-6">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={handleBack}
        >
          Back
        </button>
      </div>

      <ToastMessage />
    </div>
  );
};

export default ViewPortfolioPage;
