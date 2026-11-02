/**
 * ELEMENTA — Interactive Periodic Table
 * A clean, editorial-style scientific website inspired by printed science books
 * and modern museum archives.
 *
 * All 118 elements data curated in a single structured array.
 */

// 1. DATASET: All 118 Elements with IUPAC Scientific Properties
const elements = [
  {
    "number": 1,
    "symbol": "H",
    "name": "Hydrogen",
    "atomicMass": "1.008",
    "category": "reactive-nonmetal",
    "period": 1,
    "group": 1,
    "gridRow": 1,
    "gridCol": 1,
    "phase": "Gas",
    "electronConfig": "1s\u00b9",
    "electronegativity": "2.2",
    "meltingPoint": "13.99 K (-259.16 \u00b0C)",
    "boilingPoint": "20.27 K (-252.88 \u00b0C)",
    "density": "0.08988 g/L",
    "discoveredBy": "Henry Cavendish (1766)",
    "origin": "Greek \u2018hydro\u2019 & \u2018genes\u2019 (water-forming)",
    "summary": "Lightest and most abundant element in the cosmos, fueling stellar fusion."
  },
  {
    "number": 2,
    "symbol": "He",
    "name": "Helium",
    "atomicMass": "4.0026",
    "category": "noble-gas",
    "period": 1,
    "group": 18,
    "gridRow": 1,
    "gridCol": 18,
    "phase": "Gas",
    "electronConfig": "1s\u00b2",
    "electronegativity": "N/A",
    "meltingPoint": "0.95 K (-272.2 \u00b0C)",
    "boilingPoint": "4.22 K (-268.93 \u00b0C)",
    "density": "0.1786 g/L",
    "discoveredBy": "Pierre Janssen & Norman Lockyer (1868)",
    "origin": "Greek \u2018helios\u2019 (the Sun)",
    "summary": "Second-most abundant element, non-reactive noble gas crucial in cryogenics."
  },
  {
    "number": 3,
    "symbol": "Li",
    "name": "Lithium",
    "atomicMass": "6.94",
    "category": "alkali-metal",
    "period": 2,
    "group": 1,
    "gridRow": 2,
    "gridCol": 1,
    "phase": "Solid",
    "electronConfig": "[He] 2s\u00b9",
    "electronegativity": "0.98",
    "meltingPoint": "453.65 K (180.5 \u00b0C)",
    "boilingPoint": "1603 K (1330 \u00b0C)",
    "density": "0.534 g/cm\u00b3",
    "discoveredBy": "Johan August Arfwedson (1817)",
    "origin": "Greek \u2018lithos\u2019 (stone)",
    "summary": "Lightest solid metal, indispensable in rechargeable battery energy storage."
  },
  {
    "number": 4,
    "symbol": "Be",
    "name": "Beryllium",
    "atomicMass": "9.0122",
    "category": "alkaline-earth",
    "period": 2,
    "group": 2,
    "gridRow": 2,
    "gridCol": 2,
    "phase": "Solid",
    "electronConfig": "[He] 2s\u00b2",
    "electronegativity": "1.57",
    "meltingPoint": "1560 K (1287 \u00b0C)",
    "boilingPoint": "2742 K (2469 \u00b0C)",
    "density": "1.85 g/cm\u00b3",
    "discoveredBy": "Louis-Nicolas Vauquelin (1798)",
    "origin": "Greek \u2018beryllos\u2019 (beryl mineral)",
    "summary": "High-strength, lightweight metal used in aerospace optics and X-ray windows."
  },
  {
    "number": 5,
    "symbol": "B",
    "name": "Boron",
    "atomicMass": "10.81",
    "category": "metalloid",
    "period": 2,
    "group": 13,
    "gridRow": 2,
    "gridCol": 13,
    "phase": "Solid",
    "electronConfig": "[He] 2s\u00b2 2p\u00b9",
    "electronegativity": "2.04",
    "meltingPoint": "2349 K (2076 \u00b0C)",
    "boilingPoint": "4200 K (3927 \u00b0C)",
    "density": "2.34 g/cm\u00b3",
    "discoveredBy": "Joseph Louis Gay-Lussac & Louis Jacques Th\u00e9nard (1808)",
    "origin": "Arabic \u2018buraq\u2019 (borax)",
    "summary": "Semiconductor metalloid used in heat-resistant borosilicate glass and ceramics."
  },
  {
    "number": 6,
    "symbol": "C",
    "name": "Carbon",
    "atomicMass": "12.011",
    "category": "reactive-nonmetal",
    "period": 2,
    "group": 14,
    "gridRow": 2,
    "gridCol": 14,
    "phase": "Solid",
    "electronConfig": "[He] 2s\u00b2 2p\u00b2",
    "electronegativity": "2.55",
    "meltingPoint": "3915 K (sublimes 3642 \u00b0C)",
    "boilingPoint": "4300 K (4027 \u00b0C)",
    "density": "2.267 g/cm\u00b3 (graphite)",
    "discoveredBy": "Known since antiquity",
    "origin": "Latin \u2018carbo\u2019 (coal)",
    "summary": "Foundational pillar of all known organic life, forming diamond, graphite, and graphene."
  },
  {
    "number": 7,
    "symbol": "N",
    "name": "Nitrogen",
    "atomicMass": "14.007",
    "category": "reactive-nonmetal",
    "period": 2,
    "group": 15,
    "gridRow": 2,
    "gridCol": 15,
    "phase": "Gas",
    "electronConfig": "[He] 2s\u00b2 2p\u00b3",
    "electronegativity": "3.04",
    "meltingPoint": "63.15 K (-210.0 \u00b0C)",
    "boilingPoint": "77.36 K (-195.79 \u00b0C)",
    "density": "1.251 g/L",
    "discoveredBy": "Daniel Rutherford (1772)",
    "origin": "Greek \u2018nitron\u2019 & \u2018genes\u2019 (soda-forming)",
    "summary": "Constitutes 78% of Earth's atmosphere; essential building block of amino acids and DNA."
  },
  {
    "number": 8,
    "symbol": "O",
    "name": "Oxygen",
    "atomicMass": "15.999",
    "category": "reactive-nonmetal",
    "period": 2,
    "group": 16,
    "gridRow": 2,
    "gridCol": 16,
    "phase": "Gas",
    "electronConfig": "[He] 2s\u00b2 2p\u2074",
    "electronegativity": "3.44",
    "meltingPoint": "54.36 K (-218.79 \u00b0C)",
    "boilingPoint": "90.20 K (-182.95 \u00b0C)",
    "density": "1.429 g/L",
    "discoveredBy": "Carl Wilhelm Scheele & Joseph Priestley (1774)",
    "origin": "Greek \u2018oxys\u2019 & \u2018genes\u2019 (acid-forming)",
    "summary": "Most abundant element in Earth's crust by mass; sustains aerobic respiration and combustion."
  },
  {
    "number": 9,
    "symbol": "F",
    "name": "Fluorine",
    "atomicMass": "18.998",
    "category": "reactive-nonmetal",
    "period": 2,
    "group": 17,
    "gridRow": 2,
    "gridCol": 17,
    "phase": "Gas",
    "electronConfig": "[He] 2s\u00b2 2p\u2075",
    "electronegativity": "3.98",
    "meltingPoint": "53.48 K (-219.67 \u00b0C)",
    "boilingPoint": "85.03 K (-188.12 \u00b0C)",
    "density": "1.696 g/L",
    "discoveredBy": "Henri Moissan (1886)",
    "origin": "Latin \u2018fluere\u2019 (to flow)",
    "summary": "Extremely reactive and electronegative halogen, used in fluorochemicals and dental health."
  },
  {
    "number": 10,
    "symbol": "Ne",
    "name": "Neon",
    "atomicMass": "20.180",
    "category": "noble-gas",
    "period": 2,
    "group": 18,
    "gridRow": 2,
    "gridCol": 18,
    "phase": "Gas",
    "electronConfig": "[He] 2s\u00b2 2p\u2076",
    "electronegativity": "N/A",
    "meltingPoint": "24.56 K (-248.59 \u00b0C)",
    "boilingPoint": "27.07 K (-246.08 \u00b0C)",
    "density": "0.9002 g/L",
    "discoveredBy": "Sir William Ramsay & Morris Travers (1898)",
    "origin": "Greek \u2018neos\u2019 (new)",
    "summary": "Inert gas emitting an intense reddish-orange glow under high-voltage electric discharge."
  },
  {
    "number": 11,
    "symbol": "Na",
    "name": "Sodium",
    "atomicMass": "22.990",
    "category": "alkali-metal",
    "period": 3,
    "group": 1,
    "gridRow": 3,
    "gridCol": 1,
    "phase": "Solid",
    "electronConfig": "[Ne] 3s\u00b9",
    "electronegativity": "0.93",
    "meltingPoint": "370.87 K (97.72 \u00b0C)",
    "boilingPoint": "1156 K (883 \u00b0C)",
    "density": "0.968 g/cm\u00b3",
    "discoveredBy": "Humphry Davy (1807)",
    "origin": "Medieval Latin \u2018sodanum\u2019 (headache cure) / Symbol from Natrium",
    "summary": "Soft alkali metal that reacts vigorously with water; essential mineral electrolyte for cellular balance."
  },
  {
    "number": 12,
    "symbol": "Mg",
    "name": "Magnesium",
    "atomicMass": "24.305",
    "category": "alkaline-earth",
    "period": 3,
    "group": 2,
    "gridRow": 3,
    "gridCol": 2,
    "phase": "Solid",
    "electronConfig": "[Ne] 3s\u00b2",
    "electronegativity": "1.31",
    "meltingPoint": "923 K (650 \u00b0C)",
    "boilingPoint": "1363 K (1090 \u00b0C)",
    "density": "1.738 g/cm\u00b3",
    "discoveredBy": "Joseph Black (1755)",
    "origin": "Magnesia district in Thessaly, Greece",
    "summary": "Light structural metal vital for chlorophyll in plant photosynthesis and aerospace alloys."
  },
  {
    "number": 13,
    "symbol": "Al",
    "name": "Aluminium",
    "atomicMass": "26.982",
    "category": "post-transition",
    "period": 3,
    "group": 13,
    "gridRow": 3,
    "gridCol": 13,
    "phase": "Solid",
    "electronConfig": "[Ne] 3s\u00b2 3p\u00b9",
    "electronegativity": "1.61",
    "meltingPoint": "933.47 K (660.32 \u00b0C)",
    "boilingPoint": "2792 K (2519 \u00b0C)",
    "density": "2.70 g/cm\u00b3",
    "discoveredBy": "Hans Christian \u00d8rsted (1825)",
    "origin": "Latin \u2018alumen\u2019 (alum salt)",
    "summary": "Most abundant metal in Earth's crust; prized for low density, ductility, and corrosion resistance."
  },
  {
    "number": 14,
    "symbol": "Si",
    "name": "Silicon",
    "atomicMass": "28.085",
    "category": "metalloid",
    "period": 3,
    "group": 14,
    "gridRow": 3,
    "gridCol": 14,
    "phase": "Solid",
    "electronConfig": "[Ne] 3s\u00b2 3p\u00b2",
    "electronegativity": "1.9",
    "meltingPoint": "1687 K (1414 \u00b0C)",
    "boilingPoint": "3538 K (3265 \u00b0C)",
    "density": "2.329 g/cm\u00b3",
    "discoveredBy": "J\u00f6ns Jacob Berzelius (1824)",
    "origin": "Latin \u2018silex\u2019 (flint)",
    "summary": "Cornerstone of modern semiconductor microelectronics and solar photovoltaic technology."
  },
  {
    "number": 15,
    "symbol": "P",
    "name": "Phosphorus",
    "atomicMass": "30.974",
    "category": "reactive-nonmetal",
    "period": 3,
    "group": 15,
    "gridRow": 3,
    "gridCol": 15,
    "phase": "Solid",
    "electronConfig": "[Ne] 3s\u00b2 3p\u00b3",
    "electronegativity": "2.19",
    "meltingPoint": "317.3 K (44.15 \u00b0C)",
    "boilingPoint": "553.6 K (280.5 \u00b0C)",
    "density": "1.823 g/cm\u00b3 (white)",
    "discoveredBy": "Hennig Brand (1669)",
    "origin": "Greek \u2018phosphoros\u2019 (light-bearer)",
    "summary": "Crucial structural constituent of cell membranes, ATP energy transfer, and DNA phosphate backbones."
  },
  {
    "number": 16,
    "symbol": "S",
    "name": "Sulfur",
    "atomicMass": "32.06",
    "category": "reactive-nonmetal",
    "period": 3,
    "group": 16,
    "gridRow": 3,
    "gridCol": 16,
    "phase": "Solid",
    "electronConfig": "[Ne] 3s\u00b2 3p\u2074",
    "electronegativity": "2.58",
    "meltingPoint": "388.36 K (115.21 \u00b0C)",
    "boilingPoint": "717.8 K (444.6 \u00b0C)",
    "density": "2.07 g/cm\u00b3",
    "discoveredBy": "Known since antiquity",
    "origin": "Sanskrit \u2018sulbere\u2019 / Latin \u2018sulfur\u2019 (brimstone)",
    "summary": "Bright yellow nonmetal used in sulfuric acid synthesis, vulcanized rubber, and biochemical proteins."
  },
  {
    "number": 17,
    "symbol": "Cl",
    "name": "Chlorine",
    "atomicMass": "35.45",
    "category": "reactive-nonmetal",
    "period": 3,
    "group": 17,
    "gridRow": 3,
    "gridCol": 17,
    "phase": "Gas",
    "electronConfig": "[Ne] 3s\u00b2 3p\u2075",
    "electronegativity": "3.16",
    "meltingPoint": "171.6 K (-101.5 \u00b0C)",
    "boilingPoint": "239.11 K (-34.04 \u00b0C)",
    "density": "3.2 g/L",
    "discoveredBy": "Carl Wilhelm Scheele (1774)",
    "origin": "Greek \u2018chloros\u2019 (pale green)",
    "summary": "Pungent halogen used worldwide for municipal water disinfection and PVC polymer synthesis."
  },
  {
    "number": 18,
    "symbol": "Ar",
    "name": "Argon",
    "atomicMass": "39.95",
    "category": "noble-gas",
    "period": 3,
    "group": 18,
    "gridRow": 3,
    "gridCol": 18,
    "phase": "Gas",
    "electronConfig": "[Ne] 3s\u00b2 3p\u2076",
    "electronegativity": "N/A",
    "meltingPoint": "83.81 K (-189.34 \u00b0C)",
    "boilingPoint": "87.30 K (-185.85 \u00b0C)",
    "density": "1.784 g/L",
    "discoveredBy": "Lord Rayleigh & William Ramsay (1894)",
    "origin": "Greek \u2018argos\u2019 (idle, inert)",
    "summary": "Third-most abundant atmospheric gas; provides inert atmospheres for incandescent lamps and welding."
  },
  {
    "number": 19,
    "symbol": "K",
    "name": "Potassium",
    "atomicMass": "39.098",
    "category": "alkali-metal",
    "period": 4,
    "group": 1,
    "gridRow": 4,
    "gridCol": 1,
    "phase": "Solid",
    "electronConfig": "[Ar] 4s\u00b9",
    "electronegativity": "0.82",
    "meltingPoint": "336.7 K (63.5 \u00b0C)",
    "boilingPoint": "1032 K (759 \u00b0C)",
    "density": "0.89 g/cm\u00b3",
    "discoveredBy": "Humphry Davy (1807)",
    "origin": "English \u2018pot ash\u2019 / Symbol from Kalium",
    "summary": "Soft reactive metal critical for biological neural impulse transmission and agricultural fertilizers."
  },
  {
    "number": 20,
    "symbol": "Ca",
    "name": "Calcium",
    "atomicMass": "40.078",
    "category": "alkaline-earth",
    "period": 4,
    "group": 2,
    "gridRow": 4,
    "gridCol": 2,
    "phase": "Solid",
    "electronConfig": "[Ar] 4s\u00b2",
    "electronegativity": "1.0",
    "meltingPoint": "1115 K (842 \u00b0C)",
    "boilingPoint": "1757 K (1484 \u00b0C)",
    "density": "1.55 g/cm\u00b3",
    "discoveredBy": "Humphry Davy (1808)",
    "origin": "Latin \u2018calx\u2019 (lime)",
    "summary": "Essential structural component of teeth, bones, molluscan shells, and architectural concrete."
  },
  {
    "number": 21,
    "symbol": "Sc",
    "name": "Scandium",
    "atomicMass": "44.956",
    "category": "transition-metal",
    "period": 4,
    "group": 3,
    "gridRow": 4,
    "gridCol": 3,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u00b9 4s\u00b2",
    "electronegativity": "1.36",
    "meltingPoint": "1814 K (1541 \u00b0C)",
    "boilingPoint": "3109 K (2836 \u00b0C)",
    "density": "2.985 g/cm\u00b3",
    "discoveredBy": "Lars Fredrik Nilson (1879)",
    "origin": "Latin \u2018Scandia\u2019 (Scandinavia)",
    "summary": "Transition metal alloyed with aluminum to yield lightweight, high-performance structural frames."
  },
  {
    "number": 22,
    "symbol": "Ti",
    "name": "Titanium",
    "atomicMass": "47.867",
    "category": "transition-metal",
    "period": 4,
    "group": 4,
    "gridRow": 4,
    "gridCol": 4,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u00b2 4s\u00b2",
    "electronegativity": "1.54",
    "meltingPoint": "1941 K (1668 \u00b0C)",
    "boilingPoint": "3560 K (3287 \u00b0C)",
    "density": "4.506 g/cm\u00b3",
    "discoveredBy": "William Gregor (1791)",
    "origin": "Titans of Greek mythology",
    "summary": "Remarkable strength-to-density ratio and corrosion resistance; favored for aerospace and orthopedic implants."
  },
  {
    "number": 23,
    "symbol": "V",
    "name": "Vanadium",
    "atomicMass": "50.942",
    "category": "transition-metal",
    "period": 4,
    "group": 5,
    "gridRow": 4,
    "gridCol": 5,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u00b3 4s\u00b2",
    "electronegativity": "1.63",
    "meltingPoint": "2183 K (1910 \u00b0C)",
    "boilingPoint": "3680 K (3407 \u00b0C)",
    "density": "6.11 g/cm\u00b3",
    "discoveredBy": "Andr\u00e9s Manuel del R\u00edo (1801)",
    "origin": "Vanad\u00eds (Norse goddess Freyja)",
    "summary": "Hard transition metal used to produce high-strength steel alloys and large-scale redox flow batteries."
  },
  {
    "number": 24,
    "symbol": "Cr",
    "name": "Chromium",
    "atomicMass": "51.996",
    "category": "transition-metal",
    "period": 4,
    "group": 6,
    "gridRow": 4,
    "gridCol": 6,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u2075 4s\u00b9",
    "electronegativity": "1.66",
    "meltingPoint": "2180 K (1907 \u00b0C)",
    "boilingPoint": "2944 K (2671 \u00b0C)",
    "density": "7.19 g/cm\u00b3",
    "discoveredBy": "Louis-Nicolas Vauquelin (1797)",
    "origin": "Greek \u2018chroma\u2019 (color)",
    "summary": "Imparts rust resistance to stainless steel and produces vivid red ruby and green emerald pigmentation."
  },
  {
    "number": 25,
    "symbol": "Mn",
    "name": "Manganese",
    "atomicMass": "54.938",
    "category": "transition-metal",
    "period": 4,
    "group": 7,
    "gridRow": 4,
    "gridCol": 7,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u2075 4s\u00b2",
    "electronegativity": "1.55",
    "meltingPoint": "1519 K (1246 \u00b0C)",
    "boilingPoint": "2334 K (2061 \u00b0C)",
    "density": "7.21 g/cm\u00b3",
    "discoveredBy": "Johan Gottlieb Gahn (1774)",
    "origin": "Latin \u2018magnes\u2019 (magnet mineral)",
    "summary": "Crucial alloying agent in steelmaking to prevent brittleness; key cofactor in water-splitting enzymes."
  },
  {
    "number": 26,
    "symbol": "Fe",
    "name": "Iron",
    "atomicMass": "55.845",
    "category": "transition-metal",
    "period": 4,
    "group": 8,
    "gridRow": 4,
    "gridCol": 8,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u2076 4s\u00b2",
    "electronegativity": "1.83",
    "meltingPoint": "1811 K (1538 \u00b0C)",
    "boilingPoint": "3134 K (2862 \u00b0C)",
    "density": "7.874 g/cm\u00b3",
    "discoveredBy": "Known since antiquity",
    "origin": "Old English \u2018iren\u2019 / Latin \u2018ferrum\u2019",
    "summary": "Most widely used structural metal in human civilization; central oxygen carrier in biological hemoglobin."
  },
  {
    "number": 27,
    "symbol": "Co",
    "name": "Cobalt",
    "atomicMass": "58.933",
    "category": "transition-metal",
    "period": 4,
    "group": 9,
    "gridRow": 4,
    "gridCol": 9,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u2077 4s\u00b2",
    "electronegativity": "1.88",
    "meltingPoint": "1768 K (1495 \u00b0C)",
    "boilingPoint": "3200 K (2927 \u00b0C)",
    "density": "8.90 g/cm\u00b3",
    "discoveredBy": "Georg Brandt (1735)",
    "origin": "German \u2018kobold\u2019 (goblin/sprite)",
    "summary": "Ferromagnetic metal deployed in lithium-ion cathodes, superalloys, and intense blue glass pigments."
  },
  {
    "number": 28,
    "symbol": "Ni",
    "name": "Nickel",
    "atomicMass": "58.693",
    "category": "transition-metal",
    "period": 4,
    "group": 10,
    "gridRow": 4,
    "gridCol": 10,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u2078 4s\u00b2",
    "electronegativity": "1.91",
    "meltingPoint": "1728 K (1455 \u00b0C)",
    "boilingPoint": "3186 K (2913 \u00b0C)",
    "density": "8.908 g/cm\u00b3",
    "discoveredBy": "Axel Fredrik Cronstedt (1751)",
    "origin": "German \u2018Kupfernickel\u2019 (false copper)",
    "summary": "Corrosion-resistant metal used in coinage, stainless steel, electric vehicle batteries, and plating."
  },
  {
    "number": 29,
    "symbol": "Cu",
    "name": "Copper",
    "atomicMass": "63.546",
    "category": "transition-metal",
    "period": 4,
    "group": 11,
    "gridRow": 4,
    "gridCol": 11,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u00b9\u2070 4s\u00b9",
    "electronegativity": "1.9",
    "meltingPoint": "1357.77 K (1084.62 \u00b0C)",
    "boilingPoint": "2835 K (2562 \u00b0C)",
    "density": "8.96 g/cm\u00b3",
    "discoveredBy": "Known since antiquity",
    "origin": "Latin \u2018cuprum\u2019 (from Cyprus)",
    "summary": "Exceptional electrical and thermal conductivity; fundamental to global power distribution wiring."
  },
  {
    "number": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "atomicMass": "65.38",
    "category": "transition-metal",
    "period": 4,
    "group": 12,
    "gridRow": 4,
    "gridCol": 12,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2",
    "electronegativity": "1.65",
    "meltingPoint": "692.68 K (419.53 \u00b0C)",
    "boilingPoint": "1180 K (907 \u00b0C)",
    "density": "7.14 g/cm\u00b3",
    "discoveredBy": "Known since antiquity",
    "origin": "German \u2018zinke\u2019 (prong/spike)",
    "summary": "Used extensively in galvanizing steel against rust and forming brass; critical enzymatic cofactor."
  },
  {
    "number": 31,
    "symbol": "Ga",
    "name": "Gallium",
    "atomicMass": "69.723",
    "category": "post-transition",
    "period": 4,
    "group": 13,
    "gridRow": 4,
    "gridCol": 13,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2 4p\u00b9",
    "electronegativity": "1.81",
    "meltingPoint": "302.91 K (29.76 \u00b0C)",
    "boilingPoint": "2673 K (2400 \u00b0C)",
    "density": "5.91 g/cm\u00b3",
    "discoveredBy": "Lecoq de Boisbaudran (1875)",
    "origin": "Latin \u2018Gallia\u2019 (France)",
    "summary": "Soft metal that melts in human hands; essential in GaAs optoelectronic chips and blue LEDs."
  },
  {
    "number": 32,
    "symbol": "Ge",
    "name": "Germanium",
    "atomicMass": "72.630",
    "category": "metalloid",
    "period": 4,
    "group": 14,
    "gridRow": 4,
    "gridCol": 14,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2 4p\u00b2",
    "electronegativity": "2.01",
    "meltingPoint": "1211.4 K (938.3 \u00b0C)",
    "boilingPoint": "3106 K (2833 \u00b0C)",
    "density": "5.323 g/cm\u00b3",
    "discoveredBy": "Clemens Winkler (1886)",
    "origin": "Latin \u2018Germania\u2019 (Germany)",
    "summary": "Semiconductor metalloid used in infrared optical lenses, fiber-optic systems, and early transistors."
  },
  {
    "number": 33,
    "symbol": "As",
    "name": "Arsenic",
    "atomicMass": "74.922",
    "category": "metalloid",
    "period": 4,
    "group": 15,
    "gridRow": 4,
    "gridCol": 15,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2 4p\u00b3",
    "electronegativity": "2.18",
    "meltingPoint": "1090 K (sublimes 614 \u00b0C)",
    "boilingPoint": "887 K (sublimes)",
    "density": "5.776 g/cm\u00b3",
    "discoveredBy": "Albertus Magnus (1250)",
    "origin": "Greek \u2018arsenikon\u2019 (potent yellow orpiment)",
    "summary": "Infamous poison historically, yet critical today as a n-type semiconductor dopant in microchips."
  },
  {
    "number": 34,
    "symbol": "Se",
    "name": "Selenium",
    "atomicMass": "78.971",
    "category": "reactive-nonmetal",
    "period": 4,
    "group": 16,
    "gridRow": 4,
    "gridCol": 16,
    "phase": "Solid",
    "electronConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2 4p\u2074",
    "electronegativity": "2.55",
    "meltingPoint": "494 K (221 \u00b0C)",
    "boilingPoint": "958 K (685 \u00b0C)",
    "density": "4.81 g/cm\u00b3",
    "discoveredBy": "J\u00f6ns Jacob Berzelius (1817)",
    "origin": "Greek \u2018selene\u2019 (the Moon)",
    "summary": "Photoconductive nonmetal used in photovoltaic cells, glass decoloring, and antioxidant enzymes."
  },
  {
    "number": 35,
    "symbol": "Br",
    "name": "Bromine",
    "atomicMass": "79.904",
    "category": "reactive-nonmetal",
    "period": 4,
    "group": 17,
    "gridRow": 4,
    "gridCol": 17,
    "phase": "Liquid",
    "electronConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2 4p\u2075",
    "electronegativity": "2.96",
    "meltingPoint": "265.8 K (-7.2 \u00b0C)",
    "boilingPoint": "332.0 K (58.8 \u00b0C)",
    "density": "3.1028 g/cm\u00b3",
    "discoveredBy": "Antoine J\u00e9r\u00f4me Balard (1826)",
    "origin": "Greek \u2018bromos\u2019 (stench)",
    "summary": "Dense reddish-brown fuming liquid nonmetal at room temperature; utilized in flame retardants."
  },
  {
    "number": 36,
    "symbol": "Kr",
    "name": "Krypton",
    "atomicMass": "83.798",
    "category": "noble-gas",
    "period": 4,
    "group": 18,
    "gridRow": 4,
    "gridCol": 18,
    "phase": "Gas",
    "electronConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2 4p\u2076",
    "electronegativity": "3.0",
    "meltingPoint": "115.79 K (-157.36 \u00b0C)",
    "boilingPoint": "119.93 K (-153.22 \u00b0C)",
    "density": "3.749 g/L",
    "discoveredBy": "Sir William Ramsay & Morris Travers (1898)",
    "origin": "Greek \u2018kryptos\u2019 (hidden)",
    "summary": "Noble gas used in high-efficiency airport runway lighting and laser eye surgery instrumentation."
  },
  {
    "number": 37,
    "symbol": "Rb",
    "name": "Rubidium",
    "atomicMass": "85.468",
    "category": "alkali-metal",
    "period": 5,
    "group": 1,
    "gridRow": 5,
    "gridCol": 1,
    "phase": "Solid",
    "electronConfig": "[Kr] 5s\u00b9",
    "electronegativity": "0.82",
    "meltingPoint": "312.46 K (39.31 \u00b0C)",
    "boilingPoint": "961 K (688 \u00b0C)",
    "density": "1.532 g/cm\u00b3",
    "discoveredBy": "Robert Bunsen & Gustav Kirchhoff (1861)",
    "origin": "Latin \u2018rubidus\u2019 (deepest red)",
    "summary": "Highly reactive alkali metal identified by dark red spectral lines; used in atomic frequency standards."
  },
  {
    "number": 38,
    "symbol": "Sr",
    "name": "Strontium",
    "atomicMass": "87.62",
    "category": "alkaline-earth",
    "period": 5,
    "group": 2,
    "gridRow": 5,
    "gridCol": 2,
    "phase": "Solid",
    "electronConfig": "[Kr] 5s\u00b2",
    "electronegativity": "0.95",
    "meltingPoint": "1050 K (777 \u00b0C)",
    "boilingPoint": "1655 K (1382 \u00b0C)",
    "density": "2.64 g/cm\u00b3",
    "discoveredBy": "Adair Crawford (1790)",
    "origin": "Strontian (village in Scotland)",
    "summary": "Imparts brilliant crimson flames to celebratory pyrotechnics; key isotope for archaeological provenance."
  },
  {
    "number": 39,
    "symbol": "Y",
    "name": "Yttrium",
    "atomicMass": "88.906",
    "category": "transition-metal",
    "period": 5,
    "group": 3,
    "gridRow": 5,
    "gridCol": 3,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u00b9 5s\u00b2",
    "electronegativity": "1.22",
    "meltingPoint": "1799 K (1526 \u00b0C)",
    "boilingPoint": "3609 K (3336 \u00b0C)",
    "density": "4.472 g/cm\u00b3",
    "discoveredBy": "Johan Gadolin (1794)",
    "origin": "Ytterby (quarry village in Sweden)",
    "summary": "Rare earth metal deployed in red display phosphors and high-temperature YBCO superconductors."
  },
  {
    "number": 40,
    "symbol": "Zr",
    "name": "Zirconium",
    "atomicMass": "91.224",
    "category": "transition-metal",
    "period": 5,
    "group": 4,
    "gridRow": 4,
    "gridCol": 4,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u00b2 5s\u00b2",
    "electronegativity": "1.33",
    "meltingPoint": "2128 K (1855 \u00b0C)",
    "boilingPoint": "4682 K (4409 \u00b0C)",
    "density": "6.52 g/cm\u00b3",
    "discoveredBy": "Martin Heinrich Klaproth (1789)",
    "origin": "Persian \u2018zargun\u2019 (gold-colored zircon)",
    "summary": "Exceptionally corrosion-resistant and transparent to neutrons; ideal for nuclear reactor cladding."
  },
  {
    "number": 41,
    "symbol": "Nb",
    "name": "Niobium",
    "atomicMass": "92.906",
    "category": "transition-metal",
    "period": 5,
    "group": 5,
    "gridRow": 5,
    "gridCol": 5,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u2074 5s\u00b9",
    "electronegativity": "1.6",
    "meltingPoint": "2750 K (2477 \u00b0C)",
    "boilingPoint": "5017 K (4744 \u00b0C)",
    "density": "8.57 g/cm\u00b3",
    "discoveredBy": "Charles Hatchett (1801)",
    "origin": "Niobe (daughter of Tantalus in Greek myth)",
    "summary": "Superconducting metal alloyed with titanium to forge powerful electromagnets for MRI scanners."
  },
  {
    "number": 42,
    "symbol": "Mo",
    "name": "Molybdenum",
    "atomicMass": "95.95",
    "category": "transition-metal",
    "period": 5,
    "group": 6,
    "gridRow": 5,
    "gridCol": 6,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u2075 5s\u00b9",
    "electronegativity": "2.16",
    "meltingPoint": "2896 K (2623 \u00b0C)",
    "boilingPoint": "4912 K (4639 \u00b0C)",
    "density": "10.28 g/cm\u00b3",
    "discoveredBy": "Carl Wilhelm Scheele (1778)",
    "origin": "Greek \u2018molybdos\u2019 (lead-like mineral)",
    "summary": "Refractory metal with high melting point; reinforces ultra-tough tool steels and industrial catalysts."
  },
  {
    "number": 43,
    "symbol": "Tc",
    "name": "Technetium",
    "atomicMass": "98",
    "category": "transition-metal",
    "period": 5,
    "group": 7,
    "gridRow": 5,
    "gridCol": 7,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u2075 5s\u00b2",
    "electronegativity": "1.9",
    "meltingPoint": "2430 K (2157 \u00b0C)",
    "boilingPoint": "4538 K (4265 \u00b0C)",
    "density": "11 g/cm\u00b3",
    "discoveredBy": "Emilio Segr\u00e8 & Carlo Perrier (1937)",
    "origin": "Greek \u2018technetos\u2019 (artificial)",
    "summary": "First predominantly synthetic element; metastable Tc-99m is the premier radioisotope in medical imaging."
  },
  {
    "number": 44,
    "symbol": "Ru",
    "name": "Ruthenium",
    "atomicMass": "101.07",
    "category": "transition-metal",
    "period": 5,
    "group": 8,
    "gridRow": 5,
    "gridCol": 8,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u2077 5s\u00b9",
    "electronegativity": "2.2",
    "meltingPoint": "2607 K (2334 \u00b0C)",
    "boilingPoint": "4423 K (4150 \u00b0C)",
    "density": "12.45 g/cm\u00b3",
    "discoveredBy": "Karl Ernst Claus (1844)",
    "origin": "Latin \u2018Ruthenia\u2019 (Russia)",
    "summary": "Noble platinum-group metal that hardens alloys and catalyzes electrochemical water purification."
  },
  {
    "number": 45,
    "symbol": "Rh",
    "name": "Rhodium",
    "atomicMass": "102.91",
    "category": "transition-metal",
    "period": 5,
    "group": 9,
    "gridRow": 5,
    "gridCol": 9,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u2078 5s\u00b9",
    "electronegativity": "2.28",
    "meltingPoint": "2237 K (1964 \u00b0C)",
    "boilingPoint": "3968 K (3695 \u00b0C)",
    "density": "12.41 g/cm\u00b3",
    "discoveredBy": "William Hyde Wollaston (1804)",
    "origin": "Greek \u2018rhodon\u2019 (rose color of its salts)",
    "summary": "Among the rarest and most valuable precious metals; primary catalyst reducing toxic auto emissions."
  },
  {
    "number": 46,
    "symbol": "Pd",
    "name": "Palladium",
    "atomicMass": "106.42",
    "category": "transition-metal",
    "period": 5,
    "group": 10,
    "gridRow": 5,
    "gridCol": 10,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u00b9\u2070",
    "electronegativity": "2.2",
    "meltingPoint": "1828.05 K (1554.9 \u00b0C)",
    "boilingPoint": "3236 K (2963 \u00b0C)",
    "density": "12.023 g/cm\u00b3",
    "discoveredBy": "William Hyde Wollaston (1802)",
    "origin": "Asteroid Pallas (discovered shortly prior)",
    "summary": "Remarkably absorbs up to 900 times its volume of hydrogen gas; ubiquitous in automotive catalytic converters."
  },
  {
    "number": 47,
    "symbol": "Ag",
    "name": "Silver",
    "atomicMass": "107.87",
    "category": "transition-metal",
    "period": 5,
    "group": 11,
    "gridRow": 5,
    "gridCol": 11,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u00b9\u2070 5s\u00b9",
    "electronegativity": "1.93",
    "meltingPoint": "1234.93 K (961.78 \u00b0C)",
    "boilingPoint": "2435 K (2162 \u00b0C)",
    "density": "10.49 g/cm\u00b3",
    "discoveredBy": "Known since antiquity",
    "origin": "Old English \u2018seolfor\u2019 / Latin \u2018argentum\u2019",
    "summary": "Highest electrical and thermal conductivity and highest optical reflectivity of all known metals."
  },
  {
    "number": 48,
    "symbol": "Cd",
    "name": "Cadmium",
    "atomicMass": "112.41",
    "category": "transition-metal",
    "period": 5,
    "group": 12,
    "gridRow": 5,
    "gridCol": 12,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2",
    "electronegativity": "1.69",
    "meltingPoint": "594.22 K (321.07 \u00b0C)",
    "boilingPoint": "1040 K (767 \u00b0C)",
    "density": "8.65 g/cm\u00b3",
    "discoveredBy": "Karl Samuel Leberecht Hermann (1817)",
    "origin": "Greek \u2018kadmeia\u2019 (calamine mineral)",
    "summary": "Toxic soft metal historically formulated in yellow pigments and rechargeable nickel-cadmium batteries."
  },
  {
    "number": 49,
    "symbol": "In",
    "name": "Indium",
    "atomicMass": "114.82",
    "category": "post-transition",
    "period": 5,
    "group": 13,
    "gridRow": 5,
    "gridCol": 13,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2 5p\u00b9",
    "electronegativity": "1.78",
    "meltingPoint": "429.75 K (156.60 \u00b0C)",
    "boilingPoint": "2345 K (2072 \u00b0C)",
    "density": "7.31 g/cm\u00b3",
    "discoveredBy": "Ferdinand Reich & Theodor Richter (1863)",
    "origin": "Indigo spectral emission line",
    "summary": "Pliable metal whose oxide (ITO) creates the transparent conductive coatings on touchscreen devices."
  },
  {
    "number": 50,
    "symbol": "Sn",
    "name": "Tin",
    "atomicMass": "118.71",
    "category": "post-transition",
    "period": 5,
    "group": 14,
    "gridRow": 5,
    "gridCol": 14,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2 5p\u00b2",
    "electronegativity": "1.96",
    "meltingPoint": "505.08 K (231.93 \u00b0C)",
    "boilingPoint": "2875 K (2602 \u00b0C)",
    "density": "7.287 g/cm\u00b3",
    "discoveredBy": "Known since antiquity",
    "origin": "Old English \u2018tin\u2019 / Latin \u2018stannum\u2019",
    "summary": "Alloyed with copper since prehistory to usher in the Bronze Age; ubiquitous in electronic solder."
  },
  {
    "number": 51,
    "symbol": "Sb",
    "name": "Antimony",
    "atomicMass": "121.76",
    "category": "metalloid",
    "period": 5,
    "group": 15,
    "gridRow": 5,
    "gridCol": 15,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2 5p\u00b3",
    "electronegativity": "2.05",
    "meltingPoint": "903.78 K (630.63 \u00b0C)",
    "boilingPoint": "1860 K (1587 \u00b0C)",
    "density": "6.697 g/cm\u00b3",
    "discoveredBy": "Known since antiquity",
    "origin": "Greek \u2018anti-monos\u2019 (never alone) / Stibium",
    "summary": "Lustrous grey metalloid applied in flame-retardant polymers and heavy lead-acid battery plates."
  },
  {
    "number": 52,
    "symbol": "Te",
    "name": "Tellurium",
    "atomicMass": "127.60",
    "category": "metalloid",
    "period": 5,
    "group": 16,
    "gridRow": 5,
    "gridCol": 16,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2 5p\u2074",
    "electronegativity": "2.1",
    "meltingPoint": "722.66 K (449.51 \u00b0C)",
    "boilingPoint": "1261 K (988 \u00b0C)",
    "density": "6.24 g/cm\u00b3",
    "discoveredBy": "Franz-Joseph M\u00fcller von Reichenstein (1782)",
    "origin": "Latin \u2018tellus\u2019 (the Earth)",
    "summary": "Brittle silvery metalloid paired with cadmium in thin-film solar photovoltaics (CdTe)."
  },
  {
    "number": 53,
    "symbol": "I",
    "name": "Iodine",
    "atomicMass": "126.90",
    "category": "reactive-nonmetal",
    "period": 5,
    "group": 17,
    "gridRow": 5,
    "gridCol": 17,
    "phase": "Solid",
    "electronConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2 5p\u2075",
    "electronegativity": "2.66",
    "meltingPoint": "386.85 K (113.7 \u00b0C)",
    "boilingPoint": "457.4 K (184.3 \u00b0C)",
    "density": "4.933 g/cm\u00b3",
    "discoveredBy": "Bernard Courtois (1811)",
    "origin": "Greek \u2018ioeides\u2019 (violet-colored)",
    "summary": "Sublimes into a mesmerizing violet vapor; indispensable nutrient for human thyroid hormone synthesis."
  },
  {
    "number": 54,
    "symbol": "Xe",
    "name": "Xenon",
    "atomicMass": "131.29",
    "category": "noble-gas",
    "period": 5,
    "group": 18,
    "gridRow": 5,
    "gridCol": 18,
    "phase": "Gas",
    "electronConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2 5p\u2076",
    "electronegativity": "2.6",
    "meltingPoint": "161.4 K (-111.7 \u00b0C)",
    "boilingPoint": "165.03 K (-108.12 \u00b0C)",
    "density": "5.894 g/L",
    "discoveredBy": "Sir William Ramsay & Morris Travers (1898)",
    "origin": "Greek \u2018xenos\u2019 (stranger, alien)",
    "summary": "Heavy noble gas that powers ion thrusters on deep-space satellites and illuminates flashlamps."
  },
  {
    "number": 55,
    "symbol": "Cs",
    "name": "Caesium",
    "atomicMass": "132.91",
    "category": "alkali-metal",
    "period": 6,
    "group": 1,
    "gridRow": 6,
    "gridCol": 1,
    "phase": "Solid",
    "electronConfig": "[Xe] 6s\u00b9",
    "electronegativity": "0.79",
    "meltingPoint": "301.7 K (28.5 \u00b0C)",
    "boilingPoint": "944 K (671 \u00b0C)",
    "density": "1.93 g/cm\u00b3",
    "discoveredBy": "Robert Bunsen & Gustav Kirchhoff (1860)",
    "origin": "Latin \u2018caesius\u2019 (sky-blue spectral lines)",
    "summary": "Extremely reactive metal; the vibrational frequency of Cs-133 defines the international standard SI second."
  },
  {
    "number": 56,
    "symbol": "Ba",
    "name": "Barium",
    "atomicMass": "137.33",
    "category": "alkaline-earth",
    "period": 6,
    "group": 2,
    "gridRow": 6,
    "gridCol": 2,
    "phase": "Solid",
    "electronConfig": "[Xe] 6s\u00b2",
    "electronegativity": "0.89",
    "meltingPoint": "1000 K (727 \u00b0C)",
    "boilingPoint": "2170 K (1897 \u00b0C)",
    "density": "3.51 g/cm\u00b3",
    "discoveredBy": "Carl Wilhelm Scheele (1772)",
    "origin": "Greek \u2018barys\u2019 (heavy)",
    "summary": "Dense alkaline earth metal whose sulfate is administered as a safe radiocontrast agent for X-rays."
  },
  {
    "number": 57,
    "symbol": "La",
    "name": "Lanthanum",
    "atomicMass": "138.91",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 4,
    "phase": "Solid",
    "electronConfig": "[Xe] 5d\u00b9 6s\u00b2",
    "electronegativity": "1.1",
    "meltingPoint": "1193 K (920 \u00b0C)",
    "boilingPoint": "3737 K (3464 \u00b0C)",
    "density": "6.162 g/cm\u00b3",
    "discoveredBy": "Carl Gustaf Mosander (1839)",
    "origin": "Greek \u2018lanthanein\u2019 (to lie hidden)",
    "summary": "Foundational member of the Lanthanide series, used in studio camera optics and hybrid car batteries."
  },
  {
    "number": 58,
    "symbol": "Ce",
    "name": "Cerium",
    "atomicMass": "140.12",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 5,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9 5d\u00b9 6s\u00b2",
    "electronegativity": "1.12",
    "meltingPoint": "1068 K (795 \u00b0C)",
    "boilingPoint": "3716 K (3443 \u00b0C)",
    "density": "6.77 g/cm\u00b3",
    "discoveredBy": "Martin Heinrich Klaproth (1803)",
    "origin": "Dwarf planet Ceres",
    "summary": "Most abundant rare earth element; active polishing compound for precision glass and catalytic converters."
  },
  {
    "number": 59,
    "symbol": "Pr",
    "name": "Praseodymium",
    "atomicMass": "140.91",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 6,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b3 6s\u00b2",
    "electronegativity": "1.13",
    "meltingPoint": "1208 K (935 \u00b0C)",
    "boilingPoint": "3793 K (3520 \u00b0C)",
    "density": "6.77 g/cm\u00b3",
    "discoveredBy": "Carl Auer von Welsbach (1885)",
    "origin": "Greek \u2018prasios\u2019 & \u2018didymos\u2019 (green twin)",
    "summary": "Soft malleable metal that tints welder's goggles and provides strong magnetic fields when alloyed."
  },
  {
    "number": 60,
    "symbol": "Nd",
    "name": "Neodymium",
    "atomicMass": "144.24",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 7,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u2074 6s\u00b2",
    "electronegativity": "1.14",
    "meltingPoint": "1297 K (1024 \u00b0C)",
    "boilingPoint": "3347 K (3074 \u00b0C)",
    "density": "7.01 g/cm\u00b3",
    "discoveredBy": "Carl Auer von Welsbach (1885)",
    "origin": "Greek \u2018neos\u2019 & \u2018didymos\u2019 (new twin)",
    "summary": "Core constituent of NdFeB permanent magnets that drive wind turbines and electric vehicle motors."
  },
  {
    "number": 61,
    "symbol": "Pm",
    "name": "Promethium",
    "atomicMass": "145",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 8,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u2075 6s\u00b2",
    "electronegativity": "1.13",
    "meltingPoint": "1315 K (1042 \u00b0C)",
    "boilingPoint": "3273 K (3000 \u00b0C)",
    "density": "7.26 g/cm\u00b3",
    "discoveredBy": "Jacob A. Marinsky et al. (1945)",
    "origin": "Prometheus (Greek titan who brought fire)",
    "summary": "Only radioactive lanthanide without stable isotopes; powers long-lived miniature nuclear atomic batteries."
  },
  {
    "number": 62,
    "symbol": "Sm",
    "name": "Samarium",
    "atomicMass": "150.36",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 9,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u2076 6s\u00b2",
    "electronegativity": "1.17",
    "meltingPoint": "1345 K (1072 \u00b0C)",
    "boilingPoint": "2067 K (1794 \u00b0C)",
    "density": "7.52 g/cm\u00b3",
    "discoveredBy": "Lecoq de Boisbaudran (1879)",
    "origin": "Samarskite mineral (named for V. Samarsky)",
    "summary": "Ferromagnetic lanthanide used in heat-resistant SmCo magnets and precision cancer radiotherapy."
  },
  {
    "number": 63,
    "symbol": "Eu",
    "name": "Europium",
    "atomicMass": "151.96",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 10,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u2077 6s\u00b2",
    "electronegativity": "1.2",
    "meltingPoint": "1099 K (826 \u00b0C)",
    "boilingPoint": "1802 K (1529 \u00b0C)",
    "density": "5.244 g/cm\u00b3",
    "discoveredBy": "Eug\u00e8ne-Anatole Demar\u00e7ay (1896)",
    "origin": "Continent of Europe",
    "summary": "Strongly phosphorescent lanthanide that glows red under UV, serving as anti-counterfeiting ink on Euro banknotes."
  },
  {
    "number": 64,
    "symbol": "Gd",
    "name": "Gadolinium",
    "atomicMass": "157.25",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 11,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u2077 5d\u00b9 6s\u00b2",
    "electronegativity": "1.2",
    "meltingPoint": "1585 K (1312 \u00b0C)",
    "boilingPoint": "3546 K (3273 \u00b0C)",
    "density": "7.90 g/cm\u00b3",
    "discoveredBy": "Jean Charles Galissard de Marignac (1880)",
    "origin": "Johan Gadolin (Finnish chemist)",
    "summary": "Remarkable magnetic properties; gadolinium chelates serve as intravenous contrast agents for MRI scans."
  },
  {
    "number": 65,
    "symbol": "Tb",
    "name": "Terbium",
    "atomicMass": "158.93",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 12,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u2079 6s\u00b2",
    "electronegativity": "1.2",
    "meltingPoint": "1629 K (1356 \u00b0C)",
    "boilingPoint": "3503 K (3230 \u00b0C)",
    "density": "8.23 g/cm\u00b3",
    "discoveredBy": "Carl Gustaf Mosander (1843)",
    "origin": "Ytterby quarry in Sweden",
    "summary": "Produces vivid green luminescence in solid-state displays and drives Terfenol-D magnetostrictive sonar."
  },
  {
    "number": 66,
    "symbol": "Dy",
    "name": "Dysprosium",
    "atomicMass": "162.50",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 13,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2070 6s\u00b2",
    "electronegativity": "1.22",
    "meltingPoint": "1680 K (1407 \u00b0C)",
    "boilingPoint": "2840 K (2567 \u00b0C)",
    "density": "8.54 g/cm\u00b3",
    "discoveredBy": "Paul \u00c9mile Lecoq de Boisbaudran (1886)",
    "origin": "Greek \u2018dysprositos\u2019 (hard to get at)",
    "summary": "Possesses one of the highest magnetic strengths; stabilizes high-performance EV motor magnets at elevated temps."
  },
  {
    "number": 67,
    "symbol": "Ho",
    "name": "Holmium",
    "atomicMass": "164.93",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 14,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u00b9 6s\u00b2",
    "electronegativity": "1.23",
    "meltingPoint": "1734 K (1461 \u00b0C)",
    "boilingPoint": "2993 K (2720 \u00b0C)",
    "density": "8.79 g/cm\u00b3",
    "discoveredBy": "Per Teodor Cleve (1879)",
    "origin": "Latin \u2018Holmia\u2019 (Stockholm)",
    "summary": "Has the highest magnetic permeability of any element; focuses fluxes in pole pieces and solid-state lasers."
  },
  {
    "number": 68,
    "symbol": "Er",
    "name": "Erbium",
    "atomicMass": "167.26",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 15,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u00b2 6s\u00b2",
    "electronegativity": "1.24",
    "meltingPoint": "1802 K (1529 \u00b0C)",
    "boilingPoint": "3141 K (2868 \u00b0C)",
    "density": "9.066 g/cm\u00b3",
    "discoveredBy": "Carl Gustaf Mosander (1843)",
    "origin": "Ytterby quarry in Sweden",
    "summary": "Pink-tinted element embedded in fiber-optic optical amplifiers (EDFA) that boost internet signals across oceans."
  },
  {
    "number": 69,
    "symbol": "Tm",
    "name": "Thulium",
    "atomicMass": "168.93",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 16,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u00b3 6s\u00b2",
    "electronegativity": "1.25",
    "meltingPoint": "1818 K (1545 \u00b0C)",
    "boilingPoint": "2223 K (1950 \u00b0C)",
    "density": "9.32 g/cm\u00b3",
    "discoveredBy": "Per Teodor Cleve (1879)",
    "origin": "Thule (mythical northern land)",
    "summary": "Least abundant naturally occurring stable lanthanide; utilized in portable surgical lasers and diagnostic X-rays."
  },
  {
    "number": 70,
    "symbol": "Yb",
    "name": "Ytterbium",
    "atomicMass": "173.05",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 17,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 6s\u00b2",
    "electronegativity": "1.1",
    "meltingPoint": "1097 K (824 \u00b0C)",
    "boilingPoint": "1469 K (1196 \u00b0C)",
    "density": "6.90 g/cm\u00b3",
    "discoveredBy": "Jean Charles Galissard de Marignac (1878)",
    "origin": "Ytterby quarry in Sweden",
    "summary": "Soft silvery metal used as a laser dopant in fiber optics and in ultra-precise optical atomic lattice clocks."
  },
  {
    "number": 71,
    "symbol": "Lu",
    "name": "Lutetium",
    "atomicMass": "174.97",
    "category": "lanthanide",
    "period": 6,
    "group": "N/A",
    "gridRow": 9,
    "gridCol": 18,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9 6s\u00b2",
    "electronegativity": "1.27",
    "meltingPoint": "1925 K (1652 \u00b0C)",
    "boilingPoint": "3675 K (3402 \u00b0C)",
    "density": "9.841 g/cm\u00b3",
    "discoveredBy": "Georges Urbain & Carl Auer von Welsbach (1907)",
    "origin": "Latin \u2018Lutetia\u2019 (ancient Paris)",
    "summary": "Heaviest and hardest of the lanthanides; Lu-177 is a breakthrough targeted radioligand for oncology treatments."
  },
  {
    "number": 72,
    "symbol": "Hf",
    "name": "Hafnium",
    "atomicMass": "178.49",
    "category": "transition-metal",
    "period": 6,
    "group": 4,
    "gridRow": 6,
    "gridCol": 4,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u00b2 6s\u00b2",
    "electronegativity": "1.3",
    "meltingPoint": "2506 K (2233 \u00b0C)",
    "boilingPoint": "4876 K (4603 \u00b0C)",
    "density": "13.31 g/cm\u00b3",
    "discoveredBy": "Dirk Coster & George de Hevesy (1923)",
    "origin": "Latin \u2018Hafnia\u2019 (Copenhagen)",
    "summary": "Neutron-absorbing transition metal applied in nuclear submarine control rods and advanced computer processor gates."
  },
  {
    "number": 73,
    "symbol": "Ta",
    "name": "Tantalum",
    "atomicMass": "180.95",
    "category": "transition-metal",
    "period": 6,
    "group": 5,
    "gridRow": 6,
    "gridCol": 5,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u00b3 6s\u00b2",
    "electronegativity": "1.5",
    "meltingPoint": "3290 K (3017 \u00b0C)",
    "boilingPoint": "5731 K (5458 \u00b0C)",
    "density": "16.69 g/cm\u00b3",
    "discoveredBy": "Anders Gustaf Ekeberg (1802)",
    "origin": "Tantalus of Greek myth",
    "summary": "Corrosion-proof, highly capacitive metal vital for miniature capacitors inside smartphones and laptops."
  },
  {
    "number": 74,
    "symbol": "W",
    "name": "Tungsten",
    "atomicMass": "183.84",
    "category": "transition-metal",
    "period": 6,
    "group": 6,
    "gridRow": 6,
    "gridCol": 6,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u2074 6s\u00b2",
    "electronegativity": "2.36",
    "meltingPoint": "3695 K (3422 \u00b0C)",
    "boilingPoint": "5828 K (5555 \u00b0C)",
    "density": "19.25 g/cm\u00b3",
    "discoveredBy": "Carl Wilhelm Scheele (1781) / Elhuyar brothers",
    "origin": "Swedish \u2018tung sten\u2019 (heavy stone) / Wolfram",
    "summary": "Possesses the highest melting point of all elements; used in aerospace rocket nozzles and ultra-hard drill bits."
  },
  {
    "number": 75,
    "symbol": "Re",
    "name": "Rhenium",
    "atomicMass": "186.21",
    "category": "transition-metal",
    "period": 6,
    "group": 7,
    "gridRow": 6,
    "gridCol": 7,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u2075 6s\u00b2",
    "electronegativity": "1.9",
    "meltingPoint": "3459 K (3186 \u00b0C)",
    "boilingPoint": "5869 K (5596 \u00b0C)",
    "density": "21.02 g/cm\u00b3",
    "discoveredBy": "Masataka Ogawa / Walter Noddack et al. (1925)",
    "origin": "Latin \u2018Rhenus\u2019 (the Rhine river)",
    "summary": "Extremely dense refractory metal alloyed into nickel superalloys for combustion chambers of commercial jet engines."
  },
  {
    "number": 76,
    "symbol": "Os",
    "name": "Osmium",
    "atomicMass": "190.23",
    "category": "transition-metal",
    "period": 6,
    "group": 8,
    "gridRow": 6,
    "gridCol": 8,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u2076 6s\u00b2",
    "electronegativity": "2.2",
    "meltingPoint": "3306 K (3033 \u00b0C)",
    "boilingPoint": "5285 K (5012 \u00b0C)",
    "density": "22.59 g/cm\u00b3",
    "discoveredBy": "Smithson Tennant (1803)",
    "origin": "Greek \u2018osme\u2019 (pungent smell)",
    "summary": "Densest naturally occurring element on Earth, twice as dense as lead; used in wear-resistant electrical contacts."
  },
  {
    "number": 77,
    "symbol": "Ir",
    "name": "Iridium",
    "atomicMass": "192.22",
    "category": "transition-metal",
    "period": 6,
    "group": 9,
    "gridRow": 6,
    "gridCol": 9,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u2077 6s\u00b2",
    "electronegativity": "2.2",
    "meltingPoint": "2719 K (2446 \u00b0C)",
    "boilingPoint": "4701 K (4428 \u00b0C)",
    "density": "22.56 g/cm\u00b3",
    "discoveredBy": "Smithson Tennant (1803)",
    "origin": "Greek \u2018iris\u2019 (rainbow, for colorful salts)",
    "summary": "Most corrosion-resistant metal known; the geological iridium layer marks the end-Cretaceous asteroid impact."
  },
  {
    "number": 78,
    "symbol": "Pt",
    "name": "Platinum",
    "atomicMass": "195.08",
    "category": "transition-metal",
    "period": 6,
    "group": 10,
    "gridRow": 6,
    "gridCol": 10,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u2079 6s\u00b9",
    "electronegativity": "2.28",
    "meltingPoint": "2041.4 K (1768.3 \u00b0C)",
    "boilingPoint": "4098 K (3825 \u00b0C)",
    "density": "21.45 g/cm\u00b3",
    "discoveredBy": "Antonio de Ulloa (1735)",
    "origin": "Spanish \u2018platina\u2019 (little silver)",
    "summary": "Precious, unreactive metal central to catalytic emissions converters, fine jewelry, and cisplatin chemotherapy."
  },
  {
    "number": 79,
    "symbol": "Au",
    "name": "Gold",
    "atomicMass": "196.97",
    "category": "transition-metal",
    "period": 6,
    "group": 11,
    "gridRow": 6,
    "gridCol": 11,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b9",
    "electronegativity": "2.54",
    "meltingPoint": "1337.33 K (1064.18 \u00b0C)",
    "boilingPoint": "3129 K (2856 \u00b0C)",
    "density": "19.30 g/cm\u00b3",
    "discoveredBy": "Known since antiquity",
    "origin": "Old English \u2018gold\u2019 / Latin \u2018aurum\u2019 (shining dawn)",
    "summary": "Immortal noble metal that does not tarnish; sovereign store of value and premier connector metal in electronics."
  },
  {
    "number": 80,
    "symbol": "Hg",
    "name": "Mercury",
    "atomicMass": "200.59",
    "category": "transition-metal",
    "period": 6,
    "group": 12,
    "gridRow": 6,
    "gridCol": 12,
    "phase": "Liquid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2",
    "electronegativity": "2.0",
    "meltingPoint": "234.32 K (-38.83 \u00b0C)",
    "boilingPoint": "629.88 K (356.73 \u00b0C)",
    "density": "13.534 g/cm\u00b3",
    "discoveredBy": "Known since antiquity",
    "origin": "Roman god Mercury / Hydrargyrum (liquid silver)",
    "summary": "Only metallic element that is liquid at standard temperature and pressure; historical agent in barometers."
  },
  {
    "number": 81,
    "symbol": "Tl",
    "name": "Thallium",
    "atomicMass": "204.38",
    "category": "post-transition",
    "period": 6,
    "group": 13,
    "gridRow": 6,
    "gridCol": 13,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2 6p\u00b9",
    "electronegativity": "1.62",
    "meltingPoint": "577 K (304 \u00b0C)",
    "boilingPoint": "1746 K (1473 \u00b0C)",
    "density": "11.85 g/cm\u00b3",
    "discoveredBy": "William Crookes (1861)",
    "origin": "Greek \u2018thallos\u2019 (green shoot/twig)",
    "summary": "Soft malleable post-transition metal; thallium salts were historically notorious poisons and optical glasses."
  },
  {
    "number": 82,
    "symbol": "Pb",
    "name": "Lead",
    "atomicMass": "207.2",
    "category": "post-transition",
    "period": 6,
    "group": 14,
    "gridRow": 6,
    "gridCol": 14,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2 6p\u00b2",
    "electronegativity": "2.33",
    "meltingPoint": "600.61 K (327.46 \u00b0C)",
    "boilingPoint": "2022 K (1749 \u00b0C)",
    "density": "11.34 g/cm\u00b3",
    "discoveredBy": "Known since antiquity",
    "origin": "Old English \u2018lead\u2019 / Latin \u2018plumbum\u2019",
    "summary": "Heavy, pliable metal known since prehistoric antiquity; shields against ionizing gamma radiation and X-rays."
  },
  {
    "number": 83,
    "symbol": "Bi",
    "name": "Bismuth",
    "atomicMass": "208.98",
    "category": "post-transition",
    "period": 6,
    "group": 15,
    "gridRow": 6,
    "gridCol": 15,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2 6p\u00b3",
    "electronegativity": "2.02",
    "meltingPoint": "544.7 K (271.5 \u00b0C)",
    "boilingPoint": "1837 K (1564 \u00b0C)",
    "density": "9.78 g/cm\u00b3",
    "discoveredBy": "Claude Fran\u00e7ois Geoffroy (1753)",
    "origin": "German \u2018Wismuth\u2019 (white mass)",
    "summary": "Heavy metal that forms iridescent stair-step crystals; non-toxic lead alternative used in pharmaceuticals."
  },
  {
    "number": 84,
    "symbol": "Po",
    "name": "Polonium",
    "atomicMass": "209",
    "category": "metalloid",
    "period": 6,
    "group": 16,
    "gridRow": 6,
    "gridCol": 16,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2 6p\u2074",
    "electronegativity": "2.0",
    "meltingPoint": "527 K (254 \u00b0C)",
    "boilingPoint": "1235 K (962 \u00b0C)",
    "density": "9.196 g/cm\u00b3",
    "discoveredBy": "Marie & Pierre Curie (1898)",
    "origin": "Latin \u2018Polonia\u2019 (homeland of Marie Curie)",
    "summary": "Intensely radioactive alpha-emitter discovered in pitchblende; generates thermoelectric power for space probes."
  },
  {
    "number": 85,
    "symbol": "At",
    "name": "Astatine",
    "atomicMass": "210",
    "category": "reactive-nonmetal",
    "period": 6,
    "group": 17,
    "gridRow": 6,
    "gridCol": 17,
    "phase": "Solid",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2 6p\u2075",
    "electronegativity": "2.2",
    "meltingPoint": "575 K (302 \u00b0C)",
    "boilingPoint": "610 K (337 \u00b0C)",
    "density": "6.35 g/cm\u00b3",
    "discoveredBy": "Dale R. Corson et al. (1940)",
    "origin": "Greek \u2018astatos\u2019 (unstable)",
    "summary": "Rarest naturally occurring element in the crust, with less than 1 gram present at any instant on Earth."
  },
  {
    "number": 86,
    "symbol": "Rn",
    "name": "Radon",
    "atomicMass": "222",
    "category": "noble-gas",
    "period": 6,
    "group": 18,
    "gridRow": 6,
    "gridCol": 18,
    "phase": "Gas",
    "electronConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2 6p\u2076",
    "electronegativity": "2.2",
    "meltingPoint": "202 K (-71 \u00b0C)",
    "boilingPoint": "211.3 K (-61.7 \u00b0C)",
    "density": "9.73 g/L",
    "discoveredBy": "Friedrich Ernst Dorn (1900)",
    "origin": "Derived from Radium emission",
    "summary": "Colorless, odorless radioactive noble gas produced by uranium decay; monitored for residential indoor safety."
  },
  {
    "number": 87,
    "symbol": "Fr",
    "name": "Francium",
    "atomicMass": "223",
    "category": "alkali-metal",
    "period": 7,
    "group": 1,
    "gridRow": 7,
    "gridCol": 1,
    "phase": "Solid",
    "electronConfig": "[Rn] 7s\u00b9",
    "electronegativity": "0.7",
    "meltingPoint": "300 K (27 \u00b0C)",
    "boilingPoint": "950 K (677 \u00b0C)",
    "density": "1.87 g/cm\u00b3",
    "discoveredBy": "Marguerite Perey (1939)",
    "origin": "France (homeland of discoverer)",
    "summary": "Second-rarest element in nature; highly radioactive alkali metal with a half-life of only 22 minutes."
  },
  {
    "number": 88,
    "symbol": "Ra",
    "name": "Radium",
    "atomicMass": "226",
    "category": "alkaline-earth",
    "period": 7,
    "group": 2,
    "gridRow": 7,
    "gridCol": 2,
    "phase": "Solid",
    "electronConfig": "[Rn] 7s\u00b2",
    "electronegativity": "0.9",
    "meltingPoint": "973 K (700 \u00b0C)",
    "boilingPoint": "2010 K (1737 \u00b0C)",
    "density": "5.5 g/cm\u00b3",
    "discoveredBy": "Marie & Pierre Curie (1898)",
    "origin": "Latin \u2018radius\u2019 (ray/radiation)",
    "summary": "Intensely radioactive element that glows with faint blue luminescence; landmark discovery in atomic physics."
  },
  {
    "number": 89,
    "symbol": "Ac",
    "name": "Actinium",
    "atomicMass": "227",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 4,
    "phase": "Solid",
    "electronConfig": "[Rn] 6d\u00b9 7s\u00b2",
    "electronegativity": "1.1",
    "meltingPoint": "1323 K (1050 \u00b0C)",
    "boilingPoint": "3471 K (3198 \u00b0C)",
    "density": "10.07 g/cm\u00b3",
    "discoveredBy": "Friedrich Oskar Giesel (1902)",
    "origin": "Greek \u2018aktis\u2019 (beam or ray)",
    "summary": "Gives its name to the Actinide series; luminous blue radioactive metal researched for alpha radiotherapy."
  },
  {
    "number": 90,
    "symbol": "Th",
    "name": "Thorium",
    "atomicMass": "232.04",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 5,
    "phase": "Solid",
    "electronConfig": "[Rn] 6d\u00b2 7s\u00b2",
    "electronegativity": "1.3",
    "meltingPoint": "2115 K (1842 \u00b0C)",
    "boilingPoint": "5061 K (4788 \u00b0C)",
    "density": "11.72 g/cm\u00b3",
    "discoveredBy": "J\u00f6ns Jacob Berzelius (1829)",
    "origin": "Thor (Norse god of thunder)",
    "summary": "Abundant radioactive actinide metal studied as a fertile fuel candidate for next-generation molten salt reactors."
  },
  {
    "number": 91,
    "symbol": "Pa",
    "name": "Protactinium",
    "atomicMass": "231.04",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 6,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b2 6d\u00b9 7s\u00b2",
    "electronegativity": "1.5",
    "meltingPoint": "1841 K (1568 \u00b0C)",
    "boilingPoint": "4300 K (4027 \u00b0C)",
    "density": "15.37 g/cm\u00b3",
    "discoveredBy": "Kasimir Fajans & Oswald G\u00f6hring (1913)",
    "origin": "Greek \u2018protos\u2019 (parent of actinium)",
    "summary": "Dense, silvery actinide metal that forms as a decay intermediary of uranium-235 in nature."
  },
  {
    "number": 92,
    "symbol": "U",
    "name": "Uranium",
    "atomicMass": "238.03",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 7,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b3 6d\u00b9 7s\u00b2",
    "electronegativity": "1.38",
    "meltingPoint": "1405.3 K (1132.2 \u00b0C)",
    "boilingPoint": "4404 K (4131 \u00b0C)",
    "density": "19.1 g/cm\u00b3",
    "discoveredBy": "Martin Heinrich Klaproth (1789)",
    "origin": "Planet Uranus",
    "summary": "Primary fissile fuel powering commercial civil nuclear reactors; dense actinide discovered in pitchblende."
  },
  {
    "number": 93,
    "symbol": "Np",
    "name": "Neptunium",
    "atomicMass": "237",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 8,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u2074 6d\u00b9 7s\u00b2",
    "electronegativity": "1.36",
    "meltingPoint": "917 K (644 \u00b0C)",
    "boilingPoint": "4175 K (3902 \u00b0C)",
    "density": "20.45 g/cm\u00b3",
    "discoveredBy": "Edwin McMillan & Philip Abelson (1940)",
    "origin": "Planet Neptune",
    "summary": "First synthetic transuranic element created in a particle accelerator; precursor in plutonium synthesis."
  },
  {
    "number": 94,
    "symbol": "Pu",
    "name": "Plutonium",
    "atomicMass": "244",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 9,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u2076 7s\u00b2",
    "electronegativity": "1.28",
    "meltingPoint": "912.5 K (639.4 \u00b0C)",
    "boilingPoint": "3501 K (3228 \u00b0C)",
    "density": "19.86 g/cm\u00b3",
    "discoveredBy": "Glenn T. Seaborg et al. (1940)",
    "origin": "Dwarf planet Pluto",
    "summary": "Key fissile transuranic element; Pu-238 heat sources power NASA's Voyager and Mars Perseverance rovers."
  },
  {
    "number": 95,
    "symbol": "Am",
    "name": "Americium",
    "atomicMass": "243",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 10,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u2077 7s\u00b2",
    "electronegativity": "1.3",
    "meltingPoint": "1449 K (1176 \u00b0C)",
    "boilingPoint": "2880 K (2607 \u00b0C)",
    "density": "12 g/cm\u00b3",
    "discoveredBy": "Glenn T. Seaborg et al. (1944)",
    "origin": "The Americas",
    "summary": "Synthetic radioactive actinide whose alpha emissions are harnessed inside household smoke detector sensors."
  },
  {
    "number": 96,
    "symbol": "Cm",
    "name": "Curium",
    "atomicMass": "247",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 11,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u2077 6d\u00b9 7s\u00b2",
    "electronegativity": "1.3",
    "meltingPoint": "1613 K (1340 \u00b0C)",
    "boilingPoint": "3383 K (3110 \u00b0C)",
    "density": "13.51 g/cm\u00b3",
    "discoveredBy": "Glenn T. Seaborg et al. (1944)",
    "origin": "Marie & Pierre Curie",
    "summary": "Luminescent radioactive metal deployed on planetary rovers as an alpha-particle X-ray spectrometer source."
  },
  {
    "number": 97,
    "symbol": "Bk",
    "name": "Berkelium",
    "atomicMass": "247",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 12,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u2079 7s\u00b2",
    "electronegativity": "1.3",
    "meltingPoint": "1259 K (986 \u00b0C)",
    "boilingPoint": "2900 K (2627 \u00b0C)",
    "density": "14.78 g/cm\u00b3",
    "discoveredBy": "Glenn T. Seaborg et al. (1949)",
    "origin": "University of California, Berkeley",
    "summary": "Synthetic actinide synthesized by bombarding americium with alpha particles; target material for tennessine."
  },
  {
    "number": 98,
    "symbol": "Cf",
    "name": "Californium",
    "atomicMass": "251",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 13,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2070 7s\u00b2",
    "electronegativity": "1.3",
    "meltingPoint": "1173 K (900 \u00b0C)",
    "boilingPoint": "1743 K (1470 \u00b0C)",
    "density": "15.1 g/cm\u00b3",
    "discoveredBy": "Glenn T. Seaborg et al. (1950)",
    "origin": "State & University of California",
    "summary": "Potent spontaneous neutron emitter used in airport baggage scanners and nuclear reactor startup sources."
  },
  {
    "number": 99,
    "symbol": "Es",
    "name": "Einsteinium",
    "atomicMass": "252",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 14,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u00b9 7s\u00b2",
    "electronegativity": "1.3",
    "meltingPoint": "1133 K (860 \u00b0C)",
    "boilingPoint": "1269 K (996 \u00b0C)",
    "density": "8.84 g/cm\u00b3",
    "discoveredBy": "Albert Ghiorso et al. (1952)",
    "origin": "Albert Einstein",
    "summary": "Discovered in debris from the Ivy Mike thermonuclear detonation; heavy synthetic actinide."
  },
  {
    "number": 100,
    "symbol": "Fm",
    "name": "Fermium",
    "atomicMass": "257",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 15,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u00b2 7s\u00b2",
    "electronegativity": "1.3",
    "meltingPoint": "1800 K (1527 \u00b0C)",
    "boilingPoint": "N/A",
    "density": "N/A",
    "discoveredBy": "Albert Ghiorso et al. (1952)",
    "origin": "Enrico Fermi",
    "summary": "Heaviest element that can be produced in substantial quantities via neutron bombardment in reactors."
  },
  {
    "number": 101,
    "symbol": "Md",
    "name": "Mendelevium",
    "atomicMass": "258",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 16,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u00b3 7s\u00b2",
    "electronegativity": "1.3",
    "meltingPoint": "1100 K (827 \u00b0C)",
    "boilingPoint": "N/A",
    "density": "N/A",
    "discoveredBy": "Albert Ghiorso et al. (1955)",
    "origin": "Dmitri Mendeleev (creator of periodic table)",
    "summary": "First element produced one atom at a time via light-ion particle accelerators in Berkeley, California."
  },
  {
    "number": 102,
    "symbol": "No",
    "name": "Nobelium",
    "atomicMass": "259",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 17,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 7s\u00b2",
    "electronegativity": "1.3",
    "meltingPoint": "1100 K (827 \u00b0C)",
    "boilingPoint": "N/A",
    "density": "N/A",
    "discoveredBy": "Flyorov Laboratory / Lawrence Berkeley (1966)",
    "origin": "Alfred Nobel (inventor & prize benefactor)",
    "summary": "Radioactive synthetic element with closed 5f subshell; acts as divalent ion in aqueous solution."
  },
  {
    "number": 103,
    "symbol": "Lr",
    "name": "Lawrencium",
    "atomicMass": "266",
    "category": "actinide",
    "period": 7,
    "group": "N/A",
    "gridRow": 10,
    "gridCol": 18,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 7s\u00b2 7p\u00b9",
    "electronegativity": "1.3",
    "meltingPoint": "1900 K (1627 \u00b0C)",
    "boilingPoint": "N/A",
    "density": "15.6 g/cm\u00b3",
    "discoveredBy": "Albert Ghiorso et al. (1961)",
    "origin": "Ernest O. Lawrence (cyclotron pioneer)",
    "summary": "Terminal member of the Actinide series, featuring an anomalous valence p-orbital configuration due to relativity."
  },
  {
    "number": 104,
    "symbol": "Rf",
    "name": "Rutherfordium",
    "atomicMass": "267",
    "category": "transition-metal",
    "period": 7,
    "group": 4,
    "gridRow": 7,
    "gridCol": 4,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u00b2 7s\u00b2",
    "electronegativity": "N/A",
    "meltingPoint": "2400 K (2100 \u00b0C)",
    "boilingPoint": "5800 K (5500 \u00b0C)",
    "density": "23.2 g/cm\u00b3",
    "discoveredBy": "Dubna (1964) / Berkeley (1969)",
    "origin": "Ernest Rutherford (father of nuclear physics)",
    "summary": "First transactinide superheavy element; inaugural 6d transition metal with extremely short-lived isotopes."
  },
  {
    "number": 105,
    "symbol": "Db",
    "name": "Dubnium",
    "atomicMass": "268",
    "category": "transition-metal",
    "period": 7,
    "group": 5,
    "gridRow": 7,
    "gridCol": 5,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u00b3 7s\u00b2",
    "electronegativity": "N/A",
    "meltingPoint": "N/A",
    "boilingPoint": "N/A",
    "density": "29.3 g/cm\u00b3",
    "discoveredBy": "Dubna (1968) / Berkeley (1970)",
    "origin": "Dubna (Russian nuclear research city)",
    "summary": "Superheavy synthetic transition metal belonging to group 5, analogous in chemical bonding to tantalum."
  },
  {
    "number": 106,
    "symbol": "Sg",
    "name": "Seaborgium",
    "atomicMass": "269",
    "category": "transition-metal",
    "period": 7,
    "group": 6,
    "gridRow": 7,
    "gridCol": 6,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u2074 7s\u00b2",
    "electronegativity": "N/A",
    "meltingPoint": "N/A",
    "boilingPoint": "N/A",
    "density": "35.0 g/cm\u00b3",
    "discoveredBy": "Lawrence Berkeley Laboratory (1974)",
    "origin": "Glenn T. Seaborg (actinide pioneer)",
    "summary": "Group 6 transactinide transition metal; named after a living scientist amid international debate."
  },
  {
    "number": 107,
    "symbol": "Bh",
    "name": "Bohrium",
    "atomicMass": "270",
    "category": "transition-metal",
    "period": 7,
    "group": 7,
    "gridRow": 7,
    "gridCol": 7,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u2075 7s\u00b2",
    "electronegativity": "N/A",
    "meltingPoint": "N/A",
    "boilingPoint": "N/A",
    "density": "37.1 g/cm\u00b3",
    "discoveredBy": "GSI Darmstadt, Germany (1981)",
    "origin": "Niels Bohr (quantum model of the atom)",
    "summary": "Superheavy transition metal confirmed to form volatile oxychloride compounds analogous to rhenium."
  },
  {
    "number": 108,
    "symbol": "Hs",
    "name": "Hassium",
    "atomicMass": "269",
    "category": "transition-metal",
    "period": 7,
    "group": 8,
    "gridRow": 7,
    "gridCol": 8,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u2076 7s\u00b2",
    "electronegativity": "N/A",
    "meltingPoint": "N/A",
    "boilingPoint": "N/A",
    "density": "40.7 g/cm\u00b3",
    "discoveredBy": "GSI Darmstadt, Germany (1984)",
    "origin": "Latin \u2018Hassia\u2019 (German state of Hesse)",
    "summary": "Group 8 superheavy metal shown experimentally to form volatile tetroxide HsO\u2084 like osmium."
  },
  {
    "number": 109,
    "symbol": "Mt",
    "name": "Meitnerium",
    "atomicMass": "278",
    "category": "transition-metal",
    "period": 7,
    "group": 9,
    "gridRow": 7,
    "gridCol": 9,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u2077 7s\u00b2",
    "electronegativity": "N/A",
    "meltingPoint": "N/A",
    "boilingPoint": "N/A",
    "density": "37.4 g/cm\u00b3",
    "discoveredBy": "GSI Darmstadt, Germany (1982)",
    "origin": "Lise Meitner (nuclear fission discoverer)",
    "summary": "Superheavy element named in honor of physicist Lise Meitner; produced by cold fusion of bismuth and iron."
  },
  {
    "number": 110,
    "symbol": "Ds",
    "name": "Darmstadtium",
    "atomicMass": "281",
    "category": "transition-metal",
    "period": 7,
    "group": 10,
    "gridRow": 7,
    "gridCol": 10,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u2078 7s\u00b2",
    "electronegativity": "N/A",
    "meltingPoint": "N/A",
    "boilingPoint": "N/A",
    "density": "34.8 g/cm\u00b3",
    "discoveredBy": "GSI Darmstadt, Germany (1994)",
    "origin": "Darmstadt, Germany (location of GSI)",
    "summary": "Group 10 synthetic superheavy element produced through heavy-ion fusion of nickel-64 and lead-208."
  },
  {
    "number": 111,
    "symbol": "Rg",
    "name": "Roentgenium",
    "atomicMass": "282",
    "category": "transition-metal",
    "period": 7,
    "group": 11,
    "gridRow": 7,
    "gridCol": 11,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u2079 7s\u00b2",
    "electronegativity": "N/A",
    "meltingPoint": "N/A",
    "boilingPoint": "N/A",
    "density": "28.7 g/cm\u00b3",
    "discoveredBy": "GSI Darmstadt, Germany (1994)",
    "origin": "Wilhelm Conrad R\u00f6ntgen (X-ray discoverer)",
    "summary": "Group 11 superheavy coinage homologue; undergoes alpha decay with half-lives on the order of seconds."
  },
  {
    "number": 112,
    "symbol": "Cn",
    "name": "Copernicium",
    "atomicMass": "285",
    "category": "transition-metal",
    "period": 7,
    "group": 12,
    "gridRow": 7,
    "gridCol": 12,
    "phase": "Liquid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2",
    "electronegativity": "N/A",
    "meltingPoint": "N/A",
    "boilingPoint": "357 K (84 \u00b0C)",
    "density": "23.7 g/cm\u00b3",
    "discoveredBy": "GSI Darmstadt, Germany (1996)",
    "origin": "Nicolaus Copernicus (heliocentric astronomer)",
    "summary": "Extremely volatile group 12 element; relativistic electron orbital contraction makes it behave like a noble gas."
  },
  {
    "number": 113,
    "symbol": "Nh",
    "name": "Nihonium",
    "atomicMass": "286",
    "category": "post-transition",
    "period": 7,
    "group": 13,
    "gridRow": 7,
    "gridCol": 13,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2 7p\u00b9",
    "electronegativity": "N/A",
    "meltingPoint": "700 K (430 \u00b0C)",
    "boilingPoint": "1400 K (1130 \u00b0C)",
    "density": "16 g/cm\u00b3",
    "discoveredBy": "RIKEN, Japan (2004)",
    "origin": "Japanese \u2018Nihon\u2019 (Japan, land of rising sun)",
    "summary": "First chemical element discovered in Asia; created via zinc-70 bombardment of bismuth-209 target."
  },
  {
    "number": 114,
    "symbol": "Fl",
    "name": "Flerovium",
    "atomicMass": "289",
    "category": "post-transition",
    "period": 7,
    "group": 14,
    "gridRow": 7,
    "gridCol": 14,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2 7p\u00b2",
    "electronegativity": "N/A",
    "meltingPoint": "340 K (67 \u00b0C)",
    "boilingPoint": "420 K (147 \u00b0C)",
    "density": "14 g/cm\u00b3",
    "discoveredBy": "Dubna & LLNL (1998)",
    "origin": "Flerov Laboratory of Nuclear Reactions",
    "summary": "Superheavy element situated near the theoretical island of nuclear stability; displays noble-metal character."
  },
  {
    "number": 115,
    "symbol": "Mc",
    "name": "Moscovium",
    "atomicMass": "290",
    "category": "post-transition",
    "period": 7,
    "group": 15,
    "gridRow": 7,
    "gridCol": 15,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2 7p\u00b3",
    "electronegativity": "N/A",
    "meltingPoint": "670 K (400 \u00b0C)",
    "boilingPoint": "1400 K (1100 \u00b0C)",
    "density": "13.5 g/cm\u00b3",
    "discoveredBy": "Dubna, LLNL & ORNL (2003)",
    "origin": "Moscow Oblast, Russia",
    "summary": "Superheavy pnictogen element synthesized by bombarding americium-243 with calcium-48 beams."
  },
  {
    "number": 116,
    "symbol": "Lv",
    "name": "Livermorium",
    "atomicMass": "293",
    "category": "post-transition",
    "period": 7,
    "group": 16,
    "gridRow": 7,
    "gridCol": 16,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2 7p\u2074",
    "electronegativity": "N/A",
    "meltingPoint": "709 K (436 \u00b0C)",
    "boilingPoint": "1085 K (812 \u00b0C)",
    "density": "12.9 g/cm\u00b3",
    "discoveredBy": "Dubna & LLNL (2000)",
    "origin": "Lawrence Livermore National Laboratory",
    "summary": "Group 16 superheavy synthetic homologue of polonium; produced via curium-248 and calcium-48 fusion."
  },
  {
    "number": 117,
    "symbol": "Ts",
    "name": "Tennessine",
    "atomicMass": "294",
    "category": "unknown",
    "period": 7,
    "group": 17,
    "gridRow": 7,
    "gridCol": 17,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2 7p\u2075",
    "electronegativity": "N/A",
    "meltingPoint": "723 K (450 \u00b0C)",
    "boilingPoint": "883 K (610 \u00b0C)",
    "density": "7.2 g/cm\u00b3",
    "discoveredBy": "Dubna, LLNL, ORNL & Vanderbilt (2010)",
    "origin": "State of Tennessee, USA",
    "summary": "Second-heaviest known element; synthesized using a berkelium target at Oak Ridge and Dubna."
  },
  {
    "number": 118,
    "symbol": "Og",
    "name": "Oganesson",
    "atomicMass": "294",
    "category": "unknown",
    "period": 7,
    "group": 18,
    "gridRow": 7,
    "gridCol": 18,
    "phase": "Solid",
    "electronConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2 7p\u2076",
    "electronegativity": "N/A",
    "meltingPoint": "325 K (52 \u00b0C)",
    "boilingPoint": "450 K (177 \u00b0C)",
    "density": "5.0 g/cm\u00b3",
    "discoveredBy": "Dubna & LLNL (2002)",
    "origin": "Yuri Oganessian (superheavy nucleus pioneer)",
    "summary": "Completes the 7th period of the periodic table; atomic number 118 with highest atomic mass known."
  }
];

// Category Metadata Dictionary (human-readable names & color references)
const categoryMeta = {
  'reactive-nonmetal': { label: 'Reactive Nonmetals', color: 'var(--cat-reactive-nonmetal)' },
  'noble-gas': { label: 'Noble Gases', color: 'var(--cat-noble-gas)' },
  'alkali-metal': { label: 'Alkali Metals', color: 'var(--cat-alkali-metal)' },
  'alkaline-earth': { label: 'Alkaline Earth', color: 'var(--cat-alkaline-earth)' },
  'metalloid': { label: 'Metalloids', color: 'var(--cat-metalloid)' },
  'post-transition': { label: 'Post-Transition', color: 'var(--cat-post-transition)' },
  'transition-metal': { label: 'Transition Metals', color: 'var(--cat-transition-metal)' },
  'lanthanide': { label: 'Lanthanides', color: 'var(--cat-lanthanide)' },
  'actinide': { label: 'Actinides', color: 'var(--cat-actinide)' },
  'unknown': { label: 'Unknown Properties', color: 'var(--cat-unknown)' }
};

// Application State
let activeCategoryFilter = null;
let activeSearchQuery = '';
let currentModalElementNumber = null;

// DOM Elements
const periodicGrid = document.getElementById('periodic-grid');
const categoryPillsContainer = document.getElementById('category-pills');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const visibleCountBadge = document.getElementById('visible-count');
const resetAllFiltersBtn = document.getElementById('reset-all-filters-btn');
const randomElementBtn = document.getElementById('random-element-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Modal Elements
const detailModal = document.getElementById('detail-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalPrevBtn = document.getElementById('modal-prev-btn');
const modalNextBtn = document.getElementById('modal-next-btn');

const modalSpecimenId = document.getElementById('modal-specimen-id');
const modalCategoryBadge = document.getElementById('modal-category-badge');
const modalHeroTile = document.getElementById('modal-hero-tile');
const modalAtomicNumber = document.getElementById('modal-atomic-number');
const modalSymbol = document.getElementById('modal-symbol');
const modalAtomicMass = document.getElementById('modal-atomic-mass');
const modalElementName = document.getElementById('modal-element-name');
const modalLatinName = document.getElementById('modal-latin-name');
const modalPhase = document.getElementById('modal-phase');
const modalPeriod = document.getElementById('modal-period');
const modalGroup = document.getElementById('modal-group');
const modalDescription = document.getElementById('modal-description');
const modalElectronConfig = document.getElementById('modal-electron-config');
const modalElectronegativity = document.getElementById('modal-electronegativity');
const modalMeltingPoint = document.getElementById('modal-melting-point');
const modalBoilingPoint = document.getElementById('modal-boiling-point');
const modalDensity = document.getElementById('modal-density');
const modalDiscovery = document.getElementById('modal-discovery');

/**
 * 2. INITIALIZATION
 * Render categories, build table tiles, attach event listeners.
 */
function init() {
  initTheme();
  renderCategoryFilterPills();
  renderPeriodicTable();
  setupEventListeners();
}

/**
 * Theme Management: Light / Dark Mode with persistent localStorage
 */
function initTheme() {
  const savedTheme = localStorage.getItem('elementa-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    // Default to light editorial mode
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const nextTheme = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('elementa-theme', nextTheme);
}

/**
 * 3. RENDER CATEGORY PILLS
 */
function renderCategoryFilterPills() {
  categoryPillsContainer.innerHTML = '';

  Object.entries(categoryMeta).forEach(([key, meta]) => {
    const btn = document.createElement('button');
    btn.className = 'category-pill';
    btn.dataset.category = key;
    btn.setAttribute('type', 'button');
    btn.style.setProperty('--category-color', meta.color);

    const dot = document.createElement('span');
    dot.className = 'category-dot';
    dot.style.setProperty('--category-color', meta.color);

    const text = document.createElement('span');
    text.textContent = meta.label;

    btn.appendChild(dot);
    btn.appendChild(text);

    btn.addEventListener('click', () => handleCategoryClick(key));
    categoryPillsContainer.appendChild(btn);
  });
}

/**
 * 4. RENDER PERIODIC TABLE GRID
 * Builds all 118 element tiles, series markers, and headers.
 */
function renderPeriodicTable() {
  periodicGrid.innerHTML = '';

  // Render Lanthanide & Actinide Placeholder markers in Row 6 & 7 (Column 3)
  const lanthMarker = document.createElement('div');
  lanthMarker.className = 'series-marker-tile';
  lanthMarker.style.gridRow = '6';
  lanthMarker.style.gridColumn = '3';
  lanthMarker.title = 'Lanthanide Series (Elements 57–71)';
  lanthMarker.innerHTML = `
    <span class="series-marker-range">57–71</span>
    <span class="series-marker-name">La–Lu</span>
    <span class="series-marker-symbols">Lanthanides</span>
  `;
  lanthMarker.addEventListener('click', () => handleCategoryClick('lanthanide'));
  periodicGrid.appendChild(lanthMarker);

  const actMarker = document.createElement('div');
  actMarker.className = 'series-marker-tile';
  actMarker.style.gridRow = '7';
  actMarker.style.gridColumn = '3';
  actMarker.title = 'Actinide Series (Elements 89–103)';
  actMarker.innerHTML = `
    <span class="series-marker-range">89–103</span>
    <span class="series-marker-name">Ac–Lr</span>
    <span class="series-marker-symbols">Actinides</span>
  `;
  actMarker.addEventListener('click', () => handleCategoryClick('actinide'));
  periodicGrid.appendChild(actMarker);

  // Row 8: F-Block Spacer Line
  const spacer = document.createElement('div');
  spacer.className = 'f-block-spacer';
  spacer.innerHTML = '<div class="f-block-spacer-line"></div>';
  periodicGrid.appendChild(spacer);

  // Row 9 (Cols 1-3): Lanthanide Row Header Card
  const lanthHeader = document.createElement('div');
  lanthHeader.className = 'series-header-card';
  lanthHeader.style.gridRow = '9';
  lanthHeader.innerHTML = `
    <span class="series-header-title">Lanthanide Series</span>
    <span class="series-header-meta">Elements 57–71 · 4f Orbitals</span>
  `;
  periodicGrid.appendChild(lanthHeader);

  // Row 10 (Cols 1-3): Actinide Row Header Card
  const actHeader = document.createElement('div');
  actHeader.className = 'series-header-card';
  actHeader.style.gridRow = '10';
  actHeader.innerHTML = `
    <span class="series-header-title">Actinide Series</span>
    <span class="series-header-meta">Elements 89–103 · 5f Orbitals</span>
  `;
  periodicGrid.appendChild(actHeader);

  // Render each of the 118 Elements
  elements.forEach((el) => {
    const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = `element-tile cat-${el.category}`;
    tile.dataset.number = el.number;
    tile.dataset.symbol = el.symbol.toLowerCase();
    tile.dataset.name = el.name.toLowerCase();
    tile.dataset.category = el.category;
    tile.setAttribute('aria-label', `${el.number}: ${el.name} (${el.symbol}), ${el.category.replace('-', ' ')}`);

    // CSS Grid Positioning
    tile.style.gridRow = el.gridRow;
    tile.style.gridColumn = el.gridCol;

    tile.innerHTML = `
      <div class="tile-header">
        <span class="tile-number">${el.number}</span>
      </div>
      <div class="tile-symbol">${el.symbol}</div>
      <div class="tile-footer">
        <span class="tile-name">${el.name}</span>
        <span class="tile-mass">${el.atomicMass}</span>
      </div>
    `;

    // Click handler to open detail modal
    tile.addEventListener('click', () => {
      openElementDetail(el.number);
    });

    periodicGrid.appendChild(tile);
  });
}

/**
 * 5. FILTERING & SEARCH LOGIC
 * Highlighting matching elements and dimming non-matches.
 */
function applyFiltersAndSearch() {
  const query = activeSearchQuery.trim().toLowerCase();
  const allTiles = document.querySelectorAll('.element-tile');
  let matchCount = 0;

  allTiles.forEach((tile) => {
    const num = tile.dataset.number;
    const sym = tile.dataset.symbol;
    const name = tile.dataset.name;
    const cat = tile.dataset.category;

    // Category match check
    const matchesCategory = !activeCategoryFilter || cat === activeCategoryFilter;

    // Search query match check (by name, symbol, or atomic number)
    let matchesQuery = true;
    if (query) {
      matchesQuery = (
        name.includes(query) ||
        sym.includes(query) ||
        num === query
      );
    }

    if (matchesCategory && matchesQuery) {
      tile.classList.remove('dimmed');
      if (query || activeCategoryFilter) {
        tile.classList.add('highlighted');
      } else {
        tile.classList.remove('highlighted');
      }
      matchCount++;
    } else {
      tile.classList.add('dimmed');
      tile.classList.remove('highlighted');
    }
  });

  // Update counter and reset button visibility
  visibleCountBadge.textContent = matchCount;

  if (activeCategoryFilter || query) {
    resetAllFiltersBtn.classList.remove('hidden');
  } else {
    resetAllFiltersBtn.classList.remove('hidden');
    resetAllFiltersBtn.classList.add('hidden');
  }

  // Update Category Pill Active States
  document.querySelectorAll('.category-pill').forEach((pill) => {
    if (pill.dataset.category === activeCategoryFilter) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });
}

/**
 * Category filter toggle handler
 */
function handleCategoryClick(catKey) {
  if (activeCategoryFilter === catKey) {
    activeCategoryFilter = null; // Toggle off if already selected
  } else {
    activeCategoryFilter = catKey;
  }
  applyFiltersAndSearch();
}

/**
 * Reset all active filters and search queries
 */
function resetAllFilters() {
  activeCategoryFilter = null;
  activeSearchQuery = '';
  searchInput.value = '';
  clearSearchBtn.classList.add('hidden');
  applyFiltersAndSearch();
}

/**
 * 6. DETAIL MODAL DIALOG
 * Opens archival specimen card for the chosen element.
 */
function openElementDetail(elementNumber) {
  const el = elements.find(item => item.number === elementNumber);
  if (!el) return;

  currentModalElementNumber = el.number;

  // Populate data
  modalSpecimenId.textContent = `ELEMENT NO. ${el.number}`;
  
  const catInfo = categoryMeta[el.category] || { label: el.category };
  modalCategoryBadge.textContent = catInfo.label;

  modalHeroTile.className = `hero-tile-preview cat-${el.category}`;
  modalAtomicNumber.textContent = el.number;
  modalSymbol.textContent = el.symbol;
  modalAtomicMass.textContent = `${el.atomicMass} u`;

  modalElementName.textContent = el.name;
  modalLatinName.textContent = el.origin || 'Name origin in scientific nomenclature';
  modalPhase.textContent = el.phase;
  modalPeriod.textContent = el.period;
  modalGroup.textContent = el.group;

  modalDescription.textContent = el.summary;
  modalElectronConfig.textContent = el.electronConfig || 'N/A';
  modalElectronegativity.textContent = el.electronegativity || 'N/A';
  modalMeltingPoint.textContent = el.meltingPoint || 'N/A';
  modalBoilingPoint.textContent = el.boilingPoint || 'N/A';
  modalDensity.textContent = el.density || 'N/A';
  modalDiscovery.textContent = el.discoveredBy || 'N/A';

  // Show modal
  detailModal.classList.remove('hidden');
  detailModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeElementDetail() {
  detailModal.classList.add('hidden');
  detailModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  currentModalElementNumber = null;
}

/**
 * Navigate to previous / next element
 */
function navigateModal(direction) {
  if (currentModalElementNumber === null) return;
  let nextNumber = currentModalElementNumber + direction;
  if (nextNumber < 1) nextNumber = 118;
  if (nextNumber > 118) nextNumber = 1;
  openElementDetail(nextNumber);
}

/**
 * Select a random element from the 118 known elements
 */
function discoverRandomElement() {
  const randomIndex = Math.floor(Math.random() * elements.length);
  const randomEl = elements[randomIndex];
  openElementDetail(randomEl.number);
}

/**
 * 7. EVENT LISTENERS
 */
function setupEventListeners() {
  // Theme toggle
  themeToggleBtn.addEventListener('click', toggleTheme);

  // Search input with debounce/immediate feedback
  searchInput.addEventListener('input', (e) => {
    activeSearchQuery = e.target.value;
    if (activeSearchQuery.length > 0) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
    applyFiltersAndSearch();
  });

  // Clear search button
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    activeSearchQuery = '';
    clearSearchBtn.classList.add('hidden');
    applyFiltersAndSearch();
    searchInput.focus();
  });

  // Reset all filters
  resetAllFiltersBtn.addEventListener('click', resetAllFilters);

  // Random element
  randomElementBtn.addEventListener('click', discoverRandomElement);

  // Modal close handlers
  modalCloseBtn.addEventListener('click', closeElementDetail);
  modalPrevBtn.addEventListener('click', () => navigateModal(-1));
  modalNextBtn.addEventListener('click', () => navigateModal(1));

  // Close modal when clicking on the dimmed backdrop
  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
      closeElementDetail();
    }
  });

  // Keyboard navigation: Escape, ArrowLeft, ArrowRight
  document.addEventListener('keydown', (e) => {
    if (!detailModal.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        closeElementDetail();
      } else if (e.key === 'ArrowLeft') {
        navigateModal(-1);
      } else if (e.key === 'ArrowRight') {
        navigateModal(1);
      }
    }
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
