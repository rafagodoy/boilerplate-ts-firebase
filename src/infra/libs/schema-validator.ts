import { SchemaResponse, Validator } from '@/adapters/utils/protocols';
import { string, number, Schema } from 'yup';

export class SchemaValidator implements Validator {

  private schema: Schema;

  private errorResponse(message: string): SchemaResponse {
    return {
      hasError: true,
      message,
    };
  }

  private successResponse(): SchemaResponse {
    return {
      hasError: false,
      message: null,
    };
  }

  validateStringByRegex(fieldName:string, data: string, criteria?: RegExp): SchemaResponse {
    const isValid = criteria.test(data);

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(`
      The ${fieldName} is invalid because it doesn't match with ${criteria} criteria`,
    );
  }

  async validateEmail(fieldName: string, email: string): Promise<SchemaResponse> {

    this.schema = string().email();
    const isValid = await this.schema.isValid(email);

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} is invalid because it doesn't match with any email criteria`,
    );
  }

  async validateStringMinLength(fieldName: string, data: string, limit: number):
  Promise<SchemaResponse> {

    this.schema = string().min(limit);
    const isValid = await this.schema.isValid(data);

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} is invalid because the string length is less than ${limit}`,
    );
  }

  async validateStringMaxLength(fieldName: string, data: string, limit: number):
  Promise<SchemaResponse> {
    this.schema = string().max(limit);
    const isValid = await this.schema.isValid(data);

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} is invalid because the string length is more than ${limit}`,
    );
  }

  async validateNumberMinLength(fieldName: string, data: number, limit: number):
  Promise<SchemaResponse> {
    
    this.schema = number().integer().min(limit);
    const isValid = await this.schema.isValid(data);

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} is invalid because the digits length is less than ${limit}`,
    );
  }

  async validateNumberMaxLength(fieldName: string, data: number, limit: number):
  Promise<SchemaResponse> {
    
    this.schema = number().integer().max(limit);
    const isValid = await this.schema.isValid(data);

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} is invalid because the digits length is more than ${limit}`,
    );
  }

  async validateNumberLessThan(fieldName: string, data: number, limit: number):
  Promise<SchemaResponse> {

    this.schema = number().lessThan(limit);
    const isValid = await this.schema.isValid(data);

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} is invalid because the value is less than ${limit}`,
    );
  }

  async validateNumberMoreThan(fieldName: string, data: number, limit: number):
  Promise<SchemaResponse> {

    this.schema = number().moreThan(limit);
    const isValid = await this.schema.isValid(data);

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} is invalid because the value is more than ${limit}`,
    );
  }

  async validateNegativeNumbers(fieldName: string, data: number):
  Promise<SchemaResponse> {

    this.schema = number().negative();
    const isValid = await this.schema.isValid(data);

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} is invalid because the value is positive`,
    );
  }

  async validatePositiveNumbers(fieldName: string, data: number):
  Promise<SchemaResponse> {
    
    this.schema = number().positive();
    const isValid = await this.schema.isValid(data);

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} is invalid because the value is negative`,
    );
  }

  async validateIntegerNumbers(fieldName: string, data: number): Promise<SchemaResponse> {
    
    this.schema = number().integer();
    const isValid = await this.schema.isValid(data);

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} is invalid because the value is not an integer`,
    );
  }

  async validateBoolean(fieldName: string, data: boolean): Promise<SchemaResponse> {
    
    const isValid = (typeof data === 'boolean');

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} is invalid because the value is not a boolean`,
    );
  }

  async validateUrl(fieldName: string, url: string): Promise<SchemaResponse> {
    
    this.schema = string().url();
    const isValid = await this.schema.isValid(url);

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} is invalid because the value is not a valid URL`,
    );
  }

  async validateString(fieldName: string, data: string): Promise<SchemaResponse> {
    
    const isValid = (typeof data === 'string');

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} field is invalid because the value is not a string`,
    );
  }

  async validateNumber(fieldName: string, data: number): Promise<SchemaResponse> {
    
    const isValid = (typeof data === 'number');

    if (isValid) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} is invalid because the value is not a number`,
    );
  }

  async validateRequiredField(fieldName: string, data: unknown): Promise<SchemaResponse> {

    if (data) {
      return this.successResponse();
    }

    return this.errorResponse(
      `The ${fieldName} field is required`,
    );
  }

  async validateFieldByMatchNames(fieldName: string, data: unknown, objectToMatch: object) {
    for (const key in objectToMatch) {
      if (objectToMatch[key] === data) {
        return this.successResponse();
      }
    }
  
    return this.errorResponse(
      `The ${fieldName} is invalid because value doesn't match with
      ${JSON.stringify(objectToMatch)}`,
    );
  }
}