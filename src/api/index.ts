import { Database, ConfigOptions } from "ts";

import { HttpParser, ParsingApi } from "./service";

class Api {
   parser: HttpParser;
   data: ParsingApi; // idk hot to call it...
   constructor(options: { database: Database<null>; configs: ConfigOptions }) {
      const { configs, database } = options;
      const { parser } = configs;
      this.parser = new HttpParser(parser);
      this.data = new ParsingApi(database, parser);
   }
}
export { Api };
export * from "./service";
