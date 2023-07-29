import { Database } from '@/adapters/repository/protocols';

export class AuroraDb<T, U> implements Database<T, U> {
  async insert(input: T): Promise<U> {
    console.log(input);
    return null;
  }
}