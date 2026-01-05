import { Routes, Route } from "react-router-dom";
import layouts from "./layouts/layouts";

/* Teacher Dashboard */
import teacher from "./Components/teacher/teacher";
import home from "./Components/teacher/home";
import lesson from "./Components/teacher/lesson";
import studentsList from "./Components/teacher/students";
import collaboration from "./Components/teacher/collaboration";
import grades from "./Components/teacher/grades";
import assignment from "./Components/teacher/assignment";
import resources from "./Components/teacher/resources";
import header from "./Components/teacher/header";
import sidebar from "./Components/teacher/sidebar";
import annoucements from "./Components/teacher/announcements";

function App() {
  return (
    <Routes>

      {/* Global Layout */}
      <Route element={<layout />}>

        {/* Teacher Dashboard */}
        <Route path="/teacher" element={<teacher />}>
          <Route index element={<home />} />
          <Route path="lesson" element={<lesson />} />
          <Route path="students" element={<students />} />
          <Route path="collaboration" element={<collaboration />} />
          <Route path="grades" element={<grades />} />
          <Route path="assignment" element={<assignment />} />
          <Route path="resources" element={<resources />} />
        </Route>

      </Route>

    </Routes>
  );
}

export default App;
