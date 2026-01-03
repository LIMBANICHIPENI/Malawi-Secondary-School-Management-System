import React, { useState } from "react";

const AnnouncementCard = () => {
  // Form state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [audience, setAudience] = useState("students");
  const [expiration, setExpiration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just log the announcement data
    const announcementData = {
      title,
      content,
      audience,
      expiration,
    };
    console.log("New Announcement:", announcementData);

    // Reset form
    setTitle("");
    setContent("");
    setAudience("students");
    setExpiration("");
  };

  return (
    <div className="bg-white shadow rounded p-6 flex flex-col">
      <h2 className="font-bold text-xl mb-4">Create Announcement</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Announcement Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        {/* Content */}
        <textarea
          placeholder="Announcement Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={4}
          required
        />

        {/* Audience */}
        <select
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="students">Students</option>
          <option value="parents">Parents</option>
        </select>

        {/* Expiration date */}
        <input
          type="date"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Create Announcement
        </button>
      </form>
    </div>
  );
};

export default AnnouncementCard;
