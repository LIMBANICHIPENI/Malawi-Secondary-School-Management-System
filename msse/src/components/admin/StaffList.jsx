import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StaffList() {
  const navigate = useNavigate();

  // Dummy data - replace with API call
  const [staff] = useState([
    { id: 1, name: 'Joseph Kamanga', email: 'joseph.kamanga@school.com', position: 'Security Guard', phone: '+265 999 111 222', status: 'Active' },
    { id: 2, name: 'Lucy Mkandawire', email: 'lucy.mkandawire@school.com', position: 'Cleaner', phone: '+265 888 333 444', status: 'Active' },
    { id: 3, name: 'Patrick Banda', email: 'patrick.banda@school.com', position: 'Driver', phone: '+265 999 555 666', status: 'Active' },
    { id: 4, name: 'Sarah Chimwemwe', email: 'sarah.chimwemwe@school.com', position: 'Cook', phone: '+265 888 777 888', status: 'Active' },
    { id: 5, name: 'Thomas Mwale', email: 'thomas.mwale@school.com', position: 'Groundskeeper', phone: '+265 999 999 000', status: 'Active' },
    { id: 6, name: 'Agnes Phiri', email: 'agnes.phiri@school.com', position: 'Librarian', phone: '+265 888 111 222', status: 'Active' },
    { id: 7, name: 'Daniel Moyo', email: 'daniel.moyo@school.com', position: 'Maintenance Worker', phone: '+265 999 333 444', status: 'On Leave' },
    { id: 8, name: 'Grace Lungu', email: 'grace.lungu@school.com', position: 'Secretary', phone: '+265 888 555 666', status: 'Active' },
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'On Leave':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleEdit = (staffMember) => {
    navigate(`/admin/staff/edit/${staffMember.id}`, { state: { staff: staffMember } });
  };

  const handleViewDetails = (staffMember) => {
    navigate(`/admin/staff/details/${staffMember.id}`, { state: { staff: staffMember } });
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
            <h1 className="text-4xl font-bold text-gray-800">Support Staff</h1>
            <p className="text-gray-600 mt-2">Manage support staff information and roles</p>
          </div>
          <button 
            onClick={() => navigate('/admin/staff/add')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New Staff Member
          </button>
        </div>

        {/* Staff Table */}
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
                    Position
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
                {staff.map((staffMember) => (
                  <tr key={staffMember.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {staffMember.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{staffMember.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{staffMember.email}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{staffMember.phone}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-purple-600">{staffMember.position}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(staffMember.status)}`}>
                        {staffMember.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleViewDetails(staffMember)}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleEdit(staffMember)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                          Edit
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
            <p className="text-gray-600 text-sm">Total Staff</p>
            <p className="text-2xl font-bold text-purple-600">{staff.length}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm">Active</p>
            <p className="text-2xl font-bold text-green-600">
              {staff.filter(s => s.status === 'Active').length}
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
            <p className="text-gray-600 text-sm">On Leave</p>
            <p className="text-2xl font-bold text-yellow-600">
              {staff.filter(s => s.status === 'On Leave').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffList;