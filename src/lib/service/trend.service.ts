import { HttpParser } from "api";
class TrendService {
   parser: HttpParser;
   constructor(apis: { parser: HttpParser }) {
      const { parser } = apis;
      this.parser = parser;
   }

   public async newParse(): Promise<void> {
      const parsed = await this.parser.parse();
      console.log(parsed);
   }
}
export { TrendService };
