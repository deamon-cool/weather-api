***************** Weather Api - based on Node.js 14 (and newer), Express and Typescript ***************** 
This application provides api for weather forecast.
It uses third-party api's from 'rapidapi.com' site using 'xRapidAPIKey' property to access to those api's. 
'xRapidAPIKey' is configurable in ./build/config/default.js folder.

*** Project content ***
* 'build' - built project via tsc
* 'config' - default configuration of app
* 'node_modules' - packages
* 'src' - source folder with files written in typescript with subfolders:
  * 'controller' - request handlers
  * 'middleware' - middlewares for app to i.e. checking input validation
  * 'service' - folder with typescript files that invoke fetch data from other api's
  * 'types' - all global types for app
  * 'utils' - some useful functions
  * 'app.ts' - main application running
  * 'routes.ts' - routes of GET methods that create endpoints
* 'weather-api.postman_collection.json' - tests for endpoints done in Postman enviroment

*** Setup project ***
- how to install app ?
  1) Open folder weather-api
  2) In terminal type in: 
    npm install
  *or
    yarn install
  3) You need to provide your unique 'xRapidAPIKey' in ./build/config/default.js from 'rapidapi.com' website.
  4) Run app
  - how to run app ?
    npm run prod
  *or
    yarn run prod
- how to build app from scratch ?
    npm run build
  *or
    yarn run build
  -how to run app development mode ?
    npm run dev
  *or
    yarn run dev

*** Endpoints description ***
Api's used in application with provided endpoints and custom data responeses:
1) Source 1: Visual Crossing Weather (api link: https://visual-crossing-weather.p.rapidapi.com/forecast)
- Endpoints:
->  /api/weather-forecast-from-first-source/:location
      * 'location' - address, partial address or latitude, longitude location for which to retrieve weather data. 
      You can also use US ZIP Codes. If you choose to pass coords you need to provide them as 'lat,lon' properties in that order i.e. '52.5200,13.4050', where '52.5200' is latitude and '13.4050' is longitude.
      - Info: Latitude (lat) and longitude(lon) are a pair of numbers (coordinates) used to describe a position on the plane of a geographic coordinate system. The numbers are in decimal degrees format and range from -90 to 90 for latitude and -180 to 180 for longitude.
      - Description: It returns json weather forecast data of specified location with metric units for 16 days starting with day when invoking request. If location was unproperly provided then you receive message 
      "Check and provide valid location"
      - If property was passed correctly then endpoint returns:
        {
          data: {
            addressFound
            weatherForecast
        }
          * 'addressFound' - string of found city,
          * 'weatherForecast' - array of objets with weather forecast data
      - otherwise it returns message
- Examples:
  /api/weather-forecast-from-first-source/:Krakow
  /api/weather-forecast-from-first-source/:52.5200,13.4050

2) Source 2: Open Weather Map (api link: https://community-open-weather-map.p.rapidapi.com/forecast)
- Endpoints:
->  /api/weather-forecast-from-second-source/:location
      * 'location' - address or latitude, longitude location for which to retrieve weather data. If you choose to pass coords you need to provide them as 'lat,lon' properties in that order i.e. '52.5200,13.4050', where '52.5200' is latitude and '13.4050' is longitude.
      - Description: It returns json weather forecast data of specified location with metric units for 16 days starting with day when invoking request. If location was unproperly provided then you receive message 
      "Check and provide valid location"
      - If property was passed correctly then endpoint returns: 
        {
          data: {
            addressFound
            weatherForecast
        }
          * 'addressFound' - string of found city,
          * 'weatherForecast' - array of objets with weather forecast data
        - otherwise it returns message
- Examples:
  /api/weather-forecast-from-second-source/:Warszawa
  /api/weather-forecast-from-second-source/:52.5200,13.4050

3) Source 3: Weather By Weatherbit 
- Endpoints:
->  /api/weather-forecast-from-third-source/:lat/:lon
      * 'lat' - latitude
      * 'lon' - longitude
      - Description: It returns json weather forecast data of specified location with metric units for 16 days starting with day when invoking request. If location was unproperly provided then you receive message 
      "Check and provide valid location"
      - If property was passed correctly then endpoint returns: 
        {
          data: {
            addressFound
            weatherForecast
        }
          * 'addressFound' - string of found city,
          * 'weatherForecast' - array of objets with weather forecast data
        - otherwise it returns message
- Examples:
  /api/weather-forecast-from-third-source/:54.1759/:15.5833