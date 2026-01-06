import React, { useState } from 'react';

const Announcements = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [audience, setAudience] = useState('students');
  const [announcements, setAnnouncements] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnnouncements([...announcements, { title, content, audience }]);
    setTitle('');
    setContent('');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Announcements</h2>
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
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Audience</label>
          <select
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="students">Students</option>
            <option value="parents">Parents</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Announcement</button>
      </form>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Recent Announcements</h3>
        <ul className="space-y-2">
          {announcements.map((ann, index) => (
            <li key={index} className="border-b pb-2">
              <strong>{ann.title}</strong> ({ann.audience}): {ann.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Announcements;