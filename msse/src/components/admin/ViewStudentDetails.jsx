import { useLocation, useNavigate, useParams } from 'react-router-dom';

function ViewStudentDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { studentId } = useParams();
  const student = location.state?.student;

  // Dummy data - replace with API call
  const studentData = student || {
    id: studentId,
    name: 'John Doe',
    regNumber: 'REG001',
    email: 'john.doe@school.com',
    phone: '+265 999 123 456',
    formClass: '2',
    dateOfBirth: '2008-05-15',
    gender: 'Male',
    address: '123 Main Street, Blantyre',
    city: 'Blantyre',
    enrollmentDate: '2023-01-10',
    performance: 'Excellent',
    average: 85,
    guardianName: 'Jane Doe',
    guardianPhone: '+265 888 123 456',
    guardianEmail: 'jane.doe@email.com',
    guardianRelation: 'Mother',
    bloodGroup: 'O+',
    allergies: 'None',
    medicalConditions: 'None'
  };

  if (!studentData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-4">Student not found</p>
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Back to Dashboard
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
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-800 mb-4 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{studentData.name}</h1>
              <p className="text-gray-600 mt-2">{studentData.regNumber} • Form {studentData.formClass}</p>
            </div>
            <button
              onClick={() => navigate(`/admin/student/${studentId}/edit`, { state: { student: studentData } })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Edit Student
            </button>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 mb-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-blue-100 text-sm">Performance</p>
              <p className="text-3xl font-bold">{studentData.performance}</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm">Average Score</p>
              <p className="text-3xl font-bold">{studentData.average}%</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm">Enrollment Date</p>
              <p className="text-3xl font-bold">{new Date(studentData.enrollmentDate).toLocaleDateString()}</p>
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
                  <p className="font-medium text-gray-900">{studentData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Registration Number</p>
                  <p className="font-medium text-gray-900">{studentData.regNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date of Birth</p>
                  <p className="font-medium text-gray-900">{new Date(studentData.dateOfBirth).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Gender</p>
                  <p className="font-medium text-gray-900">{studentData.gender}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Form/Class</p>
                  <p className="font-medium text-gray-900">Form {studentData.formClass}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Blood Group</p>
                  <p className="font-medium text-gray-900">{studentData.bloodGroup}</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">{studentData.email || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">{studentData.phone || 'Not provided'}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-medium text-gray-900">{studentData.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">City</p>
                  <p className="font-medium text-gray-900">{studentData.city}</p>
                </div>
              </div>
            </div>

            {/* Guardian Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Guardian Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Guardian Name</p>
                  <p className="font-medium text-gray-900">{studentData.guardianName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Relationship</p>
                  <p className="font-medium text-gray-900">{studentData.guardianRelation}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">{studentData.guardianPhone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">{studentData.guardianEmail}</p>
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Medical Information</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Allergies</p>
                  <p className="font-medium text-gray-900">{studentData.allergies}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Medical Conditions</p>
                  <p className="font-medium text-gray-900">{studentData.medicalConditions}</p>
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
                  onClick={() => navigate(`/admin/student/${studentId}/add-grade`, { state: { student: studentData } })}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Grade
                </button>
                <button
                  onClick={() => navigate(`/admin/student/${studentId}/grades`)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  View Grades
                </button>
                <button
                  onClick={() => navigate(`/admin/student/${studentId}/edit`, { state: { student: studentData } })}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Information
                </button>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Status</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Enrollment</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Fee Status</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">Pending</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Attendance</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStudentDetails;