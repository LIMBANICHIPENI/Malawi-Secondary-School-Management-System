import React from 'react';

function AssignmentCard({ subject, title, dueDate, status, urgent }) {
  return (
    <div className="border-l-4 border-blue-500 bg-gray-50 p-5 rounded-r-lg hover:bg-gray-100 hover:translate-x-1 transition-all">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-blue-900">{subject}</span>
        <span className={`px-3 py-1 rounded-full text-xs ${
          urgent 
            ? 'bg-red-100 text-red-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {dueDate}
        </span>
      </div>
      <div className="text-gray-700 mb-2">{title}</div>
      <div className="text-sm text-gray-500">Status: {status}</div>
    </div>
  );
}

export default AssignmentCard;