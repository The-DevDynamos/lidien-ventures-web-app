// data/solutions/biogas-solutions-data.ts
import { type BiogasSolutionsCategory } from "@/components/UI/solutions/types/biogas-solutions";

export const biogasSolutionsData: BiogasSolutionsCategory = {
  id: "biogas-solutions",
  slug: "biogas-solutions",
  name: "Biogas Solutions",
  description:
    "Sustainable biogas production systems for energy and fertilizer generation",
  icon: "🌱",
  solutions: [
    {
      id: "biogas-domestic-001",
      slug: "domestic-biogas-plants",
      title: "Domestic Biogas Plants",
      shortDescription:
        "Small-scale biogas systems for households using organic waste",
      fullDescription:
        "Our domestic biogas plants convert kitchen waste, animal manure, and other organic materials into clean cooking gas and organic fertilizer. These systems are perfect for rural and peri-urban households with livestock or agricultural activities.",
      features: [
        "Fixed dome digesters",
        "Gas storage systems",
        "Organic fertilizer production",
        "Waste management",
        "Safety valves",
        "Easy operation",
        "Low maintenance",
      ],
      specifications: {
        capacity: "2m³ - 10m³ digesters",
        efficiency: "60-70% methane content",
        warranty: "5 years on structure",
        installation: "7-14 days",
        output: "2-6 hours cooking gas daily",
        lifespan: "15-20 years",
      },
      price: 80000,
      image: "/images/products/biogas_system.jpg",
      category: "biogas",
      subcategory: "Domestic Plants",
      isFeatured: true,
      benefits: [
        "Free cooking fuel",
        "Organic fertilizer",
        "Waste management",
        "Reduced deforestation",
        "Cost savings",
      ],
      applications: [
        "Rural households",
        "Small-scale farms",
        "Schools and institutions",
        "Agricultural projects",
        "Eco-friendly homes",
      ],
      digesterTypes: ["Fixed dome", "Floating drum", "Balloon plants"],
      feedstockTypes: [
        "Cow dung",
        "Kitchen waste",
        "Poultry manure",
        "Agricultural waste",
      ],
      gasStorage: [
        "Integrated storage",
        "Separate gas holders",
        "Pressure systems",
      ],
      utilizationMethods: [
        "Cooking",
        "Lighting",
        "Water heating",
        "Small engines",
      ],
      gallery: [
        "/images/products/biogas_system.jpeg",
        "/images/products/biogas_system.jpg",
      ],
    },
    {
      id: "biogas-commercial-001",
      slug: "commercial-biogas-plants",
      title: "Commercial Biogas Plants",
      shortDescription:
        "Large-scale biogas systems for institutions, farms, and industries",
      fullDescription:
        "Our commercial biogas plants are designed for institutions, large farms, and industrial applications. These systems handle significant organic waste volumes while producing biogas for cooking, heating, or electricity generation, plus valuable organic fertilizer.",
      features: [
        "Large-scale digesters",
        "Gas purification systems",
        "Electricity generation",
        "Automated feeding",
        "Temperature control",
        "Gas storage",
        "Comprehensive monitoring",
      ],
      specifications: {
        capacity: "10m³ - 1000m³+ digesters",
        efficiency: "High methane yield",
        warranty: "10 years comprehensive",
        installation: "30-90 days",
        output: "Electricity generation + cooking gas",
        lifespan: "20-25 years",
      },
      price: 500000,
      image: "/images/products/biogas_system.jpeg",
      category: "biogas",
      subcategory: "Commercial Plants",
      isFeatured: true,
      benefits: [
        "Waste-to-energy conversion",
        "Revenue from fertilizer",
        "Carbon credits potential",
        "Environmental compliance",
        "Energy independence",
      ],
      applications: [
        "Large farms",
        "Food processing plants",
        "Slaughterhouses",
        "Wastewater treatment",
        "Industrial facilities",
      ],
      digesterTypes: [
        "Continuous stirred",
        "Upflow anaerobic",
        "Plug flow digesters",
      ],
      feedstockTypes: [
        "Industrial waste",
        "Agricultural residues",
        "Food waste",
        "Municipal waste",
      ],
      gasStorage: [
        "Double-membrane holders",
        "Steel tanks",
        "High-pressure storage",
      ],
      utilizationMethods: [
        "Electricity generation",
        "Heat production",
        "Vehicle fuel",
        "Grid injection",
      ],
      gallery: [
        "/images/products/biogas_system.jpeg",
        "/images/products/biogas_system.jpg",
      ],
    },
  ],
};
