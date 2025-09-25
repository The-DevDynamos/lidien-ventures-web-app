// data/solutions/solar-boreholes-data.ts
import { type SolarBoreholesCategory } from "@/components/UI/solutions/types/solar_boreholes";

export const solarBoreholesData: SolarBoreholesCategory = {
  id: "solar-boreholes",
  slug: "solar-boreholes-solutions",
  name: "Solar Boreholes Solutions",
  description:
    "Solar-powered water pumping systems for reliable water supply in remote areas",
  icon: "💦",
  solutions: [
    {
      id: "solar-borehole-001",
      slug: "solar-powered-boreholes",
      title: "Solar-Powered Boreholes",
      shortDescription:
        "Complete solar borehole solutions for domestic and agricultural water supply",
      fullDescription:
        "Our solar-powered borehole systems provide reliable water supply using solar energy, eliminating diesel costs and providing clean water for drinking, irrigation, and livestock. Perfect for remote areas without grid electricity.",
      features: [
        "Solar submersible pumps",
        "Solar panel arrays",
        "Controller systems",
        "Water storage tanks",
        "Automatic operation",
        "Remote monitoring",
        "Low maintenance",
      ],
      specifications: {
        capacity: "0.5HP - 30HP pumps",
        efficiency: "85-95% system efficiency",
        warranty: "5 years on pumps, 25 years on panels",
        installation: "7-21 days",
        output: "1000-50,000 liters per day",
        lifespan: "10-25 years",
      },
      price: 300000,
      image: "/images/solutions/solar_power_generation_3.jpg",
      category: "solar_boreholes",
      subcategory: "Solar Pumping Systems",
      isFeatured: true,
      benefits: [
        "Zero fuel costs",
        "Reliable water supply",
        "Low operating costs",
        "Environmentally friendly",
        "Minimal maintenance",
      ],
      applications: [
        "Agricultural irrigation",
        "Domestic water supply",
        "Livestock watering",
        "Community water projects",
        "Commercial water needs",
      ],
      pumpTypes: ["Submersible pumps", "Surface pumps", "Booster pumps"],
      depthCapabilities: ["0-50 meters", "50-150 meters", "150-300 meters"],
      waterOutput: [
        "1,000-5,000 L/day",
        "5,000-20,000 L/day",
        "20,000-50,000 L/day",
      ],
      controlSystems: [
        "Basic controllers",
        "Smart controllers",
        "Remote monitoring",
      ],
    },
    {
      id: "borehole-complete-001",
      slug: "complete-borehole-solutions",
      title: "Complete Borehole Solutions",
      shortDescription:
        "End-to-end borehole services from drilling to solar pumping systems",
      fullDescription:
        "We provide complete borehole solutions including geological surveys, drilling, casing, pump installation, and solar power systems. Our comprehensive approach ensures you get reliable water supply with minimal hassle.",
      features: [
        "Geological surveys",
        "Professional drilling",
        "Casing and development",
        "Pump testing",
        "Solar system integration",
        "Water quality testing",
        "Maintenance contracts",
      ],
      specifications: {
        capacity: "Customized to water needs",
        efficiency: "Optimal water yield",
        warranty: "2 years on drilling, 5 years on equipment",
        installation: "14-30 days complete",
        output: "Based on aquifer capacity",
        lifespan: "20+ years",
      },
      price: 800000,
      image: "/images/products/borehole.jpg",
      category: "solar",
      subcategory: "Complete Solutions",
      isFeatured: true,
      benefits: [
        "Turnkey solution",
        "Guaranteed water yield",
        "Professional installation",
        "Long-term reliability",
        "Comprehensive support",
      ],
      applications: [
        "Community water projects",
        "Large-scale farming",
        "Industrial water supply",
        "Municipal water projects",
        "Emergency water relief",
      ],
      pumpTypes: [
        "Custom-sized submersibles",
        "High-capacity pumps",
        "Specialized pumps",
      ],
      depthCapabilities: [
        "Custom depth solutions",
        "Deep aquifer access",
        "Multiple aquifer systems",
      ],
      waterOutput: [
        "Custom flow rates",
        "High-volume systems",
        "Multiple point distribution",
      ],
      controlSystems: [
        "Advanced SCADA systems",
        "Multiple pump control",
        "Water management software",
      ],
      gallery: [
        "/images/solutions/solar_power_generation_3.jpg",
        "/images/solutions/solar_power_generation_2.jpg",
        "/images/solutions/solar_power_generation_1.jpg",
      ],
    },
  ],
};
