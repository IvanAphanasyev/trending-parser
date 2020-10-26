import { Database } from "ts";
import { Parsing } from "model";

class ParsingRepository {
   database: Database<Parsing>;

   constructor(database: Database<Parsing>) {
      this.database = database;
   }
   public async insert(): Promise<Parsing> {
      const sql = `INSERT INTO parsing (version, date)
                   VALUES (DEFAULT, DEFAULT)
                   RETURNING *`;
      const [result] = await this.database.query(sql);

      return result;
   }
   public async selectByVersion(version: number): Promise<Parsing> {
      const sql = `SELECT id, version, date
                   FROM parsing
                   WHERE version = $1`;
      const [result] = await this.database.query(sql, [version]);
      return result;
   }
   public async selectLastVersion(): Promise<Parsing> {
      const sql = `SELECT id, version, date from parsing
                   WHERE version = (select max(version) from parsing)`;
      const [result] = await this.database.query(sql);
      return result;
   }
}
export { ParsingRepository };
