import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminsList() {
  const navigate = useNavigate();

  // Dummy data - replace with API call
  const [admins] = useState([
    { id: 1, name: 'John Banda', email: 'john.banda@school.com', role: 'Super Admin', phone: '+265 999 123 456', status: 'Active' },
    { id: 2, name: 'Mary Phiri', email: 'mary.phiri@school.com', role: 'Admin', phone: '+265 888 234 567', status: 'Active' },
    { id: 3, name: 'Peter Mwale', email: 'peter.mwale@school.com', role: 'Admin', phone: '+265 999 345 678', status: 'Active' },
    { id: 4, name: 'Grace Tembo', email: 'grace.tembo@school.com', role: 'Admin', phone: '+265 888 456 789', status: 'Inactive' },
    { id: 5, name: 'James Chirwa', email: 'james.chirwa@school.com', role: 'Admin', phone: '+265 999 567 890', status: 'Active' },
  ]);

  const getStatusColor = (status) => {
    return status === 'Active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  };

  const handleEdit = (admin) => {
    navigate(`/admin/admins/edit/${admin.id}`, { state: { admin } });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="text-blue-600 hover:text-blue-800 mb-2 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboard
            </button>
            <h1 className="text-4xl font-bold text-gray-800">System Administrators</h1>
            <p className="text-gray-600 mt-2">Manage administrator accounts and permissions</p>
          </div>
          <button 
            onClick={() => navigate('/admin/admins/add')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New Admin
          </button>
        </div>

        {/* Admins Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {admins.map((admin) => (
                  <tr key={admin.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {admin.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{admin.email}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{admin.phone}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-indigo-600">{admin.role}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(admin.status)}`}>
                        {admin.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEdit(admin)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                          Deactivate
                        </button>
                             <button
                            onClick={() => navigate(`/admin/admins/details/${admin.id}`)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                          View
                        </button>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm">Total Admins</p>
            <p className="text-2xl font-bold text-indigo-600">{admins.length}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm">Active</p>
            <p className="text-2xl font-bold text-green-600">
              {admins.filter(a => a.status === 'Active').length}
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm">Inactive</p>
            <p className="text-2xl font-bold text-red-600">
              {admins.filter(a => a.status === 'Inactive').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminsList;