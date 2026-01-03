import React, { useState } from "react";

const Grades = () => {
  const [grades, setGrades] = useState([
    {
      studentNumber: "STU-001",
      name: "John Banda",
      assignment: 75,
      test: 68,
      exam: 80,
      override: "",
      comment: "",
    },
    {
      studentNumber: "STU-002",
      name: "Mary Phiri",
      assignment: 85,
      test: 78,
      exam: 90,
      override: "",
      comment: "",
    },
  ]);

  const handleGradeChange = (index, field, value) => {
    const newGrades = [...grades];
    newGrades[index][field] = value;
    setGrades(newGrades);
  };

  const calculateTotal = (grade) => {
    const assignment = parseFloat(grade.assignment) || 0;
    const test = parseFloat(grade.test) || 0;
    const exam = parseFloat(grade.exam) || 0;
    const override = parseFloat(grade.override) || 0;
    return override || (assignment * 0.2 + test * 0.3 + exam * 0.5);
  };

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">Grades Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Student Number</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Assignment</th>
              <th className="px-4 py-2 text-left">Test</th>
              <th className="px-4 py-2 text-left">Exam</th>
              <th className="px-4 py-2 text-left">Override</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Comment</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={grade.studentNumber} className="border-t">
                <td className="px-4 py-2">{grade.studentNumber}</td>
                <td className="px-4 py-2">{grade.name}</td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={grade.assignment}
                    onChange={(e) => handleGradeChange(index, 'assignment', e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={grade.test}
                    onChange={(e) => handleGradeChange(index, 'test', e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={grade.exam}
                    onChange={(e) => handleGradeChange(index, 'exam', e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={grade.override}
                    onChange={(e) => handleGradeChange(index, 'override', e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="px-4 py-2 font-semibold">{calculateTotal(grade).toFixed(2)}</td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    value={grade.comment}
                    onChange={(e) => handleGradeChange(index, 'comment', e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
