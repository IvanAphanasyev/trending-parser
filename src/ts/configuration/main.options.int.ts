import { DatabaseOptions } from "./db.options.int";
import { ApplicationOptions } from "./app.options.int";
import { ParserOptions } from "./parser.options.int";

export interface ConfigOptions {
   application: ApplicationOptions;
   database: DatabaseOptions;
   parser: ParserOptions;
}
