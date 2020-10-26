import { Api } from "api";

import { TrendService } from "./trend.service";

class Service {
   trends: TrendService;
   constructor(api: Api) {
      const { parser, data } = api;
      this.trends = new TrendService({ parser, data });
   }
}
export { Service };
