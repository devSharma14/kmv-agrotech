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
    slug: "microscopes",
    number: "01",
    name: "Microscopes",
    short: "Microscopes",
    tagline: "See small things, clearly.",
    description:
      "From simple school microscopes to advanced ones for research and hospitals.",
    icon: "Microscope",
    applications: ["Schools & colleges", "Research labs", "Hospitals", "Quality control"],
    color: "#0B3B6F",
  },
  {
    slug: "balances",
    number: "02",
    name: "Weighing Balances & Scales",
    short: "Balances",
    tagline: "Accurate weight, every time.",
    description:
      "Scales for tiny lab samples, for food and crops, and for heavy items in factories.",
    icon: "Scale",
    applications: ["Lab weighing", "Food & agri", "Industry", "Pharma QC"],
    color: "#10B981",
  },
  {
    slug: "laboratory",
    number: "03",
    name: "Laboratory Instruments",
    short: "Laboratory",
    tagline: "Daily tools for any lab.",
    description:
      "Everyday lab gear — pH meters, ovens, sieves, water testers and more for testing and drying.",
    icon: "FlaskConical",
    applications: ["Water testing", "Soil & material", "Heating & drying", "Chemical analysis"],
    color: "#14528E",
  },
  {
    slug: "biotech",
    number: "04",
    name: "Biotech & Life Sciences",
    short: "Biotech",
    tagline: "Tools for biology labs.",
    description:
      "For germ, plant and cell labs — incubators, autoclaves, centrifuges, PCR machines and more.",
    icon: "Sprout",
    applications: ["Microbiology", "Tissue culture", "Plant research", "Molecular biology"],
    color: "#059669",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
