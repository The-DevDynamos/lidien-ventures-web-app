// types/solutions/solar-boreholes.ts
import { Solution, SolutionCategory } from "./types";

export interface SolarBoreholeSolution extends Solution {
  // Solar Borehole-specific properties
  pumpTypes?: string[];
  depthCapabilities?: string[];
  waterOutput?: string[];
  controlSystems?: string[];
}

export interface SolarBoreholesCategory extends SolutionCategory {
  solutions: SolarBoreholeSolution[];
}
