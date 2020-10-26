import { Api } from "api";

import { TrendService } from "./trend.service";

class Service {
   trends: TrendService;
   constructor(api: Api) {
      const { parser, data, converter } = api;
      this.trends = new TrendService({ parser, data, converter });
   }
}
export { Service };
