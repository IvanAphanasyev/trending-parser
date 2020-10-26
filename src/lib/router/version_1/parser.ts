import { Router } from "express";

const parseRouter = Router();

parseRouter.get("/", (request, reply) => {
   reply.send("trends");
});

parseRouter.post("/", (request, reply) => {
   reply.send("executer");
});

export { parseRouter };
