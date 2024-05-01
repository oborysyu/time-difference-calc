import { API_KEY, API_URL } from "./config";

//function to get data by city (or place) name
export const getDataByCity = async (city) => {
  const response = await fetch(
    `${API_URL}?apiKey=${API_KEY}&location=${city}`
  );

  return response.json();
};
