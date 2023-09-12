import { 
  GetFinancialProductsUseCase,
  FinancialProductsEntity,
  FinancialProductFilter,
} from '@/domain/financial-products';

import { Database } from './protocols/database';

export class GetFinancialProductRepository implements GetFinancialProductsUseCase {

  constructor(
    private readonly database: Database<FinancialProductFilter, FinancialProductsEntity.all>,
    private readonly entity = 'financial-products',
  ) {}

  async getBy(filter: FinancialProductFilter): Promise<Array<FinancialProductsEntity.all>> {
    return this.database.select(filter, this.entity);
  }
}