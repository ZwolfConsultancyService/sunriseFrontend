// src/data/infraData.js

import infra1 from "../../../assets/infra1.jpg";
import infra2 from "../../../assets/infra2.jpg";
import infra3 from "../../../assets/infra3.jpg";
import infra5 from "../../../assets/infra5.jpg";


const infraData = {
  title: "Infrastructure",
  mainImage: infra1,

  sections: [
    {
      id: 1,
      heading: "Modern Manufacturing Unit",
      content:
        "Our trims manufacturing facility is spread across 10,000 sq. ft. of well-structured production space. The unit has dedicated areas for weaving, printing, finishing, and packaging, ensuring an efficient and streamlined workflow. With a capacity to produce over 5 million trims per month, our infrastructure is designed to handle both bulk requirements and customized orders with equal precision.",
    },
    {
      id: 2,
      heading: "Advanced Machinery & Technology",
      content:
        "To maintain high productivity and precision, we have invested in state-of-the-art machinery:",
      list: [
        "10 High-speed weaving machines for woven and narrow labels",
        "6 Digital printing machines for printed labels and stickers",
        "4 Heat transfer machines for premium quality fabric applications",
        "3 Laser cutting machines for tags, PU labels, and custom shapes",
        "2 Metal embossing units for security and metal labels",
      ],
      note: "This machinery enables us to deliver trims with consistent quality, vibrant designs, and long-lasting durability.",
    },
    {
      id: 3,
      heading: "Wide Product Capability",
      content:
        "Our infrastructure supports the production of a complete range of trims and garment accessories including woven labels, printed labels, heat transfer labels, narrow labels, tags, tag seals, stickers, patches, badges, flexible labels, leather/PU labels, security labels, and metal labels. This versatility makes us a one-stop trims manufacturer for brands, exporters, and fashion houses.",
    },
    {
      id: 4,
      heading: "Strong Quality Control",
      content:
        "Every product goes through a multi-step quality control process. Our QC department of 12 professionals checks each batch for parameters like color fastness, adhesive strength, dimensional accuracy, and durability. Random sampling and batch testing ensure that every trim meets both domestic and international quality standards (ISO certified).",
    },
    {
      id: 5,
      heading: "Skilled Workforce & R&D",
      content:
        "Our team of 100+ skilled employees includes experienced designers, technicians, and operators who bring expertise and creativity to the table. Alongside, a dedicated R&D unit continuously develops new trims, explores sustainable materials, and provides customized solutions as per client needs. This innovation-driven approach helps us stay ahead of trends and deliver products that add true value to garments and brands.",
    },
  ],

  stats: [
    { label: "Production Area", value: "10,000 sq. ft." },
    { label: "Monthly Output", value: "5M+ trims" },
    { label: "QC Team", value: "12 Professionals" },
    { label: "Workforce", value: "100+ Employees" },
  ],

  gallery: [infra1, infra2, infra3, "https://www.compliancequest.com/wp-content/uploads/2024/09/quality-control-video.jpg", infra5],
};

export default infraData;
