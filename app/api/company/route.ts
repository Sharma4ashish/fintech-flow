export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const cik = searchParams.get("cik");

    if (!cik) {
      return Response.json({ error: "CIK is required" }, { status: 400 });
    }

    const response = await fetch(
      `https://data.sec.gov/api/xbrl/companyfacts/CIK${cik}.json`,
    );

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch from SEC" },
        { status: 500 }
      );
    }

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}