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

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
          
    const { body } = httpRequest;

    const schemaErrors = await this.requestValidator.validate(body);

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