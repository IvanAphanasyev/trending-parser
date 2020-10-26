import { load } from "cheerio";

import { ParserOptions } from "ts";

import { request } from "./requester";
import { ParseResult } from "./interface";

class HttpParser {
   config: ParserOptions;
   constructor(config: ParserOptions) {
      this.config = config;
   }
   public async parse(): Promise<ParseResult[]> {
      const html = await this.html();

      const jq = load(html, { ignoreWhitespace: false });
      const info = jq(`.Box-row`)
         .toArray()
         .map((el, index) => {
            const title = jq(el).children(`h1.h3.lh-condensed`).children(`a`).text().replace(/\s/g, "");
            const description = jq(el).children(`p`).remove("g-emoji").text().trim();
            const panel = jq(el).children(`.f6.text-gray.mt-2`);
            const language = panel.children(`span.d-inline-block.ml-0.mr-3`).text().replace(/\s/g, "");
            const [stars, forks] = panel
               .children(`.muted-link.d-inline-block.mr-3`)
               .toArray()
               .map((item) => {
                  return +jq(item).text().replace(/\s/g, "").split(`,`).join("");
               });

            return { title, description, language, stars, forks, order: index };
         });

      return info;
   }
   private async html(): Promise<Buffer> {
      try {
         const { url } = this.config;
         const html = await request(url);
         return html;
      } catch (err) {
         const { message } = err;
         throw new Error(`Get html from ${this.config.url} failed, reason: ${message}`);
      }
   }
}
export { HttpParser };
