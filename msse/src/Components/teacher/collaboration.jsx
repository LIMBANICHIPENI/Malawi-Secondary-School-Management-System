import React, { useState } from "react";

const TeacherCollaboration = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);

  // Handle sending a new message
  const handleSend = (e) => {
    e.preventDefault();
    if (!input && !file) return;

    const newMessage = {
      text: input,
      fileName: file ? file.name : null,
      id: Date.now(),
    };

    setMessages([newMessage, ...messages]);
    setInput("");
    setFile(null);
  };

  return (
    <div className="space-y-6">
      {/* Page title */}
      <h1 className="text-2xl font-bold text-gray-800">
        Teacher Collaboration
      </h1>
      <p className="text-gray-600">
        Interact with fellow teachers. Share messages or upload files.
      </p>

      {/* Message input */}
      <form
        className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2"
        onSubmit={handleSend}
      >
        <input
          type="text"
          placeholder="Write your message..."
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <input
          type="file"
          className="border border-gray-300 rounded p-1 cursor-pointer"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>

      {/* Messages list */}
      <div className="space-y-4 max-h-[400px] overflow-y-auto">
        {messages.length === 0 && (
          <p className="text-gray-500">No messages yet.</p>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-gray-100 p-3 rounded shadow-sm flex flex-col space-y-1"
          >
            {msg.text && <p className="text-gray-800">{msg.text}</p>}
            {msg.fileName && (
              <p className="text-blue-600 font-medium">{msg.fileName}</p>
            )}
            <span className="text-xs text-gray-400">
              {new Date(msg.id).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherCollaboration;
