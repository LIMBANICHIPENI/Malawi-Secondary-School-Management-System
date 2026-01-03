import React from "react";
import Header from "./Header";
import Sidebar from "./SideBar";
import AnnouncementCard from "./Annoucements";
// Import other cards later
 

const TeacherDashboardMain = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header />

        {/* Dashboard cards */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Announcement card */}
          <AnnouncementCard />

          {/* Placeholders for other cards */}
          {/* <ResourceCard /> */}
          {/* <GradesCard /> */}
          {/* <AssignmentCard /> */}
          {/* <StudentsCard /> */}
          {/* <CollaborationCard /> */}
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboardMain;
