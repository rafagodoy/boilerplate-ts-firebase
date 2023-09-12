import { HttpRequest, HttpResponse, HttpController } from '@/presentation/protocols';
import { GetFinancialProductSchema } from '@/presentation/validation/financial-product';
import { 
  GetFinancialProductsUseCase,
  FinancialProductsEntity,
} from '@/domain/financial-products';

export class GetFinancialProductController implements HttpController {

  constructor(
    private readonly financialProductsUseCase: GetFinancialProductsUseCase,
  ) {}

  async getResponse(financialProducts: Array<FinancialProductsEntity.all>) {
    return {
      statusCode: 200,
      body: financialProducts,
    };
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      
      const { queryStringParams } = httpRequest;

      const financialProductFilter = queryStringParams as GetFinancialProductSchema;
      
      const financialProducts = await this.financialProductsUseCase.getBy(financialProductFilter);

      return await this.getResponse(financialProducts);

    } catch (err) {
      console.log(err);
      return {
        statusCode: 500,
        body: 'An error ocurred',
      };
    }
  }
}