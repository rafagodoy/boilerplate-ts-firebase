import { Firestore } from '@/infra/databases/firestore';
import { GetFinancialProductRepository } from '@/adapters/repository';
import { FinancialProduct } from '@/adapters/repository/protocols';
import { 
  GetFinancialProductController,
} from '@/presentation/controllers/api/get-financial-product-controller';
import {
  FinancialProductsEntity,
} from '@/domain/financial-products';
import { SchemaValidator } from '@/infra/libs/schema-validator';
import { 
  GetFinancialProductValidator,
} from '@/presentation/validation/financial-product/get-financial-product.validator';
import { 
  BaseController,
} from '@/presentation/controllers/api/base-controller';

const schemaValidator = new SchemaValidator();
const getFinancialProductValidator = new GetFinancialProductValidator(schemaValidator);
const database = new Firestore<FinancialProduct, FinancialProductsEntity.all>();
const getFinancialProductRepository = new GetFinancialProductRepository(database);
const getFinancialProductController = new GetFinancialProductController(
  getFinancialProductRepository,
);
const createBaseController = new BaseController(
  getFinancialProductController,
  getFinancialProductValidator,
);

export function makeGetFinancialProductController() {
  return createBaseController;
}