import React, { useState } from 'react';

const Resources = () => {
  const [files, setFiles] = useState([]);
  const [resources, setResources] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = () => {
    setResources([...resources, ...files.map(f => f.name)]);
    setFiles([]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Resources</h2>
      <div className="bg-white p-6 rounded shadow space-y-4">
        <label className="block text-sm font-medium text-gray-700">Upload Learning Resources (PDF, PPT, DOC, etc.)</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="block w-full"
          accept=".pdf,.ppt,.pptx,.doc,.docx"
        />
        <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Upload</button>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Uploaded Resources</h3>
        <ul className="space-y-2">
          {resources.map((res, index) => (
            <li key={index} className="border-b pb-2">{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;