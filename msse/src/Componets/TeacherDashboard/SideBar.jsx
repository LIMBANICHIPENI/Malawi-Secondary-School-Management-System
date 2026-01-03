import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Grades", path: "/grades" },
    { name: "Assignments", path: "/assignments" },
    { name: "Resources", path: "/resources" },
    { name: "Students", path: "/students" },
  ];

  return (
    <aside className="w-64 bg-indigo-600 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">Teacher Dashboard</h2>
      <ul>
        {links.map((link) => (
          <li key={link.name} className="mb-4">
            <Link
              to={link.path}
              className="block hover:bg-indigo-700 p-2 rounded cursor-pointer transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
