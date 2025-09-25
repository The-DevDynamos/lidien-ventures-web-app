// types/solutions/solar-energy.ts
import { Solution, SolutionCategory } from "./types";

export interface SolarEnergySolution extends Solution {
  // Solar Energy-specific properties
  panelTypes?: string[];
  inverterTypes?: string[];
  mountingSystems?: string[];
  monitoringSystems?: string[];
}

export interface SolarEnergyCategory extends SolutionCategory {
  solutions: SolarEnergySolution[];
}
