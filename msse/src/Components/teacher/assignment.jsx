import { useState } from "react";

const Assignments = () => {
  const [assignment, setAssignment] = useState({
    title: "",
    instructions: "",
    dueDate: "",
    submissionType: "file"
  });

  const handleChange = (e) => {
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };

  const submitAssignment = (e) => {
    e.preventDefault();
    console.log(assignment);
    alert("Assignment created");
  };

  return (
    <div>
      <h2>Create Assignment</h2>

      <form onSubmit={submitAssignment} className="form">
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="instructions" placeholder="Instructions" onChange={handleChange} />
        <input type="datetime-local" name="dueDate" onChange={handleChange} />

        <select name="submissionType" onChange={handleChange}>
          <option value="file">File Upload</option>
          <option value="text">Text Entry</option>
        </select>

        <button>Create</button>
      </form>
    </div>
  );
};

export default Assignments;
