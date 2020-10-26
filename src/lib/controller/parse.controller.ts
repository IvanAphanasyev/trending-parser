import { Request, Response, NextFunction } from "express";

import { ApplicationResponse } from "ts";

import { TrendsValidator } from "./validator";

class ParseController {
   public static async Post(request: Request, reply: Response, next: NextFunction): Promise<void> {
      try {
         const { app } = request;
         const { trends } = app.get("service");

         const created = await trends.newParse();

         const status = 200;

         const response: ApplicationResponse = {
            error: false,
            message: "parse result",
            status,
            data: created,
         };

         reply.status(status).send(response);
      } catch (err) {
         next(err);
      }
   }
   public static async Get(request: Request, reply: Response, next: NextFunction): Promise<void> {
      try {
         const { app, query } = request;
         const { trends } = app.get("service");

         const validator = new TrendsValidator(query);

         const { version } = validator.validate();

         const result = await trends.getTrends(version);

         const status = 200;

         const response: ApplicationResponse = {
            error: false,
            message: "trends from database",
            status,
            data: result,
         };

         reply.status(status).send(response);
      } catch (err) {
         next(err);
      }
   }
}

export { ParseController };
