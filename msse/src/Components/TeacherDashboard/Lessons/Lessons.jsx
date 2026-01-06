import React, { useState } from 'react';

const Lessons = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [files, setFiles] = useState([]);
  const [lessons, setLessons] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLessons([...lessons, { title, date, time, files: files.map(f => f.name) }]);
    setTitle('');
    setDate('');
    setTime('');
    setFiles([]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Lessons</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Lesson Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Upload Lesson</button>
      </form>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Uploaded Lessons</h3>
        <ul className="space-y-2">
          {lessons.map((lesson, index) => (
            <li key={index} className="border-b pb-2">
              <strong>{lesson.title}</strong> - {lesson.date} at {lesson.time} | Files: {lesson.files.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lessons;