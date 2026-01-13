import React from "react"

function StatCard({ value, label, icon, bgColor, trend, trendColor }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-3xl font-bold text-blue-900 mb-1">
            {value}
          </div>
          <div className="text-gray-600 text-sm">
            {label}
          </div>
        </div>
        <div className={`${bgColor} w-14 h-14 rounded-xl flex items-center justify-center text-2xl`}>
          {icon}
        </div>
      </div>
      <div className={`text-sm ${trendColor}`}>
        {trend}
      </div>
    </div>
  );
}

export default StatCard;