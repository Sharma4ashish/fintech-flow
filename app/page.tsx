"use client";

import Card from "@/src/components/Card";
import RevenueChart from "@/src/components/RevenueChart";
import SearchBar from "@/src/components/SearchBar";
import { useAppContext } from "@/src/context/AppContext";


export default function Home() {


  const { setFintecData, error, loading, fintecData } = useAppContext();

  console.log("Hi response", fintecData);

  const getLatest = (arr: any[]) => {
    if (!arr || arr.length === 0) return "N/A";
    return `$${arr[arr.length - 1].value}`;
  };


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

        {/* <h1>Company Name - {fintecData ? fintecData?.companyName : "Search Company To Get the Data"}</h1> */}

        <div className="bg-white border rounded-xl mt-5 p-4 mb-6 shadow-sm">
          <p className="text-sm text-gray-500">Company</p>

          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {fintecData?.companyName || "Search Company To Get the Data"}
          </h1>

          {fintecData && (
            <p className="text-xs text-gray-400 mt-1">
              Financial data from SEC EDGAR API
            </p>
          )}
        </div>




        {fintecData && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">

            <Card title="Liabilities " value={fintecData?.latest?.liabilities?.value}></Card>

            <Card
              title="Revenue"
              value={fintecData?.latest?.revenue?.value}
            />

            <Card
              title="Assets"
              value={(fintecData?.latest?.assets?.value)}
            />
          </div>
        )}

      </div>

      <div className="grid grid-cols md:grid-cols-2 gap-4 mt-6">

        <RevenueChart data={fintecData?.revenue}>  </RevenueChart>
        <RevenueChart data={fintecData?.assets}>  </RevenueChart>

      </div>

    </div>
  );
}