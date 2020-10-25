import CreateExpress, { Express } from "express";
import Pino from "pino-http";

class Application {
   #instance: Express;

   constructor() {
      this.#instance = CreateExpress();
      this.#instance.use(Pino({ prettyPrint: { colorize: true, translateTime: true, ignore: "pid, hostname", crlf: true } }));

      this.#instance.get("/", async (request, reply) => {
         reply.send({ hello: "123" });
      });
   }
   public Instance(): Express {
      return this.#instance;
   }
}

export { Application };
