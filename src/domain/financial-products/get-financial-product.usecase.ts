import { FinancialProductsEntity } from './financial-products.entity';
import { FinancialProductFilter  } from './financial-product-types';

export interface GetFinancialProductsUseCase {
  getBy(filter: FinancialProductFilter | null): Promise<Array<FinancialProductsEntity.all>>
}