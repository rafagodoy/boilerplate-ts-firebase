export type FinancialProduct = {
  productName: string,
  institutionName: string,
  retainability: string,
  expirationDate: string,
  productRating: string,
  reportUrl: string,
};

export type FinancialProductFilter = {
  productName: string,
  institutionName: string,
  expirationDate: string,
  productRating: string,
};