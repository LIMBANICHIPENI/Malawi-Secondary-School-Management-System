import React from 'react';
import StatCard from './StatCard';

function StatsGrid({ studentData }) {
  const stats = [
    {
      id: 1,
      value: `${studentData.overallAverage}%`,
      label: 'Overall Average',
      icon: '📊',
      bgColor: 'bg-blue-100',
      trend: '↑ 5% from last term',
      trendColor: 'text-green-600'
    },
    {
      id: 2,
      value: `${studentData.attendance}%`,
      label: 'Attendance Rate',
      icon: '✅',
      bgColor: 'bg-green-100',
      trend: '↑ Excellent attendance!',
      trendColor: 'text-green-600'
    },
    {
      id: 3,
      value: studentData.pendingAssignments,
      label: 'Pending Assignments',
      icon: '📝',
      bgColor: 'bg-orange-100',
      trend: '2 due this week',
      trendColor: 'text-gray-600'
    },
    {
      id: 4,
      value: '8/10',
      label: 'Subjects',
      icon: '📚',
      bgColor: 'bg-purple-100',
      trend: 'All subjects enrolled',
      trendColor: 'text-gray-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          value={stat.value}
          label={stat.label}
          icon={stat.icon}
          bgColor={stat.bgColor}
          trend={stat.trend}
          trendColor={stat.trendColor}
        />
      ))}
    </div>
  );
}

export default StatsGrid;