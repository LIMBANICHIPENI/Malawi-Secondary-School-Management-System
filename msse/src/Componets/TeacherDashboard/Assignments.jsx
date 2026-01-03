import React, { useState } from "react";

const Assignment = () => {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [submissionType, setSubmissionType] = useState("text");
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const assignmentData = {
      title,
      instructions,
      dueDate,
      submissionType,
      files,
    };

    console.log("New Assignment:", assignmentData);

    // Reset form
    setTitle("");
    setInstructions("");
    setDueDate("");
    setSubmissionType("text");
    setFiles([]);
  };

  return (
    <div className="bg-white shadow rounded p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Create Assignment</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Assignment Title */}
        <input
          type="text"
          placeholder="Assignment Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-indigo-500"
          required
        />

        {/* Instructions */}
        <textarea
          placeholder="Assignment Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-indigo-500"
          rows={4}
          required
        />

        {/* Due Date */}
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-indigo-500"
          required
        />

        {/* Submission Type */}
        <div>
          <label className="block font-medium mb-2">Submission Type</label>
          <select
            value={submissionType}
            onChange={(e) => setSubmissionType(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-indigo-500"
          >
            <option value="text">Text Entry</option>
            <option value="file">File Upload</option>
            <option value="both">Text & File</option>
          </select>
        </div>

        {/* Supporting Materials */}
        <div>
          <label className="block font-medium mb-2">
            Supporting Materials
          </label>
          <input
            type="file"
            multiple
            onChange={(e) => setFiles([...e.target.files])}
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-1">
            You can upload PDFs, Word documents, slides, etc.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Create Assignment
        </button>
      </form>
    </div>
  );
};

export default Assignment;
