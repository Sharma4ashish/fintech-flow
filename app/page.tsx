"use client";

import SearchBar from "@/src/components/SearchBar";
import { useAppContext } from "@/src/context/AppContext";
import { cleanFinTecData } from "@/src/services/cleanFinTecData";
import { useEffect } from "react";

export default function Home() {


  const { setFintecData , fintecData} = useAppContext();

  console.log("Hi response",fintecData);
  

  return <div>checking api
    <SearchBar/>

        
  </div>;
}