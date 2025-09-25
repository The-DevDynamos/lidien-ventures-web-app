// data/solutionsData.ts
import type {
  Solution,
  SolutionCategory,
} from "@/components/UI/solutions/types/types";
import { lpgDistributionData } from "./lpg_distribution_data";
import { solarEnergyData } from "./solar_energy_data";
import { biogasSolutionsData } from "./biogas_solutions_data";
import { solarBoreholesData } from "./solar_borehole_data";
// Import your existing solar solutions data
import { existingSolarData } from "./existing_solar_data";

export const solutionsData: SolutionCategory[] = [
  // Your existing solar solutions
  ...existingSolarData,

  // New solution categories
  lpgDistributionData,
  solarEnergyData,
  biogasSolutionsData,
  solarBoreholesData,
];

// Keep your existing helper functions...
export const getAllSolutions = (): Solution[] => {
  return solutionsData.flatMap(
    (category: SolutionCategory) => category.solutions
  );
};

export const getSolutionBySlug = (slug: string): Solution | undefined => {
  return getAllSolutions().find((solution: Solution) => solution.slug === slug);
};

export const getCategoryBySlug = (
  slug: string
): SolutionCategory | undefined => {
  return solutionsData.find(
    (category: SolutionCategory) => category.slug === slug
  );
};

export const getRelatedSolutions = (currentSolution: Solution): Solution[] => {
  return getAllSolutions()
    .filter(
      (solution: Solution) =>
        solution.id !== currentSolution.id &&
        solution.category === currentSolution.category
    )
    .slice(0, 3);
};
