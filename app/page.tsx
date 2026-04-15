"use client";

import Card from "@/src/components/Card";
import SearchBar from "@/src/components/SearchBar";
import { useAppContext } from "@/src/context/AppContext";
import { cleanFinTecData } from "@/src/services/cleanFinTecData";
import { useEffect } from "react";

export default function Home() {


  const { setFintecData ,error,loading, fintecData} = useAppContext();

  console.log("Hi response",fintecData);
  

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Finance Flow
        </h1>

        <div className="bg-white p-4 rounded-xl shadow">
          <SearchBar />
        </div>

        {loading && (
          <p className="text-center mt-6 text-gray-500">
            Loading data...
          </p>
        )}

        {fintecData && <h1>Company Name - {fintecData?.companyName}</h1>}

        

        

        {fintecData && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">

            <Card title="hiii " value="Valueee">
              
            </Card>

          </div>
        )}

      </div>
    </div>
  );
}