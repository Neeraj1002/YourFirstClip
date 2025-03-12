import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({activeSidebar}) => {
  const navigate = useNavigate();

  return (
    <div
    className={`bg-gray-800 h-screen text-white w-64 p-6 shadow-lg transition-all duration-300 top-0 left-0 z-50 
    ${activeSidebar ? 'ml-0' : '-ml-64'} 2xl:ml-0`}
  >
    <h2 
      className="text-[28px] font-bold mb-6 cursor-pointer hover:text-gray-300 transition transform hover:scale-110"
      onClick={() => navigate('/admin')}
    >
      Dashboard
    </h2>
    <ul>
      <li
        className="mb-4 p-2 rounded cursor-pointer hover:bg-gray-700 hover:text-gray-300 transition transform hover:scale-110"
        onClick={() => navigate('/admin/users')}
      >
        Users
      </li>
      <li
        className="p-2 rounded cursor-pointer hover:bg-gray-700 hover:text-gray-300 transition transform hover:scale-110"
        onClick={() => navigate('/admin/portfolios')}
      >
        Portfolios
      </li>
    </ul>
  </div>
  
  );
};

export default Sidebar;