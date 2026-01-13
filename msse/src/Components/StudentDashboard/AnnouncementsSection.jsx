import React from 'react';
import AnnouncementCard from './AnnouncementCard';

function AnnouncementsSection({ announcements }) {
  return (
    <div className="bg-white p-7 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
        <span>📢</span> Announcements
      </h2>
      <div className="space-y-6">
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            badge={announcement.badge}
            title={announcement.title}
            text={announcement.text}
            time={announcement.time}
          />
        ))}
      </div>
      <a 
        href="#" 
        className="block text-center mt-6 p-3 bg-gray-100 text-blue-900 rounded-lg font-medium hover:bg-gray-200 transition-all"
      >
        View All Announcements →
      </a>
    </div>
  );
}

export default AnnouncementsSection;