export interface Database<T> {
   query: (sql: string, params?: any[]) => Promise<T[]>;
}
