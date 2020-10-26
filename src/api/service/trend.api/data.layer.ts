import { Database, ParseResult, ParserOptions } from "ts";
import { ParsingRepository, TrendRepository } from "../../database";
import { Trend, Parsing } from "model";

class ParsingApi {
   config: ParserOptions;
   trend: TrendRepository;
   parsing: ParsingRepository;
   constructor(database: Database<null>, config: ParserOptions) {
      this.trend = new TrendRepository(database);
      this.parsing = new ParsingRepository(database);
      this.config = config;
   }

   public async storeParseResult(parsed: ParseResult[]): Promise<{ parsing: Parsing; trends: Trend[] }> {
      // need create new parse with version
      const parsing = await this.parsing.insert(); // create new parsing
      const { id } = parsing;

      const promises = parsed.map(async (item) => {
         const { description, forks, language, order, stars, title } = item;
         const trend = await this.trend.insert({ parse_id: id, description, forks, language, index_order: order, stars, title });
         return trend;
      });
      const trends = await Promise.all(promises);

      return { parsing, trends };
   }

   public async getTrends(verion: number): Promise<{ parsing: Parsing; trends: Trend[] }> {
      const parsing = await this.getParse(verion);

      const { id } = parsing;
      const trends = await this.trend.selectByParse({ parse_id: id });

      return { parsing, trends };
   }
   private async getParse(verion: number): Promise<Parsing> {
      const byVersion = await this.parsing.selectByVersion(verion);
      if (!byVersion) {
         return this.parsing.selectLastVersion();
      }
      return byVersion;
   }
}

export { ParsingApi };
