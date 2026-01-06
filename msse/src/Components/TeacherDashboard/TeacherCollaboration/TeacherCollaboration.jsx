import React, { useState } from 'react';

const TeacherCollaboration = () => {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSend = () => {
    setMessages([...messages, { text: message, files: files.map(f => f.name) }]);
    setMessage('');
    setFiles([]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Teacher Collaboration</h2>
      <div className="bg-white p-6 rounded shadow space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          rows="3"
        />
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="block w-full"
          accept=".pdf,.ppt,.pptx,.doc,.docx"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Messages</h3>
        <ul className="space-y-2">
          {messages.map((msg, index) => (
            <li key={index} className="border-b pb-2">
              {msg.text} | Attachments: {msg.files.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherCollaboration;