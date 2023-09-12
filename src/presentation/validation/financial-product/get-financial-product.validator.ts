import { CreateFinancialProductSchema } from './create-financial-product.schema';
import { HttpRequestValidator, ValidatorResponse } from '@/presentation/protocols';
import { Validator } from '@/adapters/utils/protocols';
import helper from './financial-product.helper';

export class GetFinancialProductValidator implements HttpRequestValidator {

  constructor(
    private readonly validator: Validator,
  ) {}

  private async checkSchema(data: CreateFinancialProductSchema) {

    const productName = data?.productName ? await helper.checkProductNameField(
      this.validator, data.productName, false,
    ) : [];

    const retainability = data?.retainability ? await helper.checkRetainabilityField(
      this.validator, data.retainability, false,
    ) : [];

    const expirationDate = data?.expirationDate ? await helper.checkExpirationDateField(
      this.validator, data.expirationDate, false,
    ) : [];

    const institutionName = data?.institutionName ? await helper.checkInstitutionNameField(
      this.validator, data.institutionName, false,
    ) : [];

    return {
      productName,
      institutionName,
      retainability,
      expirationDate,
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