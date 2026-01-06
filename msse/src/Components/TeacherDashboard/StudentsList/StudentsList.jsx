import React from 'react';

const StudentsList = () => {
  const students = [
    { id: 1, name: 'John Doe', number: '12345', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', number: '67890', email: 'jane@example.com' },
    // Add more as needed
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Students List</h2>
      <div className="bg-white p-6 rounded shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Student Number</th>
              <th className="px-4 py-2 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.number}</td>
                <td className="px-4 py-2">{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsList;