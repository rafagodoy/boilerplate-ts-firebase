import { Router } from 'express';
import { expressRouter } from '../adapters/express-routes.adapter';
import { 
  makeCreateFinancialProductController,
} from '../factories/api/create-financial-product.factory';

export default (router: Router): void => {
  router.post('/financial-products', expressRouter(makeCreateFinancialProductController()));
};