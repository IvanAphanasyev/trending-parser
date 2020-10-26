import { ParserOptions } from "ts";

class ParserConfiguration implements ParserOptions {
   url: string;
   constructor() {
      this.url = "https://github.com/trending";
   }
}
export { ParserConfiguration };
