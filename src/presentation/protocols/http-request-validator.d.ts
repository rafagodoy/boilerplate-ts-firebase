export type ValidatorResponse = {
  hasError: boolean,
  message: string | null
};

export interface HttpRequestValidator {
  validate(data: unknown): Promise<ValidatorResponse | null>
}