import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PortfolioForm from '../../Component/Portfolio/PortfolioForm';
import ToastMessage, { notifySuccess, notifyError } from '../../Component/Common/ToastMessage'; // Adjust path as needed
import { usePortfolio } from '../../../Context/Admin/PortfolioContext';

const EditPortfolioPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { editPortfolio, portfolios, loading, error } = usePortfolio();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    // Fetch portfolios if not already loaded
    if (portfolios) {
      const existingPortfolio = portfolios.find((p) => p.id === parseInt(id));
      if (existingPortfolio) {
        setPortfolio(existingPortfolio);
      } else {
        notifyError('Portfolio not found');
        navigate('/admin/admin-portfolios');
      }
    }
  }, [id, portfolios, navigate]);

  const handleSave = async (portfolioData) => {
    try {
      await editPortfolio(id, portfolioData); // Use editPortfolio from context
      notifySuccess('Portfolio updated successfully');
      navigate('/admin/admin-portfolios'); // Redirect after successful save
    } catch (error) {
      notifyError('Failed to update portfolio');
      console.error('Update portfolio error:', error);
    }
  };

  const handleCancel = () => {
    navigate('/admin/admin-portfolios'); // Redirect on cancel
  };

  return (
    <div className="w-full">

      {/* Display form only if portfolio is loaded */}
      {portfolio && (
        <PortfolioForm portfolio={portfolio} onSave={handleSave} onCancel={handleCancel} />
      )}

      {/* Loading indicator */}
      {loading && (
        <div className="mt-4 text-center text-blue-500 font-semibold">
          Loading portfolio...
        </div>
      )}

      <ToastMessage />
    </div>
  );
};

export default EditPortfolioPage;
