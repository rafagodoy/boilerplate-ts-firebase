import dotenv from 'dotenv';
dotenv.config();

import { AWSLambdaAdapter } from '../../aws-lambda.adapter';
import { makeGetStockPriceController } from '../../factories/api/get-stock-price.factory';
import { makeGetStockNameController } from '../../factories/api/get-stock-name.factory';

module.exports.getStockPrice = async (event) => {

  const controller = makeGetStockPriceController();
  const awsLambda = new AWSLambdaAdapter(controller);

  return awsLambda.start(event);
  
};

module.exports.getStockName = async (event) => {

  const controller = makeGetStockNameController();
  const awsLambda = new AWSLambdaAdapter(controller);

  return awsLambda.start(event);
  
};