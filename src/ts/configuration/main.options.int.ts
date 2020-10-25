import { DatabaseOptions } from "./db.options.int";
import { ApplicationOptions } from "./app.options.int";

export interface ConfigOptions {
   application: ApplicationOptions;
   database: DatabaseOptions;
}
