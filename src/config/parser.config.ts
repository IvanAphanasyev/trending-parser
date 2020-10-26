import { ParserOptions } from "ts";

class ParserConfiguration implements ParserOptions {
   main: string;

   url: string;
   constructor() {
      this.main = `https://github.com`;
      this.url = "https://github.com/trending";
   }
}
export { ParserConfiguration };
