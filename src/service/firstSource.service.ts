import fetch from "node-fetch";
import { config } from '../../config/default';
import { FirstSourceData, FirstSourceErrorData } from "../types/types";

export async function fetchFirstSourceForecast(
  location: string
): Promise<FirstSourceData | FirstSourceErrorData | null> {
  const url = `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${location}&locationMode=single&contentType=json&unitGroup=metric`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': config.xRapidAPIKey,
      'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options)
    const data: FirstSourceData | FirstSourceErrorData = await response.json();

    return data;
  } catch (error) {
    console.error('error:' + error);

    return null;
  }
}