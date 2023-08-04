import { HttpController, HttpResponse } from '@/presentation/protocols';

export class AWSLambdaAdapter {
  
  constructor(
    private readonly controller: HttpController,
  ) {}
  
  async start(event: any): Promise<HttpResponse> {

    const jwtToken = event.headers.authorization.split(' ');
    const token = jwtToken[1];

    const request = {
      token,
      queryStringParams: event.queryStringParameters,
      pathParams: event.pathParameters,
      body: JSON.parse(event.body),
    };

    const response = await this.controller.handle(request);

    return {
      ...response,
      body: JSON.stringify(response.body),
    };
  }

}