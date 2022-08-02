import { Request, Response } from 'express';
import { fetchFirstSourceForecast } from '../service/firstSource.service';
import { FirstSourceData, FirstSourceErrorData } from '../types/types';

export interface CustomData {
  addressFound: string;
  weatherForecast: FirstSourceData['location']['values'];
}

export async function firstSourceController(req: Request, res: Response): Promise<Response> {
  const { location } = req.params;
  const data = await fetchFirstSourceForecast(location);

  if (!data) {
    return res.status(502).send({ message: 'Could not get weather forecast' });
  }

  if ((data as FirstSourceErrorData).errorCode || (data as FirstSourceErrorData).errorCode === 999) {
    return res.status(502).send({ message: 'Check and provide valid location' });
  }

  const customData: CustomData = {
    addressFound: (data as FirstSourceData).location.address,
    weatherForecast: [...(data as FirstSourceData).location.values]
  };

  return res.status(200).send({
    data: customData
  });
}