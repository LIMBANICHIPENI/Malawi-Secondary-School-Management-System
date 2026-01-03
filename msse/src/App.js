import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Componets/TeacherDashboard/Layout";
import TeacherDashboardMain from "./Componets/TeacherDashboard/TeacherDashboardMain";
import Grades from "./Componets/TeacherDashboard/Grades";
import Assignments from "./Componets/TeacherDashboard/Assignments";
import Resources from "./Componets/TeacherDashboard/Resources";
import StudentsList from "./Componets/TeacherDashboard/StudentsList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><TeacherDashboardMain /></Layout>} />
      <Route path="/grades" element={<Layout><Grades /></Layout>} />
      <Route path="/assignments" element={<Layout><Assignments /></Layout>} />
      <Route path="/resources" element={<Layout><Resources /></Layout>} />
      <Route path="/students" element={<Layout><StudentsList /></Layout>} />
    </Routes>
  );
}

export default App;
