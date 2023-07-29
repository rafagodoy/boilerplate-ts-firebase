import { Firebase } from '@/infra/databases/firebase';
import { CreateFinancialProductRepository } from '@/adapters/repository';
import { FinancialProduct } from '@/adapters/repository/protocols';
import { 
  CreateFinancialProductController,
} from '@/presentation/controllers/api/create-financial-product-controller';
import {
  FinancialProductsEntity,
} from '@/domain/financial-products';

const database = new Firebase<FinancialProduct, FinancialProductsEntity.all>();
const createFinancialProductRepository = new CreateFinancialProductRepository(database);
const createFinancialProductController = new CreateFinancialProductController(
  createFinancialProductRepository,
);

export function makeCreateFinancialProductController() {
  return createFinancialProductController;
}