import { TrendsQuery } from "./interface";

class TrendsValidator {
   version: string;
   constructor(query: any) {
      const { version } = query;
      this.version = version;
   }

   public validate(): TrendsQuery {
      const { version } = this;

      if (!version) {
         return {
            version: null,
         };
      }
      if (version.length === 0) {
         return {
            version: null,
         };
      }

      const toValidate = +version;

      if (!(!isNaN(parseFloat(version)) && isFinite(toValidate))) {
         return {
            version: null,
         };
      }
      return {
         version: toValidate,
      };
   }
}
export { TrendsValidator };
