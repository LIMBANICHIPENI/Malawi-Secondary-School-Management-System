import React from 'react';

function Sidebar({ menuItems, activeMenu, setActiveMenu }) {
  return (
    <aside className="w-64 bg-white rounded-xl p-6 shadow-md h-fit sticky top-5">
      {menuItems.map((item) => (
        <div
          key={item.id}
          onClick={() => setActiveMenu(item.name)}
          className={`flex items-center gap-4 p-3 mb-2 rounded-lg cursor-pointer transition-all ${
            activeMenu === item.name
              ? 'bg-blue-900 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <span className="text-xl w-6">{item.icon}</span>
          <span>{item.name}</span>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;