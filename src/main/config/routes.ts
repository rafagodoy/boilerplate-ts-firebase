import { Express, Router } from 'express';

import financialRoutes from '../routes/financial-products.router';

export default (app: Express): void => {

  const router = Router();

  app.use('/v1/api', router);

  financialRoutes(router);
};