import { Database, ConfigOptions } from "ts";

import { HttpParser } from "./service";

class Api {
   parser: HttpParser;
   constructor(options: { database: Database<null>; configs: ConfigOptions }) {
      const { configs, database } = options;
      const { parser } = configs;
      this.parser = new HttpParser(parser);
   }
}
export { Api };
export * from "./service";
