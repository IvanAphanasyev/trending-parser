import { Pool, PoolConfig, QueryResult } from "pg";

import { Database } from "ts";
class PostgresDatabase<T = any> implements Database<T> {
   pool: Pool;
   constructor(config: PoolConfig) {
      this.pool = new Pool(config);
   }

   async query(sql: string, values?: any[]): Promise<T[]> {
      const queryResult = await this.pool.query(sql, values);
      const { rows } = queryResult;
      return rows;
   }
}
export { PostgresDatabase };
