import { 
  CreateFinancialProductsUseCase,
  FinancialProductsEntity,
} from '@/domain/financial-products';

import { FinancialProduct } from './protocols/create-financial-product';

import { Database } from './protocols/database';

export class CreateFinancialProductRepository implements CreateFinancialProductsUseCase {

  constructor(
    private readonly database: Database<FinancialProduct, FinancialProductsEntity.all>,
  ) {}

  async create(financialProduct: FinancialProduct): Promise<FinancialProductsEntity.all> {
    return this.database.insert(financialProduct);
  }
}