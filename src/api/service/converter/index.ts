import { Trend } from "model";
import { ApplicationTrend, ParserOptions } from "ts";

class TrendConverter {
   url: string;
   constructor(config: ParserOptions) {
      const { main } = config;
      this.url = main;
   }

   public convert(model: Trend): ApplicationTrend {
      const { description, forks, id, index_order, language, stars, title } = model;
      const url = `${this.url}/${title}`;
      return { id, title, order: index_order, description, language, stars, forks, url };
   }
}
export { TrendConverter };
