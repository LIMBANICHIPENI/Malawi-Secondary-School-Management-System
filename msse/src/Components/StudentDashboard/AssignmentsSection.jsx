import React from 'react';
import AssignmentCard from './AssignmentCard';

function AssignmentsSection({ assignments }) {
  return (
    <div className="bg-white p-7 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
        <span>📝</span> Pending Assignments
      </h2>
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            subject={assignment.subject}
            title={assignment.title}
            dueDate={assignment.dueDate}
            status={assignment.status}
            urgent={assignment.urgent}
          />
        ))}
      </div>
      <a 
        href="#" 
        className="block text-center mt-6 p-3 bg-gray-100 text-blue-900 rounded-lg font-medium hover:bg-gray-200 transition-all"
      >
        View All Assignments →
      </a>
    </div>
  );
}

export default AssignmentsSection;