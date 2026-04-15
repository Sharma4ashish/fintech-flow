"use client";



import { useEffect, useState } from "react";
import { fetchCompanyData } from "../services/api";
import { cleanFinTecData } from "../services/cleanFinTecData";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

export default function SearchBar() {
    const [cik, setCik] = useState("");

    const { setFintecData, fintecData, setLoading, setError } = useAppContext();
    const [buttonLoading, setbuttonLoading] = useState(false)

    const validateCIK = (value: string) => {
        return /^\d{10}$/.test(value);
    };

    useEffect(()=>{

        handleSearch
    }
    ,[])

    const DemoCompanyDataHandler = function(cik:string){

    }

    const handleSearch = async () => {
        try {

            setbuttonLoading(true)
            setLoading(true)


            if (!cik.trim()) {
                toast.error("Please enter a CIK");
                return;
            }

            if (!validateCIK(cik)) {
                toast.error("CIK must be 10 digits");
                return;
            }




            const raw = await fetchCompanyData(cik);
            const clean = cleanFinTecData(raw);

            setFintecData(clean);
        } catch (err) {
            setbuttonLoading(false)
            toast.error("Failed to fetch data, Try Again ");
            setError("Failed to fetch data, Try Again");
        } finally {
            setbuttonLoading(false)
            setLoading(false);
        }
    };

        return (
            <div className="w-full flex flex-col sm:flex-row gap-3">

                <input
                    value={cik}
                    onChange={(e) => setCik(e.target.value)}
                    placeholder="Enter CIK eg ( 0000320193)"
                    className="flex-1 border border-gray-300 p-3 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    text-sm sm:text-base"
                />

                <button
                    onClick={handleSearch}
                    disabled={buttonLoading}
                    className="bg-blue-500 text-white px-5 py-3 rounded-lg 
                    hover:bg-blue-600 transition 
                    disabled:bg-gray-400 disabled:cursor-not-allowed
                    text-sm sm:text-base"
                >
                    {buttonLoading ? "Loading..." : "Search"}
                </button>

              
            </div>
        );
}





    // <div>
    //                 <button
    //                     onClick={() => {
    //                         setCik("0000320193")
    //                         handleSearch()
    //                     }}
    //                     disabled={buttonLoading}
    //                     className="bg-blue-500 text-white px-5 py-3 rounded-lg 
    //                 hover:bg-blue-600 transition 
    //                 disabled:bg-gray-400 disabled:cursor-not-allowed
    //                 text-sm sm:text-base"
    //                 >
    //                     Get Apple Data
    //                 </button>

    //                 <button
    //                     onClick={() => {
    //                         setCik("0001318605")
    //                         handleSearch()
    //                     }}
    //                     disabled={buttonLoading}
    //                     className="bg-blue-500 text-white px-5 py-3 rounded-lg 
    //                 hover:bg-blue-600 transition 
    //                 disabled:bg-gray-400 disabled:cursor-not-allowed
    //                 text-sm sm:text-base"
    //                 >
    //                     Get Tesla Data
    //                 </button>


    //             </div>

  