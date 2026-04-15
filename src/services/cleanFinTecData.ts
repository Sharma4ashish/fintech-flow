export const cleanFinTecData = (data: any) => {
  try {

    console.log(data);
    
    const facts = data?.facts?.["us-gaap"];
    const companyName = data?.entityName;
    const revenue = data?.facts?.["us-gaap"]?.ContractWithCustomerLiabilityRevenueRecognized?.units?.USD
    const assets = data?.facts?.["us-gaap"]?.Assets?.units?.USD
    const liabilities = data?.facts?.["us-gaap"]?.Liabilities?.units?.USD

    return {
      facts,
      companyName,
      revenue,
      liabilities,
      assets  
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};