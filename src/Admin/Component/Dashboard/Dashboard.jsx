import React from 'react';

const Dashboard = () => {
  // Sample data for counts (replace with real data from API or state)
  const portfolioCount = 10;
  const userCount = 25;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Portfolio Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <div className="mr-4">
            <div className="text-3xl font-bold">{portfolioCount}</div>
            <div className="text-gray-600">Portfolios</div>
          </div>
          <div className="ml-auto">
            {/* Add an icon or image representing portfolios */}
            <img src="/path-to-portfolio-icon.svg" alt="Portfolio Icon" className="w-12 h-12" />
          </div>
        </div>

        {/* Users Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <div className="mr-4">
            <div className="text-3xl font-bold">{userCount}</div>
            <div className="text-gray-600">Users</div>
          </div>
          <div className="ml-auto">
            {/* Add an icon or image representing users */}
            <img src="/path-to-user-icon.svg" alt="User Icon" className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
