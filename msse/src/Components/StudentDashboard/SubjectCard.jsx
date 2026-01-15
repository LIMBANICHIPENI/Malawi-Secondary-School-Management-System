import React from 'react';

function SubjectCard({ name, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-5 border-2 border-gray-200 rounded-lg text-center cursor-pointer hover:border-blue-900 hover:scale-105 transition-all"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium text-gray-700">{name}</div>
    </div>
  );
}

export default SubjectCard;