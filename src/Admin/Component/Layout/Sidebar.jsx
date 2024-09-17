import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col p-4">
      <div className="mb-8">
        <h2 className="text-lg font-bold">Profiles</h2>
        <ul>
          {/* Add profile links here */}
          <li className="mt-2">Profile 1</li>
          <li className="mt-2">Profile 2</li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold">Users</h2>
        <ul>
          {/* Add user links here */}
          <li className="mt-2">User 1</li>
          <li className="mt-2">User 2</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
