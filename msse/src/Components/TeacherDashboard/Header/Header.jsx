import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Teacher Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Welcome, Teacher!</span>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
      </div>
    </header>
  );
};

export default Header;