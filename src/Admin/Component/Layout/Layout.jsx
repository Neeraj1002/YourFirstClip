import React from 'react';
import Sidebar from './Sidebar';
import LoggedInUserProfile from '../Auth/LogggedInUser';
import Dashboard from '../Dashboard/Dashboard';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl">Dashboard</h1>
          <LoggedInUserProfile />
        </header>
        <main className="flex-1 p-6 bg-gray-100">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Layout;
