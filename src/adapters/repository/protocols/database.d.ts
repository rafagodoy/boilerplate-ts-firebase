export interface Database<T, U> {
  insert(input: T): Promise<U>,
}