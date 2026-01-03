import React, { useState } from "react";

const Collaboration = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const [resource, setResource] = useState(null);

  const handlePost = (e) => {
    e.preventDefault();

    if (!message && !resource) return;

    const newPost = {
      id: Date.now(),
      message,
      resourceName: resource ? resource.name : null,
      date: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setMessage("");
    setResource(null);
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 col-span-1 md:col-span-2">
      <h2 className="text-xl font-semibold mb-4">
        Teacher Collaboration & Professional Hub
      </h2>

      {/* Post form */}
      <form onSubmit={handlePost} className="space-y-3 mb-6">
        <textarea
          placeholder="Share ideas, lesson plans, or professional tips..."
          className="w-full border rounded p-2"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <input
          type="file"
          className="border rounded p-2"
          onChange={(e) => setResource(e.target.files[0])}
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Post
        </button>
      </form>

      {/* Posts list */}
      {posts.length === 0 ? (
        <p className="text-gray-500 text-sm">
          No posts yet. Start the conversation!
        </p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border rounded p-4 bg-gray-50">
              <p className="mb-2">{post.message}</p>
              {post.resourceName && (
                <p className="text-sm text-blue-600">
                  Attached: {post.resourceName}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-2">{post.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collaboration;
