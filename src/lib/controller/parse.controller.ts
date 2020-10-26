import { Request, Response } from "express";
class ParseController {
   public static async Post(request: Request, reply: Response): Promise<void> {
      reply.send("post");
   }
   public static async Get(request: Request, reply: Response): Promise<void> {
      reply.send("get");
   }
}

export { ParseController };
