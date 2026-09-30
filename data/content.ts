// All portfolio content lives here. Edit this file to customize the site.
// Source: resume PDF + LinkedIn PDF. Nothing here is invented.

export const profile = {
  name: "Ajishal R",
  title: "Electrical Design & BIM Engineer",
  tagline:
    "Electrical BIM delivery on large GCC projects, now moving into building services design.",
  location: "Trivandrum, Kerala, India (open to relocation)",
  email: "ajishalraveendran@gmail.com",
  phone: "+91-8075015229",
  linkedin: "https://www.linkedin.com/in/ajishalr05101999",
  resume: "/Ajishal_R_Resume.pdf",
  seeking: "Graduate Design Engineer, Electrical (MEP)",
};

// Shown as the "title block" in the hero.
export const titleBlock = [
  { label: "Discipline", value: "Electrical building services" },
  { label: "Projects in", value: "UAE, Qatar, Saudi Arabia" },
  { label: "Codes", value: "IEC 60364, DEWA, SEC, KAHRAMAA, NFPA 72" },
  { label: "Based in", value: "Trivandrum, Kerala (open to relocation)" },
  { label: "Seeking", value: profile.seeking },
];

export const about = [
  "I am an electrical engineer (B.Tech and Diploma in EEE) with 1+ year of experience in building services design and BIM delivery for large GCC projects. I model power, lighting, fire alarm, ELV and containment in Revit MEP, coordinate them in Navisworks, and work to DEWA, NFPA 72 and IEC 60364.",
  "I also teach Electrical Design and Drafting, which keeps me focused on why a design decision is right, not only how to draw it. I am now building on that foundation toward a Graduate Design Engineer role: design calculations, layouts, schematics and coordinated documentation for MEP projects.",
];

export const facts = [
  { value: "6+", label: "residential, commercial and infrastructure projects modelled" },
  { value: "200+", label: "hard and soft clashes resolved" },
  { value: "LOD 200-400", label: "levels of development delivered" },
];

export type Project = {
  name: string;
  sector: string;
  location: string;
  lod?: string;
  scope?: string;
  tools: string[];
  contribution: string[];
};

export const featuredProjects: Project[] = [
  {
    name: "Mall of Emirates",
    sector: "Shopping mall",
    location: "Dubai, UAE",
    lod: "LOD 300",
    tools: ["Revit MEP", "AutoCAD", "Navisworks"],
    contribution: [
      "Assisted design engineers with electrical design across power, containment, fire alarm and emergency lighting systems.",
      "Delivered full electrical BIM modelling at LOD 300 across all services, with coordinated RCP and wall placement across multiple towers.",
    ],
  },
  {
    name: "The Palm Jumeirah Resort",
    sector: "Hospitality",
    location: "Dubai, UAE",
    lod: "LOD 200",
    tools: ["Revit MEP", "AutoCAD", "Navisworks"],
    contribution: [
      "Assisted design engineers with containment system design, fire alarm design, emergency lighting design and load schedule preparation.",
      "Developed the matching electrical BIM models and drawings, using Navisworks for coordination checks.",
    ],
  },
  {
    name: "Emaar Beachfront Development",
    sector: "High-rise residential",
    location: "Dubai, UAE",
    lod: "LOD 400",
    tools: ["Revit MEP", "Navisworks"],
    contribution: [
      "Modelled and coordinated electrical BIM services at LOD 400, focused on multidisciplinary clash resolution with structural and architectural teams.",
    ],
  },
  {
    name: "Strategic Food Security Facilities, Hamad Port",
    sector: "Infrastructure",
    location: "Doha, Qatar",
    scope: "Scan-to-BIM",
    tools: ["Autodesk ReCap", "Revit MEP"],
    contribution: [
      "Converted point-cloud scans into Revit models for a weigh bridge and an authority building facility.",
    ],
  },
];

export const otherProjects = [
  {
    name: "Al Waha Residence, Expo City Dubai",
    detail: "Residential, LOD 400 electrical BIM coordination in line with the project BEP and consultant standards",
    tools: "Revit MEP, Navisworks",
  },
  {
    name: "AMAALA Six Senses Resort, Saudi Arabia",
    detail: "Hospitality, ELV as-built BIM updated from site redlines, WIRs and field changes",
    tools: "Revit MEP",
  },
];

export type Job = {
  role: string;
  org: string;
  place: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Electrical BIM Engineer",
    org: "COMMANDTECH CAD & IT PVT LTD",
    place: "Trivandrum, Kerala",
    period: "December 2025 to present",
    points: [
      "Delivered electrical BIM modelling for 6+ residential, commercial and infrastructure projects across the UAE, Qatar and Saudi Arabia in Revit MEP and Navisworks.",
      "Built coordinated power, lighting and ELV models and resolved 200+ hard and soft clashes with architectural, structural and MEP disciplines.",
      "Assisted senior design engineers with design calculations, drawing production, schedules and coordination deliverables.",
      "Prepared as-built documentation from site redlines, WIRs and field change requests, reconciled against the live Revit model.",
      "Converted point-cloud scans to Revit geometry (ReCap to Revit) to give retrofit-heavy projects an accurate base.",
      "Exported coordinated NWC, IFC and CSD files following each project's BEP and LOD requirements.",
    ],
  },
  {
    role: "Electrical Design Instructor",
    org: "Alpinecoachtree MEP (ACTMEP)",
    place: "Chennai, Tamil Nadu (remote, freelance)",
    period: "April 2026 to present",
    points: [
      "Deliver structured training in Electrical Design Engineering: power system design, load estimation and demand calculation.",
      "Run drafting sessions in AutoCAD and Revit MEP covering lighting, small power, cable containment and fire alarm layouts.",
      "Teach through project-based work on electrical layouts and load calculations, so students can justify their technical decisions.",
    ],
  },
  {
    role: "Student Intern",
    org: "CADBIM Centre",
    place: "Trivandrum, Kerala",
    period: "June 2025 to December 2025",
    points: [
      "Completed the BIM Live International Program in Electrical Engineering, producing electrical layouts and load schedules to DEWA standards in Revit MEP, AutoCAD and DIALux.",
    ],
  },
  {
    role: "Internship Trainee",
    org: "Kerala State Electricity Board (KSEB)",
    place: "Idukki, Kerala",
    period: "June 2024 (one month)",
    points: [
      "Seven-day internship at Generation Sub-Division Sengulam: observed turbine, generator and control-system operation and assisted with load monitoring and voltage regulation.",
    ],
  },
];

export const skillGroups = [
  {
    name: "Electrical design",
    items: [
      "Load estimation and demand calculation",
      "Load schedule creation",
      "Cable sizing",
      "Voltage drop analysis",
      "Power distribution design",
      "Distribution board design",
      "Fire alarm design",
      "Emergency lighting design",
    ],
  },
  {
    name: "Lighting design",
    items: ["DIALux evo (lux calculations, luminaire layouts)", "Relux (working familiarity)"],
  },
  {
    name: "Drafting and layouts",
    items: [
      "AutoCAD 2D and 3D",
      "Shop drawings and as-builts",
      "Lighting and small power layouts",
      "Cable containment",
      "Earthing and lightning protection",
      "Fire alarm layouts",
    ],
  },
  {
    name: "BIM software",
    items: [
      "Autodesk Revit MEP",
      "Navisworks Manage",
      "Autodesk Construction Cloud",
      "BIM 360",
      "Autodesk ReCap (Scan-to-BIM)",
    ],
  },
  {
    name: "BIM process",
    items: [
      "BIM Execution Plan compliance",
      "LOD management (200-400)",
      "IFC export",
      "COBie data preparation",
      "NWC and CSD production",
      "ISO 19650 awareness",
    ],
  },
  {
    name: "MEP coordination",
    items: [
      "Hard and soft clash detection",
      "Coordination with architecture, structure, HVAC, PHE, fire and ICT",
      "RCP coordination",
      "ELV: fire alarm, CCTV, access control, data, telecom, GRMS",
    ],
  },
  {
    name: "Standards and codes",
    items: ["IEC 60364", "DEWA", "SEC", "KAHRAMAA", "NFPA 72", "Adaptable to BS 7671"],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology, Electrical and Electronics Engineering",
    school: "Government Engineering College, Thrissur (Kerala Technological University)",
    period: "October 2022 to May 2025",
    note: "CGPA 7.04",
  },
  {
    degree: "Diploma, Electrical and Electronics Engineering",
    school: "Government Polytechnic College, Kozhikode (SBTE Kerala)",
    period: "June 2018 to November 2021",
    note: "CGPA 8.34",
  },
];

export const certifications = [
  "Autodesk Certification: Revit and Navisworks",
  "Revit MEP Electrical Masterclass, Beginner to Advanced (Udemy)",
];
