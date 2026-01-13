import React from 'react';

function AnnouncementCard({ badge, title, text, time }) {
  return (
    <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
      <span className="inline-block bg-blue-900 text-white px-3 py-1 rounded-full text-xs mb-2">
        {badge}
      </span>
      <div className="font-bold text-gray-800 mb-2">{title}</div>
      <div className="text-gray-600 text-sm leading-relaxed mb-2">
        {text}
      </div>
      <div className="text-gray-400 text-xs">{time}</div>
    </div>
  );
}

export default AnnouncementCard;