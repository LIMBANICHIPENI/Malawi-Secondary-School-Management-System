import React from 'react';

const Home = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Dashboard Home</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Total Students</h3>
          <p className="text-2xl text-blue-600">25</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Assignments Created</h3>
          <p className="text-2xl text-green-600">5</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Resources Uploaded</h3>
          <p className="text-2xl text-purple-600">10</p>
        </div>
      </div>
      <p className="text-gray-600">Quick links: Navigate using the sidebar to manage announcements, assignments, etc.</p>
    </div>
  );
};

export default Home;