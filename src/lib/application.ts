import CreateExpress, { Express } from "express";
import Pino from "pino-http";

import { ConfigOptions, ApplicationOptions } from "ts";
import { PostgresDatabase } from "./database";
import { apiRouter } from "./router";
import { ErrorHandler, NotFoundHandler } from "./middleware";

class Application {
   #instance: Express;
   #config: ApplicationOptions;

   constructor(configuration: ConfigOptions) {
      const { application, database } = configuration;
      this.#config = application;
      this.#instance = CreateExpress();
      this.#instance.use(Pino({ prettyPrint: { colorize: true, translateTime: true, ignore: "pid, hostname", crlf: true } }));

      const postgres = new PostgresDatabase(database);

      this.#instance.use(apiRouter);
      this.#instance.use(NotFoundHandler);
      this.#instance.use(ErrorHandler);
   }
   public Instance(): [Express, ApplicationOptions] {
      return [this.#instance, this.#config];
   }
}

export { Application };
