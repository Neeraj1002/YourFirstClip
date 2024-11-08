import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Common/Card';


const Dashboard = () => {
  const portfolioCount = 10;
  const userCount = 25;
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Portfolios"
            count={portfolioCount}
            onClick={() => navigate('/portfolios')}
            icon="/path-to-portfolio-icon.svg"
          />
          <Card
            title="Users"
            count={userCount}
            onClick={() => navigate('/users')}
            icon="/path-to-user-icon.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
