import { HttpParser, ParsingApi, TrendConverter } from "api";
import { NewTrendsResult } from "ts";
class TrendService {
   parser: HttpParser;
   data: ParsingApi;
   converter: TrendConverter;
   constructor(apis: { parser: HttpParser; data: ParsingApi; converter: TrendConverter }) {
      const { parser, data, converter } = apis;
      this.parser = parser;
      this.data = data;
      this.converter = converter;
   }

   public async newParse(): Promise<NewTrendsResult> {
      const parsed = await this.parser.parse();
      const { parsing, trends } = await this.data.storeParseResult(parsed);

      const converted = trends.map((trend) => this.converter.convert(trend));
      return { parsing, trends: converted };
   }
}
export { TrendService };
