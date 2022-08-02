import fetch from "node-fetch";
import { config } from "../../config/default";
import { ThirdSourceData, ThirdSourceErrorData } from "../types/types";

export async function fetchThirdSourceForecast(
  lat: string, lon: string
): Promise<ThirdSourceData | ThirdSourceErrorData | null> {

  const url = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${lat}&lon=${lon}&units=metric&lang=en`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': config.xRapidAPIKey,
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options)
    const data: ThirdSourceData | ThirdSourceErrorData = await response.json();

    return data;
  } catch (error) {
    console.error('error:' + error);

    return null;
  }
}