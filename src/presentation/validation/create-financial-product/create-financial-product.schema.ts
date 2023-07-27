import { FinancialProductsEntity } from '@/domain/financial-products';

export interface CreateFinancialProductSchema {
  productName: FinancialProductsEntity.productName;
  institutionName: FinancialProductsEntity.institutionName;
  retainability: FinancialProductsEntity.retainability;
  expirationDate: FinancialProductsEntity.expirationDate;
  productRating: FinancialProductsEntity.productRating;
  reportUrl: FinancialProductsEntity.reportUrl;
}