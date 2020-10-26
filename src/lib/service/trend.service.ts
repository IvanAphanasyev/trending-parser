import { HttpParser, ParsingApi } from "api";
import { NewTrendsResult } from "ts";
class TrendService {
   parser: HttpParser;
   data: ParsingApi;
   constructor(apis: { parser: HttpParser; data: ParsingApi }) {
      const { parser, data } = apis;
      this.parser = parser;
      this.data = data;
   }

   public async newParse(): Promise<NewTrendsResult> {
      const parsed = await this.parser.parse();
      const trends = await this.data.storeParseResult(parsed);

      return trends;
   }
}
export { TrendService };
