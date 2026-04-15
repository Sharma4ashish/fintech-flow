"use client";

import { useState } from "react";

export default function SearchBar() {
  const [cik, setCik] = useState("");

  return (
    <div className="flex gap-2">
      <input
        value={cik}
        onChange={(e) => setCik(e.target.value)}
        placeholder="Enter CIK No - 0000320193"
        className="flex-1 border p-2 rounded"
      />
      <button className="bg-blue-500 text-white px-4 rounded">
        Search
      </button>
    </div>
  );
}