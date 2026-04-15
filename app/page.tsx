"use client";

import { cleanFinTecData } from "@/src/services/cleanFinTecData";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/company?cik=0000320193");
      const data = await res.json();

      console.log(data.entityName);

      const cleanData = cleanFinTecData(data)

      console.log(cleanData);

    };

    fetchData();
  }, []);

  return <div>checking api
  </div>;
}