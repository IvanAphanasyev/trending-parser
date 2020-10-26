import { Database, ConfigOptions } from "ts";

import { HttpParser, ParsingApi, TrendConverter } from "./service";

class Api {
   parser: HttpParser;
   data: ParsingApi; // idk hot to call it...
   converter: TrendConverter;
   constructor(options: { database: Database<null>; configs: ConfigOptions }) {
      const { configs, database } = options;
      const { parser } = configs;
      this.parser = new HttpParser(parser);
      this.data = new ParsingApi(database, parser);
      this.converter = new TrendConverter(parser);
   }
}
export { Api };
export * from "./service";
