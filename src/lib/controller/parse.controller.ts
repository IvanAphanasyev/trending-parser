import { Request, Response } from "express";

import { ApplicationResponse } from "ts";

class ParseController {
   public static async Post(request: Request, reply: Response): Promise<void> {
      const { app } = request;
      const { trends } = app.get("service");

      const created = await trends.newParse();

      console.log(created);

      const status = 200;

      const response: ApplicationResponse = {
         error: false,
         message: "parse result",
         status,
         data: created,
      };

      reply.status(status).send(response);
   }
   public static async Get(request: Request, reply: Response): Promise<void> {
      reply.send("get");
   }
}

export { ParseController };
