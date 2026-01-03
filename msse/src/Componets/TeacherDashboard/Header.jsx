import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Welcome, Teacher</h1>
      <div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
