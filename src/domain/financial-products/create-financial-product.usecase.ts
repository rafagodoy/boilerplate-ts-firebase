import { FinancialProductsEntity } from './financial-products.entity';
import { FinancialProduct } from './financial-product-types';

export interface CreateFinancialProductsUseCase {
  insert(financialProduct: FinancialProduct): Promise<FinancialProductsEntity.all>
}