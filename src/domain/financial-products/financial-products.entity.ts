export namespace FinancialProductsEntity {
  export type id = number; 
  export type productName = string;
  export type institutionName = string;
  export type retainability = string;
  export type expirationDate = string;
  export type productRating = string;
  export type reportUrl = string;
  export type all = { 
    id: number,
    productName: string,
    institutionName: string,
    retainability: string,
    expirationDate: string,
    productRating: string,
    reportUrl: string,
    createdAt: string,
    updatedAt: string,
  };
}