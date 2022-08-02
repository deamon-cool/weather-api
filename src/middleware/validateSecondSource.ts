import { NextFunction, Request, Response } from 'express';
import { isNumber } from '../utils/isNumber';

export function validateSecondSource(
  req: Request, res: Response, next: NextFunction
) {
  const { location } = req.params;

  if (location.length <= 1) {
    return res.status(400).send({ message: 'Location property is too short' })
  }

  if (location.search(',') !== -1) {
    if (!isNumber(location.split(',')[0]) || !isNumber(location.split(',')[1])) {
      return res.status(400).send({ message: 'Inappropriate latitude,longitude' })
    }
  }

  next();
}