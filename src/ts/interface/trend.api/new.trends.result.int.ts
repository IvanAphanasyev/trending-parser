import { Parsing, Trend } from "model";
import { ApplicationTrend } from "./trend.application.int";

export interface TrendsResult {
   parsing: Parsing;
   trends: ApplicationTrend[];
}
