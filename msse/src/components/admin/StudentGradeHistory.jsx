import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function StudentGradeHistory() {
  const navigate = useNavigate();
  const { studentId } = useParams();

  // Dummy student data
  const student = {
    id: studentId,
    name: 'John Doe',
    regNumber: 'REG001',
    formClass: '2',
    average: 85
  };

  // Dummy grades data - replace with API call
  const [grades] = useState([
    { id: 1, subject: 'Mathematics', term: '1', year: 2025, type: 'Final Exam', score: 88, maxScore: 100, percentage: 88, date: '2025-04-15' },
    { id: 2, subject: 'English', term: '1', year: 2025, type: 'Final Exam', score: 82, maxScore: 100, percentage: 82, date: '2025-04-16' },
    { id: 3, subject: 'Science', term: '1', year: 2025, type: 'Final Exam', score: 90, maxScore: 100, percentage: 90, date: '2025-04-17' },
    { id: 4, subject: 'History', term: '1', year: 2025, type: 'Final Exam', score: 78, maxScore: 100, percentage: 78, date: '2025-04-18' },
    { id: 5, subject: 'Geography', term: '1', year: 2025, type: 'Final Exam', score: 85, maxScore: 100, percentage: 85, date: '2025-04-19' },
    { id: 6, subject: 'Mathematics', term: '2', year: 2025, type: 'Midterm', score: 92, maxScore: 100, percentage: 92, date: '2025-08-10' },
    { id: 7, subject: 'English', term: '2', year: 2025, type: 'Midterm', score: 80, maxScore: 100, percentage: 80, date: '2025-08-11' },
    { id: 8, subject: 'Science', term: '2', year: 2025, type: 'Midterm', score: 88, maxScore: 100, percentage: 88, date: '2025-08-12' },
  ]);

  const [selectedTerm, setSelectedTerm] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const getGradeColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600 bg-green-50';
    if (percentage >= 60) return 'text-blue-600 bg-blue-50';
    if (percentage >= 40) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getPerformanceLabel = (percentage) => {
    if (percentage >= 80) return 'Excellent';
    if (percentage >= 60) return 'Good';
    if (percentage >= 40) return 'Average';
    return 'Below Average';
  };

  const filteredGrades = grades.filter(grade => {
    if (selectedTerm !== 'all' && grade.term !== selectedTerm) return false;
    if (selectedYear !== 'all' && grade.year.toString() !== selectedYear) return false;
    return true;
  });

  const calculateAverage = () => {
    if (filteredGrades.length === 0) return 0;
    const sum = filteredGrades.reduce((acc, grade) => acc + grade.percentage, 0);
    return (sum / filteredGrades.length).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
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
              <h1 className="text-4xl font-bold text-gray-800">Grade History</h1>
              <p className="text-gray-600 mt-2">{student.name} • {student.regNumber} • Form {student.formClass}</p>
            </div>
            <button
              onClick={() => navigate(`/admin/student/${studentId}/add-grade`, { state: { student } })}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Grade
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 text-sm">Total Grades</p>
            <p className="text-3xl font-bold text-gray-800">{filteredGrades.length}</p>
          </div>
          <div className="bg-green-50 rounded-lg shadow-md p-6">
            <p className="text-gray-600 text-sm">Overall Average</p>
            <p className="text-3xl font-bold text-green-600">{calculateAverage()}%</p>
          </div>
          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <p className="text-gray-600 text-sm">Highest Score</p>
            <p className="text-3xl font-bold text-blue-600">
              {filteredGrades.length > 0 ? Math.max(...filteredGrades.map(g => g.percentage)) : 0}%
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg shadow-md p-6">
            <p className="text-gray-600 text-sm">Subjects</p>
            <p className="text-3xl font-bold text-purple-600">
              {new Set(filteredGrades.map(g => g.subject)).size}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Term</label>
              <select
                value={selectedTerm}
                onChange={(e) => setSelectedTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Terms</option>
                <option value="1">Term 1</option>
                <option value="2">Term 2</option>
                <option value="3">Term 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Years</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedTerm('all');
                  setSelectedYear('all');
                }}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-lg transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Grades Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Term
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Assessment Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Percentage
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredGrades.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="px-6 py-12 text-center text-gray-500">
                      No grades found for the selected filters
                    </td>
                  </tr>
                ) : (
                  filteredGrades.map((grade) => (
                    <tr key={grade.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">{grade.subject}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">Term {grade.term}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{grade.year}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-700">{grade.type}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-semibold text-gray-900">
                          {grade.score}/{grade.maxScore}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getGradeColor(grade.percentage)}`}>
                          {grade.percentage}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">
                          {getPerformanceLabel(grade.percentage)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-700">
                          {new Date(grade.date).toLocaleDateString()}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance Summary by Subject */}
        {filteredGrades.length > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance by Subject</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from(new Set(filteredGrades.map(g => g.subject))).map(subject => {
                const subjectGrades = filteredGrades.filter(g => g.subject === subject);
                const avg = (subjectGrades.reduce((acc, g) => acc + g.percentage, 0) / subjectGrades.length).toFixed(1);
                return (
                  <div key={subject} className="border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600">{subject}</p>
                    <p className="text-2xl font-bold text-gray-900">{avg}%</p>
                    <p className="text-xs text-gray-500">{subjectGrades.length} assessment(s)</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentGradeHistory;