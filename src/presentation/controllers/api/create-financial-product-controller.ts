import { HttpRequest, HttpResponse, HttpController } from '@/presentation/protocols';
import { CreateFinancialProductSchema } from '@/presentation/validation/financial-product';
import { 
  CreateFinancialProductsUseCase,
  FinancialProductsEntity,
} from '@/domain/financial-products';

export class CreateFinancialProductController implements HttpController {

  constructor(
    private readonly financialProductsUseCase: CreateFinancialProductsUseCase,
  ) {}

  async getResponse(financialProductInserted: FinancialProductsEntity.all) {
    return {
      statusCode: 200,
      body: {
        financialProductInserted,
      },
    };
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      
      const { body } = httpRequest;

      const financialProduct = body as CreateFinancialProductSchema;
      
      const financialProductInserted = await this.financialProductsUseCase.insert(financialProduct);

      return await this.getResponse(financialProductInserted);

    } catch (err) {
      console.log(err);
      return {
        statusCode: 500,
        body: 'An error ocurred',
      };
    }
  }
}