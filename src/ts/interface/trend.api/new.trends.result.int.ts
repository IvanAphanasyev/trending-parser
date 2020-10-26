import { Parsing, Trend } from "model";
import { ApplicationTrend } from "./trend.application.int";

export interface NewTrendsResult {
   parsing: Parsing;
   trends: ApplicationTrend[];
}
