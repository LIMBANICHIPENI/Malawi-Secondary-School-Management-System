import { useLocation, useNavigate, useParams } from 'react-router-dom';

function ViewTeacherDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { teacherId } = useParams();
  const teacher = location.state?.teacher;

  // Dummy data - replace with API call
  const teacherData = teacher || {
    id: teacherId,
    name: 'Alice Mbewe',
    email: 'alice.mbewe@school.com',
    phone: '+265 999 111 222',
    subject: 'Mathematics',
    secondarySubject: 'Physics',
    qualification: "Bachelor's in Mathematics Education",
    experience: '8',
    dateOfBirth: '1988-03-20',
    gender: 'Female',
    address: '456 Teacher Avenue, Blantyre',
    city: 'Blantyre',
    employmentDate: '2016-01-15',
    salary: '350000',
    status: 'Active',
    emergencyContact: 'John Mbewe',
    emergencyPhone: '+265 888 222 333'
  };

  if (!teacherData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-4">Teacher not found</p>
          <button
            onClick={() => navigate('/admin/teachers/list')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Back to Teachers List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/admin/teachers/list')}
            className="text-blue-600 hover:text-blue-800 mb-4 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Teachers List
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{teacherData.name}</h1>
              <p className="text-gray-600 mt-2">{teacherData.subject} Teacher</p>
            </div>
            <button
              onClick={() => navigate(`/admin/teachers/edit/${teacherId}`, { state: { teacher: teacherData } })}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Edit Teacher
            </button>
          </div>
        </div>

        {/* Status Summary */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg p-6 mb-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-green-100 text-sm">Primary Subject</p>
              <p className="text-3xl font-bold">{teacherData.subject}</p>
            </div>
            <div>
              <p className="text-green-100 text-sm">Experience</p>
              <p className="text-3xl font-bold">{teacherData.experience} Years</p>
            </div>
            <div>
              <p className="text-green-100 text-sm">Status</p>
              <p className="text-3xl font-bold">{teacherData.status}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="font-medium text-gray-900">{teacherData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date of Birth</p>
                  <p className="font-medium text-gray-900">{new Date(teacherData.dateOfBirth).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Gender</p>
                  <p className="font-medium text-gray-900">{teacherData.gender}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Employment Date</p>
                  <p className="font-medium text-gray-900">{new Date(teacherData.employmentDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">{teacherData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">{teacherData.phone}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-medium text-gray-900">{teacherData.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">City</p>
                  <p className="font-medium text-gray-900">{teacherData.city}</p>
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Professional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Primary Subject</p>
                  <p className="font-medium text-gray-900">{teacherData.subject}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Secondary Subject</p>
                  <p className="font-medium text-gray-900">{teacherData.secondarySubject || 'N/A'}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Highest Qualification</p>
                  <p className="font-medium text-gray-900">{teacherData.qualification}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Years of Experience</p>
                  <p className="font-medium text-gray-900">{teacherData.experience} years</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monthly Salary</p>
                  <p className="font-medium text-gray-900">MWK {parseInt(teacherData.salary).toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Emergency Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Contact Name</p>
                  <p className="font-medium text-gray-900">{teacherData.emergencyContact}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Contact Phone</p>
                  <p className="font-medium text-gray-900">{teacherData.emergencyPhone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => navigate(`/admin/teachers/edit/${teacherId}`, { state: { teacher: teacherData } })}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Information
                </button>
                <button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Schedule
                </button>
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  View Classes
                </button>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistics</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Classes Taught</span>
                    <span className="font-semibold text-gray-900">4</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Students</span>
                    <span className="font-semibold text-gray-900">120</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Attendance</span>
                    <span className="font-semibold text-gray-900">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Status</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Employment</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">{teacherData.status}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Contract</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Permanent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTeacherDetails;