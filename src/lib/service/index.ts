import { Api } from "api";

import { TrendService } from "./trend.service";

class Service {
   trends: TrendService;
   constructor(api: Api) {
      const { parser } = api;
      this.trends = new TrendService({ parser });
   }
}
export { Service };
