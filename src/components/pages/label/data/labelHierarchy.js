// src/data/labelHierarchy.js
const labelHierarchy = [
  {
    group: "WOVEN LABELS",
    slug: "woven-labels",
    description: "Woven labels are garment labels woven on a loom. It expresses logo, text, pattern, size, and wash symbols by fixing warp and weft...",
    image: "https://acctrims.com/wp-content/uploads/2023/02/custom-woven-labels_DSC0590-768x512.jpg",
    categories: [
      {
        category: "RAPIER LABEL",
        image : "https://acctrims.com/wp-content/uploads/2023/02/custom-woven-labels_DSC0590-768x512.jpg",
        items: ["SPLIT EDGE WOVEN LABEL", "HIGH DENSITY WOVEN LABELS"],
      },
      {
        category: "NIDDLE LABEL",
         image : "https://acctrims.com/wp-content/uploads/2023/02/custom-woven-labels_DSC0590-768x512.jpg",
        items: ["WOVEN EDGE WOVEN LABEL"],
      },
      {
        category: "SHUTTLE LABEL",
         image : "https://acctrims.com/wp-content/uploads/2023/02/custom-woven-labels_DSC0590-768x512.jpg",
        items: ["SOFT EDGE WOVEN LABEL"],
      },
    ],
  },
  {
    group: "PRINTED LABELS",
    slug: "printed-labels",
    description: "Printed labels are made by printing directly on fabric materials like satin, cotton, or polyester. They are economical and suitable for lightweight garments.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTvLZeea7KYKV6cagzqv8vV-Ty9amSS7Crg&s",
    categories: [
      {
        category: "CARE LABEL",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTvLZeea7KYKV6cagzqv8vV-Ty9amSS7Crg&s",
        items: ["SATIN", "TAFFETA", "COTTON / TWILL / CANVAS / GROSGRAIN"],
      },
      {
        category: "MAIN LABEL",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTvLZeea7KYKV6cagzqv8vV-Ty9amSS7Crg&s",
        items: [
          "SATIN",
          "COTTON / TWILL / CANVAS / GROSGRAIN",
          "3D PRINTING LABEL",
        ],
      },
    ],
  },
  {
    group: "HEAT TRANSFER LABELS",
    slug: "heat-transfer-labels",
    description: "Thermal transfer labels include embossed, flat oil, 3D silicone, and thick plate labels. They are applied using heat and are eco-friendly.",
    image: "https://acctrims.com/wp-content/uploads/2023/03/DSC0013.jpg",
    categories: [
      {
        category: "PLASTISOL HEAT TRANSFER",
         image: "https://acctrims.com/wp-content/uploads/2023/03/DSC0013.jpg",
        items: ["IRONON HEAT TRANSFER"]
      },
      {
        category: "WATERBASE HEAT TRANSFER",
         image: "https://acctrims.com/wp-content/uploads/2023/03/DSC0013.jpg",
        items: ["FOIL HEAT TRANSFER", "REFLECTIVE HEAT TRANSFER"]
      },
      {
        category: "HIGH DENSITY HEAT TRANSFER",
         image: "https://acctrims.com/wp-content/uploads/2023/03/DSC0013.jpg",
        items: ["PVC / PLASTISOL HEAT TRANSFER", "SILICON HEAT TRANSFER", "3D HEAT TRANSFER"]
      },
      {
        category: "FLOCK HEAT TRANSFER",
         image: "https://acctrims.com/wp-content/uploads/2023/03/DSC0013.jpg",
        items: ["RHINESTONE HEAT TRANSFER", "GLITTER TRANSFER"]
      },
      {
        category: "NEON TRANSFER LABEL",
         image: "https://acctrims.com/wp-content/uploads/2023/03/DSC0013.jpg",
        items: ["EMBOSS PRINTING", "PUFF HEAT TRANSFER LABEL"]
      },
    ],
  },
  {
    group: "NARROW FABRIC",
    slug: "narrow-fabric",
    description: "Narrow fabrics include tapes, ribbons, webbings, and elastic bands used for various garment trims and decorations.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dsqBkLF-btA66PI3wws_ctzhomoUB-RtNQ&s",
    categories: [
      {
        category: "LACES",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dsqBkLF-btA66PI3wws_ctzhomoUB-RtNQ&s",
        items: [
          "GROSGRAIN TAPE",
          "TWILL TAPE",
          "CANVAS TAPE",
          "COTTON TAPE",
          "JACQUARD LACE",
          "HERRINGBONE TAPE",
          "DRAW CORD",
          "DRAW CORD WITH TIP (BRANDED OR NON BRANDED)",
        ],
      },
      {
        category: "PRINTED LACE",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dsqBkLF-btA66PI3wws_ctzhomoUB-RtNQ&s",
        items: ["PRINTED RIBBON & PACKING TAPE", "PRINTED CUSTOM LANYARD"],
      },
    ],
  },
  {
    group: "TAGS",
    slug: "tags",
    description: "Tags include hang tags, price tags, and brand tags made from paper, plastic, or fabric and attached to garments for branding or info.",
    image: "https://images.pexels.com/photos/1111319/pexels-photo-1111319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    categories: [
      {
        category: "GENERAL TAGS",
        items: [
          "EMBOSSED TAG",
          "DE-EMBOSSED TAG",
          "UV EFFECT TAGS",
          "FOIL EFFECT TAG",
          "DIE CUT TAG",
          "PLASTIC TAG",
          "FABRIC TAG",
          "LUGGAGE TAG",
          "PRODUCT INSERT TAG",
          "BUTTON POUCH",
        ],
      },
    ],
  },
  {
    group: "TAG SEALS",
    slug: "tag-seals",
    description: "Tag seals are small locking mechanisms used to secure tags to garments, often customized with logos.",
    image: "https://5.imimg.com/data5/KD/ZP/EC/SELLER-46123511/img-20200220-wa0020-500x500.jpg",
    categories: [
      {
        category: "GENERAL",
        items: ["PLAIN TAG SEALS", "TAG SEAL WITH BRAND SEALS"],
      },
    ],
  },
  {
    group: "STICKERS",
    slug: "stickers",
    description: "Stickers are adhesive labels used on packaging or products for branding or product info. They come in various finishes.",
    image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/India%20LOB/marketing%20Materials/Labels%20and%20Stickers/Product%20and%20Packaging%20Labels/IN_Product-and-Packaging-Labels_Hero-image_01",
    categories: [
      {
        category: "GENERAL",
        items: ["VINYL STICKER", "BARCODE STICKER", "POLYBAG STICKER", "CARTON STICKER"],
      },
    ],
  },
  {
    group: "PATCHES or BADGES",
    slug: "patches-or-badges",
    description: "Patches or badges are embroidered or printed pieces attached to clothing for branding or decoration.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXLy7M2by830jyi6wBTBgOvE3XMBqAsFAL_WkNletP-vQvnXSje11RcJpbr7WvRC25Fg&usqp=CAU",
    categories: [
      {
        category: "BADGE TYPES",
        items: [
          "WOVEN PATCHES OR BADGES",
          "PRINTED PATCHES OR BADGES",
          "EMBROIDERY PATCHES OR BADGES",
          "SUBLIMATION PATCHES OR BADGES",
          "CHENILLE/BOUCLE PATCHES OR BADGES",
        ],
      },
    ],
  },
  {
    group: "FLEXIBLE LABELS",
    slug: "flexible-labels",
    description: "Flexible labels are soft and adaptable, made from rubber, silicone, or soft PVC, used on activewear, bags, or footwear.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-53zG_keMefUJV-nywGObl33GlCKVh0POg&s",
    categories: [
      {
        category: "GENERAL",
        items: ["PVC LABEL / RUBBER LABEL", "SILICONE BADGE", "HIGH FREQUENCY BADGES"],
      },
    ],
  },
  {
    group: "LEATHER OR PU LABELS",
    slug: "leather-or-pu-labels",
    description: "Leather or PU labels are sewn onto garments like jeans, bags, or jackets. They can be genuine or synthetic leather.",
    image: "https://acctrims.com/wp-content/uploads/2022/08/leather-labels_DSC0800.jpg",
    categories: [
      {
        category: "GENERAL",
        items: ["EMBOSSED LEATHER LABEL", "DEBOSS LEATHER LABEL"],
      },
    ],
  },
  {
    group: "SECURITY LABELS",
    slug: "security-labels",
    description: "Security labels include RFID or anti-theft tags used in retail to prevent shoplifting and manage inventory.",
    image: "https://geipl.com/wp-content/uploads/2024/06/Security-labels.png",
    categories: [
      {
        category: "SOFT TAGS",
        items: ["AM SCENSOR", "RF SCENSOR"],
      },
      {
        category: "HARD TAGS",
        items: ["HARD TAGS"],
      },
    ],
  },
  {
    group: "METAL LABELS",
    slug: "metal-labels",
    description: "Metal labels are durable decorative pieces, usually with embossed logos, used on jeans, bags, or shoes.",
    image: "https://i.etsystatic.com/14683597/r/il/fc540b/1184273262/il_570xN.1184273262_rdyp.jpg",
    categories: [
      {
        category: "METAL TYPES",
        items: ["Brass", "Stainless steel (SS)"],
      },
    ],
  },
];

export default labelHierarchy;