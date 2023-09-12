import { FinancialProductsEntity } from '@/domain/financial-products';

export interface GetFinancialProductSchema {
  productName: FinancialProductsEntity.productName;
  institutionName: FinancialProductsEntity.institutionName;
  expirationDate: FinancialProductsEntity.expirationDate;
  productRating: FinancialProductsEntity.productRating;
}