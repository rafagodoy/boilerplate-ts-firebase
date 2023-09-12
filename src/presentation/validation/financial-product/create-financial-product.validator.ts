import { CreateFinancialProductSchema } from './create-financial-product.schema';
import { HttpRequestValidator, ValidatorResponse } from '@/presentation/protocols';
import { Validator } from '@/adapters/utils/protocols';
import helper from './financial-product.helper';

export class CreateFinancialProductValidator implements HttpRequestValidator {

  constructor(
    private readonly validator: Validator,
  ) {}

  private async checkSchema(data: CreateFinancialProductSchema) {

    const productName = await helper.checkProductNameField(this.validator, data?.productName, true);
    const reportUrl = await helper.checkReportUrlField(this.validator, data?.reportUrl, true);
    const retainability = await helper.checkRetainabilityField(
      this.validator, data?.retainability, true,
    );
    const productRating = await helper.checkProductRatingField(
      this.validator, data?.productRating, true,
    );
    const expirationDate = await helper.checkExpirationDateField(
      this.validator, data?.expirationDate, true,
    );
    const institutionName = await helper.checkInstitutionNameField(
      this.validator, data?.institutionName, true,
    );

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
      .reduce((errors, key) => {
        const errorItems = schema[key].filter(item => item.hasError);
        if (errorItems.length > 0) {
          errors[key] = errorItems;
        }
        return errors;
      }, {} as ValidatorResponse);

    return Object.keys(schemaErrorsFound).length === 0 ? null : schemaErrorsFound;
  }
}