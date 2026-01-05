import { Outlet } from "react-router-dom";
import sidebar from "./sidebar";
import "./TeacherDashboard.css";

const teacher = () => {
  return (
    <div className="dashboard-container">
      <sidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default teacher;
