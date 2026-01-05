import { NavLink } from "react-router-dom";
import "./teacher.css";

const sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Teacher</h2>

      <nav>
        <NavLink to="" end>Dashboard</NavLink>
        <NavLink to="resource">Resources</NavLink>
        <NavLink to="grade">Grades</NavLink>
        <NavLink to="student">Students</NavLink>
        <NavLink to="assignment">Assignments</NavLink>
        <NavLink to="lesson">Lessons</NavLink>
      </nav>
    </div>
  );
};

export default sidebar;
