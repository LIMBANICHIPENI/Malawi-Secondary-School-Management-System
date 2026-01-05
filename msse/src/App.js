import { Routes, Route } from "react-router-dom";
import layouts from "./layouts/layouts";

/* Teacher Dashboard */
import TeacherDashboard from "./Components/TeacherDashboard/TeacherDashboard";
import Home from "./Components/TeacherDashboard/Home";
import Lessons from "./Components/TeacherDashboard/Lessons";
import StudentsList from "./Components/TeacherDashboard/StudentsList";
import TeacherCollaboration from "./Components/TeacherDashboard/TeacherCollaboration";
import Grades from "./Components/TeacherDashboard/Grades";
import Assignments from "./Components/TeacherDashboard/Assignments";
import Resources from "./Components/TeacherDashboard/Resources";

function App() {
  return (
    <Routes>

      {/* Global Layout */}
      <Route element={<layout />}>

        {/* Teacher Dashboard */}
        <Route path="/teacher" element={<TeacherDashboard />}>
          <Route index element={<Home />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="students" element={<StudentsList />} />
          <Route path="collaboration" element={<TeacherCollaboration />} />
          <Route path="grades" element={<Grades />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="resources" element={<Resources />} />
        </Route>

      </Route>

    </Routes>
  );
}

export default App;
