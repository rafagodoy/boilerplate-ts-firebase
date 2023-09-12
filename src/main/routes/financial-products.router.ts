import { Router } from 'express';
import { expressRouter } from '../adapters/express-routes.adapter';
import { 
  makeCreateFinancialProductController,
  makeGetFinancialProductController,
} from '../factories/api';

export default (router: Router): void => {
  router.post('/financial-products', expressRouter(makeCreateFinancialProductController()));
  router.get('/financial-products', expressRouter(makeGetFinancialProductController()));
};