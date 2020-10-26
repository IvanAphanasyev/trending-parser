import { load } from "cheerio";

import { ParserOptions } from "ts";

import { request } from "./requester";

class Parser {
   config: ParserOptions;
   constructor(config: ParserOptions) {
      this.config = config;
   }
   public async parse(): Promise<void> {
      const { url } = this.config;
      const html = await request(url);

      console.log(html);
   }
}
export { Parser };
