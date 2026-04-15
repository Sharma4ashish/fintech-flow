"use client";
import { createContext, useContext, useState } from "react";
const AppContext = createContext<any>(null);

export const AppContextProvider = ({ children }: any) => {
  const [fintecData, setFintecData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <AppContext.Provider
      value={{ fintecData, setFintecData, loading, setLoading, error, setError }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);