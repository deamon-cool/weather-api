import { NextFunction, Request, Response } from 'express';
import { isNumber } from '../utils/isNumber';

export function validateThirdSource(
  req: Request, res: Response, next: NextFunction
) {
  const { lat, lon } = req.params;
  
  if (!isNumber(lat) || !isNumber(lon)) {
    return res.status(400).send({ message: 'Inappropriate latitude,longitude properties' });
  }

  if (parseFloat(lat) < -90 || parseFloat(lat) > 90 ||
    parseFloat(lon) < -180 || parseFloat(lon) > 180) {
      return res.status(400).send({ message: 'Inappropriate latitude or/and longitude values' });
  }

  next();
}