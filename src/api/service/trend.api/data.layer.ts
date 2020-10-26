import { Database, ParseResult, NewTrendsResult, ApplicationTrend, ParserOptions } from "ts";
import { ParsingRepository, TrendRepository } from "../../database";
import { Trend } from "model";

class ParsingApi {
   config: ParserOptions;
   trend: TrendRepository;
   parsing: ParsingRepository;
   constructor(database: Database<null>, config: ParserOptions) {
      this.trend = new TrendRepository(database);
      this.parsing = new ParsingRepository(database);
      this.config = config;
   }

   public async storeParseResult(parsed: ParseResult[]): Promise<NewTrendsResult> {
      // need create new parse with version
      const parsing = await this.parsing.insert(); // create new parsing
      const { id } = parsing;

      const promises = parsed.map(async (item) => {
         const { description, forks, language, order, stars, title } = item;
         const trend = await this.trend.insert({ parse_id: id, description, forks, language, index_order: order, stars, title });
         return this.convertTrend(trend);
      });
      const trends = await Promise.all(promises);

      return { parsing, trends };
   }

   private convertTrend(model: Trend): ApplicationTrend {
      const { description, forks, id, index_order, language, stars, title } = model;
      return { order: index_order, description, forks, id, language, stars, title, url: `${this.config.main}/${title}` };
   }
}

export { ParsingApi };
