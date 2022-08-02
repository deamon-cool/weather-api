interface FirstSourceValue {
  wdir: number;
  uvindex: number;
  datetimeStr: string;
  preciptype: string;
  cin: number;
  cloudcover: number;
  pop: number;
  mint: number;
  datetime: number;
  precip: number;
  solarradiation: number;
  dew: number;
  humidity: number;
  temp: number;
  maxt: number;
  visibility: number;
  wspd: number;
  severerisk: number;
  solarenergy: number;
  heatindex: any;
  snowdepth: number;
  sealevelpressure: number;
  snow: number;
  wgust: number;
  conditions: string;
  windchill: any;
  cape: number;
}

export interface FirstSourceData {
  columns: object;
  remainingCost: number;
  queryCost: number;
  messages: any;
  location: {
    stationContributions: any;
    values: FirstSourceValue[];
    id: string;
    address: string;
    name: string;
    index: number;
    latitude: number;
    longitude: number;
    distance: number;
    time: number;
    tz: string;
    currentConditions: {
      wdir: number;
      temp: number;
      sunrise: string;
      visibility: number;
      wspd: number;
      icon: string;
      stations: string;
      heatindex: number;
      cloudcover: number;
      datetime: string;
      precip: any;
      moonphase: number;
      snowdepth: any;
      sealevelpressure: number;
      dew: number;
      sunset: string;
      humidity: number;
      wgust: any;
      windchill: any;
    },
    alerts: any;
  }
}

export interface FirstSourceErrorData {
  errorCode: number;
  executionTime: number;
  sessionId: string;
  message: any;
}

export interface LocationCoord {
  lat: number;
  lon: number;
};

interface SecondSourceWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface SecondSourceList {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  },
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  },
  pressure: number;
  humidity: number;
  weather: SecondSourceWeather[],
  speed: 4.66,
  deg: 102,
  gust: 5.3,
  clouds: 0,
  pop: 0.24
}

export interface SecondSourceData {
  city: {
    id: number;
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
    population: number;
    timezone: number;
  },
  cod: string;
  message: any;
  cnt: number;
  list: SecondSourceList[]
}

export interface SecondSourceErrorData {
  cod: string;
  message: string;
}

interface ThirdSourceWeather {
  icon: string;
  code: number;
  description: string;
}

interface ThirdSourceInfoData {
  valid_date: string;
  ts: number;
  datetime: string;
  wind_gust_spd: number;
  wind_spd: number;
  wind_dir: number;
  wind_cdir: string;
  wind_cdir_full: string;
  temp: number;
  max_temp: number;
  min_temp: number;
  high_temp: number;
  low_temp: number;
  app_max_temp: number;
  app_min_temp: number;
  pop: number;
  precip: number;
  snow: number;
  snow_depth: number;
  slp: number;
  pres: number;
  dewpt: number;
  rh: number;
  weather: ThirdSourceWeather,
  clouds_low: number;
  clouds_mid: number;
  clouds_hi: number;
  clouds: number;
  vis: number;
  max_dhi: number;
  uv: number;
  moon_phase: number;
  moon_phase_lunation: number;
  moonrise_ts: number;
  moonset_ts: number;
  sunrise_ts: number;
  sunset_ts: number;
}

export interface ThirdSourceData {
  data: ThirdSourceInfoData[];
  city_name: string;
  lon: number;
  timezone: string;
  lat: number;
  country_code: string;
  state_code: string;
}

export interface ThirdSourceErrorData {
  error: string;
}