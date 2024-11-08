import React from 'react';

const Card = ({ title, count, icon, onClick }) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 flex items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="mr-4">
        <div className="text-3xl font-bold">{count}</div>
        <div className="text-gray-600">{title}</div>
      </div>
      <div className="ml-auto">
        <img src={icon} alt={`${title} Icon`} className="w-12 h-12" />
      </div>
    </div>
  );
};

export default Card;
