import { useLocation, useNavigate, useParams } from 'react-router-dom';

function ViewStaffDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { staffId } = useParams();
  const staff = location.state?.staff;

  // Dummy data
  const staffData = staff || {
    id: staffId,
    name: 'Joseph Kamanga',
    email: 'joseph.kamanga@school.com',
    phone: '+265 999 111 222',
    position: 'Security Guard',
    department: 'Security',
    dateOfBirth: '1990-09-18',
    gender: 'Male',
    address: '321 Staff Lane, Blantyre',
    city: 'Blantyre',
    employmentDate: '2018-06-15',
    salary: '180000',
    status: 'Active',
    emergencyContact: 'Grace Kamanga',
    emergencyPhone: '+265 888 999 000'
  };

  if (!staffData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-4">Staff member not found</p>
          <button onClick={() => navigate('/admin/staff/list')} className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Back to Staff List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <button onClick={() => navigate('/admin/staff/list')} className="text-blue-600 hover:text-blue-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Staff List
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{staffData.name}</h1>
              <p className="text-gray-600 mt-2">{staffData.position}</p>
            </div>
            <button
              onClick={() => navigate(`/admin/staff/edit/${staffId}`, { state: { staff: staffData } })}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
            >
              Edit Staff
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 mb-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-purple-100 text-sm">Position</p>
              <p className="text-3xl font-bold">{staffData.position}</p>
            </div>
            <div>
              <p className="text-purple-100 text-sm">Department</p>
              <p className="text-3xl font-bold">{staffData.department}</p>
            </div>
            <div>
              <p className="text-purple-100 text-sm">Status</p>
              <p className="text-3xl font-bold">{staffData.status}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="font-medium text-gray-900">{staffData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date of Birth</p>
                  <p className="font-medium text-gray-900">{new Date(staffData.dateOfBirth).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Gender</p>
                  <p className="font-medium text-gray-900">{staffData.gender}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Employment Date</p>
                  <p className="font-medium text-gray-900">{new Date(staffData.employmentDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">{staffData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">{staffData.phone}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-medium text-gray-900">{staffData.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">City</p>
                  <p className="font-medium text-gray-900">{staffData.city}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Employment Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Position</p>
                  <p className="font-medium text-gray-900">{staffData.position}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Department</p>
                  <p className="font-medium text-gray-900">{staffData.department}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monthly Salary</p>
                  <p className="font-medium text-gray-900">MWK {parseInt(staffData.salary).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <p className="font-medium text-gray-900">{staffData.status}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Emergency Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Contact Name</p>
                  <p className="font-medium text-gray-900">{staffData.emergencyContact}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Contact Phone</p>
                  <p className="font-medium text-gray-900">{staffData.emergencyPhone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => navigate(`/admin/staff/edit/${staffId}`, { state: { staff: staffData } })}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg"
                >
                  Edit Information
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg">
                  View Attendance
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Attendance</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">This Month</span>
                    <span className="font-semibold text-gray-900">22/23 days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm text-gray-600">Last 3 months average</p>
                  <p className="text-2xl font-bold text-purple-600">96%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Status</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Employment</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">{staffData.status}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Contract</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Full-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStaffDetails;