

export const fetchCompanyData = async (cik: string) => {
  try {
    const res = await fetch(
      `https://data.sec.gov/api/xbrl/companyfacts/${cik}.json`,{
        headers: {
            "User-Agent": "FinancialDataApp (test@example.com)",
        },
      }
    );

    console.log("ressspones",res);
    

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return await res.json();
  } catch (err) {
    throw err;
  }
};