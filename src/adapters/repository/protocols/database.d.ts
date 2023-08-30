export interface Database<T, U> {
  insert(data: T, entity: string): Promise<U>,
}