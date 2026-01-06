import React, { useState } from 'react';

const Assignments = () => {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const [files, setFiles] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAssignments([...assignments, { title, instructions, files: files.map(f => f.name) }]);
    setTitle('');
    setInstructions('');
    setFiles([]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Assignments</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Attach Materials (PDF, PPT, DOC, etc.)</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="mt-1 block w-full"
            accept=".pdf,.ppt,.pptx,.doc,.docx"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Assignment</button>
      </form>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Recent Assignments</h3>
        <ul className="space-y-2">
          {assignments.map((ass, index) => (
            <li key={index} className="border-b pb-2">
              <strong>{ass.title}</strong>: {ass.instructions} | Files: {ass.files.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Assignments;