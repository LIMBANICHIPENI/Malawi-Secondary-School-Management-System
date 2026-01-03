// import { useNavigate } from 'react-router-dom';

// function AdminDashboard() {
//   const navigate = useNavigate();

//   const forms = [
//     { id: 1, name: 'Form 1', students: 45, color: 'bg-blue-500' },
//     { id: 2, name: 'Form 2', students: 42, color: 'bg-green-500' },
//     { id: 3, name: 'Form 3', students: 38, color: 'bg-purple-500' },
//     { id: 4, name: 'Form 4', students: 40, color: 'bg-orange-500' }
//   ];

//   const handleCardClick = (formId) => {
//     navigate(`/admin/form/${formId}/students`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {forms.map((form) => (
//             <div
//               key={form.id}
//               onClick={() => handleCardClick(form.id)}
//               className={`${form.color} rounded-lg shadow-lg p-8 text-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
//             >
//               <div className="flex flex-col items-center justify-center">
//                 <h2 className="text-3xl font-bold mb-4">{form.name}</h2>
//                 <div className="text-6xl font-bold mb-2">{form.students}</div>
//                 <p className="text-lg opacity-90">Students</p>
//               </div>
              
//               <div className="mt-6 pt-4 border-t border-white border-opacity-30">
//                 <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg py-2 px-4 transition-all duration-200">
//                   View Students
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="bg-blue-50 p-4 rounded-lg">
//               <p className="text-gray-600 text-sm">Total Students</p>
//               <p className="text-3xl font-bold text-blue-600">165</p>
//             </div>
//             <div className="bg-green-50 p-4 rounded-lg">
//               <p className="text-gray-600 text-sm">Total Teachers</p>
//               <p className="text-3xl font-bold text-green-600">24</p>
//             </div>
//             <div className="bg-purple-50 p-4 rounded-lg">
//               <p className="text-gray-600 text-sm">Total Subjects</p>
//               <p className="text-3xl font-bold text-purple-600">12</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;










import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  // School Administration Stats
  const adminStats = {
    totalAdmins: 5,
    totalTeachers: 24,
    totalStudents: 165,
    totalStaff: 12
  };

  // Finance Information
  const financeInfo = {
    totalRevenue: 'MWK 45,000,000',
    totalExpenses: 'MWK 32,000,000',
    pendingFees: 'MWK 8,500,000',
    balance: 'MWK 13,000,000'
  };

  // Form data
  const forms = [
    { id: 1, name: 'Form 1', students: 45, color: 'bg-blue-500' },
    { id: 2, name: 'Form 2', students: 42, color: 'bg-green-500' },
    { id: 3, name: 'Form 3', students: 38, color: 'bg-purple-500' },
    { id: 4, name: 'Form 4', students: 40, color: 'bg-orange-500' }
  ];

  const handleCardClick = (formId) => {
    navigate(`/admin/form/${formId}/students`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
        
        {/* Administration Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Administration Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Admins</p>
                  <p className="text-3xl font-bold text-indigo-600">{adminStats.totalAdmins}</p>
                </div>
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <button
                onClick={() => navigate('/admin/admins/list')}
                className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
              >
                View Admins →
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Teachers</p>
                  <p className="text-3xl font-bold text-green-600">{adminStats.totalTeachers}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <button
                onClick={() => navigate('/admin/teachers/list')}
                className="mt-4 text-green-600 hover:text-green-800 text-sm font-medium"
              >
                View Teachers →
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Students</p>
                  <p className="text-3xl font-bold text-blue-600">{adminStats.totalStudents}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View by Class →
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Support Staff</p>
                  <p className="text-3xl font-bold text-purple-600">{adminStats.totalStaff}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <button
              onClick={() => navigate('/admin/staff/list')}
                className="mt-4 text-purple-600 hover:text-purple-800 text-sm font-medium"
              >
                View Staff →
              </button>
            </div>
          </div>
        </div>

        {/* Finance Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Finance Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <p className="text-gray-600 text-sm mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-green-600">{financeInfo.totalRevenue}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
              <p className="text-gray-600 text-sm mb-1">Total Expenses</p>
              <p className="text-2xl font-bold text-red-600">{financeInfo.totalExpenses}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
              <p className="text-gray-600 text-sm mb-1">Pending Fees</p>
              <p className="text-2xl font-bold text-yellow-600">{financeInfo.pendingFees}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <p className="text-gray-600 text-sm mb-1">Current Balance</p>
              <p className="text-2xl font-bold text-blue-600">{financeInfo.balance}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => navigate('/admin/admins/add')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Admin
            </button>
            <button
              onClick={() => navigate('/admin/teachers/add')}
              className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Teacher
            </button>
            <button
              onClick={() => navigate('/admin/student/add')}
              className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Student
            </button>
            <button

              onClick={() => navigate('/admin/reports/generate')}
              className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Generate Report
            </button>
          </div>
        </div>

        {/* Student Distribution by Form */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Student Distribution by Form</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forms.map((form) => (
              <div
                key={form.id}
                onClick={() => handleCardClick(form.id)}
                className={`${form.color} rounded-lg shadow-lg p-8 text-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-3xl font-bold mb-4">{form.name}</h2>
                  <div className="text-6xl font-bold mb-2">{form.students}</div>
                  <p className="text-lg opacity-90">Students</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white border-opacity-30">
                  <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg py-2 px-4 transition-all duration-200">
                    View Students
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;