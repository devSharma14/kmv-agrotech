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
      "Constant-temperature BOD incubator and bottle setup for the standard BOD test used in water and wastewater quality assessment. Suitable for municipal testing, pollution control boards and environmental research.",
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
      "COD digester block with thermostatic control for the closed-reflux titrimetric / colorimetric method. Accepts multiple sample tubes.",
    applications: ["Wastewater analysis", "Effluent compliance", "QA/QC"],
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
      "Bench/portable nephelometer with infrared LED source. Includes calibration standards and sample cuvettes.",
    applications: ["Drinking water QA", "WTP monitoring", "Field surveys"],
  },
  {
    slug: "suspended-solids-analyzer",
    name: "Suspended Solids Analyzer",
    category: "laboratory",
    image: "/products/laboratory/suspended-solids.jpg",
    summary:
      "TSS analyser with optical scatter sensor for in-line and suspended solids quantification.",
    description:
      "For total suspended solids in surface water, treatment plants and industrial effluent. Configurable for grab-sample or in-line installation.",
    applications: ["WWTP optimization", "Effluent monitoring", "River sediment"],
  },

  // ==================== LABORATORY — thermometers / hygrometers ====================
  {
    slug: "wet-dry-bulb-thermometers",
    name: "Wet & Dry Bulb Thermometers",
    category: "laboratory",
    image: "/products/laboratory/wet-dry-bulb.jpg",
    summary:
      "Paired wet- and dry-bulb thermometers for measuring relative humidity.",
    description:
      "Reference humidity measurement using two precision thermometers — one freely exposed, one wrapped in wetted muslin. Used in meteorological observations and humidity reference.",
    applications: ["IMD observations", "Humidity reference", "Agro-met"],
  },
  {
    slug: "overhead-stirrer",
    name: "Overhead Stirrer",
    category: "laboratory",
    image: "/products/biotech/overhead-stirrers.jpg",
    summary:
      "High-torque overhead stirrer for viscous samples and large volume mixing.",
    description:
      "Brushless DC motor with torque feedback. Suitable for medium to high viscosity samples and large volumes.",
    applications: ["Polymer / paint mixing", "Bioreactor prep", "Viscous samples"],
  },
  {
    slug: "thermometers",
    name: "Thermometers",
    category: "laboratory",
    image: "/products/laboratory/thermometers-laboratory.jpg",
    summary:
      "Precision mercury / spirit / digital thermometers for soil and meteorological applications.",
    description:
      "Maximum, minimum, dry-bulb, wet-bulb, water, soil and infrared variants — supplied with NABL-traceable calibration on request.",
    applications: ["Agro-met", "Soil temperature", "General use"],
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
      "For soil extracts, water and chemistry. High-resolution readout, multi-point auto-buffer recognition, glass combination electrode included.",
    applications: ["Soil analysis", "Water quality", "Tissue culture media"],
    featured: true,
  },
  // {
  //   slug: "overhead-stirrer",
  //   name: "Overhead Stirrer",
  //   category: "biotech",
  //   image: "/products/biotech/overhead-stirrers.jpg",
  //   summary:
  //     "High-torque overhead stirrer for viscous samples and large volume mixing.",
  //   description:
  //     "Brushless DC motor with torque feedback. Suitable for medium to high viscosity samples and large volumes.",
  //   applications: ["Polymer / paint mixing", "Bioreactor prep", "Viscous samples"],
  // },
  {
    slug: "conductivity-tds-meter",
    name: "Conductivity / TDS Meter",
    category: "laboratory",
    image: "/products/laboratory/conductivity-tds-meters.jpg",
    summary:
      "Digital EC and Total Dissolved Solids meter for soil, irrigation and purified water.",
    description:
      "Microprocessor-based, with multiple measurement modes (EC, TDS, salinity) and a multi-ring conductivity cell. Standard for soil-water solution analysis in agronomy.",
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
    applications: ["Grain QA", "Soil moisture", "Food testing"],
  },
  {
    slug: "autoclave",
    name: "Autoclave",
    category: "biotech",
    image: "/products/biotech/autoclave.jpg",
    summary:
      "Vertical / horizontal steam sterilizer for biological sample sterilization.",
    description:
      "Pressure-controlled steam sterilization, available in vertical, horizontal and benchtop configurations with various chamber sizes.",
    applications: ["Microbiology", "Tissue culture", "Glassware sterilization"],
  },
  {
    slug: "incubator",
    name: "Incubator",
    category: "biotech",
    image: "/products/biotech/bacteriological-incubator.jpg",
    summary:
      "Forced-air incubator for routine microbial culture with precise temperature control.",
    description:
      "Double-walled chamber with PID control, perforated stainless shelves and lit interior. Standard for water-quality, food and clinical microbiology.",
    applications: ["Microbiology", "Coliform testing", "Food testing"],
  },
  {
    slug: "biosafety-cabinet",
    name: "Biosafety Cabinet",
    category: "biotech",
    image: "/products/biotech/biosafety-cabinet.jpg",
    summary:
      "Biosafety cabinet for safe handling of low-to-moderate risk biological agents.",
    description:
      "HEPA-filtered laminar airflow cabinet protecting operator, sample and environment. Balanced inflow and downflow to recognised biosafety standards.",
    applications: ["Microbiology", "Cell culture", "Clinical testing"],
  },
  {
    slug: "centrifuge",
    name: "Centrifuge",
    category: "biotech",
    image: "/products/biotech/centrifuges.jpg",
    summary:
      "Benchtop and floor-standing centrifuges (refrigerated and non-refrigerated) for sample separation.",
    description:
      "Brushless-motor centrifuges with swing-out and fixed-angle rotor options. Available in a range of capacities.",
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
      "Direct-heat or water-jacketed CO₂ incubator with infrared CO₂ sensor and HEPA-filtered chamber. Available in a range of chamber sizes.",
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
    applications: ["Water microbiology", "Food micro", "Clinical testing"],
  },
  {
    slug: "deep-freezer",
    name: "Deep Freezer",
    category: "biotech",
    image: "/products/biotech/deep-freezer.jpg",
    summary:
      "Deep freezer for low-temperature sample storage.",
    description:
      "CFC-free, double-walled cabinet with PUF insulation. Available in a range of capacities, vertical or chest-style.",
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
      "Variable-speed homogenizer with autoclavable stainless dispersing tools. Suitable for a range of sample volumes.",
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
      "Microprocessor-controlled chamber with PID temperature and humidity control. ICH storage conditions configurable.",
    applications: ["Pharmaceutical stability", "Seed studies", "Material aging"],
  },
  {
    slug: "ice-flaking-machine",
    name: "Ice Flaking Machine",
    category: "biotech",
    image: "/products/biotech/ifm.jpg",
    summary:
      "Benchtop ice flaking machine producing flake ice for sample cooling and preservation.",
    description:
      "Produces soft flake ice for keeping samples, reagents and biological materials cold during work, storage and transport.",
    applications: ["Sample cooling", "Reagent storage", "Specimen transport"],
  },
  {
    slug: "refrigerator",
    name: "Refrigerator",
    category: "biotech",
    image: "/products/biotech/laboratory-refrigerators.jpg",
    summary:
      "Pharmaceutical-grade refrigerator for vaccines, reagents and biological samples.",
    description:
      "Precisely controlled cold storage with digital display, audible alarm and secure lock. Available in a range of capacities.",
    applications: ["Vaccine storage", "Reagent storage", "Sample preservation"],
  },
  {
    slug: "laminar-air-flow",
    name: "Laminar Air Flow Cabinet",
    category: "biotech",
    image: "/products/biotech/laf.jpg",
    summary:
      "Horizontal / vertical laminar air flow cabinet for sterile sample handling.",
    description:
      "HEPA-filtered LAF providing a sterile work zone. Available in horizontal and vertical airflow configurations.",
    applications: ["Tissue culture", "Aseptic dispensing", "Microbiology"],
  },
  {
    slug: "magnetic-stirrer",
    name: "Magnetic Stirrer",
    category: "laboratory",
    image: "/products/biotech/magnetic-stirrer.jpg",
    summary:
      "Variable-speed magnetic stirrer for low-viscosity liquid mixing.",
    description:
      "Electronic speed control without mechanical agitation. Stainless steel work surface, suitable for buffers, reagents and cell suspensions.",
    applications: ["Buffer prep", "Sample mixing", "Reagent dissolution"],
  },
  {
    slug: "magnetic-stirrer-hot-plate",
    name: "Magnetic Stirrer with Hot Plate",
    category: "biotech",
    image: "/products/biotech/magnetic-stirrer-hot-plate.jpg",
    summary:
      "Combined magnetic stirrer + hot plate for heated stirring at high temperatures.",
    description:
      "Ceramic-coated heating surface with independent temperature and speed control. Temperature probe option for solution-temperature feedback.",
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
      "Brushless-motor orbital shaker with optional incubation chamber and precise temperature control, with platform options for flasks and microplates.",
    applications: ["Microbial culture", "Cell culture", "Assay incubation"],
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
    applications: ["Plant biology", "Seed germination", "Tissue culture"],
    featured: true,
  },
  {
    slug: "thermal-cycler",
    name: "Thermal Cycler (PCR)",
    category: "biotech",
    image: "/products/biotech/thermal-cycler.jpg",
    summary:
      "Gradient thermal cycler for PCR and molecular biology workflows.",
    description:
      "Peltier-driven block with fast ramping and gradient functionality. Touchscreen interface with USB protocol export.",
    applications: ["PCR amplification", "Molecular biology", "Diagnostics"],
  },
  {
    slug: "ultra-low-temperature-freezer",
    name: "Ultra-Low Temperature Freezer",
    category: "biotech",
    image: "/products/biotech/ultra-low-temperature-freezers.jpg",
    summary:
      "Cascade-refrigeration ULT freezer for long-term ultra-low-temperature sample storage.",
    description:
      "Vertical or chest configuration with PUF insulation, two-stage cascade compressor and battery-backed alarm.",
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
      "Stainless inner chamber, PID controller and over-temperature protection. Available in a range of capacities, with shaking and circulating variants.",
    applications: ["Sample warming", "Enzyme assays", "BOD / serology"],
  },
  {
    slug: "water-purification-system",
    name: "Water Purification System",
    category: "biotech",
    image: "/products/biotech/water-purification-system.jpg",
    summary:
      "Ultrapure water system with RO + EDI + UV stages for ultrapure water.",
    description:
      "Multistage purification producing ultrapure water for HPLC, molecular biology and analytical work.",
    applications: ["HPLC", "PCR / molecular biology", "ICP-MS"],
  },

  // ==================== BALANCES + LABORATORY analytical ====================
  {
    slug: "analytical-balance",
    name: "Analytical Balance",
    category: "balances",
    image: "/products/balances/analytical-balance.jpg",
    summary: "Analytical balance for precision weighing.",
    description:
      "Internal-calibration analytical balance with anti-vibration draft shield and built-in level indicator. Available in a range of capacities.",
    applications: ["Analytical chemistry", "Pharma QC", "R&D"],
    featured: true,
  },
  {
    slug: "precision-balance",
    name: "Precision Balance",
    category: "balances",
    image: "/products/balances/precision-balance.jpg",
    summary: "Precision balance for routine weighing.",
    description:
      "Top-loading precision balance with stainless pan and bright LCD. Available in a range of capacities.",
    applications: ["General use", "Sample prep", "Education"],
  },
  {
    slug: "high-precision-balance",
    name: "High Precision Balance",
    category: "balances",
    image: "/products/balances/high-precision-balance.jpg",
    summary: "High-readability balance with extended capacity for general use.",
    description:
      "Multiple readability variants with backlit LCD and protective glass shield. Robust mechanical and thermal stability.",
    applications: ["Weighing", "Material QA", "Education"],
  },
  {
    slug: "table-top-balance",
    name: "Table Top Balance",
    category: "balances",
    image: "/products/balances/table-top-balance.jpg",
    summary: "Compact table-top balance for shop-floor and dispatch weighing.",
    description:
      "Rugged stainless platform, large LCD with backlight. Available in a range of capacities.",
    applications: ["Industrial weighing", "Dispatch", "Field use"],
  },
  {
    slug: "platform-balance",
    name: "Platform Balance",
    category: "balances",
    image: "/products/balances/platform-balance.jpg",
    summary: "Floor / bench platform scale for heavy-duty weighing.",
    description:
      "MS / SS construction with detachable indicator. Suitable for warehouse, logistics and manufacturing.",
    applications: ["Logistics", "Warehouse", "Industrial"],
  },
  {
    slug: "semi-micro-balance",
    name: "Semi-Micro Balance",
    category: "balances",
    image: "/products/balances/semi-micro-balances.jpg",
    summary: "Semi-micro balance for trace analysis.",
    description:
      "Glass-encased weighing chamber with internal calibration and ergonomic touch controls. For pharma, materials and analytical work.",
    applications: ["Trace analysis", "Pharma QC", "Metrology"],
  },
  {
    slug: "density-micro-balance",
    name: "Density / Micro Balance",
    category: "balances",
    image: "/products/balances/density-balance-micro-balance.jpg",
    summary: "Density determination kit on microbalance — solid and liquid density.",
    description:
      "Microbalance with auxiliary density determination kit, including pan-in-water arrangement and software for density calculation.",
    applications: ["Materials science", "Polymer QC", "Density studies"],
  },
  {
    slug: "digital-gsm-meter",
    name: "Digital GSM Meter",
    category: "balances",
    image: "/products/balances/digital-gsm-meter.jpg",
    summary: "Fabric weight determination instrument for textile QA.",
    description:
      "Round-cutter sample with digital balance setup configured for direct GSM readout. Standard for textile mills, paper and nonwovens testing.",
    applications: ["Textile QA", "Paper testing", "Nonwovens"],
  },
  {
    slug: "spectrophotometer-uv-vis",
    name: "Spectrophotometer (UV-Vis)",
    category: "laboratory",
    image: "/products/laboratory/spectrophotometers-uv-vis.jpg",
    summary: "Double-beam UV-Vis spectrophotometer for analytical chemistry.",
    description:
      "Holographic grating, Si photodiode detectors and PC software for kinetics, scan, multi-wavelength and quantification modes.",
    applications: ["Quantitative analysis", "Pharma", "Environmental"],
  },
  {
    slug: "flame-photometer",
    name: "Flame Photometer",
    category: "laboratory",
    image: "/products/laboratory/flame-photometers.jpg",
    summary: "Digital flame photometer for Na, K, Li, Ca quantification in solution.",
    description:
      "LPG-fed atomizer with optical filters and photodetectors per element. Standard for clinical and soil-water testing.",
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
    applications: ["Education", "Field use", "Routine QC"],
  },
  {
    slug: "data-logger",
    name: "Data Logger",
    category: "laboratory",
    image: "/products/laboratory/data-loggers.jpg",
    summary: "Multi-channel data logger for temperature, humidity, voltage and analog signals.",
    description:
      "Battery- or mains-powered logger with USB and Bluetooth output. Standard channels: thermocouple, RTD, voltage, current.",
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
      "Plan achromat / plan apochromat objectives, multi-position nosepiece, Köhler illumination and trinocular head for camera attachment.",
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
      "Rotating circular stage with vernier, Bertrand lens, polarizer / analyzer and strain-free objectives.",
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
    applications: ["Metallurgy", "Failure analysis", "Materials QA"],
  },
  {
    slug: "gemological-microscope",
    name: "Gemological Microscope",
    category: "microscopes",
    image: "/products/microscopes/gemological.jpg",
    summary: "Stereo zoom microscope with darkfield illumination for gem identification.",
    description:
      "Zoom magnification with gem clamp / inclusion light. Standard configuration for gemmology and jewellery testing.",
    applications: ["Gem identification", "Jewellery QA", "Education"],
  },
  {
    slug: "stereo-zoom-microscope",
    name: "Stereo Zoom Microscope",
    category: "microscopes",
    image: "/products/microscopes/stereo-zoom.jpg",
    summary: "Stereo zoom microscope for 3D sample observation and dissection.",
    description:
      "Wide zoom range with LED ring or dual gooseneck illumination. Useful in electronics, biology and education.",
    applications: ["Electronics inspection", "Biology", "Education"],
  },
  {
    slug: "phase-contrast-microscope",
    name: "Phase Contrast Microscope",
    category: "microscopes",
    image: "/products/microscopes/phase-contrast.jpg",
    summary: "Phase contrast biological microscope for unstained live cell observation.",
    description:
      "Phase annulus turret with a range of phase contrast objectives. Suitable for cytology and microbiology.",
    applications: ["Live cell imaging", "Cytology", "Microbiology"],
  },
  {
    slug: "inverted-tissue-culture-microscope",
    name: "Inverted Tissue Culture Microscope",
    category: "microscopes",
    image: "/products/microscopes/inverted-tissue-culture.jpg",
    summary: "Inverted microscope for tissue culture observation and live-cell work.",
    description:
      "LWD plan objectives, phase contrast and a range of magnifications. For observing samples in tissue culture flasks and Petri dishes.",
    applications: ["Cell culture", "Tissue biology", "IVF / ART"],
  },
  {
    slug: "digital-microscope",
    name: "Digital Microscope",
    category: "microscopes",
    image: "/products/microscopes/digital.jpg",
    summary: "Camera-integrated digital microscope with on-board screen / USB to PC.",
    description:
      "High-resolution camera with HDMI / USB output. Built-in measurement and image annotation software.",
    applications: ["Inspection", "Education", "QC documentation"],
  },
  {
    slug: "multi-viewing-microscope",
    name: "Multi-Viewing Microscope",
    category: "microscopes",
    image: "/products/microscopes/multi-viewing.jpg",
    summary: "Teaching multi-head microscope for collaborative examination.",
    description:
      "Multi-head viewing system with shared illumination and synchronised pointers. Suitable for teaching and pathology review.",
    applications: ["Teaching", "Pathology consultation", "Training"],
  },
  {
    slug: "surgical-operating-microscope",
    name: "Surgical / Operating Microscope",
    category: "microscopes",
    image: "/products/microscopes/surgical-operating.jpg",
    summary: "Operating microscope for ENT / dental / ophthalmology surgical procedures.",
    description:
      "Multi-step magnification turret with apochromatic objectives, fiber-optic coaxial illumination and beam splitter for assistant.",
    applications: ["ENT surgery", "Dental", "Ophthalmology"],
  },
  {
    slug: "educational-microscope",
    name: "Educational / Measuring Microscope",
    category: "microscopes",
    image: "/products/microscopes/educational-measuring.jpg",
    summary: "Student / teaching microscope with measuring stage for schools and colleges.",
    description:
      "Robust educational microscope, monocular or binocular, with measuring stage and a range of objectives.",
    applications: ["Schools", "Colleges", "Training"],
  },
  {
    slug: "microscope",
    name: "Laboratory microscope",
    category: "microscopes",
    image: "/products/microscopes/laboratory.jpg",
    summary: "General-purpose binocular / trinocular biological microscope.",
    description:
      "Workhorse compound microscope with a range of achromatic objectives and Abbe condenser. Standard for routine diagnostics.",
    applications: ["Pathology", "General use", "Research"],
  },
  {
    slug: "muffle-furnace",
    name: "Muffle Furnace",
    category: "laboratory",
    image: "/products/laboratory/muffle-furnaces.jpg",
    summary: "High-temperature muffle furnace for ashing, sintering and heat treatment.",
    description:
      "Kanthal element muffle with ceramic-fibre insulation and PID controller, available in a range of chamber sizes.",
    applications: ["Ashing", "Heat treatment", "Coal / soil analysis"],
  },
  {
    slug: "hot-air-oven",
    name: "Hot Air Oven",
    category: "laboratory",
    image: "/products/laboratory/hot-air-oven.jpg",
    summary: "Forced-convection hot air oven for high-temperature drying and sterilization.",
    description:
      "Stainless or MS chamber with PID temperature control, perforated shelves and timer. Available in a range of capacities.",
    applications: ["Drying", "Sterilization", "Sample prep"],
  },
  {
    slug: "heating-mantle",
    name: "Heating Mantle",
    category: "laboratory",
    image: "/products/laboratory/heating-mantles.jpg",
    summary: "Hemispherical heating mantle for high-temperature round-bottom flask heating.",
    description:
      "Glass-fibre yarn weave heating element with energy regulator. Available in a range of capacities.",
    applications: ["Reflux", "Distillation", "Synthesis"],
  },
  {
    slug: "sieve-shaker",
    name: "Sieve Shaker",
    category: "laboratory",
    image: "/products/laboratory/sieve-shakers.jpg",
    summary: "Mechanical sieve shaker for particle size analysis across a range of sieve sizes.",
    description:
      "Vibratory or rotap-style shaker with timer and amplitude control. Standard for soil, aggregate and powder testing.",
    applications: ["Soil PSD", "Aggregate", "Cement"],
  },
  {
    slug: "test-sieves",
    name: "Test Sieves",
    category: "laboratory",
    image: "/products/laboratory/test-sieves.jpg",
    summary: "ASTM / IS test sieves with brass / stainless mesh for particle sizing.",
    description:
      "Full range of test sieves and accessories — brass and stainless construction in a range of diameters.",
    applications: ["Soil testing", "Aggregate", "Pharmaceutical"],
  },
  {
    slug: "pulverizer",
    name: "Pulverizer",
    category: "laboratory",
    image: "/products/laboratory/planetory-ball-mill.jpg",
    summary: "Pulverizer for grinding samples to fine and sub-micron particle size.",
    description:
      "Multi-station grinding unit with reversible rotation, programmable timing and protective housing, with a choice of grinding jars.",
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
