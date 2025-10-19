import axios from "axios";

export const fetchCatFact = async (): Promise<string> => {
  const apiUrl = process.env.CAT_FACT_API || "https://catfact.ninja/fact";

  try {
    const response = await axios.get(apiUrl, { timeout: 5000 });
    return response.data.fact;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Cat Fact API error:", error.message);
    } else {
      console.error("Unknown error occurred");
    }

    return "Could not fetch a cat fact at this time.";
  }
};
