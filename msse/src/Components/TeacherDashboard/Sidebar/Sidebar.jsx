import React from 'react';

const Sidebar = ({ setActivePage, activePage }) => {
  const menuItems = [
    'Home', 'Resources', 'Lessons', 'Assignments', 'StudentsList', 'Grades'  // Excluded Announcements and TeacherCollaboration
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">  {/* Charcoal gray background */}
      <div className="p-6">
        <h2 className="text-xl font-semibold">Menu</h2>
      </div>
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActivePage(item)}
                className={`w-full text-left px-4 py-2 rounded ${
                  activePage === item ? 'bg-gray-700' : 'hover:bg-gray-700'  // Charcoal gray buttons
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;