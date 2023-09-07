import { CreateFinancialProductSchema } from './create-financial-product.schema';
import { HttpRequestValidator, ValidatorResponse } from '@/presentation/protocols';
import { Validator, SchemaResponse } from '@/adapters/utils/protocols';

export class CreateFinancialProductValidator implements HttpRequestValidator {

  constructor(
    private readonly validator: Validator,
  ) {}

  private schemaError(message: string) {
    return {
      hasError: true,
      message,
    };
  }

  private schemaValidated() {
    return {
      hasError: false,
      message: null,
    };
  }

  private async checkProductNameField(productName: string): Promise<SchemaResponse> {
    if (!productName) {
      return this.schemaError('productName field is required');
    }

    const { hasError, message } = await this.validator.validateString('productName', productName);

    return hasError ? this.schemaError(message) : this.schemaValidated();
  }

  private async checkInstitutionNameField(institutionName: string): Promise<SchemaResponse> {
    if (!institutionName) {
      return this.schemaError('institutionName field is required');
    }

    const { hasError, message } = await this.validator.validateString(
      'institutionName',
      institutionName,
    );

    return hasError ? this.schemaError(message) : this.schemaValidated();
  }

  private async checkRetainabilityField(retainability: string): Promise<SchemaResponse> {
    if (!retainability) {
      return this.schemaError('retainability field is required');
    }

    const { hasError, message } = await this.validator.validateString(
      'retainability',
      retainability,
    );

    return hasError ? this.schemaError(message) : this.schemaValidated();
  }

  private async checkExpirationDateField(expirationDate: string): Promise<SchemaResponse> {
    if (!expirationDate) {
      return this.schemaError('expirationDate field is required');
    }

    const { hasError, message } = await this.validator.validateString(
      'expirationDate',
      expirationDate,
    );

    return hasError ? this.schemaError(message) : this.schemaValidated();
  }

  private async checkProductRatingField(productRating: string): Promise<SchemaResponse> {
    if (!productRating) {
      return this.schemaError('productRating field is required');
    }

    const { hasError, message } = await this.validator.validateString(
      'productRating',
      productRating,
    );

    return hasError ? this.schemaError(message) : this.schemaValidated();
  }

  private async checkReportUrlField(reportUrl: string): Promise<SchemaResponse> {
    if (!reportUrl) {
      return this.schemaError('reportUrl field is required');
    }

    const { hasError, message } = await this.validator.validateString(
      'reportUrl',
      reportUrl,
    );

    return hasError ? this.schemaError(message) : this.schemaValidated();
  }

  private async checkSchema(data: CreateFinancialProductSchema) {
    const productName = await this.checkProductNameField(data?.productName);
    const institutionName = await this.checkInstitutionNameField(data?.institutionName);
    const retainability = await this.checkRetainabilityField(data?.retainability);
    const expirationDate = await this.checkExpirationDateField(data?.expirationDate);
    const productRating = await this.checkProductRatingField(data?.productRating);
    const reportUrl = await this.checkReportUrlField(data?.reportUrl);

    return {
      productName,
      institutionName,
      retainability,
      expirationDate,
      productRating,
      reportUrl,
    };
  }

  async validate(data: CreateFinancialProductSchema): Promise<ValidatorResponse | null> {
    const schema = await this.checkSchema(data);
  
    const schemaErrorsFound: ValidatorResponse = Object.keys(schema)
      .filter(key => schema[key].hasError)
      .reduce((errors, key) => {
        errors[key] = schema[key];
        return errors;
      }, {} as ValidatorResponse);

    return Object.keys(schemaErrorsFound).length === 0 ? null : schemaErrorsFound;
  }
}