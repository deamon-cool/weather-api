import express from 'express';
import { config } from '../config/default';
import { routes } from './routes';

if (config.xRapidAPIKey === '') {
  console.log('You need to provide your "xRapidAPIKey" in ./build/config/default.js file.');

  process.exit();
}

const app = express();
app.use(express.json());

app.listen(config.port, () => {
  console.log(`Server is running at: ${config.host}:${config.port}`);

  routes(app);
});