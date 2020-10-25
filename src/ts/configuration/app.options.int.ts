export type Mode = "production" | "development" | "test";
export const modes = ["production", "development", "test"];
export interface ApplicationOptions {
   port: number;
   host: string;
   mode: Mode;
}
