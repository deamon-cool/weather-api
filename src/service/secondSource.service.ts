import fetch from "node-fetch";
import { config } from '../../config/default';
import { LocationCoord, SecondSourceData, SecondSourceErrorData } from "../types/types";

type FetchSecondSourceReturn = Promise<SecondSourceData | SecondSourceErrorData | null>;

export async function fetchSecondSourceForecast(
  location: string | LocationCoord
): FetchSecondSourceReturn {
  let url = '';

  if (typeof location === 'string') {
    url = `https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${location}&cnt=17&units=metric&mode=JSON`;
  }

  if ((location as LocationCoord).lat !== undefined &&
    (location as LocationCoord).lon !== undefined
  ) {
    url = `https://community-open-weather-map.p.rapidapi.com/forecast/daily?lat=${(location as LocationCoord).lat}&lon=${(location as LocationCoord).lon}&cnt=17&units=metric&mode=JSON`;
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': config.xRapidAPIKey,
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options)
    const data: SecondSourceData | SecondSourceErrorData = await response.json();

    return data;
  } catch (error) {
    console.error('error:' + error);

    return null;
  }
}