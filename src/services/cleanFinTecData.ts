export const cleanFinTecData = (data: any) => {
  try {

    console.log(data);
    
    const facts = data?.facts?.["us-gaap"];
    const companyName = data?.entityName;
    // const revenue = data?.facts?.["us-gaap"]?.ContractWithCustomerLiabilityRevenueRecognized?.units?.USD
    // const assets = data?.facts?.["us-gaap"]?.Assets?.units?.USD
    // const liabilities = data?.facts?.["us-gaap"]?.Liabilities?.units?.USD

    const cleanMetric = (metric: any) => {
      if (!metric) return [];

      const values = metric?.units?.USD || [];

      // removeing duplicates values from raw data 
      const unique = Object.values(
        values.reduce((acc: any, item: any) => {
          acc[item.end] = item;
          return acc;
        }, {})
      );

      // sort by date
      const sorted = unique.sort(
        (a: any, b: any) =>
          new Date(a.end).getTime() - new Date(b.end).getTime()
      );

      // format for UI
      return sorted.map((item: any) => ({
        date: item.end,
        value: item.val,
        form: item.form,
        period: item.fp,
      }));
    };

    const latest = (arr: any[]) =>
      arr.length ? arr[arr.length - 1] : null;


    const revenue = cleanMetric(
      facts?.ContractWithCustomerLiabilityRevenueRecognized
    );

    const assets = cleanMetric(facts?.Assets);
    const liabilities = cleanMetric(facts?.Liabilities);


    return {
      companyName,
      revenue,
      liabilities,
      assets ,
      latest: {
        revenue: latest(revenue),
        assets: latest(assets),
        liabilities: latest(liabilities),
      },
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};