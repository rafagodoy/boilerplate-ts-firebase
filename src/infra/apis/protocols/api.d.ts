type APIError = {
  name: string
  code: string
  message: string
  stack?: string
};

export type APIRequest = {
  url: string,
  headers?: any,
  body?: any,
  pathParams?: string,
  queryParams?: Array<any>,
  authToken?: string,
  apiSecret?: string,
  method?: string,
};

export type APIResponse = {
  status: number
  body?: unknown
  error?: APIError
};

export interface API {
  post(settings: APIRequest): Promise<APIResponse>,
  get(settings: APIRequest): Promise<APIResponse>
}