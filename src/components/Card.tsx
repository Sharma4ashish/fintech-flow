"use client";

export default function Card ({ title, value }:any) {
 

  return (
    <div className="bg-white rounded-xl border p-4 shadow-sm hover:shadow-md transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-semibold text-gray-900 mt-1">
        ${value}
      </h2>
    </div>
  );
}