// types/solutions/biogas-solutions.ts
import { Solution, SolutionCategory } from "./types";

export interface BiogasSolution extends Solution {
  // Biogas-specific properties
  digesterTypes?: string[];
  feedstockTypes?: string[];
  gasStorage?: string[];
  utilizationMethods?: string[];
}

export interface BiogasSolutionsCategory extends SolutionCategory {
  solutions: BiogasSolution[];
}
