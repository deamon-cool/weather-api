import { Request, Response } from 'express';
import { fetchThirdSourceForecast } from '../service/thirdSource.service';
import { ThirdSourceData, ThirdSourceErrorData } from '../types/types';

interface CustomData {
  addressFound: string;
  weatherForecast: ThirdSourceData['data'];
}

export async function thirdSourceController(req: Request, res: Response): Promise<Response> {
  const { lat, lon } = req.params;

  const data = await fetchThirdSourceForecast(lat, lon);

  if (!data) {
    return res.status(502).send({ message: 'Could not get weather forecast' });
  }

  if ((data as ThirdSourceErrorData).error) {
    return res.status(502).send({ message: 'Check and provide valid location' });
  }

  const customData: CustomData = {
    addressFound: (data as ThirdSourceData).city_name,
    weatherForecast: [...(data as ThirdSourceData).data]
  };

  return res.status(200).send({
    data: customData
  });
}