import React from 'react';

const CornerBox = ({ children }) => {
  return (
    <div className="w-full relative inline-block px-4 py-2 bg-transparent">
      <span className="block text-base">{children}</span>
      <div className="absolute top-0 left-0 w-5 h-5 bg-gray-200 clip-triangle opacity-20"></div>
    </div>
  );
};

export default CornerBox;
