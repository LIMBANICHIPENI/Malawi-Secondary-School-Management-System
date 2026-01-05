import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherDashboard;
