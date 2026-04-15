"use client";

import { useState } from "react";
import { fetchCompanyData } from "../services/api";
import { cleanFinTecData } from "../services/cleanFinTecData";
import { useAppContext } from "../context/AppContext";

export default function SearchBar() {
  const [cik, setCik] = useState("");

  const { setFintecData, fintecData } = useAppContext();

  const handleSearch = async () => {
    try {
      

      const raw = await fetchCompanyData(cik);
      const clean = cleanFinTecData(raw);

      setFintecData(clean);
    } catch (err) {
    } finally {
    }
  };

  return (
    <div className="flex gap-2">
      <input
        value={cik}
        onChange={(e) => setCik(e.target.value)}
        placeholder="Enter CIK No - 0000320193"
        className="flex-1 border p-2 rounded"
      />
      <button 
      onClick={handleSearch}
      className="bg-blue-500 text-white px-4 rounded">
        Search
      </button>
    </div>
  );
}