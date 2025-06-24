import splitEdgeWovenImg from '../../../../assets/web-img/split edge woven label.jpg';
import wovenEdgeWovenImg from '../../../../assets/web-img/woven edge woven label.jpg';
import softEdgeWovenImg from '../../../../assets/web-img/soft edge woven label.jpg';
import printingLabelImg from '../../../../assets/web-img/3d printing label.jpg';
import cottonMixImg from '../../../../assets/web-img/cotton or twill or canvas or grosgrain.avif';
import satinImg from '../../../../assets/web-img/satin.jpg';
import tafitaImg from '../../../../assets/web-img/tafita.jpg';
import ironOnImg from '../../../../assets/web-img/iron on heat label.jpg';
import pvcPlastiolImg from '../../../../assets/web-img/pvc or plastiol heat transfer.jpg';
import siliconImg from '../../../../assets/web-img/silicon heat transfer.jpg';
import heat from '../../../../assets/web-img/3d heat transfer.jpg';
import jacquardImg from '../../../../assets/web-img/jacquard lace.jpg';
import grosgainImg from '../../../../assets/web-img/grosgain tape.jpg';
import twillImg from '../../../../assets/web-img/twill tape.jpg';
import canvasImg from '../../../../assets/web-img/canvas tape.jpg';
import cottonTapeImg from '../../../../assets/web-img/cotton tape.jpg';
import herringboneImg from '../../../../assets/web-img/herringbone tape.jpg';
import drawcordImg from '../../../../assets/web-img/draw cord.jpg';
import drawcordTipImg from '../../../../assets/web-img/draw cord with tip.jpg';
import printedRibbonImg from '../../../../assets/web-img/printed ribbon.jpg';
import customLanyardImg from '../../../../assets/web-img/printed custom lanyard.jpg';
import packingTapeImg from '../../../../assets/web-img/packing tape.jpg';
import printedLacesImg from '../../../../assets/web-img/printed laces.jpg';
import amSensorImg from '../../../../assets/web-img/am sensor.jpg';
import rfSensorImg from '../../../../assets/web-img/rf sensor.jpg';


const labelExtendedDetails = {
  "split-edge-woven-label": {
    title: "Split-Edge Woven Label",
    image: splitEdgeWovenImg,
    description:
      "Split-edge woven labels are manufactured in long strips and cut using ultrasonic or laser technology that seals the edges, preventing fraying. The design is woven into the label using threads, ensuring long-lasting clarity and durability. These labels offer crisp designs and are available in various finishes and textures to match garment aesthetics.",
    applications:
      "Ideal for T-shirts, hoodies, sportswear, denim, caps, and mid-range fashion garments. Also suitable for accessories and casualwear branding.",
    bestFor:
      "Brands needing clean-finished, cost-effective labels with reliable durability, sharp design representation, and high production efficiency."
  },

  "high-density-woven-labels": {
    title: "High-Intensity Woven Label",
    image: wovenEdgeWovenImg, // Using woven edge image as closest match
    description:
      "These are crafted using fine denier threads on advanced looms, allowing extremely sharp detailing in the logo and text. The weaving is dense and high-definition, offering a premium texture and an almost printed-like clarity. The labels are soft yet substantial, offering a luxurious tactile feel.",
    applications:
      "Used in luxury garments, outerwear, premium bags, designer collections, technical wear, and performance sportswear.",
    bestFor:
      "Brands focused on delivering upscale branding with superior legibility and elegance, where every design detail matters."
  },

  "woven-edge-woven-label": {
    title: "Woven-Edge Woven Label",
    image: wovenEdgeWovenImg,
    description:
      "Produced using a traditional shuttle loom that weaves the edge along with the body, these labels are known for their smooth, soft borders and resilience. They do not require post-cutting or heat sealing, preserving the natural weave and finish.",
    applications:
      "High-end garments, tailored suits, delicate innerwear, baby clothing, and premium lingerie.",
    bestFor:
      "Garments where softness, classic elegance, and longevity are essential for skin contact or brand perception."
  },

  "soft-edge-woven-label": {
    title: "Soft-Edge Woven Label",
    image: softEdgeWovenImg,
    description:
      "Made with soft yarns and low-tension weaving methods, soft-edge labels provide maximum comfort while retaining branding clarity. They are lightweight and blend naturally into garments without adding stiffness or irritation.",
    applications:
      "Lingerie, kidswear, seamless garments, yoga wear, sleepwear, and premium innerwear.",
    bestFor:
      "Apparel where wearer comfort is critical, and where the label must be unnoticeable to the skin."
  },

  "satin": {
    title: "Satin",
    image: satinImg,
    description: "Satin is a woven fabric with a glossy surface and dull back, typically made from polyester or silk. Its sheen adds a luxurious look and soft feel, making it ideal for direct skin contact. Labels can be printed or woven on satin, offering both beauty and function.",
    applications: "Luxury fashion, bridalwear, innerwear, kidswear, nightwear, and accessories.",
    bestFor: "Soft-touch, premium-feel branding where elegance and comfort are prioritized."
  },

  "taffeta": {
    title: "Taffeta",
    image: tafitaImg,
    description: "Taffeta is a budget-friendly, crisp, and durable fabric that provides a firm surface for printed information like care instructions, sizes, or basic branding. It comes in various color bases for contrast and legibility.",
    applications: "Care and size labels, casualwear, uniforms, mass production lines.",
    bestFor: "Efficient, readable labels for essential product details in mid- to low-cost garments."
  },

  "cotton-twill-canvas-grosgrain": {
    title: "Cotton / Twill / Canvas / Grosgrain",
    image: cottonMixImg,
    description: "Cotton is natural and breathable, used for eco-labeling and organic garments. Twill has a diagonal weave and is both decorative and functional. Canvas is thick and strong, ideal for rugged garments and utility items. Grosgrain is ribbed and structured, used in decorative trims and packaging.",
    applications: "Eco-conscious labels, bags, jeans, jackets, industrial uniforms, and embellishments.",
    bestFor: "Brands requiring natural texture, strength, or premium aesthetics in functional applications."
  },

  "3d-printing-label": {
    title: "3D Printing Label",
    image: printingLabelImg,
    description: "These labels use layered ink techniques to produce raised graphics or logos, providing a tactile 3D effect. The result is a bold, interactive design that adds value and visibility.",
    applications: "Sportswear, high-street fashion, outerwear, lifestyle apparel.",
    bestFor: "Attention-grabbing branding in activewear or designer casualwear."
  },

  "ironon-heat-transfer": {
    title: "Iron-On Heat Transfer Label",
    image: ironOnImg,
    description: "This method involves transferring pre-printed graphics to fabric via heat. It allows for fine, multi-color, or photo-like detail and is ideal for tagless branding.",
    applications: "T-shirts, activewear, promotional items, kidswear.",
    bestFor: "Seamless, tagless labeling with cost-effective, efficient production."
  },

  "pvc-plastisol-heat-transfer": {
    title: "PVC / Plastisol Heat Transfer",
    image: pvcPlastiolImg,
    description: "Made using PVC or plastisol inks, these transfers are thick, rubbery, and vibrant. They offer high durability, water resistance, and bold designs.",
    applications: "Bags, sports jerseys, streetwear, shoes.",
    bestFor: "Rugged wear branding requiring longevity and vibrant visual impact."
  },

  "silicon-heat-transfer": {
    title: "Silicone Heat Transfer",
    image: siliconImg,
    description: "These labels are soft, flexible, and stretchable, making them ideal for modern performance fabrics. They are hypoallergenic and safe on the skin.",
    applications: "Performance apparel, leggings, innerwear, yoga wear.",
    bestFor: "Skin-friendly, durable branding on technical or fitted clothing."
  },

  "3d-heat-transfer": {
    title: "3D Heat Transfer",
    image: heat, // Using silicon image as closest match for 3D heat transfer
    description: "Similar to silicone or plastisol transfer but molded into multiple raised layers, offering texture and bold visibility with a sculpted feel.",
    applications: "Fashion jackets, footwear, luxury streetwear.",
    bestFor: "High-end garments needing a premium, high-relief logo finish."
  },

  "grosgrain-tape": {
    title: "Grosgrain Tape",
    image: grosgainImg,
    description: "A textured tape with ribbing across the width, made from polyester or cotton. Its firmness and finish make it both decorative and structural.",
    applications: "Fashion trims, hair accessories, gift packaging, garment detailing.",
    bestFor: "Structured trims and decorative, durable packaging solutions."
  },

  "twill-tape": {
    title: "Twill Tape",
    image: twillImg,
    description: "Diagonal weave tape made from cotton, polyester, or blends. It is flexible yet strong, and easy to stitch.",
    applications: "Binding, casings, drawstrings, shoulder tape reinforcement.",
    bestFor: "Structural support or clean edge finish in garments and bags."
  },

  "canvas-tape": {
    title: "Canvas Tape",
    image: canvasImg,
    description: "Strong, heavy-duty tape made from thick canvas fabric. Often used in industrial applications.",
    applications: "Military wear, workwear, tote bags, backpack straps.",
    bestFor: "Heavy-use products where tensile strength and rigidity matter."
  },

  "cotton-tape": {
    title: "Cotton Tape",
    image: cottonTapeImg,
    description: "Soft, eco-friendly tape ideal for natural or sustainable fashion lines.",
    applications: "Babywear, eco-fashion, organic products.",
    bestFor: "Brands committed to sustainability and softness."
  },

  "herringbone-tape": {
    title: "Herringbone Tape",
    image: herringboneImg,
    description: "A chevron-patterned weave offering visual appeal and strength.",
    applications: "Outerwear, jackets, vintage-inspired fashion, uniforms.",
    bestFor: "Stylish reinforcement trims with an upscale aesthetic."
  },

  "jacquard-lace": {
    title: "Jacquard Lace",
    image: jacquardImg,
    description: "Custom-branded lace created on jacquard looms. Can incorporate logos, texts, or patterns directly into the weave.",
    applications: "Custom shoelaces, luxury trims, branded garment accents.",
    bestFor: "Fashion-forward brands seeking high-level customization."
  },

  "draw-cord": {
    title: "Draw Cord",
    image: drawcordImg,
    description: "Round or flat cords used for tightening or adjusting fit in garments or bags. Made from cotton, polyester, or blends.",
    applications: "Hoodies, joggers, jackets, backpacks, sportswear.",
    bestFor: "Comfortable and durable fit adjustment or aesthetic enhancement."
  },

  "draw-cord-with-tip-branded-or-non-branded-": {
    title: "Draw Cord with Tip (Branded/Non-Branded)",
    image: drawcordTipImg,
    description: "Cords sealed with plastic or metal tips for functionality and finish. Tips can be customized with logos or brand initials.",
    applications: "Streetwear, gymwear, luxury loungewear, and bags.",
    bestFor: "Fashion-focused garments where branding must extend to small details."
  },

  "printed-ribbon-packing-tape": {
    title: "Printed Ribbon",
    image: printedRibbonImg,
    description: "Decorative ribbon printed with logos, graphics, or brand colors. Available in satin or grosgrain material for various finishes.",
    applications: "Packaging, product presentation, retail gift wrapping.",
    bestFor: "Luxury branding and elevated unboxing experiences."
  },

  "packing-tape": {
    title: "Packing Tape",
    image: packingTapeImg,
    description: "Adhesive sealing tape printed with branding or handling instructions. Adds marketing value to packaging.",
    applications: "Shipping boxes, warehouse packaging, e-commerce.",
    bestFor: "Reinforcing brand identity during delivery and packaging."
  },

  "printed-custom-lanyard": {
    title: "Printed Custom Lanyard",
    image: customLanyardImg,
    description: "Lanyards made from polyester or satin material, used for ID cards or tags. Printed with company logos, slogans, or colors.",
    applications: "Retail stores, events, conferences, product launches.",
    bestFor: "Professional brand identity and promotional visibility."
  },

  "printed-laces": {
    title: "Printed Laces",
    image: printedLacesImg,
    description: "Custom shoelaces printed with logos, patterns, or brand colors for footwear branding.",
    applications: "Footwear, sneakers, athletic shoes, branded merchandise.",
    bestFor: "Footwear brands seeking unique customization and brand visibility."
  },

  "am-scensor": {
    title: "AM Sensor",
    image: amSensorImg,
    description: "Acousto-magnetic security sensors used for anti-theft protection in retail environments.",
    applications: "Retail security, clothing stores, merchandise protection.",
    bestFor: "Preventing theft and ensuring product security in retail environments."
  },

  "rf-scensor": {
    title: "RF Sensor",
    image: rfSensorImg,
    description: "Radio frequency sensors used for inventory tracking and security purposes.",
    applications: "Retail security, inventory management, product tracking.",
    bestFor: "Advanced security and inventory control systems."
  },
  
};

export default labelExtendedDetails;