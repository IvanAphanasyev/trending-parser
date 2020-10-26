import { config } from "dotenv";
import { join } from "path";

import { ConfigOptions } from "../ts";

import { DatabaseConfiguration } from "./database.config";
import { ApplicationConfiguration } from "./application.config";
import { ParserConfiguration } from "./parser.config";

class Configuration implements ConfigOptions {
   database: DatabaseConfiguration;
   application: ApplicationConfiguration;
   parser: ParserConfiguration;
   constructor(filePath: string = process.cwd(), fileName = ".env") {
      const path = join(filePath, fileName);

      const { error } = config({ path });

      if (error) {
         const { message } = error;
         console.warn(`DotEnv parser returns error from method 'config', reason: ${message}`);
      }
      const parsed = process.env;

      this.database = new DatabaseConfiguration(parsed);
      this.application = new ApplicationConfiguration(parsed);
      this.parser = new ParserConfiguration();
   }
}
export { Configuration };
