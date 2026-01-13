import React from 'react';

function Header({ studentData, notifications, onLogout }) {
  const handleNotificationClick = () => {
    alert('You have 5 new notifications:\n\n1. New assignment in Mathematics\n2. Grade updated for English essay\n3. Upcoming parent-teacher meeting\n4. Library book due soon\n5. New announcement from principal');
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🇲🇼</div>
            <div>
              <h1 className="text-xl font-bold">MSSEM Portal</h1>
              <p className="text-sm opacity-90">Malawi Secondary School Education Management</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer" onClick={handleNotificationClick}>
              <span className="text-2xl">🔔</span>
              {notifications > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {notifications}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl">
                👨‍🎓
              </div>
              <div>
                <div className="font-bold">{studentData.name}</div>
                <div className="text-sm opacity-90">{studentData.form} | ID: {studentData.id}</div>
              </div>
            </div>

            <button 
              onClick={onLogout}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-full transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;