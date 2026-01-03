import React from "react";

const Sidebar = () => {
  const links = [
    "Announcements",
    "Resources",
    "Grades",
    "Assignments",
    "Students",
    "Collaboration",
  ];

  return (
    <aside className="w-64 bg-indigo-600 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">Teacher Dashboard</h2>
      <ul>
        {links.map((link) => (
          <li
            key={link}
            className="mb-4 hover:bg-indigo-700 p-2 rounded cursor-pointer transition"
          >
            {link}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
