import { Database } from '@/adapters/repository/protocols';

export class Firestore<T, U> implements Database<T, U> {
  async insert(input: T): Promise<U> {
    console.log(input);
    return {
      id: 222,
      productName: 'test',
      institutionName: 'test',
      retainability: 'test',
      expirationDate: 'test',
      productRating: 'test',
      reportUrl: 'test',
      createdAt: 'test',
      updatedAt: 'test',
    } as U;
  }
}