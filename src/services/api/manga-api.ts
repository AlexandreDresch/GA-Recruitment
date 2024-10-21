import axios from "axios";

const KEY = import.meta.env.VITE_API_KEY!;

export async function fetchMangaData(title: string): Promise<any> {
  const baseUrl = KEY;

  try {
    const response = await axios.get(`${baseUrl}/manga`, {
      params: { q: title, limit: 1 },
    });
    return response.data.data[0];
  } catch (error) {
    console.error("Error fetching manga data:", error);
    throw error;
  }
}
