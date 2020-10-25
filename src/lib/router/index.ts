import { Router } from "express";

const apiRouter = Router();

apiRouter.use("/api", async (request, reply) => {
   request.log.info("hello");

   reply.send({ hello: "hello" });
});

export { apiRouter };
