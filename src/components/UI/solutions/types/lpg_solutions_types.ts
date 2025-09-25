// types/solutions/lpg-distribution.ts
import type { Solution, SolutionCategory } from "./types";

export interface LpgDistributionSolution extends Solution {
  // LPG-specific properties
  cylinderSizes?: string[];
  deliveryOptions?: string[];
  safetyFeatures?: string[];
  regulatoryCompliance?: string[];
}

export interface LpgDistributionCategory extends SolutionCategory {
  solutions: LpgDistributionSolution[];
}
