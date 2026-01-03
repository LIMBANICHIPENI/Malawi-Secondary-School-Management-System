import React from "react";

const StudentsList = () => {
  // Temporary mock data (later from backend)
  const students = [
    {
      studentNumber: "STU-001",
      name: "John Banda",
      className: "Form 3A",
      gender: "Male",
      phone: "0991 234 567",
      email: "john.banda@student.msse.com",
    },
    {
      studentNumber: "STU-002",
      name: "Mary Phiri",
      className: "Form 3A",
      gender: "Female",
      phone: "0888 765 432",
      email: "mary.phiri@student.msse.com",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-5 col-span-1 md:col-span-2 lg:col-span-3">
      <h2 className="text-xl font-semibold mb-4">Students List</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2 text-left">Student No.</th>
              <th className="border px-3 py-2 text-left">Name</th>
              <th className="border px-3 py-2 text-left">Class</th>
              <th className="border px-3 py-2 text-left">Gender</th>
              <th className="border px-3 py-2 text-left">Phone</th>
              <th className="border px-3 py-2 text-left">Email</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.studentNumber} className="hover:bg-gray-50">
                <td className="border px-3 py-2">
                  {student.studentNumber}
                </td>
                <td className="border px-3 py-2">{student.name}</td>
                <td className="border px-3 py-2">{student.className}</td>
                <td className="border px-3 py-2">{student.gender}</td>
                <td className="border px-3 py-2">{student.phone}</td>
                <td className="border px-3 py-2">{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {students.length === 0 && (
          <p className="text-center text-gray-500 py-4">
            No students assigned to this class.
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentsList;
