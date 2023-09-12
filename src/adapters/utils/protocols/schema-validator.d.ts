export type SchemaResponse = {
  hasError: boolean,
  message: string | null
};

export type ArraySchemaResponse = Array<{
  hasError: boolean,
  message: string | null
}>;

export interface Validator {
  validateStringByRegex(fieldName:string, data: string, criteria?: RegExp): SchemaResponse,
  validateEmail(fieldName: string, email: string): Promise<SchemaResponse>,
  validateStringMinLength(fieldName: string, data: string, limit: number): Promise<SchemaResponse>,
  validateStringMaxLength(fieldName: string, data: string, limit: number): Promise<SchemaResponse>,
  validateNumberMinLength(fieldName: string, data: number, limit: number): Promise<SchemaResponse>,
  validateNumberMaxLength(fieldName: string, data: number, limit: number): Promise<SchemaResponse>,
  validateNumberLessThan(fieldName: string, data: number, limit: number): Promise<SchemaResponse>,
  validateNumberMoreThan(fieldName: string, data: number, limit: number): Promise<SchemaResponse>,
  validateNegativeNumbers(fieldName: string, data: number): Promise<SchemaResponse>,
  validatePositiveNumbers(fieldName: string, data: number): Promise<SchemaResponse>,
  validateIntegerNumbers(fieldName: string, data: number): Promise<SchemaResponse>,
  validateBoolean(fieldName: string, data: boolean): Promise<SchemaResponse>,
  validateUrl(fieldName: string, url: string): Promise<SchemaResponse>,
  validateString(fieldName: string, data: string): Promise<SchemaResponse>,
  validateNumber(fieldName: string, data: number): Promise<SchemaResponse>,
  validateRequiredField(fieldName: string, data:unknown): Promise<SchemaResponse>,
  validateFieldByMatchNames(fieldName: string, data:unknown, objectToMatch: object):
  Promise<SchemaResponse>,
}