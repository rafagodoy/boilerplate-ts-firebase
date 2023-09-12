import { ArraySchemaResponse, Validator } from '@/adapters/utils/protocols';
import { productNameEnum } from '@/config/enums';

async function checkProductNameField(validator:Validator, productName: string, isRequired: boolean):
Promise<ArraySchemaResponse> {

  const schemaInfos = [];

  if (isRequired) {
    schemaInfos.push(await validator.validateRequiredField('productName', productName));
  }
  schemaInfos.push(await validator.validateString('productName', productName));
  schemaInfos.push(await validator.validateFieldByMatchNames(
    'productName',
    productName,
    productNameEnum,
  ));

  return schemaInfos;
  
}

async function checkInstitutionNameField(
  validator:Validator,
  institutionName: string,
  isRequired: boolean,
): Promise<ArraySchemaResponse> {
  const schemaInfos = [];

  if (isRequired) {
    schemaInfos.push(await validator.validateRequiredField('institutionName', institutionName));
  }
  schemaInfos.push(await validator.validateString('institutionName', institutionName));

  return schemaInfos;
}

async function checkRetainabilityField(
  validator:Validator,
  retainability: string,
  isRequired: boolean,
): Promise<ArraySchemaResponse> {
  const schemaInfos = [];

  if (isRequired) {
    schemaInfos.push(await validator.validateRequiredField('retainability', retainability));
  }
  schemaInfos.push(await validator.validateString('retainability', retainability));

  return schemaInfos;
}

async function checkExpirationDateField(
  validator:Validator,
  expirationDate: string,
  isRequired: boolean,
): Promise<ArraySchemaResponse> {
  const schemaInfos = [];

  if (isRequired) {
    schemaInfos.push(await validator.validateRequiredField('expirationDate', expirationDate));
  }
  schemaInfos.push(await validator.validateString('expirationDate', expirationDate));

  return schemaInfos;
}

async function checkProductRatingField(
  validator:Validator,
  productRating: string,
  isRequired: boolean,
): Promise<ArraySchemaResponse> {
  const schemaInfos = [];

  if (isRequired) {
    schemaInfos.push(await validator.validateRequiredField('productRating', productRating));
  }
  schemaInfos.push(await validator.validateString('productRating', productRating));

  return schemaInfos;
}

async function checkReportUrlField(
  validator:Validator,
  reportUrl: string,
  isRequired: boolean,
): Promise<ArraySchemaResponse> {
  const schemaInfos = [];

  if (isRequired) {
    schemaInfos.push(await validator.validateRequiredField('reportUrl', reportUrl));
  }
  schemaInfos.push(await validator.validateString('reportUrl', reportUrl));

  return schemaInfos;
}

export default {
  checkExpirationDateField,
  checkReportUrlField,
  checkProductNameField,
  checkInstitutionNameField,
  checkRetainabilityField,
  checkProductRatingField,
};