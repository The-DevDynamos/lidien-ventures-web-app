// types/solutions.ts
export interface Solution {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specifications: {
    capacity: string;
    efficiency: string;
    warranty: string;
    installation: string;
    output?: string;
    lifespan?: string;
  };
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  isFeatured: boolean;
  gallery?: string[];
  benefits?: string[];
  applications?: string[];
}

export interface SolutionCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  solutions: Solution[];
}
