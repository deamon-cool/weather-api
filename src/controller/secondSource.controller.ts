import { Request, Response } from 'express';
import { fetchSecondSourceForecast } from '../service/secondSource.service';
import { SecondSourceData, SecondSourceErrorData } from '../types/types';
import { convertLocation } from '../utils/convertLocation';

export interface CustomData {
  addressFound: string;
  weatherForecast: SecondSourceData['list'];
}

export async function secondSourceController(req: Request, res: Response): Promise<Response> {
  const { location } = req.params;

  const convertedLocation = convertLocation(location);

  const data = await fetchSecondSourceForecast(convertedLocation);

  if (!data) {
    return res.status(502).send({ message: 'Could not get weather forecast' });
  }

  if ((data as SecondSourceErrorData).cod !== '200') {
    return res.status(502).send({ message: 'Check and provide valid location' });
  }

  const customData: CustomData = {
    addressFound: (data as SecondSourceData).city.name,
    weatherForecast: [...(data as SecondSourceData).list]
  };

  return res.status(200).send({
    data: customData
  });
}