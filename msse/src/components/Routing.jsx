
import { Routes, Route } from 'react-router-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';
import About from './About';
import Home from './HomePage';

// Admin Components
import AdminDashboard from './admin/AdminDashboard';

 import AdminsList from './admin/Adminslist';
import AddAdmin from './admin/AddAdmin';
import EditAdmin from './admin/EditAdmin';
import ViewAdminDetails from './admin/ViewAdminDetails';

// Teacher Components
import TeachersList from './admin/TeacherList';
import AddTeacher from './admin/AddTeacher';
import EditTeacher from './admin/EditTeacher';
import ViewTeacherDetails from './admin/ViewTeacherDetails';

// Staff Components
import StaffList from './admin/StaffList';
import AddStaff from './admin/AddStaff';
import EditStaff from './admin/EditStaff';
import ViewStaffDetails from './admin/ViewStaffDetails';  

// Student Components
import StudentsList from './admin/StudentsList';
import AddStudent from './admin/AddStudent';
import AddGrade from './admin/AddGrade';
import EditStudent from './admin/EditStudent';
import ViewStudentDetails from './admin/ViewStudentDetails';
import StudentGradeHistory from './admin/StudentGradeHistory';


// reports 
import GenerateReport from './admin/GenerateReport';


function Routing() {
  return (
    <div className="min-h-screen flex flex-col pt-[70px]">
      <Header />
      
      <main className="flex-1 transition-all duration-300">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* Admin Dashboard */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Admin Management Routes */}
          <Route path="/admin/admins/list" element={<AdminsList />} />
          <Route path="/admin/admins/add" element={<AddAdmin />} />
          <Route path="/admin/admins/edit/:adminId" element={<EditAdmin />} />
           <Route path="/admin/admins/details/:adminId" element={<ViewAdminDetails />} />
          
          {/* Teacher Management Routes */}
          <Route path="/admin/teachers/list" element={<TeachersList />} />
          <Route path="/admin/teachers/add" element={<AddTeacher />} />
          <Route path="/admin/teachers/edit/:teacherId" element={<EditTeacher />} />
          <Route path="/admin/teachers/details/:teacherId" element={<ViewTeacherDetails />} />
          
          {/* Staff Management Routes */}
          <Route path="/admin/staff/list" element={<StaffList />} />
          <Route path="/admin/staff/add" element={<AddStaff />} />
          <Route path="/admin/staff/edit/:staffId" element={<EditStaff />} />
           <Route path="/admin/staff/details/:staffId" element={<ViewStaffDetails />} />
          
          {/* Student Management Routes */}
          <Route path="/admin/form/:formId/students" element={<StudentsList />} />
          <Route path="/admin/student/add" element={<AddStudent />} />
          <Route path="/admin/student/:studentId/add-grade" element={<AddGrade />} />
          <Route path="/admin/student/:studentId/edit" element={<EditStudent />} />
          <Route path="/admin/student/:studentId/details" element={<ViewStudentDetails />} />
          <Route path="/admin/student/:studentId/grades" element={<StudentGradeHistory />} />

          {/* Reports */}
          <Route path="/admin/reports/generate" element={<GenerateReport />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default Routing;