import { createServer } from "http";

import { Configuration } from "./config";
import { Application } from "./lib";

const config = new Configuration();
const application = new Application();

const server = createServer(application.Instance()).listen(1337, "0.0.0.0", () => {
   console.log(`Application Started`);
});
