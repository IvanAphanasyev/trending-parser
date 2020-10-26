import { Request, Response } from "express";
class ParseController {
   public static async Post(request: Request, reply: Response): Promise<void> {
      const { app } = request;
      const { trends } = app.get("service");

      trends.newParse();

      reply.send("post");
   }
   public static async Get(request: Request, reply: Response): Promise<void> {
      reply.send("get");
   }
}

export { ParseController };
