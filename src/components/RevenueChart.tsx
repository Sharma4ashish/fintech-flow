
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RevenueChart({ data }:any) {
  if (!data || data.length === 0) {
    return <p className="text-sm text-gray-500">No chart data available</p>;
  }

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Revenue Trend
      </h2>

      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
            />
            <YAxis
              tick={{ fontSize: 12 }}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}