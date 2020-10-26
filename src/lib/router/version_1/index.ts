import { Router } from "express";

import { parseRouter } from "./parser";

const firstVersionAPI = Router();

firstVersionAPI.use("/parser", parseRouter);

export { firstVersionAPI };
