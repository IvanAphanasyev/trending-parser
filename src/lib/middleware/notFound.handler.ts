import { Request, Response, NextFunction } from "express";
import { NotFound } from "http-errors";

const NotFoundHandler = async (request: Request, reply: Response, next: NextFunction): Promise<void> => {
   const notFoundError = new NotFound("Not Found");

   next(notFoundError);
};

export { NotFoundHandler };
