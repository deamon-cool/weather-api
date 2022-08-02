import { LocationCoord } from "../types/types";

// location can be i.e.: Krakow or 52.5200,13.4050
export function convertLocation(
  location: string
): string | LocationCoord {
  if (location.search(',') !== -1) {
    const coord: LocationCoord = {
      lat: parseFloat(location.split(',')[0]),
      lon: parseFloat(location.split(',')[1])
    };

    return coord;
  }

  return location;
}