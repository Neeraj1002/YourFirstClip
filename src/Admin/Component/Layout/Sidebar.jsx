import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 text-white w-64 p-6">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul>
        <li
          className="mb-4 p-2 rounded cursor-pointer"
          onClick={() => navigate('/admin')}
        >
          Dashboard Overview
        </li>
        <li
          className="mb-4 p-2 rounded cursor-pointer"
          onClick={() => navigate('/admin/users')}
        >
          Users
        </li>
        <li
          className="p-2 rounded cursor-pointer"
          onClick={() => navigate('/admin/portfolios')}
        >
          Portfolios
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
