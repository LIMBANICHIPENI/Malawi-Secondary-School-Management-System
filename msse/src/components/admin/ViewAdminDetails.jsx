import { useLocation, useNavigate, useParams } from 'react-router-dom';

function ViewAdminDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { adminId } = useParams();
  const admin = location.state?.admin;

  // Dummy data
  const adminData = admin || {
    id: adminId,
    name: 'John Banda',
    email: 'john.banda@school.com',
    phone: '+265 999 123 456',
    role: 'Super Admin',
    dateOfBirth: '1985-07-12',
    gender: 'Male',
    address: '789 Admin Road, Lilongwe',
    city: 'Lilongwe',
    employmentDate: '2015-03-01',
    status: 'Active',
    emergencyContact: 'Mary Banda',
    emergencyPhone: '+265 888 456 789'
  };

  if (!adminData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-4">Admin not found</p>
          <button onClick={() => navigate('/admin/admins/list')} className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Back to Admins List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <button onClick={() => navigate('/admin/admins/list')} className="text-blue-600 hover:text-blue-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Admins List
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{adminData.name}</h1>
              <p className="text-gray-600 mt-2">{adminData.role}</p>
            </div>
            <button
              onClick={() => navigate(`/admin/admins/edit/${adminId}`, { state: { admin: adminData } })}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
            >
              Edit Admin
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg shadow-lg p-6 mb-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-indigo-100 text-sm">Role</p>
              <p className="text-3xl font-bold">{adminData.role}</p>
            </div>
            <div>
              <p className="text-indigo-100 text-sm">Status</p>
              <p className="text-3xl font-bold">{adminData.status}</p>
            </div>
            <div>
              <p className="text-indigo-100 text-sm">Since</p>
              <p className="text-3xl font-bold">{new Date(adminData.employmentDate).getFullYear()}</p>
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
                  <p className="font-medium text-gray-900">{adminData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date of Birth</p>
                  <p className="font-medium text-gray-900">{new Date(adminData.dateOfBirth).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Gender</p>
                  <p className="font-medium text-gray-900">{adminData.gender}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Employment Date</p>
                  <p className="font-medium text-gray-900">{new Date(adminData.employmentDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">{adminData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">{adminData.phone}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-medium text-gray-900">{adminData.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">City</p>
                  <p className="font-medium text-gray-900">{adminData.city}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Emergency Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Contact Name</p>
                  <p className="font-medium text-gray-900">{adminData.emergencyContact}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Contact Phone</p>
                  <p className="font-medium text-gray-900">{adminData.emergencyPhone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => navigate(`/admin/admins/edit/${adminId}`, { state: { admin: adminData } })}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg"
                >
                  Edit Information
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg">
                  Reset Password
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Permissions</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Manage Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Generate Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Manage Grades</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAdminDetails;