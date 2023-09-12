import { 
  CreateFinancialProductsUseCase,
  FinancialProductsEntity,
  FinancialProduct,
} from '@/domain/financial-products';

import { Database } from './protocols/database';

export class CreateFinancialProductRepository implements CreateFinancialProductsUseCase {

  constructor(
    private readonly database: Database<FinancialProduct, FinancialProductsEntity.all>,
    private readonly entity = 'financial-products',
  ) {}

  async insert(financialProduct: FinancialProduct): Promise<FinancialProductsEntity.all> {
    return this.database.insert(financialProduct, this.entity);
  }
}