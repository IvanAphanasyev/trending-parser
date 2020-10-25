import { Mode, modes, ApplicationOptions } from "ts";
class ApplicationConfiguration implements ApplicationOptions {
   host: string;
   mode: Mode;
   port: number;
   constructor(environments: Record<string, string>) {
      const host = ApplicationConfiguration.host(environments);
      const port = ApplicationConfiguration.port(environments);
      const mode = ApplicationConfiguration.nodeEnv(environments);

      this.host = host;
      this.mode = mode;
      this.port = port;
   }

   private static host(envs: Record<string, string>): string {
      const { HOST } = envs;
      if (!HOST) {
         console.warn("There is no 'HOST' field in environments, set default value: '0.0.0.0'");
         return "0.0.0.0";
      }
      return HOST;
   }
   private static nodeEnv(envs: Record<string, string>): Mode {
      const { NODE_ENV } = envs;
      if (!NODE_ENV) {
         console.warn("There is no 'NODE_ENV' field in environments, set 'production' mode");
         return "production";
      }
      const isMatch = modes.includes(NODE_ENV);

      if (!isMatch) {
         console.warn("Invalid input 'NODE_ENV' value in environmets, set 'production' mode");
         return "production";
      }
      return NODE_ENV as Mode;
   }

   private static port(envs: Record<string, string>): number {
      const { PORT } = envs;
      if (!PORT) {
         console.warn("There is no 'PORT' field in environmetns!, set default 3000 port");
         return 3000;
      }
      const converted = +PORT;
      if (Number.isNaN(converted)) {
         console.warn("Port field value from environments is not a number, set default 3000 port");
         return 3000;
      }
      return converted;
   }
}
export { ApplicationConfiguration };
