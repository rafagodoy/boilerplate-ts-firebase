import { Firestore } from '@/infra/databases/firestore';
import { CreateFinancialProductRepository } from '@/adapters/repository';
import { FinancialProduct } from '@/adapters/repository/protocols';
import { 
  CreateFinancialProductController,
} from '@/presentation/controllers/api/create-financial-product-controller';
import {
  FinancialProductsEntity,
} from '@/domain/financial-products';
import { SchemaValidator } from '@/infra/libs/schema-validator';
import { 
  CreateFinancialProductValidator,
} from '@/presentation/validation/create-financial-product';
import { 
  BaseController,
} from '@/presentation/controllers/api/base-controller';

const schemaValidator = new SchemaValidator();
const createFinancialProductValidator = new CreateFinancialProductValidator(schemaValidator);
const database = new Firestore<FinancialProduct, FinancialProductsEntity.all>();
const createFinancialProductRepository = new CreateFinancialProductRepository(database);
const createFinancialProductController = new CreateFinancialProductController(
  createFinancialProductRepository,
);
const createBaseController = new BaseController(
  createFinancialProductController,
  createFinancialProductValidator,
);

export function makeCreateFinancialProductController() {
  return createBaseController;
}