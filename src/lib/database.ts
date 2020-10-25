import { Pool, PoolConfig, QueryResult } from "pg";
class PostgresDatabase {
   pool: Pool;
   constructor(config: PoolConfig) {
      this.pool = new Pool(config);
   }

   async query(sql: string, values?: unknown[]): Promise<QueryResult<Record<string, unknown>>> {
      return this.pool.query(sql, values);
   }
}
export { PostgresDatabase };
