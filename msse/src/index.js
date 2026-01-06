import React from 'react';
import ReactDOM from 'react-dom/client';
import Layouts from './Layouts/Layouts.jsx';  // Import Layouts
import './Components/TeacherDashboard/TeacherDashboard.css';  // Keep if needed
import './index.css';  // Ensure this exists for Tailwind

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layouts />  // Render Layouts
  </React.StrictMode>
);