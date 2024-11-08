import React from 'react';
import Sidebar from './Sidebar';
import LoggedInUserProfile from '../Auth/LogggedInUser';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <header className="bg-gray-800 text-white p-4 flex justify-end items-center">
          <LoggedInUserProfile />
        </header>
        <main className="flex-1 p-6 bg-gray-100">
          {/* This is where the child component for each route will be rendered */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
