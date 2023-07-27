import dotenv from 'dotenv';
dotenv.config();

import { AWSLambdaAdapter } from '../../aws-lambda.adapter';
import { 
  makeCreateFinancialProductController,
} from '../../factories/api/create-financial-product.factory';

module.exports.createFinancialProduct = async (event) => {

  const controller = makeCreateFinancialProductController();
  const awsLambda = new AWSLambdaAdapter(controller);

  return awsLambda.start(event);
  
};
