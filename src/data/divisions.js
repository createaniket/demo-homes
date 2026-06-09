import hero from "@/assets/hero-home.jpg";
import kitchen from "@/assets/portfolio-kitchen.jpg";
import bathroom from "@/assets/portfolio-bathroom.jpg";
import extension from "@/assets/portfolio-extension.jpg";
import landscape from "@/assets/portfolio-landscape.jpg";
import smart from "@/assets/portfolio-smarthome.jpg";
import hmo from "@/assets/portfolio-hmo.jpg";
import craft from "@/assets/craft.jpg";

export const divisions = [
  { slug: "homes", name: "Saanti Homes", tagline: "Whole-home renovations, extensions and refurbishments.", category: "Construction",
    intro: "From listed-building restorations to contemporary rear extensions, Saanti Homes delivers full-scope residential construction with a single point of accountability.",
    services: ["Home Renovations","Side & Rear Extensions","Loft Conversions","Full Refurbishments","Basement Conversions","Period Restoration"], image: hero },
  { slug: "kitchens", name: "Saanti Kitchens", tagline: "Designed, supplied and installed by one team.", category: "Construction",
    intro: "Bespoke kitchens in solid oak, walnut and stone — designed in our studio, manufactured in our workshop, installed by our craftsmen.",
    services: ["Kitchen Design","Bespoke Cabinetry","Stone & Quartz Worktops","Appliance Specification","Installation","Aftercare & Warranty"], image: kitchen },
  { slug: "bathrooms", name: "Saanti Bathrooms", tagline: "Spa-quality bathrooms, end-to-end.", category: "Construction",
    intro: "From wetrooms to principal suites, we design and install bathrooms with hotel-grade finish and decades of longevity.",
    services: ["Bathroom Design","Wetrooms","Stone & Tile Specification","Underfloor Heating","Brassware & Sanitaryware","Installation"], image: bathroom },
  { slug: "joinery", name: "Saanti Joinery", tagline: "Bespoke joinery from our workshop.", category: "Construction",
    intro: "Hand-built fitted furniture — wardrobes, media walls, libraries, panelling — designed for the architecture of your home.",
    services: ["Fitted Wardrobes","Media Walls","Libraries & Studies","Wall Panelling","Bespoke Cabinetry","Doors & Staircases"], image: craft },
  { slug: "roofing", name: "Saanti Roofing", tagline: "New roofs, repairs and flat-roof systems.", category: "Construction",
    intro: "Slate, tile, lead, zinc and single-ply membrane roofing installed by experienced teams with full structural warranty.",
    services: ["Pitched Roofs","Flat Roofs","Zinc & Lead Work","Roof Repairs","Insulation Upgrades","Gutters & Fascias"], image: extension },
  { slug: "k-render", name: "Saanti K Render", tagline: "Silicone render and external wall insulation.", category: "Construction",
    intro: "Premium through-coloured render systems and EWI installations that transform façades and improve thermal performance.",
    services: ["Silicone Render","External Wall Insulation","Façade Refurbishment","Render Repair","Acrylic Systems","Colour Matching"], image: hero },
  { slug: "landscaping", name: "Saanti Landscaping", tagline: "Gardens, terraces and outdoor architecture.", category: "Construction",
    intro: "Hard and soft landscaping with stone terraces, outdoor kitchens, garden rooms and architectural planting design.",
    services: ["Garden Design","Stone Patios","Driveways","Outdoor Kitchens","Garden Rooms","Planting Schemes"], image: landscape },

  { slug: "interior-design", name: "Saanti Interior Design", tagline: "Interiors composed with restraint and craft.", category: "Design",
    intro: "Our in-house studio leads spatial planning, material curation, FF&E and styling — delivering interiors with editorial polish.",
    services: ["Concept Design","Space Planning","Material & FF&E","Custom Furniture","Art Curation","Final Styling"], image: kitchen },
  { slug: "lighting", name: "Saanti Lighting", tagline: "Architectural lighting design and installation.", category: "Design",
    intro: "Lighting schemes that sculpt architecture — concept, calculations, fittings supply and installation by lighting specialists.",
    services: ["Lighting Design","Architectural Lighting","Garden & Façade","Smart Control","Bespoke Fittings","Commissioning"], image: smart },
  { slug: "smart-homes", name: "Saanti Smart Homes", tagline: "Automation, AV and cinema rooms.", category: "Design",
    intro: "Crestron, Lutron, KNX, Control4 — fully integrated smart home systems engineered around how you live.",
    services: ["Home Automation","Audio Visual","Cinema Rooms","Security & CCTV","Networking","Smart Lighting Control"], image: smart },

  { slug: "maintenance", name: "Saanti Maintenance", tagline: "Planned and reactive property care.", category: "Maintenance",
    intro: "Concierge-style maintenance for principal residences — annual plans, emergency response and a single point of contact.",
    services: ["Planned Maintenance","Emergency Repairs","Annual Inspections","Handyman Services","Decorating","Snagging"], image: hero },
  { slug: "facilities", name: "Saanti Facilities", tagline: "Commercial facilities management.", category: "Maintenance",
    intro: "Hard and soft FM for offices, retail and mixed-use estates with full compliance and reporting.",
    services: ["Hard FM","Soft FM","Compliance & Audits","Cleaning","Building Management","Reactive Repairs"], image: extension },
  { slug: "electrics", name: "Saanti Electrics", tagline: "NICEIC-approved electrical contractors.", category: "Maintenance",
    intro: "Full electrical contracting — domestic rewires, commercial installations, EV chargers and certification.",
    services: ["Full Rewires","EV Chargers","Commercial Install","Testing & Certification","Smart Lighting","Fault Finding"], image: smart },
  { slug: "plumbing", name: "Saanti Plumbing", tagline: "Heating, plumbing and renewables.", category: "Maintenance",
    intro: "Gas-Safe heating engineers and plumbers — boilers, heat pumps, underfloor heating and complete plumbing systems.",
    services: ["Boiler Install","Heat Pumps","Underfloor Heating","Plumbing","Bathroom 1st-fix","Servicing"], image: bathroom },
  { slug: "solar", name: "Saanti Solar", tagline: "Solar PV, battery storage and EV.", category: "Maintenance",
    intro: "MCS-accredited solar installations integrated with battery storage and EV charging for energy independence.",
    services: ["Solar PV","Battery Storage","EV Integration","Energy Audits","Inverter Replacement","Smart Monitoring"], image: hero },

  { slug: "hmos", name: "Saanti HMOs", tagline: "HMO development, conversion and management.", category: "Property",
    intro: "End-to-end HMO delivery — feasibility, planning, full refurbishment, licensing and ongoing management.",
    services: ["HMO Conversion","Planning & Licensing","Compliance","Refurbishment","Furnishing","Management"], image: hmo },
  { slug: "developments", name: "Saanti Developments", tagline: "New build, conversion and joint ventures.", category: "Property",
    intro: "Land acquisition, residential and mixed-use developments delivered with institutional-grade governance.",
    services: ["Land Acquisition","New Build Residential","Commercial Conversion","Joint Ventures","Funding Structuring","Sales & Marketing"], image: extension },
];

export const divisionGroups = ["Construction", "Design", "Maintenance", "Property"];

export const portfolioProjects = [
  { slug: "kensington-townhouse", title: "Kensington Townhouse", category: "Extensions", scope: "Full refurbishment & rear extension", year: "2024", area: "London W8", value: "£2.4m", image: extension,
    excerpt: "Complete restoration of a Grade II townhouse including a contemporary zinc-clad rear extension and basement spa." },
  { slug: "chelsea-kitchen", title: "Chelsea Family Kitchen", category: "Kitchens", scope: "Bespoke kitchen & dining", year: "2024", area: "London SW3", value: "£185k", image: kitchen,
    excerpt: "Handleless oak and Carrara marble island with integrated Gaggenau appliances and architectural lighting." },
  { slug: "richmond-spa-bath", title: "Richmond Principal Suite", category: "Bathrooms", scope: "Principal bathroom & dressing room", year: "2023", area: "Surrey", value: "£140k", image: bathroom,
    excerpt: "Travertine wet room with stone tub, brushed brass fittings and underfloor heating." },
  { slug: "hampstead-garden", title: "Hampstead Garden", category: "Landscaping", scope: "Garden architecture", year: "2024", area: "London NW3", value: "£320k", image: landscape,
    excerpt: "Stone terrace, outdoor kitchen pavilion and architectural planting on a half-acre garden." },
  { slug: "mayfair-cinema", title: "Mayfair Cinema Room", category: "Smart Homes", scope: "Cinema & full automation", year: "2024", area: "London W1", value: "£280k", image: smart,
    excerpt: "Dolby Atmos cinema, Crestron whole-home control and lighting scenes across five floors." },
  { slug: "east-london-hmo", title: "Hackney HMO", category: "HMOs", scope: "7-bed HMO conversion", year: "2023", area: "London E8", value: "£520k", image: hmo,
    excerpt: "Sui generis HMO conversion of a former office — full Article 4 planning and licensing." },
  { slug: "surrey-newbuild", title: "Surrey New Build", category: "Developments", scope: "New build family home", year: "2023", area: "Surrey", value: "£3.8m", image: hero,
    excerpt: "Contemporary 750sqm new build in limestone and glass with full landscape and interior package." },
  { slug: "essex-extension", title: "Essex Side Return", category: "Extensions", scope: "Side return & kitchen", year: "2024", area: "Essex", value: "£245k", image: extension,
    excerpt: "Side-return extension, open-plan kitchen and full ground floor remodel." },
];

export const testimonials = [
  { quote: "Saanti delivered a level of finish we had only seen in magazines. The team is unflappable — three years on, we still call them first.", author: "Mr & Mrs H.", project: "Kensington Townhouse" },
  { quote: "From the first design meeting to handover, everything was considered. The extended warranty made the difference for us.", author: "Sarah W.", project: "Chelsea Family Kitchen" },
  { quote: "A genuinely single point of contact across construction, M&E and FF&E. Rare and worth every penny.", author: "James P.", project: "Surrey New Build" },
];

export const serviceAreas = [
  { name: "London", note: "Prime Central, North, South & East" },
  { name: "Essex", note: "Chigwell, Loughton, Brentwood, Epping" },
  { name: "Hertfordshire", note: "St Albans, Radlett, Harpenden" },
  { name: "Kent", note: "Sevenoaks, Tunbridge Wells, Bromley" },
  { name: "Surrey", note: "Esher, Cobham, Weybridge, Richmond" },
  { name: "Nationwide", note: "Commercial & development projects UK-wide" },
];
