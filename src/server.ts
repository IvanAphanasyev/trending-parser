import { createServer } from "http";

import { ConfigOptions } from "ts";

import { Configuration } from "./config";
import { Application } from "./lib";

const config: ConfigOptions = new Configuration();
const application = new Application(config);

const [instance, { host, mode, port }] = application.Instance();

const server = createServer(instance).listen(port, host, () => {
   console.log(`Server listen { host:${host}, port:${port} } in mode ${mode}`);
});
