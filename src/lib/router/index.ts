import { Router } from "express";
import { firstVersionAPI } from "./version_1";

const apiRouter = Router();

apiRouter.use("/api/v1", firstVersionAPI);

export { apiRouter };
