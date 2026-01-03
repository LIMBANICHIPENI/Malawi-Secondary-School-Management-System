import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GenerateReport() {
  const navigate = useNavigate();

  const [reportConfig, setReportConfig] = useState({
    reportType: '',
    format: 'pdf',
    dateFrom: '',
    dateTo: '',
    formClass: '',
    subject: '',
    term: '',
    year: new Date().getFullYear(),
    includeGraphs: true,
    includeStatistics: true
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const reportTypes = [
    { value: 'student_performance', label: 'Student Performance Report', description: 'Grades and performance analysis by class' },
    { value: 'attendance', label: 'Attendance Report', description: 'Student and teacher attendance records' },
    { value: 'financial', label: 'Financial Report', description: 'Revenue, expenses, and fee collection' },
    { value: 'teacher_performance', label: 'Teacher Performance Report', description: 'Teaching staff evaluation and metrics' },
    { value: 'enrollment', label: 'Enrollment Report', description: 'Student enrollment statistics and trends' },
    { value: 'grade_distribution', label: 'Grade Distribution Report', description: 'Grade analysis across subjects and forms' },
    { value: 'staff_summary', label: 'Staff Summary Report', description: 'Complete staff roster and information' },
    { value: 'comprehensive', label: 'Comprehensive School Report', description: 'All-inclusive school performance report' }
  ];

  const subjects = [
    'All Subjects', 'Mathematics', 'English', 'Science', 'Biology', 'Chemistry', 'Physics',
    'History', 'Geography', 'Social Studies', 'Computer Science', 'Physical Education', 'Arts', 'Music'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setReportConfig(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    
    if (!reportConfig.reportType) {
      alert('Please select a report type');
      return;
    }

    setIsGenerating(true);

    // Simulate report generation
    setTimeout(() => {
      console.log('Generating report with config:', reportConfig);
      alert(`${reportConfig.reportType.replace('_', ' ').toUpperCase()} generated successfully!`);
      setIsGenerating(false);
      
      // In production, this would download the file or open it in a new tab
      // window.open('/api/reports/download/' + reportId);
    }, 2000);
  };

  const getReportDescription = () => {
    const selected = reportTypes.find(r => r.value === reportConfig.reportType);
    return selected ? selected.description : '';
  };

  const showDateRange = ['student_performance', 'attendance', 'financial', 'enrollment'].includes(reportConfig.reportType);
  const showFormClass = ['student_performance', 'attendance', 'grade_distribution'].includes(reportConfig.reportType);
  const showSubject = ['student_performance', 'grade_distribution', 'teacher_performance'].includes(reportConfig.reportType);
  const showTerm = ['student_performance', 'grade_distribution'].includes(reportConfig.reportType);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="text-blue-600 hover:text-blue-800 mb-4 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
          <h1 className="text-4xl font-bold text-gray-800">Generate Report</h1>
          <p className="text-gray-600 mt-2">Create comprehensive reports for analysis and record-keeping</p>
        </div>

        <form onSubmit={handleGenerate} className="space-y-6">
          {/* Report Type Selection */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Report Type</h2>
            
            <div className="space-y-3">
              {reportTypes.map((report) => (
                <label
                  key={report.value}
                  className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    reportConfig.reportType === report.value
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="reportType"
                    value={report.value}
                    checked={reportConfig.reportType === report.value}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-purple-600 focus:ring-purple-500"
                  />
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">{report.label}</div>
                    <div className="text-sm text-gray-500">{report.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Report Configuration */}
          {reportConfig.reportType && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Report Configuration</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Format Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Report Format <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="format"
                    value={reportConfig.format}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="pdf">PDF Document</option>
                    <option value="excel">Excel Spreadsheet</option>
                    <option value="csv">CSV File</option>
                  </select>
                </div>

                {/* Year Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Academic Year
                  </label>
                  <input
                    type="number"
                    name="year"
                    value={reportConfig.year}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Date Range */}
                {showDateRange && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        From Date
                      </label>
                      <input
                        type="date"
                        name="dateFrom"
                        value={reportConfig.dateFrom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        To Date
                      </label>
                      <input
                        type="date"
                        name="dateTo"
                        value={reportConfig.dateTo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </>
                )}

                {/* Form/Class Selection */}
                {showFormClass && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Form/Class
                    </label>
                    <select
                      name="formClass"
                      value={reportConfig.formClass}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">All Forms</option>
                      <option value="1">Form 1</option>
                      <option value="2">Form 2</option>
                      <option value="3">Form 3</option>
                      <option value="4">Form 4</option>
                    </select>
                  </div>
                )}

                {/* Subject Selection */}
                {showSubject && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={reportConfig.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Term Selection */}
                {showTerm && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Term
                    </label>
                    <select
                      name="term"
                      value={reportConfig.term}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">All Terms</option>
                      <option value="1">Term 1</option>
                      <option value="2">Term 2</option>
                      <option value="3">Term 3</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Additional Options */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Options</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="includeGraphs"
                      checked={reportConfig.includeGraphs}
                      onChange={handleChange}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                    />
                    <span className="ml-3 text-gray-700">Include graphs and charts</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="includeStatistics"
                      checked={reportConfig.includeStatistics}
                      onChange={handleChange}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                    />
                    <span className="ml-3 text-gray-700">Include statistical analysis</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Report Preview/Info */}
          {reportConfig.reportType && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Report Information</h3>
                  <p className="text-sm text-blue-800">{getReportDescription()}</p>
                  <p className="text-sm text-blue-700 mt-2">
                    This report will be generated as a <strong>{reportConfig.format.toUpperCase()}</strong> file
                    {reportConfig.year && ` for the academic year ${reportConfig.year}`}.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isGenerating || !reportConfig.reportType}
              className={`flex-1 px-6 py-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                isGenerating || !reportConfig.reportType
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700 text-white shadow-md'
              }`}
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating Report...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Generate Report
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/dashboard')}
              disabled={isGenerating}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              Cancel
            </button>
          </div>

          {/* Recent Reports Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Reports</h2>
            <div className="space-y-3">
              {[
                { name: 'Student Performance Q4 2025', date: '2026-01-02', type: 'PDF', size: '2.4 MB' },
                { name: 'Financial Summary December', date: '2025-12-31', type: 'Excel', size: '1.8 MB' },
                { name: 'Attendance Report Term 3', date: '2025-12-20', type: 'PDF', size: '3.1 MB' }
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-150">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{report.name}</p>
                      <p className="text-sm text-gray-500">{report.date} • {report.type} • {report.size}</p>
                    </div>
                  </div>
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GenerateReport;