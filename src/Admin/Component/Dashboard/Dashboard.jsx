import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Common/Card';
import { usePortfolio } from '../../../Context/Admin/PortfolioContext';

const Dashboard = () => {
  const { portfolios } = usePortfolio();
  const portfolioCount = portfolios.length;
  const userCount = 25;
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div className="flex-1 p-6 bg-gray-100">
        {/* Dashboard Title */}
        <h1 className="text-[36px] font-extrabold text-black text-center w-full">
          Dashboard
        </h1>

        {/* Cards Section */}
        <div className="sm:flex sm:flex-col flex flex-row justify-center justify-between gap-6 mt-8">
          <div className="w-full sm:w-64">
            <Card title="Portfolios" count={portfolioCount} iconType="portfolio" onClick={() => navigate('/admin/portfolios')} />
          </div>
          <div className="w-full sm:w-64">
            <Card title="Users" count={userCount} iconType="users" onClick={() => navigate('/admin/users')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;