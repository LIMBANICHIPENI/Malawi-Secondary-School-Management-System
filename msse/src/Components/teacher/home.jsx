const home = () => {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Teacher Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome back! Manage your classes, lessons, and students.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">My Classes</h3>
          <p className="text-3xl font-semibold text-blue-600">3</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Total Students</h3>
          <p className="text-3xl font-semibold text-green-600">120</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-sm text-gray-500">Pending Assignments</h3>
          <p className="text-3xl font-semibold text-red-600">5</p>
        </div>
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Announcements */}
        <div className="bg-white rounded-lg shadow p-5">
          <h2 className="text-lg font-semibold mb-3">
            📢 Announcements
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Staff meeting on Friday at 10:00 AM</li>
            <li>Mid-term exams start next week</li>
            <li>Upload lesson plans before Monday</li>
          </ul>
        </div>

        {/* Teacher Collaboration */}
        <div className="bg-white rounded-lg shadow p-5">
          <h2 className="text-lg font-semibold mb-3">
            🤝 Teacher Collaboration
          </h2>
          <p className="text-gray-600 mb-3">
            Share resources and ideas with fellow teachers.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Open Collaboration
          </button>
        </div>
      </div>
    </div>
  );
};

export default home;
