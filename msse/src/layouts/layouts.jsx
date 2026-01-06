import React, { useState } from 'react';
import Header from '../Components/TeacherDashboard/Header/Header.jsx';
import Sidebar from '../Components/TeacherDashboard/Sidebar/Sidebar.jsx';
import Home from '../Components/TeacherDashboard/Home/Home.jsx';
import Announcements from '../Components/TeacherDashboard/Announcements/Announcements.jsx';
import Assignments from '../Components/TeacherDashboard/Assignments/Assignments.jsx';
import Resources from '../Components/TeacherDashboard/Resources/Resources.jsx';
import TeacherCollaboration from '../Components/TeacherDashboard/TeacherCollaboration/TeacherCollaboration.jsx';
import StudentsList from '../Components/TeacherDashboard/StudentsList/StudentsList.jsx';
import Lessons from '../Components/TeacherDashboard/Lessons/Lessons.jsx';
import Grades from '../Components/TeacherDashboard/Grades/Grades.jsx';

const Layouts = () => {
  const [activePage, setActivePage] = useState('Home'); // Default to Home (front view)

  const renderPage = () => {
    switch (activePage) {
      case 'Home': return <Home />;
      case 'Assignments': return <Assignments />;
      case 'Resources': return <Resources />;
      case 'StudentsList': return <StudentsList />;
      case 'Lessons': return <Lessons />;
      case 'Grades': return <Grades />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setActivePage={setActivePage} activePage={activePage} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default Layouts;