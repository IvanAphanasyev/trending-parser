import { Database } from "ts";
import { Trend } from "model";
class TrendRepository {
   database: Database<Trend>;
   constructor(database: Database<Trend>) {
      this.database = database;
   }

   public async insert(params: Trend): Promise<Trend> {
      const { description, forks, language, parse_id, index_order, stars, title } = params;
      const sql = `INSERT INTO trend(title, description, language, stars, forks, parse_id, index_order)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, title, description, language, stars, forks, index_order`;
      const result = await this.database.query(sql, [title, description, language, stars, forks, parse_id, index_order]);
      const [inserted] = result;
      return inserted;
   }
   public async selectByParse(params: { parse_id: string }): Promise<Trend[]> {
      const { parse_id } = params;
      const sql = `SELECT id, title, description, language, stars, forks, index_order FROM trend
        WHERE parse_id = $1`;
      const result = await this.database.query(sql, [parse_id]);
      return result;
   }
}

export { TrendRepository };
