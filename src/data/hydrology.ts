// Hydrology range — structured by sub-category. Products link out to the
// manufacturer/source site. Products that come in several models render those
// as sub-cards (each optionally linking to its own page).

export type HydroModel = { name: string; href?: string };

export type HydroProduct = {
  name: string;
  brand?: string;
  description: string;
  href?: string; // outbound link to the source/manufacturer site
  variants?: string[]; // simple textual variants shown as chips
  models?: HydroModel[]; // distinct models shown as sub-cards
};

export type HydroSubCategory = {
  slug: string;
  name: string;
  description: string;
  products: HydroProduct[];
};

export const hydrologyIntro =
  "Hydrological instruments provide the accurate, real-time and long-term data needed to evaluate water availability, predict floods, design irrigation systems and run environmental studies — helping organisations optimise water use, prevent disasters and manage water resources sustainably.";

export const hydrologySubCategories: HydroSubCategory[] = [
  {
    slug: "water-level",
    name: "Water Level Measurement Instruments",
    description:
      "Continuous, accurate water-level monitoring for flood warning, reservoir management, canal regulation and river studies.",
    products: [
      {
        name: "Staff Gauges",
        description:
          "Graduated scale plates installed vertically in water bodies for direct visual readings. Simple, reliable and power-free — ideal for routine observation.",
        variants: ["Enameled iron", "FRP", "Stainless steel", "Sectional / continuous", "Wall or pole mounted"],
      },
      {
        name: "Water Level Recorders",
        description:
          "Mechanical or electronic devices that continuously record water level over time for trend analysis and historical data recording.",
        variants: ["Float-operated", "Pressure-based", "Digital"],
      },
      {
        name: "Level Measurement Devices",
        brand: "Solinst",
        href: "https://www.solinst.com/instruments/level-measurement-devices/",
        description:
          "Durable, field-ready meters and reels with precision laser-marked tapes for groundwater and surface-water level monitoring in hydrogeological, environmental and water-resource applications.",
        models: [
          { name: "Model 101 Water Level Meter" },
          { name: "Model 101D DrawDown Meter" },
          { name: "Model 102 Cable Water Level Meter" },
          { name: "Model 104 Sonic Water Level Meter" },
          { name: "Model 107 TLC Meter" },
          { name: "Model 122 Interface Meter" },
          { name: "Model 105 Well Casing Indicator" },
        ],
      },
      {
        name: "Solinst Dataloggers",
        brand: "Solinst",
        href: "https://www.solinst.com/instruments/dataloggers-and-telemetry-systems/3001-levelogger/",
        description:
          "Automatic water-level loggers that measure and store level and temperature data at set intervals for long-term unattended monitoring.",
        models: [
          { name: "Levelogger 5 — Model 3001", href: "https://www.solinst.com/instruments/dataloggers-and-telemetry-systems/3001-levelogger/" },
          { name: "Barologger 5 — Model 3001", href: "https://www.solinst.com/instruments/dataloggers-and-telemetry-systems/3001-levelogger/levelogger-water-level-dataloggers/barologger-for-barometric-compensation/" },
          { name: "Levelogger Junior 5 — Model 3001", href: "https://www.solinst.com/products/dataloggers-and-telemetry/3001-levelogger-series/levelogger-junior/" },
          { name: "Levelogger LTC 5 — Model 3001", href: "https://www.solinst.com/products/dataloggers-and-telemetry/3001-levelogger-series/ltc-levelogger/" },
          { name: "Rainlogger 5 — Model 3002", href: "https://www.solinst.com/products/dataloggers-and-telemetry/3002-rainlogger/" },
          { name: "LevelVent 5 — Model 3250", href: "https://www.solinst.com/products/dataloggers-and-telemetry/3250-levelvent/levelvent.php" },
          { name: "Water Level Temperature Sensor — Model 301", href: "http://solinst.com/products/dataloggers-and-telemetry/301-water-level-temp-sensor/water-level-temp-sensor.php" },
        ],
      },
      {
        name: "Odyssey Dataflow Environmental Loggers",
        brand: "Odyssey · Dataflow Systems",
        description:
          "Compact, rugged, low-power loggers with sensor and recorder in one waterproof housing for long-term environmental, hydrological and research deployments.",
        models: [
          { name: "Classic Series", href: "https://odysseyloggers.com/product-category/classic/" },
          { name: "Xtreem Series (Bluetooth / cloud)", href: "https://odysseyloggers.com/product-category/xtreem/" },
        ],
      },
      {
        name: "Radar & Ultrasonic Level Sensors",
        description:
          "Non-contact sensors that measure distance to the water surface — ideal for harsh environments, flood conditions or contaminated water where contact sensors may fail.",
        models: [
          { name: "Sino-Inst Radar Water Level Sensor", href: "https://sino-inst.com/radar-water-level-sensor-4-20ma-rs485/" },
          { name: "Sino-Inst Ultrasonic Level Meter", href: "https://sino-inst.com/general-purpose-ultrasonic-level-meter-for-liquids/" },
          { name: "Solinst Sonic Water Level Meter — Model 104", href: "https://www.solinst.com/products/level-measurement-devices/104-sonic-water-level-meter/104.php" },
        ],
      },
    ],
  },
  {
    slug: "flow",
    name: "Flow Measurement Instruments",
    description:
      "Determine how much water moves through a system — essential for irrigation distribution, discharge calculation, flood analysis and hydraulic design.",
    products: [
      {
        name: "Current Meters",
        description:
          "Rotating-cup or propeller devices used to measure water velocity at different depths; velocity data is used to calculate discharge in rivers and canals.",
        models: [
          { name: "KISTERS RB01 Redback Current Meter", href: "https://products.kisters.com.au/products/hardware/water-flow/rb01-redback-current-meter" },
          { name: "KISTERS OSSPC1 Miniature Current Meter", href: "https://products.kisters.com.au/products/hardware/water-flow/osspc1-miniature-current-meter" },
          { name: "KISTERS OSSB1 Universal Current Meter", href: "https://products.kisters.com.au/products/hardware/water-flow/ossb1-universal-current-meter" },
          { name: "JDC Flowatch Current Meter", href: "https://www.jdc.ch/en/current-meters/#flowatch" },
          { name: "JDC EasyFlow Current Meter", href: "https://www.jdc.ch/en/current-meters/#easyflow" },
        ],
      },
      {
        name: "Ultrasonic & Radar Flow Meters",
        description:
          "Measure flow using sound or radar waves — non-intrusive, with no pressure loss, suitable for large pipes and open channels.",
        models: [
          { name: "KISTERS HyQuant Edge L+V (all-in-one station)", href: "https://products.kisters.com.au/products/hardware/water-flow/hyquant-edge-l-v" },
          { name: "KISTERS HyQuant L+V Radar Sensor", href: "https://products.kisters.com.au/products/hardware/water-flow/hyquant-l-v-all-in-one-level-velocity-radar-sensor" },
          { name: "Decatur SVR-3D Surface Velocity Radar", href: "https://decaturelectronics.com/hydrology-products/svr-3d/" },
          { name: "Decatur SI-3L SVR (fixed mount)", href: "https://decaturelectronics.com/hydrology-products/si-3l-svr/" },
        ],
      },
      {
        name: "Weirs",
        description:
          "Precision-engineered flow-measurement structures that determine flow rate in open channels by measuring water level over a calibrated notch or crest.",
        variants: ["V-Notch Weirs", "Rectangular Weirs", "Cipolletti Weirs"],
      },
      {
        name: "Flumes",
        description:
          "Hydraulic structures for measuring flow in open channels with minimal head loss — for irrigation channels, wastewater plants, stormwater systems and research.",
        variants: ["Parshall Flumes", "Cutthroat Flumes", "Trapezoidal Flumes", "H-Type Flumes", "Portable & Fiberglass Flumes"],
      },
      {
        name: "Runoff Samplers",
        description:
          "Systems for collecting and measuring surface runoff for hydrological, agricultural and environmental studies — analysing runoff quantity, sediment transport and water quality.",
        variants: ["Multi-Slot Runoff Samplers", "Coshocton Wheel Samplers", "Portable Runoff Collection", "Sediment Collection Units"],
      },
    ],
  },
  {
    slug: "groundwater",
    name: "Groundwater Monitoring Equipment",
    description:
      "Measure water levels and pressure within aquifers and borewells — key to groundwater assessment, recharge studies and sustainable water-resource management.",
    products: [
      {
        name: "KISTERS iLevel-GW IP Groundwater Logger",
        brand: "KISTERS",
        href: "https://products.kisters.com.au/products/hardware/water-level/ilevel-gw-ip-capable-groundwater-logger",
        description:
          "Low-power, IP-capable groundwater and surface-water monitoring system with rugged stainless/ABS construction, integrated telemetry and Bluetooth for unattended field deployment.",
      },
      {
        name: "KISTERS HyPremo Hydrostatic Pressure Sensor",
        brand: "KISTERS",
        href: "https://products.kisters.com.au/products/hardware/water-level/hypremo",
        description:
          "Compact, programmable vented hydrostatic pressure sensor for continuous level monitoring, with automatic barometric and temperature compensation and SDI-12 communication.",
      },
      {
        name: "Groundwater Samplers",
        brand: "Solinst",
        href: "https://www.solinst.com",
        description:
          "Portable and dedicated sampling systems for representative groundwater sampling — general chemistry, VOCs, metals and discrete-interval samples from shallow to deep wells.",
        models: [
          { name: "Peristaltic Pump — Model 410" },
          { name: "Bladder Pump — Model 407" },
          { name: "Double Valve Pump — Model 408 / 408M" },
          { name: "Inertial Pump — Model 404" },
          { name: "12V Submersible Pump — Model 415" },
          { name: "Discrete Interval Sampler — Model 425 / 425-D" },
          { name: "Point Source Bailer — Model 429" },
          { name: "BioBailer — Model 428" },
        ],
      },
      {
        name: "Direct Push Equipment",
        brand: "Solinst",
        href: "https://www.solinst.com/instruments/direct-push-equipment/",
        description:
          "Low-cost, minimally invasive systems for groundwater sampling, level monitoring, soil-gas sampling and high-resolution subsurface profiling without large drilling rigs.",
        models: [
          { name: "Model 615 Drive-Point Piezometers" },
          { name: "Model 615ML Multilevel Drive-Point Piezometers" },
          { name: "Model 601 Standpipe Piezometers" },
        ],
      },
      {
        name: "Multilevel Groundwater Monitoring Systems",
        brand: "Solinst",
        href: "https://www.solinst.com/instruments/multilevel-systems/",
        description:
          "Depth-discrete monitoring and sampling within a single borehole, isolating multiple zones for accurate vertical profiling while reducing drilling and monitoring costs.",
        models: [
          { name: "Model 401 Waterloo Multilevel System" },
          { name: "Model 403 CMT Multilevel System" },
          { name: "Water FLUTe Systems" },
          { name: "Model 615ML Drive-Point Piezometers" },
        ],
      },
      {
        name: "Solinst FLUTe Systems",
        brand: "Solinst",
        href: "https://www.solinst.com/instruments/solinst-flute/",
        description:
          "Flexible-liner groundwater monitoring and subsurface characterisation systems that create a continuous borehole seal to prevent cross-contamination while enabling depth-discrete sampling.",
        models: [
          { name: "Model 405 Water FLUTe" },
          { name: "NAPL FLUTe" },
          { name: "FACT FLUTe" },
          { name: "Blank Liners & Profiling Systems" },
        ],
      },
    ],
  },
  {
    slug: "sediment",
    name: "Sediment & Silt Measurement Instruments",
    description:
      "Analyse suspended and bed-load sediments in water bodies — essential for studying erosion, sediment transport and reservoir siltation.",
    products: [
      {
        name: "Suspended Solids Monitoring Systems",
        brand: "InsiteIG",
        href: "https://www.insiteig.com/",
        description:
          "Near-infrared optical sensing systems for accurate total suspended solids (TSS) measurement in water and wastewater treatment, environmental monitoring and sediment-runoff studies.",
        models: [
          { name: "Model 15 / 15L Continuous Sensors" },
          { name: "Model 25 Wireless Sensors" },
          { name: "Portable Suspended Solids Sensors (PSS / PSSL)" },
          { name: "Multi-channel Analyzers" },
        ],
      },
      {
        name: "Sediment Sampling Systems",
        brand: "KISTERS",
        href: "https://products.kisters.com.au/products/hardware/sediment-sampling",
        description:
          "Rugged, corrosion-resistant samplers based on internationally recognised designs for collecting suspended-sediment and bedload samples in rivers, streams and reservoirs.",
        models: [
          { name: "DH48 Depth-Integrating Sampler (Wading)" },
          { name: "DH59 & D49 Suspended Sediment Samplers" },
          { name: "RSS Rising Stage Sampler" },
          { name: "BLSH Handheld Bedload Sampler" },
          { name: "BLS30 / BLS48 Bed Load Samplers" },
        ],
      },
    ],
  },
  {
    slug: "water-quality",
    name: "Water Quality Monitoring Instruments",
    description:
      "Precise measurement of parameters such as pH, turbidity, dissolved oxygen and conductivity for environmental monitoring, analysis and industrial compliance.",
    products: [
      {
        name: "Water Quality Monitoring Systems",
        brand: "KISTERS",
        href: "https://products.kisters.com.au/products/hardware/water-quality",
        description:
          "Multi-parameter probes, optical sensors and telemetry-based stations for continuous monitoring of physical, chemical and optical water-quality parameters across many environments.",
        models: [
          { name: "HyQual 200 & 300T Multi-Parameter Probes" },
          { name: "OPUS Spectral Nitrate Sensors" },
          { name: "nanoFlu & matrixFlu Fluorometers" },
          { name: "TTurb Turbidity Sensors" },
          { name: "iBox Water Quality Station" },
        ],
      },
      {
        name: "Eureka Water Quality Systems",
        brand: "Solinst Eureka",
        href: "https://www.solinst.com/instruments/solinst-eureka/",
        description:
          "Multiparameter sondes and sensors for real-time monitoring of surface water, groundwater, wastewater, coastal and aquaculture environments — portable or long-term unattended.",
        models: [
          { name: "Manta+ Series Sondes (20 / 25 / 30 / 35 / 40 / F35)" },
          { name: "Trimeter Sondes" },
          { name: "EasyProbe Water Quality Sondes" },
        ],
      },
      {
        name: "UG5 Series Water Quality Meters",
        brand: "Spectrum Technologies",
        href: "https://www.specmeters.com/products/soilmonitoring/soilmonitoring-water",
        description:
          "Portable multiparameter meters for monitoring surface water, groundwater, irrigation water and aquaculture — measuring pH, ORP, DO, conductivity, salinity, TDS, turbidity, depth and GPS.",
      },
    ],
  },
  {
    slug: "telemetry",
    name: "Data Logging & Telemetry Systems",
    description:
      "Continuous monitoring with remote access to hydrological data — automating real-time collection, transmission and analysis to improve efficiency and reduce manual effort.",
    products: [
      {
        name: "Data Acquisition & Telemetry Systems",
        brand: "KISTERS",
        href: "https://hydrometproducts.kisters.eu/products/hardware/data-acquisition",
        description:
          "Rugged IP-capable loggers, wireless telemetry, IoT sensor nodes and turnkey stations for collecting and transmitting hydrological, meteorological and water-quality data from remote sites.",
        models: [
          { name: "iRIS 270 Wireless Datalogger" },
          { name: "iRIS 350FX Multi-Channel Datalogger" },
          { name: "iRIS 150FX Compact Datalogger" },
          { name: "IoTa LTE-M / NB-IoT Sensor Nodes" },
          { name: "ML1 MiniLog" },
          { name: "iBOX Monitoring Stations" },
        ],
      },
      {
        name: "Dataloggers & Telemetry Systems",
        brand: "Solinst",
        href: "https://www.solinst.com/instruments/dataloggers-and-telemetry-systems/",
        description:
          "Water-level, rainfall and environmental loggers with cellular and satellite telemetry and cloud monitoring for long-term groundwater, surface-water and flood-monitoring networks.",
        models: [
          { name: "LevelSender 5 Cellular Telemetry" },
          { name: "SolSat 5 Satellite Telemetry" },
          { name: "STS Edge Telemetry System" },
          { name: "RRL Remote Radio Link" },
          { name: "Solinst Cloud Platform" },
        ],
      },
    ],
  },
];
