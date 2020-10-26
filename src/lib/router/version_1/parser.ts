import { Router } from "express";

import { ParseController } from "../../controller";

const parseRouter = Router();

parseRouter.get("/", ParseController.Get);
parseRouter.post("/", ParseController.Post);

export { parseRouter };
