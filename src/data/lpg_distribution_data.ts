// data/solutions/lpg-distribution-data.ts
import { type LpgDistributionCategory } from "@/components/UI/solutions/types/lpg_solutions_types";

export const lpgDistributionData: LpgDistributionCategory = {
  id: "lpg-distribution",
  slug: "lpg-distribution-solutions",
  name: "LPG Distribution Solutions",
  description:
    "Safe and efficient Liquefied Petroleum Gas distribution systems for domestic and commercial use",
  icon: "🔥",
  solutions: [
    {
      id: "lpg-domestic-001",
      slug: "domestic-lpg-systems",
      title: "Domestic LPG Systems",
      shortDescription:
        "Complete LPG solutions for households with safe installation and reliable supply",
      fullDescription:
        "Our domestic LPG systems provide clean, efficient cooking energy for homes across Kenya. We offer complete solutions including cylinder supply, regulator installation, and safety inspections to ensure your family cooks safely.",
      features: [
        "Safe cylinder installation",
        "Leak detection systems",
        "Quality regulators and hoses",
        "Regular safety inspections",
        "Emergency support services",
        "Flexible cylinder sizes",
        "Home delivery options",
      ],
      specifications: {
        capacity: "6kg - 50kg cylinders",
        efficiency: "High thermal efficiency",
        warranty: "2 years on equipment",
        installation: "1-2 hours",
        output: "Clean, instant heat",
        lifespan: "10+ years",
      },
      price: 15000,
      image: "/images/products/lpg_gas.jpg",
      category: "lpg",
      subcategory: "Domestic Systems",
      isFeatured: true,
      benefits: [
        "Cleaner than charcoal/wood",
        "Cost-effective cooking",
        "Instant heat control",
        "Reduced indoor pollution",
        "Reliable supply chain",
      ],
      applications: [
        "Home cooking",
        "Water heating",
        "Space heating",
        "Backup power generation",
        "Outdoor cooking",
      ],
      gallery: [
        "/images/products/lpg_gas.jpg",
        "/images/products/lpg_gas.jpg",
        "/images/products/lpg_gas.jpg",
      ],
      // LPG-specific properties
      cylinderSizes: ["6kg", "13kg", "50kg"],
      deliveryOptions: [
        "Home delivery",
        "Pickup stations",
        "Emergency delivery",
      ],
      safetyFeatures: [
        "Leak detectors",
        "Pressure regulators",
        "Safety valves",
        "Fire extinguishers",
      ],
      regulatoryCompliance: [
        "EPRA certified",
        "KEBS approved",
        "ISO standards",
      ],
    },
    {
      id: "lpg-commercial-001",
      slug: "commercial-lpg-systems",
      title: "Commercial LPG Systems",
      shortDescription:
        "Large-scale LPG solutions for restaurants, hotels, and industrial applications",
      fullDescription:
        "Our commercial LPG systems are designed for high-demand applications including restaurants, hotels, and industrial processes. We provide bulk storage solutions, automated switching systems, and comprehensive maintenance services.",
      features: [
        "Bulk storage tanks",
        "Automatic cylinder switching",
        "Commercial-grade regulators",
        "Remote monitoring",
        "Preventive maintenance",
        "Training programs",
        "24/7 support",
      ],
      specifications: {
        capacity: "100kg - 5000kg systems",
        efficiency: "Optimized for high usage",
        warranty: "3 years comprehensive",
        installation: "2-5 days",
        output: "Continuous gas supply",
        lifespan: "15+ years",
      },
      price: 250000,
      image: "/images/products/lpg_gas.jpg",
      category: "lpg",
      subcategory: "Commercial Systems",
      isFeatured: true,
      benefits: [
        "Lower operating costs",
        "Consistent supply",
        "Scalable solutions",
        "Professional maintenance",
        "Compliance assurance",
      ],
      applications: [
        "Restaurants and hotels",
        "Bakeries and food processing",
        "Industrial heating",
        "Laundries and dry cleaning",
        "Institutions and schools",
      ],
      cylinderSizes: ["50kg", "100kg", "500kg bulk tanks"],
      deliveryOptions: [
        "Bulk delivery",
        "Scheduled refills",
        "Emergency service",
      ],
      safetyFeatures: [
        "Emergency shutoff",
        "Gas detection",
        "Fire suppression",
        "Remote monitoring",
      ],
      regulatoryCompliance: [
        "EPRA compliance",
        "Fire department approval",
        "Environmental standards",
      ],
    },
  ],
};
