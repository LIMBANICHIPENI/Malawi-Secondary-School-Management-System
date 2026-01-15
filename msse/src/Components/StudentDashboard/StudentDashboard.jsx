import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar.jsx';
import WelcomeSection from './WelcomeSection';
import StatsGrid from './StatsGrid';
import SubjectsSection from './SubjectsSection';
import AssignmentsSection from './AssignmentsSection';
import AnnouncementsSection from './AnnouncementsSection';
import { studentData, subjects, assignments, announcements, menuItems } from './mockData'

function StudentDashboard() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [notifications, setNotifications] = useState(5);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Mwadzuka bwanji';
    if (hour < 18) return 'Mwaswera bwanji';
    return 'Mwadzulo';
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      alert('Logging out...');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        studentData={studentData}
        notifications={notifications}
        onLogout={handleLogout}
      />

      <div className="flex max-w-7xl mx-auto gap-5 p-5">
        <Sidebar 
          menuItems={menuItems}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        <main className="flex-1">
          <WelcomeSection 
            greeting={getGreeting()}
            firstName={studentData.firstName}
          />

          <StatsGrid studentData={studentData} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <SubjectsSection subjects={subjects} />
              <AssignmentsSection assignments={assignments} />
            </div>

            <div>
              <AnnouncementsSection announcements={announcements} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentDashboard;