import { 
  HttpRequest,
  HttpResponse,
  HttpController,
  HttpRequestValidator,
} from '@/presentation/protocols';

export class BaseController implements HttpController  {

  constructor(
    private readonly controller: HttpController,
    private readonly requestValidator: HttpRequestValidator,
  ) {}

  getDataFromRequest(httpRequest: HttpRequest): object {

    let body = null;
    let queryStringParams = null;

    if (Object.keys(httpRequest.queryStringParams).length !== 0) {
      queryStringParams = httpRequest.queryStringParams;
    }

    if (Object.keys(httpRequest.body).length !== 0) {
      body = httpRequest.body;
    }

    return body || queryStringParams;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
          
    const data = this.getDataFromRequest(httpRequest);

    const schemaErrors = await this.requestValidator.validate(data);

    if (schemaErrors) {
      return {
        statusCode: 400,
        body: schemaErrors,
      };
    }

    const controllerResponse = await this.controller.handle(httpRequest);
    return controllerResponse;
  }
}