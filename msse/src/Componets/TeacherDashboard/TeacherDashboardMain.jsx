import React from "react";
import AnnouncementCard from "./Annoucements";
import Collaboration from "./Collaboration";

const TeacherDashboardMain = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Announcement card */}
      <AnnouncementCard />

      {/* Collaboration */}
      <Collaboration />
    </div>
  );
};

export default TeacherDashboardMain;
