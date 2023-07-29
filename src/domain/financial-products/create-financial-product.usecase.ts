import { FinancialProductsEntity } from './financial-products.entity';

type FinancialProduct = {
  productName: string,
  institutionName: string,
  retainability: string,
  expirationDate: string,
  productRating: string,
  reportUrl: string,
};

export interface CreateFinancialProductsUseCase {
  create(financialProduct: FinancialProduct): Promise<FinancialProductsEntity.all>
}