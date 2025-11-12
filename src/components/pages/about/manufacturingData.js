// manufacturingData.js
import { 
  FaPalette, 
  FaTshirt, 
  FaCheckCircle, 
  FaCogs, 
  FaSearchPlus, 
  FaBoxOpen, 
  FaTruck,
  FaPrint,
  FaCut,
  FaHammer,
  FaStamp,
  FaShippingFast
} from 'react-icons/fa';
import a1 from "@/assets/about/a1.jpg";
import a2 from "@/assets/about/a2.jpg";
import a3 from "@/assets/about/a3.jpg";
import a4 from "@/assets/about/a4.jpg";
import a5 from "@/assets/about/a5.jpg";
import a6 from "@/assets/about/a6.jpg";
import a7 from "@/assets/about/a7.jpg";


export const manufacturingProcessData = [
  {
    id: 1,
    step: "Step 1",
    title: "Design & Artwork",
    emoji: "🎨",
    icon: FaPalette,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    hoverColor: "hover:shadow-purple-200",
    mainDescription: "The production journey begins with understanding the client's vision and requirements.",
    detailedPoints: [
      "Our design team carefully works on logo creation, color combinations, font style, size, and finishing details.",
      "We ensure that the label or tag reflects the brand identity and communicates the right message.",
      "Creative concepts are developed with attention to brand guidelines and market appeal.",
      // "Digital mockups and prototypes are created for client visualization.",
      // "Color matching and design specifications are finalized before production."
    ],
    image: a1,
    altText: "Design and artwork creation process",
    additionalIcons: [FaPalette, FaCut, FaPrint]
  },
  {
    id: 2,
    step: "Step 2",
    title: "Material Selection",
    emoji: "🧵",
    icon: FaTshirt, 
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    hoverColor: "hover:shadow-blue-200",
    mainDescription: "Based on the approved design, the most suitable raw materials are chosen.",
    detailedPoints: [
      "Woven labels require premium quality yarn and thread for durability and appearance.",
      "Printed & heat transfer labels use high-grade paper, fabric, or eco-friendly inks.",
      "Metal or leather labels are crafted from durable and long-lasting raw materials.",
      "The right selection ensures product durability, finishing, and premium appeal.",
      "Material testing is conducted to ensure compatibility with intended applications.",
      // "Sustainable and eco-friendly material options are prioritized when possible."
    ],
    image: a2,
    altText: "Various fabric materials and yarns selection",
    additionalIcons: [FaTshirt, FaCut, FaHammer] // Replaced FaYarn with FaCut
  },
  {
    id: 3,
    step: "Step 3",
    title: "Sampling & Approval",
    emoji: "✔️",
    icon: FaCheckCircle,
    color: "from-yellow-400 to-emerald-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    hoverColor: "hover:shadow-yellow-200",
    mainDescription: "Before bulk production, we prepare a sample and share it with the client.",
    detailedPoints: [
      "This stage allows the client to check design accuracy, colors, textures, and overall quality.",
      "Any modifications suggested by the client are incorporated until complete satisfaction is achieved.",
      "Multiple sample iterations may be provided to ensure perfect alignment with expectations.",
      // "Physical samples are shipped for hands-on evaluation and approval.",
      // "Digital proofs and physical samples are cross-referenced for consistency.",
      // "Client feedback is documented and implemented with precision."
    ],
    image:a3,
    altText: "Sample approval and quality checking process",
    additionalIcons: [FaCheckCircle, FaSearchPlus, FaStamp]
  },
  {
    id: 4,
    step: "Step 4",
    title: "Production / Manufacturing",
    emoji: "⚙️",
    icon: FaCogs,
    color: "from-yellow-500 to-red-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    hoverColor: "hover:shadow-yellow-200",
    mainDescription: "Once approved, mass production begins under strict supervision.",
    detailedPoints: [
      "Woven labels: Manufactured using advanced loom machines for precision and detail.",
      "Printed labels: Produced with digital and offset printing for vibrant results.",
      "Heat transfer labels: Applied directly onto fabric with specialized transfer machines.",
      "Narrow fabric: Made using needle looms & jacquard machines for consistent weaving.",
      "Metal/Leather/PU labels: Processed through cutting, engraving, embossing, or debossing.",
      "Stickers & patches: Designed, printed, cut, and finished with durability in mind.",
      // "Production schedules are maintained to ensure timely delivery.",
      // "Continuous monitoring ensures consistent quality throughout the manufacturing process."
    ],
    image: a4,
    altText: "Industrial manufacturing and production machinery",
    additionalIcons: [FaCogs, FaHammer, FaPrint]
  },
  {
    id: 5,
    step: "Step 5",
    title: "Quality Check (QC)",
    emoji: "🔍",
    icon: FaSearchPlus,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    hoverColor: "hover:shadow-indigo-200",
    mainDescription: "Quality is the backbone of our production process.",
    detailedPoints: [
      "Every batch undergoes multiple inspection stages to ensure consistency.",
      "Checks include color accuracy, sharp detailing, perfect finishing, and durability testing.",
      "Only products meeting our high standards move to the next stage.",
      "Random sampling and batch testing ensure uniform quality across all products.",
      // "Defective items are identified and removed before packaging.",
      // "Quality control documentation is maintained for traceability and continuous improvement.",
      // "International quality standards are strictly adhered to throughout the process."
    ],
    image: a5,
    altText: "Quality control and inspection process",
    additionalIcons: [FaSearchPlus, FaCheckCircle, FaStamp]
  },
  {
    id: 6,
    step: "Step 6",
    title: "Finishing & Packaging",
    emoji: "📦",
    icon: FaBoxOpen,
    color: "from-teal-500 to-yellow-400",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    hoverColor: "hover:shadow-teal-200",
    mainDescription: "Labels and trims are carefully cut, folded, punched, or laminated as per client specifications.",
    detailedPoints: [
      "Each product is neatly organized and securely packed to prevent any damage in transit.",
      "Attractive and safe packaging ensures that the client receives products in perfect condition.",
      "Custom packaging solutions are available based on client requirements.",
      // "Products are sorted, counted, and organized systematically before packaging.",
      // "Protective materials are used to ensure products remain pristine during shipping.",
      // "Packaging is designed to be both functional and environmentally responsible.",
      // "Final inspection is conducted on packaged products before dispatch."
    ],
    image: a6,
    altText: "Product finishing and packaging process",
    additionalIcons: [FaBoxOpen, FaCut, FaStamp]
  },
  {
    id: 7,
    step: "Step 7",
    title: "Dispatch & Delivery",
    emoji: "🚚",
    icon: FaTruck,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    hoverColor: "hover:shadow-pink-200",
    mainDescription: "After passing all checks, the final products are dispatched.",
    detailedPoints: [
      "We ensure timely delivery with safe logistics management.",
      "Our goal is to deliver not just labels and trims, but quality, trust, and reliability with every order.",
      "Multiple shipping options are available to meet different delivery requirements.",
      // "Real-time tracking information is provided for complete transparency.",
      // "Proper documentation and invoicing accompany every shipment.",
      // "Customer support is available throughout the delivery process.",
      // "Delivery confirmation and customer satisfaction feedback are collected."
    ],
    image: a7,
    altText: "Shipping and delivery logistics",
    additionalIcons: [FaTruck, FaShippingFast, FaCheckCircle]
  }
];

export const companyInfo = {
  title: "Our Production Process",
  subtitle: "🏭 Manufacturing Excellence",
  mainHeading: "From Concept to Delivery",
  description: "From concept to delivery, discover how we transform your ideas into premium quality labels and trims through our 7-step manufacturing excellence.",
  ctaTitle: "Ready to Start Your Production Journey?",
  ctaDescription: "Experience our commitment to quality, trust, and reliability with every order. Let's bring your vision to life through our proven manufacturing process.",
  features: [
    "Premium Quality Materials",
    "Advanced Manufacturing Technology",
    "Strict Quality Control",
    "Timely Delivery",
    "Customer Satisfaction",
    "Eco-Friendly Options"
  ]
};

export default { manufacturingProcessData , companyInfo };