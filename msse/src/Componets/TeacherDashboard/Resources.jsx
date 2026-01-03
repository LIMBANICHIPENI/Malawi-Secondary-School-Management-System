import React, { useState } from "react";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();

    if (!file) return;

    const newResource = {
      id: Date.now(),
      name: file.name,
      type: file.type || "Unknown",
      size: (file.size / 1024).toFixed(2) + " KB",
      uploadedAt: new Date().toLocaleDateString(),
    };

    setResources([...resources, newResource]);
    setFile(null);
  };

  const handleDelete = (id) => {
    setResources(resources.filter((res) => res.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">
        Learning Resources
      </h2>

      {/* Upload form */}
      <form onSubmit={handleUpload} className="flex flex-col gap-3 mb-5">
        <input
          type="file"
          className="border rounded p-2"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Upload Resource
        </button>
      </form>

      {/* Resource list */}
      {resources.length === 0 ? (
        <p className="text-gray-500 text-sm">
          No learning resources uploaded yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {resources.map((res) => (
            <li
              key={res.id}
              className="flex justify-between items-center p-3 bg-gray-50 rounded"
            >
              <div>
                <p className="font-medium">{res.name}</p>
                <p className="text-sm text-gray-600">
                  {res.type} • {res.size} • Uploaded on {res.uploadedAt}
                </p>
              </div>
              <button
                onClick={() => handleDelete(res.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Resources;
