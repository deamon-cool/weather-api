import { Express, Response, Request } from 'express';
import { firstSourceController } from './controller/firstSource.controller';
import { secondSourceController } from './controller/secondSource.controller';
import { thirdSourceController } from './controller/thirdSourceController';
import { validateSecondSource } from './middleware/validateSecondSource';
import { validateThirdSource } from './middleware/validateThirdSource';

export function routes(app: Express) {
  app.get('/health', (req: Request, res: Response): Response => res.status(200).send({ message: 'Server is running' }));

  app.get('/api/weather-forecast-from-first-source/:location', firstSourceController);

  app.get('/api/weather-forecast-from-second-source/:location', validateSecondSource, secondSourceController);

  app.get('/api/weather-forecast-from-third-source/:lat/:lon', validateThirdSource, thirdSourceController);

  app.get('*', (req: Request, res: Response): Response => res.status(404).send({
    message: 'Server does not handle that URL request'
  }));
}