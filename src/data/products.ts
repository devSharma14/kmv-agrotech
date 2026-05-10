export type Product = {
  slug: string;
  name: string;
  category: string; // category slug
  image: string; // absolute path under /public
  brand?: string;
  summary: string;
  description: string;
  features: string[];
  applications: string[];
  specs?: { label: string; value: string }[];
  externalUrl?: string; // outbound "buy / inquire" link
  featured?: boolean;
};

// Default outbound link → opens user's mail client to KMV with the product name pre-filled.
const inquireMail = (name: string) =>
  `mailto:kmvagrotech@gmail.com?subject=${encodeURIComponent(`Inquiry: ${name}`)}&body=${encodeURIComponent(
    `Hello KMV Agrotech team,\n\nI'm interested in the following product:\n\n${name}\n\nCould you please send a quotation and current availability?\n\nThanks,\n`
  )}`;

type Seed = {
  slug: string;
  name: string;
  category: Product["category"];
  image: string;
  summary: string;
  description: string;
  features?: string[];
  applications?: string[];
  specs?: { label: string; value: string }[];
  featured?: boolean;
};

const seeds: Seed[] = [
  // ==================== LABORATORY — water quality ====================
  {
    slug: "bod-apparatus",
    name: "BOD Apparatus",
    category: "laboratory",
    image: "/products/laboratory/bod.jpg",
    summary:
      "Biochemical Oxygen Demand incubator and BOD measurement system for water quality and effluent analysis.",
    description:
      "Constant-temperature BOD incubator and bottle setup for the standard 5-day BOD test used in water and wastewater quality assessment. Suitable for municipal labs, pollution control boards and environmental research.",
    features: [
      "Temperature control at 20 °C ± 0.5 °C",
      "Fitted with shelves for BOD bottles",
      "Stainless interior for chemical resistance",
      "Suitable for IS 3025 / APHA methods",
    ],
    applications: ["Water quality testing", "Effluent monitoring", "Pollution control"],
    featured: true,
  },
  {
    slug: "cod-apparatus",
    name: "COD Digester",
    category: "laboratory",
    image: "/products/laboratory/cod.jpg",
    summary:
      "Closed-reflux COD digestion apparatus for chemical oxygen demand determination in water and wastewater.",
    description:
      "COD digester block with thermostatic control for the closed-reflux titrimetric / colorimetric method. Standard configuration accepts up to 25 sample tubes.",
    features: [
      "Programmable digestion at 150 °C",
      "Block accepts up to 25 tubes",
      "Digital timer and over-temp cut-off",
      "Suitable for APHA 5220 D method",
    ],
    applications: ["Wastewater analysis", "Effluent compliance", "Lab QA/QC"],
  },
  {
    slug: "do-meter",
    name: "Dissolved Oxygen (DO) Meter",
    category: "laboratory",
    image: "/products/laboratory/do-meter.jpg",
    summary:
      "Portable digital DO meter with polarographic / optical sensor for surface water and effluent.",
    description:
      "Microcontroller-based DO meter with auto-temperature compensation, salinity correction and on-board calibration. Field-rated probe with sufficient cable for in-stream measurement.",
    features: [
      "DO range 0–20 mg/L",
      "Auto-temperature compensation",
      "USB datalog export",
      "IP rated handheld",
    ],
    applications: ["Stream monitoring", "Aquaculture", "Effluent treatment"],
  },
  {
    slug: "turbidity-meter",
    name: "Turbidity Meter",
    category: "laboratory",
    image: "/products/laboratory/turbidity-meters.jpg",
    summary:
      "Nephelometric turbidity measurement instrument for drinking water and surface water quality.",
    description:
      "Bench/portable nephelometer with infrared LED source per ISO 7027. Includes calibration standards and sample cuvettes.",
    features: [
      "Range 0–1000 NTU (auto-ranging)",
      "Resolution 0.01 NTU",
      "ISO 7027 compliant",
      "Includes Formazin standards",
    ],
    applications: ["Drinking water QA", "WTP monitoring", "Field surveys"],
  },
  {
    slug: "suspended-solids-analyzer",
    name: "Suspended Solids Analyzer",
    category: "laboratory",
    image: "/products/laboratory/suspended-solids.jpg",
    summary:
      "TSS analyser with optical scatter sensor for in-line and laboratory suspended solids quantification.",
    description:
      "For total suspended solids in surface water, treatment plants and industrial effluent. Configurable for grab-sample or in-line installation.",
    features: [
      "Range 0–5000 mg/L TSS",
      "Optical 90° scatter sensor",
      "4–20 mA + Modbus output",
      "Auto-cleaning option",
    ],
    applications: ["WWTP optimization", "Effluent monitoring", "River sediment"],
  },

  // ==================== LABORATORY — thermometers / hygrometers ====================
  {
    slug: "wet-dry-bulb-hygrometer",
    name: "Wet & Dry Bulb Hygrometer",
    category: "laboratory",
    image: "/products/laboratory/wet-dry-bulb.jpg",
    summary:
      "Classical Stevenson-screen hygrometer with paired wet- and dry-bulb thermometers for relative humidity.",
    description:
      "Reference humidity measurement using two precision mercury / spirit thermometers — one freely exposed, one wrapped in wetted muslin. Used in IMD-grade observations and traceable RH calibration.",
    features: [
      "Range −10 to +50 °C",
      "Resolution 0.5 °C",
      "Paired thermometers, calibration certificate",
      "For Stevenson Screen mounting",
    ],
    applications: ["IMD observations", "Lab humidity reference", "Agro-met"],
  },
  {
    slug: "laboratory-thermometers",
    name: "Laboratory Thermometers",
    category: "laboratory",
    image: "/products/laboratory/thermometers-laboratory.jpg",
    summary:
      "Precision mercury / spirit / digital thermometers for soil, lab and meteorological applications.",
    description:
      "Maximum, minimum, dry-bulb, wet-bulb, water, soil and infrared variants — supplied with NABL-traceable calibration on request.",
    features: [
      "Mercury / alcohol / digital options",
      "Range −30 to +110 °C",
      "Soil and water variants available",
      "NABL calibration on request",
    ],
    applications: ["Agro-met", "Soil temperature", "General lab"],
  },

  // ==================== BIOTECH + LABORATORY (mixed by image folder) ====================
  {
    slug: "ph-meter",
    name: "pH Meter",
    category: "laboratory",
    image: "/products/laboratory/ph-meters.jpg",
    summary:
      "Bench / portable digital pH meter with auto-temperature compensation and combination electrode.",
    description:
      "For soil extracts, water and laboratory chemistry. Resolution 0.01 pH, 1- to 5-point auto-buffer recognition, glass combination electrode included.",
    features: [
      "Range −2.00 to 16.00 pH",
      "Resolution 0.01 pH",
      "ATC + auto-buffer recognition",
      "Glass combination electrode",
    ],
    applications: ["Soil analysis", "Water quality", "Tissue culture media"],
    featured: true,
  },
  {
    slug: "conductivity-tds-meter",
    name: "Conductivity / TDS Meter",
    category: "laboratory",
    image: "/products/laboratory/conductivity-tds-meters.jpg",
    summary:
      "Digital EC and Total Dissolved Solids meter for soil, irrigation and laboratory water.",
    description:
      "Microprocessor-based, with three measurement modes (EC, TDS, salinity) and four-ring conductivity cell. Standard for soil-water solution analysis in agronomy labs.",
    features: [
      "EC range 0–200 mS/cm",
      "Auto-ranging with ATC",
      "TDS factor 0.4–1.0 selectable",
      "Four-ring sensor included",
    ],
    applications: ["Soil EC", "Irrigation water", "Hydroponics"],
  },
  {
    slug: "moisture-analyzer",
    name: "Moisture Analyzer",
    category: "balances",
    image: "/products/balances/moisture-analyzer.jpg",
    summary:
      "Halogen-heating moisture analyser for rapid moisture content determination in grain, soil and food.",
    description:
      "Loss-on-drying balance with infrared / halogen heater and integrated weighing. Programmable temperature ramps and auto-stop on weight stability.",
    features: [
      "Capacity 50 g, readability 1 mg",
      "Temperature 30–200 °C",
      "Halogen rapid heating",
      "Programmable drying profiles",
    ],
    applications: ["Grain QA", "Soil moisture", "Food labs"],
  },
  {
    slug: "autoclave",
    name: "Autoclave",
    category: "biotech",
    image: "/products/biotech/autoclave.jpg",
    summary:
      "Vertical / horizontal steam sterilizer for laboratory and biological sample sterilization.",
    description:
      "Pressure-controlled steam sterilization at 121 °C / 15 psi. Available in vertical, horizontal and benchtop configurations with various chamber sizes.",
    features: [
      "Operating pressure 15–22 psi",
      "Temperature up to 134 °C",
      "Stainless steel chamber",
      "Safety interlock and PRV",
    ],
    applications: ["Microbiology", "Tissue culture", "Glassware sterilization"],
  },
  {
    slug: "bacteriological-incubator",
    name: "Bacteriological Incubator",
    category: "biotech",
    image: "/products/biotech/bacteriological-incubator.jpg",
    summary:
      "Forced-air bacteriological incubator for routine microbial culture between ambient +5 °C and 70 °C.",
    description:
      "Double-walled chamber with PID control, perforated stainless shelves and lit interior. Standard for water-quality, food and clinical microbiology.",
    features: [
      "Range ambient +5 °C to 70 °C",
      "Stability ±0.5 °C",
      "Stainless interior, PUF insulation",
      "Multiple chamber sizes",
    ],
    applications: ["Microbiology", "Coliform testing", "Food labs"],
  },
  {
    slug: "biosafety-cabinet",
    name: "Biosafety Cabinet (Class II A2)",
    category: "biotech",
    image: "/products/biotech/biosafety-cabinet.jpg",
    summary:
      "Class II A2 BSC for safe handling of low-to-moderate risk biological agents.",
    description:
      "HEPA-filtered laminar airflow cabinet protecting operator, sample and environment. Inflow + downflow per NSF/ANSI 49 standards.",
    features: [
      "Class II Type A2 per NSF 49",
      "HEPA inflow + HEPA exhaust",
      "Magnehelic gauge",
      "UV germicidal lamp",
    ],
    applications: ["Microbiology", "Cell culture", "Clinical labs"],
  },
  {
    slug: "centrifuge",
    name: "Laboratory Centrifuge",
    category: "biotech",
    image: "/products/biotech/centrifuges.jpg",
    summary:
      "Benchtop and floor-standing centrifuges (refrigerated and non-refrigerated) for sample separation.",
    description:
      "Brushless-motor centrifuges with swing-out and fixed-angle rotor options. Capacities from 4×50 mL up to 6×500 mL.",
    features: [
      "Speed up to 16,000 rpm",
      "Multiple rotor options",
      "Refrigerated variants −10 to +40 °C",
      "Imbalance detection",
    ],
    applications: ["Blood / serum separation", "Cell pelleting", "DNA extraction"],
  },
  {
    slug: "co2-incubator",
    name: "CO₂ Incubator",
    category: "biotech",
    image: "/products/biotech/co-incubator.jpg",
    summary:
      "Cell culture incubator with CO₂, humidity and temperature control for mammalian / plant tissue culture.",
    description:
      "Direct-heat or water-jacketed CO₂ incubator with infrared CO₂ sensor and HEPA-filtered chamber. Standard configuration 150 L / 170 L.",
    features: [
      "CO₂ range 0–20%",
      "Humidity 95% RH (passive)",
      "Temperature ambient +5 to 50 °C",
      "IR CO₂ sensor",
    ],
    applications: ["Mammalian cell culture", "Tissue culture", "Stem cell research"],
  },
  {
    slug: "colony-counter",
    name: "Colony Counter",
    category: "biotech",
    image: "/products/biotech/colony-counters.jpg",
    summary:
      "Digital colony counter with magnifier and pen for accurate microbial colony enumeration.",
    description:
      "Backlit dark-field illumination with adjustable magnification. Auto-counting digital variants also available.",
    features: [
      "Dark-field illumination",
      "Magnifier with cross-hair",
      "4-digit digital display",
      "Petri dish holders included",
    ],
    applications: ["Water microbiology", "Food micro", "Clinical labs"],
  },
  {
    slug: "deep-freezer",
    name: "Deep Freezer (−20 °C)",
    category: "biotech",
    image: "/products/biotech/deep-freezer.jpg",
    summary:
      "Laboratory deep freezer for sample storage from −10 to −25 °C.",
    description:
      "CFC-free, double-walled cabinet with PUF insulation. Available in 100–500 L capacities, vertical or chest-style.",
    features: [
      "Temperature range −10 to −25 °C",
      "Lockable with safety alarm",
      "CFC-free refrigerant",
      "PUF insulation",
    ],
    applications: ["Reagent storage", "Vaccine storage", "Sample archive"],
  },
  {
    slug: "homogenizer",
    name: "Homogenizer",
    category: "biotech",
    image: "/products/biotech/homogenizers.jpg",
    summary:
      "Rotor-stator homogenizer for tissue, sample and emulsion homogenization.",
    description:
      "Variable-speed homogenizer with autoclavable stainless dispersing tools. Sample volumes from 0.5 mL to 2 L.",
    features: [
      "Speed 5,000–30,000 rpm",
      "Autoclavable dispersing tools",
      "Multiple tip diameters",
      "Stand-mountable",
    ],
    applications: ["Tissue homogenization", "Emulsion prep", "Cell lysis"],
  },
  {
    slug: "humidity-stability-chamber",
    name: "Humidity / Stability Chamber",
    category: "biotech",
    image: "/products/biotech/humidity-stability-chamber.jpg",
    summary:
      "Programmable temperature and humidity chamber for ICH-compliant drug stability testing.",
    description:
      "Microprocessor-controlled chamber with PID temperature and humidity control. ICH Q1A storage conditions configurable.",
    features: [
      "Temperature 5 to 60 °C",
      "RH 40 to 95%",
      "ICH Q1A profiles",
      "Touchscreen with 21 CFR Part 11 option",
    ],
    applications: ["Pharmaceutical stability", "Seed studies", "Material aging"],
  },
  {
    slug: "ifm-inverted-fluorescence-microscope",
    name: "Inverted Fluorescence Microscope",
    category: "biotech",
    image: "/products/biotech/ifm.jpg",
    summary:
      "Inverted fluorescence microscope for live-cell imaging and tissue culture observation.",
    description:
      "Trinocular inverted microscope with fluorescence illuminator (Hg or LED) and standard FITC / TRITC / DAPI filter cubes.",
    features: [
      "4×, 10×, 20×, 40× LWD objectives",
      "Hg / LED epi-fluorescence",
      "FITC, TRITC, DAPI filters",
      "Trinocular for camera mounting",
    ],
    applications: ["Live cell imaging", "Fluorescence microscopy", "Cell biology"],
  },
  {
    slug: "laboratory-refrigerator",
    name: "Laboratory Refrigerator",
    category: "biotech",
    image: "/products/biotech/laboratory-refrigerators.jpg",
    summary:
      "Pharmaceutical-grade laboratory refrigerator for vaccines, reagents and biological samples.",
    description:
      "+2 to +8 °C controlled storage with digital display, audible alarm and secure lock. Capacities 100–600 L.",
    features: [
      "Range +2 to +8 °C",
      "Audible / visual alarms",
      "PUF insulation",
      "Lockable doors",
    ],
    applications: ["Vaccine storage", "Reagent storage", "Sample preservation"],
  },
  {
    slug: "laminar-air-flow",
    name: "Laminar Air Flow Cabinet",
    category: "biotech",
    image: "/products/biotech/laf.jpg",
    summary:
      "Horizontal / vertical laminar air flow cabinet (Class 100) for sterile sample handling.",
    description:
      "HEPA-filtered LAF providing ISO Class 5 sterile work zone. Available in horizontal and vertical airflow configurations.",
    features: [
      "ISO Class 5 (Class 100)",
      "HEPA H14 filter",
      "UV germicidal lamp",
      "Horizontal or vertical",
    ],
    applications: ["Tissue culture", "Aseptic dispensing", "Microbiology"],
  },
  {
    slug: "magnetic-stirrer",
    name: "Magnetic Stirrer",
    category: "biotech",
    image: "/products/biotech/magnetic-stirrer.jpg",
    summary:
      "Variable-speed magnetic stirrer for low-viscosity liquid mixing.",
    description:
      "Electronic speed control without mechanical agitation. Stainless steel work surface, suitable for buffers, reagents and cell suspensions.",
    features: [
      "Speed 100–1500 rpm",
      "Stir capacity up to 5 L",
      "Stainless steel top plate",
      "Compact footprint",
    ],
    applications: ["Buffer prep", "Sample mixing", "Reagent dissolution"],
  },
  {
    slug: "magnetic-stirrer-hot-plate",
    name: "Magnetic Stirrer with Hot Plate",
    category: "biotech",
    image: "/products/biotech/magnetic-stirrer-hot-plate.jpg",
    summary:
      "Combined magnetic stirrer + hot plate for heated stirring up to 380 °C.",
    description:
      "Ceramic-coated heating surface with independent temperature and speed control. PT100 probe option for solution-temperature feedback.",
    features: [
      "Plate temperature up to 380 °C",
      "Stir speed 100–1500 rpm",
      "Ceramic-coated top",
      "External PT100 probe input",
    ],
    applications: ["Heated mixing", "Buffer prep", "Synthesis"],
  },
  {
    slug: "orbital-incubator-shaker",
    name: "Orbital / Incubator Shaker",
    category: "biotech",
    image: "/products/biotech/orbital-shakers-incubator-shakers.jpg",
    summary:
      "Temperature-controlled orbital shaker for microbial / cell culture and assay protocols.",
    description:
      "Brushless-motor orbital shaker with optional incubation chamber. Ambient ±5 °C to 60 °C with platform options for flasks and microplates.",
    features: [
      "Speed 30–300 rpm",
      "Ambient +5 °C to 60 °C",
      "Various platform options",
      "Timer and over-temp protection",
    ],
    applications: ["Microbial culture", "Cell culture", "Assay incubation"],
  },
  {
    slug: "overhead-stirrer",
    name: "Overhead Stirrer",
    category: "biotech",
    image: "/products/biotech/overhead-stirrers.jpg",
    summary:
      "High-torque overhead stirrer for viscous samples and large volume mixing.",
    description:
      "Brushless DC motor with torque feedback. Suitable for medium to high viscosity samples up to 50 L.",
    features: [
      "Speed 30–2000 rpm",
      "Torque up to 60 N·cm",
      "Capacity up to 50 L",
      "Multiple impeller options",
    ],
    applications: ["Polymer / paint mixing", "Bioreactor prep", "Viscous samples"],
  },
  {
    slug: "plant-growth-chamber",
    name: "Plant Growth Chamber",
    category: "biotech",
    image: "/products/biotech/plant-growth-chamber.jpg",
    summary:
      "Programmable controlled-environment chamber for plant growth and seed germination research.",
    description:
      "Light / dark cycle, temperature, humidity and CO₂ optionally controlled. Standard with cool-white fluorescent or LED illumination.",
    features: [
      "Temperature 10–50 °C",
      "RH 40–95%",
      "Programmable light cycle",
      "Multiple shelf configurations",
    ],
    applications: ["Plant biology", "Seed germination", "Tissue culture"],
    featured: true,
  },
  {
    slug: "thermal-cycler",
    name: "Thermal Cycler (PCR)",
    category: "biotech",
    image: "/products/biotech/thermal-cycler.jpg",
    summary:
      "96-well gradient thermal cycler for PCR and molecular biology workflows.",
    description:
      "Peltier-driven block with fast ramping and gradient functionality. Touchscreen interface with USB protocol export.",
    features: [
      "96-well 0.2 mL block",
      "Ramp rate up to 5 °C/s",
      "Gradient function",
      "Touchscreen interface",
    ],
    applications: ["PCR amplification", "Molecular biology", "Diagnostics"],
  },
  {
    slug: "ultra-low-temperature-freezer",
    name: "Ultra-Low Temperature Freezer (−86 °C)",
    category: "biotech",
    image: "/products/biotech/ultra-low-temperature-freezers.jpg",
    summary:
      "Cascade-refrigeration ULT freezer for long-term sample storage at −86 °C.",
    description:
      "Vertical or chest configuration with PUF insulation, two-stage cascade compressor and battery-backed alarm.",
    features: [
      "Range −40 to −86 °C",
      "Cascade refrigeration",
      "Backup battery alarm",
      "Multiple capacities",
    ],
    applications: ["Cell line storage", "DNA/RNA archive", "Vaccine storage"],
  },
  {
    slug: "vortex-mixer",
    name: "Vortex Mixer",
    category: "biotech",
    image: "/products/biotech/vortex-mixers.jpg",
    summary:
      "Compact variable-speed vortex mixer for tube agitation and sample mixing.",
    description:
      "Touch / continuous mode operation with foam cup head. Standard for small-volume tube and microplate vortexing.",
    features: [
      "Speed 0–3000 rpm",
      "Touch / continuous modes",
      "Microplate adapter optional",
      "Heavy-duty motor",
    ],
    applications: ["Sample resuspension", "Buffer mixing", "Microbiology"],
  },
  {
    slug: "water-bath",
    name: "Water Bath",
    category: "biotech",
    image: "/products/biotech/water-bath.jpg",
    summary:
      "Constant-temperature water bath for reagent warming and sample incubation.",
    description:
      "Stainless inner chamber, PID controller and over-temperature protection. Capacities 5–30 L, with shaking and circulating variants.",
    features: [
      "Range ambient +5 to 100 °C",
      "Stability ±0.2 °C",
      "Stainless interior",
      "Shaking option available",
    ],
    applications: ["Sample warming", "Enzyme assays", "BOD / serology"],
  },
  {
    slug: "water-purification-system",
    name: "Water Purification System",
    category: "biotech",
    image: "/products/biotech/water-purification-system.jpg",
    summary:
      "Type I / II ultrapure water system with RO + EDI + UV stages for laboratory water.",
    description:
      "Multistage purification producing 18.2 MΩ·cm Type I water for HPLC, molecular biology and analytical labs.",
    features: [
      "Resistivity up to 18.2 MΩ·cm",
      "RO + EDI + UV + UF stages",
      "TOC < 5 ppb (Type I)",
      "10 / 30 / 100 L/h variants",
    ],
    applications: ["HPLC", "PCR / molecular biology", "ICP-MS"],
  },

  // ==================== BALANCES + LABORATORY analytical ====================
  {
    slug: "analytical-balance",
    name: "Analytical Balance",
    category: "balances",
    image: "/products/balances/analytical-balance.jpg",
    summary: "0.1 mg readability analytical balance for precision laboratory weighing.",
    description:
      "Internal-calibration analytical balance with anti-vibration draft shield and built-in level indicator. Standard configurations 220 g / 320 g.",
    features: [
      "Capacity 220 g, readability 0.1 mg",
      "Internal calibration",
      "Wind shield and level indicator",
      "RS-232 / USB output",
    ],
    applications: ["Analytical chemistry", "Pharma QC", "R&D labs"],
    featured: true,
  },
  {
    slug: "precision-balance",
    name: "Precision Balance",
    category: "balances",
    image: "/products/balances/precision-balance.jpg",
    summary: "1 mg readability precision balance for routine laboratory weighing.",
    description:
      "Top-loading precision balance with stainless pan and bright LCD. Capacities 600 g / 1 kg / 3 kg.",
    features: [
      "Readability 1 mg",
      "Stainless steel pan",
      "Multiple weighing units",
      "Auto-calibration option",
    ],
    applications: ["General laboratory", "Sample prep", "Education"],
  },
  {
    slug: "high-precision-balance",
    name: "High Precision Balance",
    category: "balances",
    image: "/products/balances/high-precision-balance.jpg",
    summary: "0.001 g readability balance with extended capacity for general laboratory use.",
    description:
      "1 mg / 10 mg variants with backlit LCD and protective glass shield. Robust mechanical and thermal stability.",
    features: [
      "Readability 0.001 g / 0.01 g",
      "Capacities 600 g – 6 kg",
      "Glass shield",
      "External / internal calibration",
    ],
    applications: ["Lab weighing", "Material QA", "Education"],
  },
  {
    slug: "table-top-balance",
    name: "Table Top Balance",
    category: "balances",
    image: "/products/balances/table-top-balance.jpg",
    summary: "Compact table-top balance for shop-floor and dispatch weighing.",
    description:
      "Rugged stainless platform, large LCD with backlight. Capacities 6 kg / 30 kg / 60 kg.",
    features: [
      "Capacities 6 / 30 / 60 kg",
      "Stainless platform",
      "Battery + AC operation",
      "RS-232 output",
    ],
    applications: ["Industrial weighing", "Dispatch", "Field use"],
  },
  {
    slug: "platform-balance",
    name: "Platform Balance",
    category: "balances",
    image: "/products/balances/platform-balance.jpg",
    summary: "Floor / bench platform scale for heavy-duty weighing up to 500 kg.",
    description:
      "MS / SS construction with detachable indicator. Suitable for warehouse, logistics and manufacturing.",
    features: [
      "Capacity 100 / 300 / 500 kg",
      "Detachable indicator",
      "Stainless deck option",
      "Stamping and verification available",
    ],
    applications: ["Logistics", "Warehouse", "Industrial"],
  },
  {
    slug: "semi-micro-balance",
    name: "Semi-Micro Balance",
    category: "balances",
    image: "/products/balances/semi-micro-balances.jpg",
    summary: "0.01 mg readability semi-micro balance for trace analysis.",
    description:
      "Glass-encased weighing chamber with internal calibration and ergonomic touch controls. For pharma, materials and analytical labs.",
    features: [
      "Capacity 220 g, readability 0.01 mg",
      "Internal calibration",
      "Glass draft shield",
      "Anti-vibration",
    ],
    applications: ["Trace analysis", "Pharma QC", "Reference labs"],
  },
  {
    slug: "density-micro-balance",
    name: "Density / Micro Balance",
    category: "balances",
    image: "/products/balances/density-balance-micro-balance.jpg",
    summary: "Density determination kit on microbalance — solid and liquid density.",
    description:
      "Microbalance with auxiliary density determination kit, including pan-in-water arrangement and software for density calculation.",
    features: [
      "Microbalance with density kit",
      "Solid + liquid density",
      "Density calculation software",
      "Integrated thermometer",
    ],
    applications: ["Materials science", "Polymer QC", "Density studies"],
  },
  {
    slug: "digital-gsm-meter",
    name: "Digital GSM Meter",
    category: "balances",
    image: "/products/balances/digital-gsm-meter.jpg",
    summary: "Fabric weight (g/m²) determination instrument for textile QA.",
    description:
      "Round-cutter sample with digital balance setup configured for direct GSM readout. Standard for textile mills, paper and nonwovens labs.",
    features: [
      "Direct GSM readout",
      "Round cutter included",
      "Digital balance integrated",
      "Battery + AC",
    ],
    applications: ["Textile QA", "Paper testing", "Nonwovens"],
  },
  {
    slug: "spectrophotometer-uv-vis",
    name: "Spectrophotometer (UV-Vis)",
    category: "laboratory",
    image: "/products/laboratory/spectrophotometers-uv-vis.jpg",
    summary: "Double-beam UV-Vis spectrophotometer 200–1100 nm for analytical chemistry.",
    description:
      "Holographic grating, Si photodiode detectors and PC software for kinetics, scan, multi-wavelength and quantification modes.",
    features: [
      "Range 200–1100 nm",
      "Bandwidth 1.8 nm",
      "Tungsten + deuterium lamps",
      "PC software included",
    ],
    applications: ["Quantitative analysis", "Pharma", "Environmental"],
  },
  {
    slug: "flame-photometer",
    name: "Flame Photometer",
    category: "laboratory",
    image: "/products/laboratory/flame-photometers.jpg",
    summary: "Digital flame photometer for Na, K, Li, Ca quantification in solution.",
    description:
      "LPG-fed atomizer with optical filters and photodetectors per element. Standard for clinical and soil-water labs.",
    features: [
      "Elements: Na, K, Li, Ca",
      "Range 0–100 ppm",
      "LPG fuel",
      "Direct concentration readout",
    ],
    applications: ["Soil sodium / potassium", "Clinical electrolytes", "Water"],
  },
  {
    slug: "colorimeter",
    name: "Colorimeter",
    category: "laboratory",
    image: "/products/laboratory/colorimeters.jpg",
    summary: "Visible-range single / dual-cell colorimeter for routine quantitative analysis.",
    description:
      "Filter-based colorimeter with selectable wavelengths for absorbance / transmittance / concentration measurement.",
    features: [
      "Wavelengths 420–660 nm",
      "8 standard filters",
      "Direct concentration readout",
      "Compact bench design",
    ],
    applications: ["Education", "Field labs", "Routine QC"],
  },
  {
    slug: "data-logger",
    name: "Data Logger",
    category: "laboratory",
    image: "/products/laboratory/data-loggers.jpg",
    summary: "Multi-channel data logger for temperature, humidity, voltage and analog signals.",
    description:
      "Battery- or mains-powered logger with USB / RS-232 / Bluetooth output. Standard channels: thermocouple, RTD, voltage, current.",
    features: [
      "Multi-channel input",
      "USB / RS-232 / Bluetooth",
      "Memory up to 1 M readings",
      "Battery + AC operation",
    ],
    applications: ["Field studies", "HVAC validation", "Research"],
  },

  // ==================== MICROSCOPES + LABORATORY heat / sieving ====================
  {
    slug: "research-microscope",
    name: "Research Microscope",
    category: "microscopes",
    image: "/products/microscopes/research.jpg",
    summary:
      "Trinocular research-grade compound microscope with infinity optics for advanced biological and material research.",
    description:
      "Plan achromat / plan apochromat objectives, 5-position nosepiece, Köhler illumination and trinocular head for camera attachment.",
    features: [
      "Infinity-corrected optics",
      "4×, 10×, 40×, 100× plan objectives",
      "Köhler illumination",
      "Trinocular for camera",
    ],
    applications: ["Research", "Pathology", "Cytology"],
    featured: true,
  },
  {
    slug: "polarizing-microscope",
    name: "Polarizing Microscope",
    category: "microscopes",
    image: "/products/microscopes/polarizing.jpg",
    summary: "Polarizing (petrographic) microscope for mineral identification and crystallography.",
    description:
      "Rotating circular stage with vernier, Bertrand lens, polarizer / analyzer and strain-free strain-free objectives.",
    features: [
      "Rotating 360° stage",
      "Bertrand lens",
      "Strain-free polarizing objectives",
      "Conoscopic + orthoscopic",
    ],
    applications: ["Geology", "Mineralogy", "Crystallography"],
  },
  {
    slug: "metallurgical-microscope",
    name: "Metallurgical Microscope",
    category: "microscopes",
    image: "/products/microscopes/metallurgical.jpg",
    summary: "Inverted / upright metallurgical microscope for polished metal sample analysis.",
    description:
      "Reflected-light microscope for opaque samples — grain boundary, inclusion and microstructure inspection.",
    features: [
      "Reflected-light illumination",
      "Plan objectives 5×–100×",
      "Bright field / dark field option",
      "Camera-ready trinocular",
    ],
    applications: ["Metallurgy", "Failure analysis", "Materials QA"],
  },
  {
    slug: "gemological-microscope",
    name: "Gemological Microscope",
    category: "microscopes",
    image: "/products/microscopes/gemological.jpg",
    summary: "Stereo zoom microscope with darkfield illumination for gem identification.",
    description:
      "Zoom 0.7×–4.5× with gem clamp / inclusion light. Standard configuration for gem labs and jewellery testing.",
    features: [
      "Zoom 0.7×–4.5×",
      "Darkfield + brightfield",
      "Gem clamp included",
      "Iris diaphragm",
    ],
    applications: ["Gem identification", "Jewellery QA", "Education"],
  },
  {
    slug: "stereo-zoom-microscope",
    name: "Stereo Zoom Microscope",
    category: "microscopes",
    image: "/products/microscopes/stereo-zoom.jpg",
    summary: "Stereo zoom microscope for 3D sample observation and dissection.",
    description:
      "Zoom range 0.7×–4.5× with LED ring or dual gooseneck illumination. Useful in electronics, biology and education.",
    features: [
      "Zoom 0.7×–4.5×",
      "LED ring / gooseneck",
      "Working distance 95 mm",
      "Trinocular option",
    ],
    applications: ["Electronics inspection", "Biology", "Education"],
  },
  {
    slug: "phase-contrast-microscope",
    name: "Phase Contrast Microscope",
    category: "microscopes",
    image: "/products/microscopes/phase-contrast.jpg",
    summary: "Phase contrast biological microscope for unstained live cell observation.",
    description:
      "Phase annulus turret with phase contrast objectives 10×, 40×, 100×. Suitable for cytology and microbiology.",
    features: [
      "Phase annulus turret",
      "Phase contrast objectives",
      "Köhler illumination",
      "Camera-ready trinocular",
    ],
    applications: ["Live cell imaging", "Cytology", "Microbiology"],
  },
  {
    slug: "inverted-tissue-culture-microscope",
    name: "Inverted Tissue Culture Microscope",
    category: "microscopes",
    image: "/products/microscopes/inverted-tissue-culture.jpg",
    summary: "Inverted microscope for tissue culture observation and live-cell work.",
    description:
      "LWD plan objectives, phase contrast, 4×–40× magnification. For observing samples in tissue culture flasks and Petri dishes.",
    features: [
      "Long-working-distance objectives",
      "Phase contrast 10× / 20× / 40×",
      "Trinocular head",
      "LED illumination",
    ],
    applications: ["Cell culture", "Tissue biology", "IVF / ART"],
  },
  {
    slug: "digital-microscope",
    name: "Digital Microscope",
    category: "microscopes",
    image: "/products/microscopes/digital.jpg",
    summary: "Camera-integrated digital microscope with on-board screen / USB to PC.",
    description:
      "5 MP / 12 MP camera with HDMI / USB output. Built-in measurement and image annotation software.",
    features: [
      "5–12 MP CMOS sensor",
      "HDMI + USB output",
      "Measurement software",
      "LED illumination",
    ],
    applications: ["Inspection", "Education", "QC documentation"],
  },
  {
    slug: "multi-viewing-microscope",
    name: "Multi-Viewing Microscope",
    category: "microscopes",
    image: "/products/microscopes/multi-viewing.jpg",
    summary: "Teaching multi-head microscope (5 / 10-user) for collaborative examination.",
    description:
      "Multi-head viewing system with shared illumination and synchronised pointers. Suitable for teaching and pathology review.",
    features: [
      "5 or 10 viewing heads",
      "Synchronised optical pointer",
      "Shared illumination",
      "Built for institutions",
    ],
    applications: ["Teaching", "Pathology consultation", "Training"],
  },
  {
    slug: "surgical-operating-microscope",
    name: "Surgical / Operating Microscope",
    category: "microscopes",
    image: "/products/microscopes/surgical-operating.jpg",
    summary: "Operating microscope for ENT / dental / ophthalmology surgical procedures.",
    description:
      "5-step magnification turret with apochromatic objectives, fiber-optic coaxial illumination and beam splitter for assistant.",
    features: [
      "5-step magnification",
      "Coaxial fiber-optic illumination",
      "Beam splitter for camera",
      "Floor / ceiling stand options",
    ],
    applications: ["ENT surgery", "Dental", "Ophthalmology"],
  },
  {
    slug: "educational-microscope",
    name: "Educational / Measuring Microscope",
    category: "microscopes",
    image: "/products/microscopes/educational-measuring.jpg",
    summary: "Student / teaching microscope with measuring stage for schools and colleges.",
    description:
      "Robust educational microscope, monocular or binocular, with measuring stage and 4×–100× objectives.",
    features: [
      "Monocular / binocular",
      "Measuring stage",
      "4× / 10× / 40× / 100×",
      "Built for institutional use",
    ],
    applications: ["Schools", "Colleges", "Training"],
  },
  {
    slug: "laboratory-microscope",
    name: "Laboratory Microscope",
    category: "microscopes",
    image: "/products/microscopes/laboratory.jpg",
    summary: "General-purpose binocular / trinocular biological microscope.",
    description:
      "Workhorse compound microscope with 4×, 10×, 40×, 100× achromatic objectives and Abbe condenser. Standard for routine diagnostics.",
    features: [
      "Binocular / trinocular options",
      "4×, 10×, 40×, 100× achromat",
      "Abbe condenser",
      "LED illumination",
    ],
    applications: ["Pathology", "General lab", "Research"],
  },
  {
    slug: "muffle-furnace",
    name: "Muffle Furnace",
    category: "laboratory",
    image: "/products/laboratory/muffle-furnaces.jpg",
    summary: "High-temperature muffle furnace for ashing, sintering and heat treatment.",
    description:
      "Kanthal element muffle with ceramic-fibre insulation and PID controller. Standard sizes 4 L / 7 L / 12 L.",
    features: [
      "Max temperature 1100 / 1200 °C",
      "Ceramic-fibre insulation",
      "PID controller",
      "Programmable ramp / soak",
    ],
    applications: ["Ashing", "Heat treatment", "Coal / soil analysis"],
  },
  {
    slug: "hot-air-oven",
    name: "Hot Air Oven",
    category: "laboratory",
    image: "/products/laboratory/hot-air-oven.jpg",
    summary: "Forced-convection hot air oven for drying and sterilization up to 250 °C.",
    description:
      "Stainless or MS chamber with PID temperature control, perforated shelves and timer. Capacities 30–500 L.",
    features: [
      "Range ambient +10 to 250 °C",
      "PID controller",
      "Stainless / MS chamber",
      "Timer + over-temp protection",
    ],
    applications: ["Drying", "Sterilization", "Sample prep"],
  },
  {
    slug: "heating-mantle",
    name: "Heating Mantle",
    category: "laboratory",
    image: "/products/laboratory/heating-mantles.jpg",
    summary: "Hemispherical heating mantle for round-bottom flask heating up to 450 °C.",
    description:
      "Glass-fibre yarn weave heating element with energy regulator. Capacities 250 mL – 10 L.",
    features: [
      "Capacity 250 mL – 10 L",
      "Energy regulator",
      "Max 450 °C",
      "Stirring variant available",
    ],
    applications: ["Reflux", "Distillation", "Synthesis"],
  },
  {
    slug: "sieve-shaker",
    name: "Sieve Shaker",
    category: "laboratory",
    image: "/products/laboratory/sieve-shakers.jpg",
    summary: "Mechanical sieve shaker for particle size analysis up to 200 mm sieves.",
    description:
      "Vibratory or rotap-style shaker with timer and amplitude control. Standard for soil, aggregate and powder labs.",
    features: [
      "Up to 8 sieves of 200 mm",
      "Vibratory or rotap motion",
      "Digital timer",
      "Sound-damped variants",
    ],
    applications: ["Soil PSD", "Aggregate", "Cement"],
  },
  {
    slug: "test-sieves",
    name: "Test Sieves",
    category: "laboratory",
    image: "/products/laboratory/test-sieves.jpg",
    summary: "ASTM / IS test sieves with brass / stainless mesh for particle sizing.",
    description:
      "Full range of test sieves and accessories — brass and stainless construction in 150 mm / 200 mm / 300 mm diameters.",
    features: [
      "ASTM E11 / IS 460 compliant",
      "Brass + stainless options",
      "100 µm – 125 mm aperture",
      "Lid + receiver included",
    ],
    applications: ["Soil testing", "Aggregate", "Pharmaceutical"],
  },
  {
    slug: "planetary-ball-mill",
    name: "Planetary Ball Mill",
    category: "laboratory",
    image: "/products/laboratory/planetory-ball-mill.jpg",
    summary: "High-energy planetary ball mill for sample grinding to micron / sub-micron size.",
    description:
      "Two- or four-station planetary mill with reversible rotation, programmable timing and protective housing. Stainless / agate / zirconia jars.",
    features: [
      "2 or 4 grinding stations",
      "Speed up to 600 rpm",
      "Stainless / agate / zirconia jars",
      "Programmable timing",
    ],
    applications: ["Geology", "Materials science", "Nano powders"],
  },
];

export const products: Product[] = seeds.map((s) => ({
  brand: "Multi-brand · KMV-supplied",
  features: s.features ?? [],
  applications: s.applications ?? [],
  specs: s.specs,
  externalUrl: inquireMail(s.name),
  ...s,
}));

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function relatedProducts(slug: string, category: string, count = 3) {
  return products.filter((p) => p.category === category && p.slug !== slug).slice(0, count);
}
