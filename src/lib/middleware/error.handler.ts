import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

const ErrorHandler = async (error: HttpError, request: Request, reply: Response, next: NextFunction): Promise<void> => {
   reply.setHeader("Content-Type", "application/json");
   console.error(error.stack);

   const status = error.status || error.statusCode || 500;

   const { message } = error;

   const response = {
      error: true,
      message,
      status,
   };
   reply.status(status).send(response);
};
export { ErrorHandler };
