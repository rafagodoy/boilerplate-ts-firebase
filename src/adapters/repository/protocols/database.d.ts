export interface Database<T, U> {
  insert(data: T, entity: string): Promise<U>,
  select(filter: T, entity: string): Promise<Array<U>>,
}