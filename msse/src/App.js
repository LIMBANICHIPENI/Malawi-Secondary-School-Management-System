import React from 'react';
import ReactDOM from 'react-dom/client';
import Layouts from './Layouts/Layouts.jsx';  // Import Layouts instead
import './Components/TeacherDashboard/TeacherDashboard.css'; // Keep CSS import if needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layouts />  // Render Layouts
  </React.StrictMode>
);