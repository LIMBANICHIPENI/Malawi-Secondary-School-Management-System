import { NavLink } from "react-router-dom";
import "./TeacherDashboard.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Teacher</h2>

      <nav>
        <NavLink to="" end>Dashboard</NavLink>
        <NavLink to="resources">Resources</NavLink>
        <NavLink to="grades">Grades</NavLink>
        <NavLink to="students">Students</NavLink>
        <NavLink to="assignments">Assignments</NavLink>
        <NavLink to="lessons">Lessons</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
