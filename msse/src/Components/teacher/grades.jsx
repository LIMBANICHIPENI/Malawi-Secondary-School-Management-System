import { useState } from "react";

const grades = () => {
  const [marks, setMarks] = useState({ test: 0, exam: 0 });

  const total = Number(marks.test) + Number(marks.exam);

  return (
    <div>
      <h2>Grades</h2>

      <input
        type="number"
        placeholder="Test Marks"
        onChange={(e) => setMarks({ ...marks, test: e.target.value })}
      />

      <input
        type="number"
        placeholder="Exam Marks"
        onChange={(e) => setMarks({ ...marks, exam: e.target.value })}
      />

      <p><strong>Total:</strong> {total}</p>

      <button>Save Grade</button>
    </div>
  );
};

export default grades;
