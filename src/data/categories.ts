export type Category = {
  slug: string;
  number: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  icon: string;
  applications: string[];
  color: string;
};

export const categories: Category[] = [
  {
    slug: "hydrological",
    number: "01",
    name: "Hydrological Instruments",
    short: "Hydrology",
    tagline: "Water level, flow and quality.",
    description:
      "Stream gauging, water-level recording, water quality and effluent analysis instruments — for hydrology programmes, irrigation, and environmental monitoring.",
    icon: "Waves",
    applications: ["Water quality", "BOD/COD analysis", "Stream gauging", "Effluent monitoring"],
    color: "#0EA5E9",
  },
  {
    slug: "meteorological",
    number: "02",
    name: "Meteorological Instruments",
    short: "Meteorology",
    tagline: "Weather, climate, atmosphere.",
    description:
      "Weather stations, anemometers, rain gauges, sunshine recorders, hygrometers and thermometers for meteorology, agriculture and climate monitoring.",
    icon: "CloudRain",
    applications: ["Weather stations", "Humidity", "Temperature", "Climate research"],
    color: "#6366F1",
  },
  {
    slug: "agricultural",
    number: "03",
    name: "Agricultural Research Instruments",
    short: "Agri & Biotech",
    tagline: "Soil, plant and biotech research.",
    description:
      "Soil moisture, pH and nutrient instruments alongside biotechnology lab equipment — incubators, autoclaves, centrifuges, growth chambers — for ICAR-grade agricultural and life-science research.",
    icon: "Sprout",
    applications: ["Soil & water", "Plant biology", "Microbiology", "Tissue culture"],
    color: "#10B981",
  },
  {
    slug: "scientific",
    number: "04",
    name: "Scientific & Survey Instruments",
    short: "Scientific & Survey",
    tagline: "Weighing, measurement and analysis.",
    description:
      "Analytical and precision balances, spectrophotometers, flame photometers, colorimeters and survey instruments calibrated to ISO standards.",
    icon: "Compass",
    applications: ["Analytical balances", "Spectrophotometry", "Flame photometry", "Field survey"],
    color: "#F59E0B",
  },
  {
    slug: "geological",
    number: "05",
    name: "Geological & Geotechnical Instruments",
    short: "Geo & Microscopy",
    tagline: "Microscopy, sieving, geotechnical labs.",
    description:
      "Optical microscopes (research, polarizing, metallurgical, gemological, surgical), planetary ball mills, sieve shakers, muffle furnaces and ovens for earth science, mining and metallurgy laboratories.",
    icon: "Mountain",
    applications: ["Microscopy", "Particle sizing", "Heat treatment", "Sample preparation"],
    color: "#A855F7",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
