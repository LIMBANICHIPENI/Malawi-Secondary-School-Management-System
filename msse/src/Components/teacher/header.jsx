import React from "react";
import { Outlet } from "react-router-dom";

const header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Left side: Logo / Title */}
      <div className="flex items-center space-x-3">
        <span className="text-2xl font-bold text-blue-600">📚 MSSMS</span>
        <span className="text-gray-600">Teacher Panel</span>
      </div>

      {/* Right side: User info / actions */}
      <div className="flex items-center space-x-4">
        {/* User greeting */}
        <span className="text-gray-700 font-medium">Hello, Teacher!</span>

        {/* Notifications button */}
        <button className="relative p-2 rounded hover:bg-gray-100">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6 6 0 10-12 0v3c0 .386-.149.735-.395 1.0L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile button */}
        <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold">
            T
          </div>
          <span className="text-gray-700 font-medium">Teacher</span>
        </button>
      </div>
    </header>
  );
};

export default header;
