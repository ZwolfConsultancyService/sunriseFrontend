const labelCategoryDetails = {
  "rapier-label": {
    title: "Rapier Label (Woven on Rapier Looms)",
    intro: "Rapier labels are crafted using rapier weaving machines, which are among the most modern and advanced types of weaving looms in the textile industry.",
    features: [
      "Enables high-resolution, intricate multi-color designs",
      "Material: Damask, taffeta, or cotton",
      "Finishing: Ultrasonic, heat, or laser cutting",
      "Fold types: center, manhattan, end, loop",
      "Used in: luxury apparel, kidswear, sportswear",
      "Supports fine micro-text and advanced graphics"
    ],
    applications: "Brands that emphasize quality and detail prefer rapier labels for their premium feel and aesthetic value.",
    bestFor: "Detailed logos, smooth textures, and a premium look"
  },

  "needle-label": {
    title: "Needle Label (Woven on Needle Looms)",
    intro: "Needle labels are produced on narrow fabric looms designed for high-speed label weaving, producing labels in continuous rolls.",
    features: [
      "Clean, professional-looking medium-complexity designs",
      "Material: Polyester or satin yarns",
      "Finishing: Hot knife, ultrasonic, or laser cutting",
      "Fold types: straight cut, center, end fold",
      "Options for adhesive or iron-on backings"
    ],
    applications: "Common in T-shirts, jeans, workwear, undergarments.",
    bestFor: "Size tags, care labels, budget branding"
  },

  "shuttle-label": {
    title: "Shuttle Label (Woven on Shuttle Looms)",
    intro: "Shuttle labels use traditional shuttle looms for classic weaving, producing strong, textured, and heritage-rich labels.",
    features: [
      "Dense texture, vintage aesthetic",
      "Material: Cotton, canvas, or thick polyester",
      "Woven selvage edges (no cutting needed)",
      "Usually directly sewn on, not folded"
    ],
    applications: "Used in denim jeans, artisan fashion, military wear.",
    bestFor: "Rugged, authentic designs with heritage value"
  },

  "care-label": {
    title: "Care Label",
    intro: "Care labels are essential tags that provide garment maintenance instructions, legally required in many countries.",
    features: [
      "Includes washing, drying, ironing, bleaching instructions",
      "Fabric composition, country of origin info",
      "Material: Satin, nylon, polyester",
      "Printed or woven, soft on skin",
      "Usually placed on side seam, neck, or hem"
    ],
    applications: "Any garment needing maintenance guidance for consumer use.",
    bestFor: "Consumer care instructions, legal compliance"
  },

  "main-label": {
    title: "Main Label",
    intro: "Main labels are primary brand labels attached to garments, often the first label noticed by customers.",
    features: [
      "Displays brand name, logo, sometimes size",
      "Material: Woven damask or satin",
      "Fold styles: center, manhattan, end, straight cut",
      "Fully customizable in shape, size, color, and thread"
    ],
    applications: "Back of neck in shirts, waistband in pants, or hoodies.",
    bestFor: "Branding, premium identity, aesthetic appeal"
  },

  // --- Heat Transfer Labels continued below ---

  "plastisol-heat-transfer": {
    title: "Plastisol Heat Transfer Label",
    intro: "Plastisol heat transfer labels are created using plastisol ink, a thick, durable ink made from PVC particles suspended in a plasticizer. This type of label is commonly used for bold, vibrant prints that adhere well to fabrics using heat and pressure.",
    features: [
      "Offers opaque, vibrant colors, even on dark fabrics",
      "Has a slightly raised, rubbery texture",
      "Very durable, resists cracking or fading with proper curing"
    ],
    applications: "Common in sportswear, hoodies, T-shirts, and caps where bold designs are required.",
    bestFor: "Designs requiring high opacity, long wash durability, and a solid feel"
  },

  "waterbase-heat-transfer": {
    title: "Water-Based Heat Transfer Label",
    intro: "Water-based heat transfers use eco-friendly inks that penetrate fabric fibers, resulting in a soft, breathable print.",
    features: [
      "Soft hand-feel, barely noticeable on touch",
      "Eco-conscious and safe for sensitive skin",
      "Ideal for light-colored garments"
    ],
    applications: "Used in babywear, fashion tees, and organic cotton apparel.",
    bestFor: "Natural finish, minimal texture, and eco-friendliness"
  },

  "foil-heat-transfer": {
    title: "Foil Heat Transfer Label",
    intro: "Foil transfers apply a metallic or reflective foil layer onto fabric using heat and adhesive, creating a shiny and luxurious finish.",
    features: [
      "High-shine metallic effect (gold, silver, holographic, etc.)",
      "Needs a base adhesive layer",
      "Can fade or crack over time if over-stretched"
    ],
    applications: "Popular in fashion wear, clubwear, evening apparel, and branding highlights.",
    bestFor: "Luxury branding, glam aesthetics, and limited edition looks"
  },

  "reflective-heat-transfer": {
    title: "Reflective Heat Transfer Label",
    intro: "Reflective labels use pigments or films that bounce light back, enhancing visibility in low-light conditions.",
    features: [
      "Improves nighttime visibility",
      "Compliant with ANSI or EN471 standards",
      "Available as logos or reflective strips"
    ],
    applications: "Used in activewear, safety uniforms, and high-visibility gear.",
    bestFor: "Garments requiring visibility and safety at night"
  },

  "photo-heat-transfer": {
    title: "Plastisol Photo Heat Transfer Label",
    intro: "A variation of plastisol transfer designed to reproduce photo-quality images using CMYK screen printing or simulated processes.",
    features: [
      "Supports detailed, multi-color or photographic prints",
      "Maintains plastisol’s durability and vibrancy",
      "Requires accurate pressure and alignment"
    ],
    applications: "Ideal for graphic tees, music merch, and promotional clothing.",
    bestFor: "Photo-level detail in colorful designs"
  },

  "high-intensity-heat-transfer": {
    title: "High-Intensity Heat Transfer Label",
    intro: "These labels use special additives or thicker ink layers to achieve a bolder, brighter, or more pronounced effect.",
    features: [
      "Extra brightness, depth, or texture",
      "Striking results on both dark and light fabrics"
    ],
    applications: "Used in performance wear, bold brand campaigns, and premium collections.",
    bestFor: "Designs that need high visual impact"
  },

  "flock-heat-transfer": {
    title: "Flock Heat Transfer Label",
    intro: "Flock transfers have a velvet-like texture created by applying fiber particles to adhesive using electrostatic charge.",
    features: [
      "Soft, raised, fuzzy finish",
      "Provides luxury feel to text or graphics",
      "Typically limited to one or two colors"
    ],
    applications: "Popular in children’s wear, loungewear, and branding patches.",
    bestFor: "Tactile, textured effects on garments"
  },

  "rhinestone-heat-transfer": {
    title: "Rhinestone Heat Transfer Label",
    intro: "These transfers apply decorative stones or crystals to garments via heat-activated adhesive patterns.",
    features: [
      "Adds sparkle, available in many colors and shapes",
      "Requires gentle washing and care"
    ],
    applications: "Used in dancewear, custom tees, partywear.",
    bestFor: "Personalized, glamorous, or festive fashion"
  },

  "glitter-heat-transfer": {
    title: "Glitter Heat Transfer Label",
    intro: "This technique uses glitter flakes embedded in adhesive films to add a shimmery surface using heat.",
    features: [
      "Bright glitter effect that catches light",
      "Slightly rough texture",
      "Great for kidswear or festive wear"
    ],
    applications: "Used in fashion graphics, event wear, or youth clothing.",
    bestFor: "Fun, sparkly, or decorative graphics"
  },

  "neon-heat-transfer": {
    title: "Neon Heat Transfer Label",
    intro: "Neon transfers use fluorescent inks for glowing, high-visibility colors that pop, especially under UV light.",
    features: [
      "Vibrant, energetic neon shades",
      "Best on dark or contrasting backgrounds",
      "Can fade in prolonged sunlight"
    ],
    applications: "Used in rave fashion, activewear, kidswear.",
    bestFor: "Loud, eye-catching designs that stand out"
  },

  "emboss-heat-transfer": {
    title: "Emboss Printing (Heat Embossed Transfer)",
    intro: "Emboss printing uses heat and pressure to create a raised effect in the fabric itself, forming logos or textures without ink.",
    features: [
      "Tonal, elegant look with no added color",
      "Requires synthetic or thick fabric base",
      "Permanent 3D effect"
    ],
    applications: "Used in premium, formal, or minimalistic branding.",
    bestFor: "Subtle elegance and texture without ink"
  },

  "puff-heat-transfer": {
    title: "Puff Heat Transfer Label",
    intro: "Puff transfers include foaming agents that expand under heat, giving the design a raised, spongy texture.",
    features: [
      "3D soft texture",
      "Good for bold text or icons",
      "Slightly less durable than flat inks"
    ],
    applications: "Used in streetwear, kidswear, novelty apparel.",
    bestFor: "Playful, tactile, or statement designs"
  },

  "laces": {
    title: "Laces (General Lace Fabric)",
    intro: "Lace is a delicate and decorative fabric made from threads of cotton, polyester, nylon, silk, or blends, and is characterized by its open, web-like pattern.",
    features: [
      "Ornamental, floral, or geometric design",
      "Available as needle lace, bobbin lace, crochet lace, chemical lace, or Raschel lace",
      "Semi-transparent and lightweight",
      "Soft or stiff depending on material and construction"
    ],
    materials: [
      "Cotton",
      "Polyester",
      "Rayon",
      "Silk",
      "Nylon",
      "Blended yarns"
    ],
    applications: "Used in bridal wear, gowns, blouses, sarees, lingerie, trimmings, and home decor like curtains or cushions.",
    visualAppeal: "Feminine, elegant, and vintage-inspired look. Can be dyed, layered, or combined with other fabrics.",
    productionTypes: [
      "Machine lace (economical)",
      "Handmade lace (intricate and high-end)"
    ]
  },

  "printed-laces": {
    title: "Printed Laces",
    intro: "Printed lace refers to lace fabric that has undergone printing processes to apply colorful patterns on the lace surface.",
    features: [
      "Combines lace texture with colorful printed designs",
      "Prints can be floral, abstract, polka dots, etc.",
      "Often uses sublimation or pigment printing on synthetic lace"
    ],
    materials: [
      "Polyester lace",
      "Nylon lace",
      "Cotton lace (pigment printed)"
    ],
    applications: "Used in designer wear, western dresses, Indo-western garments, scarves, and accessories.",
    visualAppeal: "Adds color, depth, and modern dimension to traditional lace fabric.",
    advantages: [
      "Fusion look: traditional + trendy",
      "Versatile for youth fashion and casual wear"
    ]
  },

  // --- New Tag Types Added Below ---

  "embossed-tags": {
    title: "Embossed Tags",
    intro: "Embossed tags are made by pressing a design (like a logo, pattern, or text) into the material using heat and pressure, creating a raised (3D) effect. These tags add a tactile and premium touch to branding.",
    features: [
      "Raised surface effect on logos or text",
      "Usually made on paper, leather, PU, or plastic",
      "Can be combined with metallic foil or UV print"
    ],
    applications: "Often used in luxury fashion, footwear, handbags, and high-end apparel.",
    bestFor: "Brands seeking premium, minimalist, or heritage aesthetics"
  },

  "de-embossed-tags": {
    title: "De-Embossed Tags (Debossed Tags)",
    intro: "De-embossed (or debossed) tags have the design pressed into the material surface, creating a sunken effect instead of a raised one. It’s subtle, elegant, and often combined with foil stamping.",
    features: [
      "Indented design or text",
      "Durable and long-lasting finish",
      "Works on leather, PU, thick cardstock, PVC, or wood"
    ],
    applications: "Common in leather goods, premium tags, formalwear, and accessories.",
    bestFor: "A subtle and classy branding style"
  },

  "uv-effect-tags": {
    title: "UV Effect Tags",
    intro: "UV effect tags use spot UV coating to highlight specific areas (like a logo or pattern) with a shiny, glossy finish, often contrasting with a matte background.",
    features: [
      "Glossy finish on selected areas",
      "Adds depth and focus to the tag",
      "Applied on coated paper or synthetic tags"
    ],
    applications: "Used in modern fashion, cosmetics, accessories, and tech products.",
    bestFor: "Highlighting key elements like brand names or icons in a sleek way"
  },

  "foil-effect-tags": {
    title: "Foil Effect Tags",
    intro: "Foil effect tags use metallic or holographic foil stamping to create a reflective and luxurious finish. Foils can be gold, silver, rose gold, copper, holographic, etc.",
    features: [
      "Reflective metallic design",
      "Often combined with embossing or de-embossing",
      "Adds a luxury and festive feel"
    ],
    applications: "Used in gifting, partywear, designer wear, and limited edition products.",
    bestFor: "Creating luxury appeal or seasonal promotions"
  },

  "die-cut-tags": {
    title: "Die Cut Tags",
    intro: "Die cut tags are cut into custom shapes instead of traditional rectangles or squares. This allows for unique, brand-specific silhouettes.",
    features: [
      "Custom shapes and edges",
      "Can be simple (circle, oval) or complex (logo shape, object shape)",
      "Works with most materials (paper, PU, plastic)"
    ],
    applications: "Found in kidswear, fashion lines, accessory packaging, and branding campaigns.",
    bestFor: "Creative, eye-catching tags that stand out"
  },

  "plastic-tags": {
    title: "Plastic Tags",
    intro: "Plastic tags are durable tags made from PVC, PP, or ABS materials. They are water-resistant, long-lasting, and often used in outdoor or rugged conditions.",
    features: [
      "Sturdy and washable",
      "Can be transparent, colored, or frosted",
      "Accepts screen or UV printing"
    ],
    applications: "Used in luggage, shoes, swimwear, industrial garments.",
    bestFor: "Durable branding for rough-use or outdoor products"
  },

  "fabric-tags": {
    title: "Fabric Tags (Cloth Tags)",
    intro: "Fabric tags are made from textile materials like cotton, polyester, canvas, or felt and give a soft, natural appeal to branding.",
    features: [
      "Soft and flexible",
      "Can be printed, woven, or embroidered",
      "Adds a handcrafted or sustainable look"
    ],
    applications: "Used in organic wear, handmade products, kidswear, and eco brands.",
    bestFor: "Natural or eco-conscious brand stories"
  },

  "luggage-tags": {
    title: "Luggage Tags",
    intro: "Luggage tags are heavy-duty, often plastic or leather tags used to display branding and contact info on travel gear.",
    features: [
      "Can include a window pocket for user details",
      "Typically includes a strap or loop",
      "Weather-resistant and highly durable"
    ],
    applications: "Used in travel gear, promotional giveaways, luxury suitcases.",
    bestFor: "Functional branding in the travel industry"
  },

  "product-insert-tags": {
    title: "Product Insert Tags",
    intro: "Insert tags are printed cards or booklets placed inside product packaging, providing product details, care instructions, or brand story.",
    features: [
      "Can be single or multi-page",
      "Includes branding, usage tips, certifications",
      "Often made with premium paper or recycled kraft"
    ],
    applications: "Common in jewelry, clothing, electronics, skincare products.",
    bestFor: "Providing rich product information and enhancing unboxing experience"
  },

  "button-pouch": {
    title: "Button Pouch (Accessory Pouch)",
    intro: "Button pouches are small fabric or plastic bags used to hold extra buttons, thread, or accessories included with the garment.",
    features: [
      "Protects small components",
      "Can be transparent (OPP bags) or branded (cotton or canvas)",
      "Often heat sealed or zip-locked"
    ],
    applications: "Seen in formalwear, jackets, shirts, or any item that comes with replacement buttons.",
    bestFor: "Professional garment packaging and customer convenience"
  }
};

export default labelCategoryDetails;
