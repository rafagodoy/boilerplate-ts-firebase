import { HttpController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { Request, Response } from 'express';

export const expressRouter = (controller: HttpController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      pathParams: req.path,
      queryStringParams: req.query,
    };

    const httpResponse: HttpResponse = await controller.handle(httpRequest);

    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};