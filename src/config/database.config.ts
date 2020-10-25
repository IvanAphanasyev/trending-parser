import { parse, ConnectionOptions } from "pg-connection-string";

import { DatabaseOptions } from "ts";

class DatabaseConfiguration implements DatabaseOptions {
   database: string;
   host: string;
   password: string;
   port: number;
   user: string;

   private static isExists(envs: Record<string, string>): string {
      const { DATABASE_URL } = envs;
      if (!DATABASE_URL) {
         throw new Error(`there is no DATABASE_URL field in environments`);
      }
      return DATABASE_URL;
   }
   constructor(environments: Record<string, string>) {
      const url = DatabaseConfiguration.isExists(environments);
      const { database, host, password, port, user } = DatabaseConfiguration.parse(url);
      this.database = database;
      this.host = host;
      this.password = password;
      this.port = +port;
      this.user = user;
   }
   private static parse(url: string): ConnectionOptions {
      try {
         const { database, host, user, password, port } = parse(url);
         return { database, host, user, password, port };
      } catch (err) {
         const { message } = err;
         console.warn(`Database url parse error (reason: ${message}), set default config - 'postgres://postgres:@127.0.0.1:5432/database'`);
         const { database, host, user, password, port } = parse("postgres://postgres:@127.0.0.1:5432/database");
         return { database, host, user, password, port };
      }
   }
}

export { DatabaseConfiguration };
