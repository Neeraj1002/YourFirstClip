import React, { useState } from 'react';

const LoggedInUserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Add logout functionality here
    console.log('User logged out');
  };

  return (
    <div className="relative">
      <div
        className="flex items-center space-x-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          className="w-8 h-8 rounded-full"
          src="/path-to-profile-pic.jpg" // Replace with actual profile picture path
          alt="User Profile"
        />
        <span>John Doe</span> {/* Replace with dynamic username */}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
          <div className="px-4 py-2">
            <span className="font-semibold">John Doe</span> {/* Dynamic username */}
            <p className="text-sm text-gray-500">Admin</p> {/* Dynamic role */}
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
