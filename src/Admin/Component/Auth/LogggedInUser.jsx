import React, { useState,useContext, useEffect } from 'react';
import {AuthContext}  from '../../../Context/Admin/AuthContext'

const LoggedInUserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { auth,logout } = useContext(AuthContext);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout()
  };



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.dropdown')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown">
      <div
        className="flex items-center space-x-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        {/* <img
          className="w-8 h-8 rounded-full"
          //src="/path-to-profile-pic.jpg" // Replace with actual profile picture path
          alt="User Profile"
        /> */}
       {auth && <span>{auth.user.name}</span> }{/* Replace with dynamic username */}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
          <div className="px-4 py-2">
           {auth && <span className="font-semibold">{auth.user.name}</span> }{/* Dynamic username */}
            {auth && <p className="text-sm text-gray-500">{auth.user.role}</p>} {/* Dynamic role */}
          </div>
          <div className="border-t border-gray-200 my-2"></div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default LoggedInUserProfile;
