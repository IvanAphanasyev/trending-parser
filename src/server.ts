import { createServer } from "http";
import { load } from "cheerio";
import { get } from "https";

import { ConfigOptions } from "ts";

import { Configuration } from "./config";
import { Application } from "./lib";

const config: ConfigOptions = new Configuration();
const application = new Application(config);

const [instance, { host, mode, port }] = application.Instance();

const server = createServer(instance).listen(port, host, () => {
   console.log(`Server listen { host:${host}, port:${port} } in mode ${mode}`);
});
/*
get("https://github.com/trending", (res) => {
   const arr: Buffer[] = [];
   res.on("data", (chunk) => {
      arr.push(chunk);
   });
   res.on("end", () => {
      const buffer = Buffer.concat(arr);

      const jquery = load(buffer);
      jquery(".Box-row").each((index, el) => {
         console.log(index);
      });
   });
});
*/
