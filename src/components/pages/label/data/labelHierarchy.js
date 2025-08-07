
import rapierImg from '../../../../assets/web-img/rapier images.jpg';
import niddleImg from '../../../../assets/web-img/niddle label.jpg';
import shuttleImg from '../../../../assets/web-img/shuttle label.jpg';
import splitEdgeWovenImg from '../../../../assets/web-img/split edge woven label.jpg';
import wovenEdgeWovenImg from '../../../../assets/web-img/woven edge woven label.jpg';
import softEdgeWovenImg from '../../../../assets/web-img/soft edge woven label.jpg';

// Printed Labels
import careLabelImg from '../../../../assets/web-img/care label.jpg';
import mainLabelImg from '../../../../assets/web-img/main label.jpg';
import printingLabelImg from '../../../../assets/web-img/3d printing label.jpg';
import cottonMixImg from '../../../../assets/web-img/cotton or twill or canvas or grosgrain.avif';
import satinImg from '../../../../assets/web-img/satin.jpg';
import tafitaImg from '../../../../assets/web-img/tafita.jpg';

// Heat Transfer Labels
import heatTransferGeneric from '../../../../assets/web-img/high intensity heat transfer label.jpg';
import ironOnImg from '../../../../assets/web-img/iron on heat label.jpg';
import pvcPlastiolImg from '../../../../assets/web-img/pvc or plastiol heat transfer.jpg';
import plastiolHeatImg from '../../../../assets/web-img/plastiol heat transfer.jpg';
import siliconImg from '../../../../assets/web-img/silicon heat transfer.jpg';
import puffImg from '../../../../assets/web-img/puff heat transfer label.jpg';
import rhinestoneImg from '../../../../assets/web-img/rhinestone heat transfer.jpg';
import glitterImg from '../../../../assets/web-img/glitter transfer.jpg';
import foilImg from '../../../../assets/web-img/foil heat transfer.jpg';
import reflectiveImg from '../../../../assets/web-img/reflective heat transfer.jpg';
import photoHeatTransferImg from '../../../../assets/web-img/plastiol photo heat tranfer label.jpg';
import neonImg from '../../../../assets/web-img/neon transfer label.jpg';
import flockImg from '../../../../assets/web-img/flock heat transfer.jpg';

// Narrow Fabric
import laceImg from '../../../../assets/web-img/laces.jpg';
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

// Tags
import embossedTagImg from '../../../../assets/web-img/emboss tag.jpg';
import deembossTagImg from '../../../../assets/web-img/de-emboss tag.jpg';
import uvEffectImg from '../../../../assets/web-img/uv effect tag.jpg';
import foilEffectImg from '../../../../assets/web-img/foil effect tag.jpg';
import dieCutImg from '../../../../assets/web-img/die cut tag.jpg';
import plasticTagImg from '../../../../assets/web-img/plastic tag.jpg';
import fabricTagImg from '../../../../assets/web-img/fabric tag.jpg';
import luggageTagImg from '../../../../assets/web-img/luggage tag.jpg';
import productInsertTagImg from '../../../../assets/web-img/product insert tag.jpg';
import buttonPouchImg from '../../../../assets/web-img/button pouch.jpg';
import plainSealImg from '../../../../assets/web-img/plain tag seal.jpg';
import brandSealImg from '../../../../assets/web-img/tag seal with brand seal.jpg';

// Stickers
import vinylStickerImg from '../../../../assets/web-img/vinly steaker.jpg';
import barcodeImg from '../../../../assets/web-img/barcode sticker.png';
import polybagImg from '../../../../assets/web-img/polybag sticker.jpg';
import cartonImg from '../../../../assets/web-img/cartoon sticker.jpg';

// Patches or Badges
import wovenBadgeImg from '../../../../assets/web-img/woven pateches or badges.jpg';
import printedBadgeImg from '../../../../assets/web-img/printed patches or badges.jpg';
import embroideryBadgeImg from '../../../../assets/web-img/embroidery patches or badges.jpg';
import sublimationBadgeImg from '../../../../assets/web-img/sublimation patches or badges.jpg';
import chilleBadgeImg from '../../../../assets/web-img/chille or patches or badges.jpg';

// Flexible Labels
import pvcLabelImg from '../../../../assets/web-img/pvc or rubber label.jpg';
import siliconeBadgeImg from '../../../../assets/web-img/silicon badge.jpg';
import highFreqImg from '../../../../assets/web-img/high frequen badge.jpg';

// Leather Labels
import embossedLeatherImg from '../../../../assets/web-img/embossed leather label.jpg';
import debossLeatherImg from '../../../../assets/web-img/deboss leather label.jpg';

// Security Labels
import softTagImg from '../../../../assets/web-img/soft tag.jpg';
import hardTagImg from '../../../../assets/web-img/hard tag.jpg';
import amSensorImg from '../../../../assets/web-img/am sensor.jpg';
import rfSensorImg from '../../../../assets/web-img/rf sensor.jpg';

// Metal Labels
import brassImg from '../../../../assets/web-img/brass label.jpg';
import stainlessImg from '../../../../assets/web-img/stainless label.jpg';

const labelHierarchy = [
  {
    group: "WOVEN LABELS",
    slug: "woven-labels",
    description: "Woven labels are garment labels woven on a loom. It expresses logo, text, pattern, size, and wash symbols by fixing warp and weft...",
    image: "https://i.etsystatic.com/9001642/r/il/920af3/1070281893/il_570xN.1070281893_eg2g.jpg",
    categories: [
      {
        category: "RAPIER LABEL",
        image: rapierImg,
        items: ["SPLIT EDGE WOVEN LABEL", "HIGH DENSITY WOVEN LABELS"],
      },
      {
        category: "NIDDLE LABEL",
        image: niddleImg ,
        items: ["WOVEN EDGE WOVEN LABEL"],
      },
      {
        category: "SHUTTLE LABEL",
        image: shuttleImg ,
        items: ["SOFT EDGE WOVEN LABEL"],
      },
    ],
  },
  {
    group: "PRINTED LABELS",
    slug: "printed-labels",
    description: "Printed labels are made by printing directly on fabric materials like satin, cotton, or polyester. They are economical and suitable for lightweight garments.",
    image: "https://www.labelpartners.com/img/woevenlabels_high_end_2-o.jpg",
    categories: [
      {
        category: "CARE LABEL",
        image: careLabelImg,
        items: ["SATIN", "TAFFETA", "COTTON / TWILL / CANVAS / GROSGRAIN"],
      },
      {
        category: "MAIN LABEL",
        image: mainLabelImg,
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
    image: "https://cruzlabel.com/cdn/shop/products/IMG_2398_2000x2000_e766c8d3-d608-492a-bfe5-462ef6e4b06e_2000x2000.jpg?v=1654894831",
    categories: [
      {
        category: "PLASTISOL HEAT TRANSFER",
        image: plastiolHeatImg,
        items: []
      },
      {
        category: "WATERBASE HEAT TRANSFER",
        image: "https://cdn.prod.website-files.com/670fe58f410a6c2d407036b1/671172f3ff11abf6fcb9856b_6553afb3c1ed762c23c5095d_5fd3a4a0aaebb0d5c536f357_printed-tee-heat-transfer-1024x512.jpeg",
         items: ["IRONON HEAT TRANSFER"]
        // items: ["FOIL HEAT TRANSFER", "REFLECTIVE HEAT TRANSFER"]
      },
      {
        category: "HIGH DENSITY HEAT TRANSFER",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/4/409782195/QT/ZC/NK/11019494/heat-transfer-label.png",
        items: ["PVC / PLASTISOL HEAT TRANSFER", "SILICON HEAT TRANSFER", "3D HEAT TRANSFER"]
      },
      {
        category: "FLOCK HEAT TRANSFER",
        image: flockImg,
        items: []
      },
      {
        category: "NEON TRANSFER LABEL",
        image: neonImg,
        items: [ ]
      },
        {
        category: "FOIL TRANSFER LABEL",
        image:foilImg,
        items: [ ]
      },
        {
        category: "REFLECTIVE HEAT TRANSFER",
        image: reflectiveImg,
        items: [ ]
      },
       {
        category: "PLASTISOL PHOTO HEAT TRANSFER LABEL",
        image: photoHeatTransferImg,
        items: [ ]
      },
       {
        category: "EMBOSS PRINTING",
        image: "https://superlabels.in/wp-content/uploads/2025/01/Blog4b-1024x683.jpg",
        items: []
      },
        {
        category: "PUFF HEAT TRANSFER LABEL",
        image: puffImg,
        items: []
      },
       {
        category: "RHINESTONE HEAT TRANSFER",
        image: rhinestoneImg,
        items: []
      },
       {
        category: "GLITTER TRANSFER",
        image: glitterImg,
        items: []
      },
    ],
  },
  {
    group: "NARROW FABRIC",
    slug: "narrow-fabric",
    description: "Narrow fabrics include tapes, ribbons, webbings, and elastic bands used for various garment trims and decorations.",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/double-damask-labels-2009874306-1q8tkwzr.jpg",
    categories: [
      {
        category: "LACES",
        image:laceImg,
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
        image: printedRibbonImg,
        items: ["PRINTED RIBBON & PACKING TAPE", "PRINTED CUSTOM LANYARD"],
      },
    ],
  },
  {
    group: "TAGS",
    slug: "tags",
    description: "Tags include hang tags, price tags, and brand tags made from paper, plastic, or fabric and attached to garments for branding or info.",
    image: "https://paulgordonbrown.com/wp-content/uploads/2017/01/tags2.png?w=1400",
    categories: [
      {
        category: "EMBOSSED TAG",
        image: embossedTagImg,
        items: [],
      },
      {
        category: "DE-EMBOSSED TAG",
        image: deembossTagImg,
        items: [],
      },
      {
        category: "UV EFFECT TAGS",
        image: uvEffectImg,
        items: [],
      },
      {
        category: "FOIL EFFECT TAG",
        image: foilEffectImg,
        items: [],
      },
      {
        category: "DIE CUT TAG",
        image: dieCutImg,
        items: [],
      },
      {
        category: "PLASTIC TAG",
        image: plasticTagImg,
        items: [],
      },
      {
        category: "FABRIC TAG",
        image: fabricTagImg,
        items: [],
      },
      {
        category: "LUGGAGE TAG",
        image: luggageTagImg,
        items: [],
      },
      {
        category: "PRODUCT INSERT TAG",
        image: productInsertTagImg,
        items: [],
      },
      {
        category: "BUTTON POUCH",
        image: buttonPouchImg,
        items: [],
      },
    ],
  },
  {
    group: "TAG SEALS",
    slug: "tag-seals",
    description: "Tag seals are small locking mechanisms used to secure tags to garments, often customized with logos.",
    image: "https://s.alicdn.com/@sc04/kf/H5a25f17ef0504745be4824956d12a6edB/Custom-Gold-logo-Label-Design-Plastic-Seal-Tag-Garment-Plastic-hang-Tag-With-String.jpg",
    categories: [
      {
        category: "PLAIN TAG SEALS",
        image: plainSealImg,
        items: [],
      },
      {
        category: "TAG SEAL WITH BRAND SEALS",
        image: brandSealImg,
        items: [],
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
        category: "VINYL STICKER",
        image: vinylStickerImg,
        items: [],
      },
      {
        category: "BARCODE STICKER",
        image: barcodeImg,
        items: [],
      },
      {
        category: "POLYBAG STICKER",
        image: polybagImg,
        items: [],
      },
      {
        category: "CARTON STICKER",
        image: cartonImg,
        items: [],
      },
    ],
  },
  {
    group: "PATCHES or BADGES",
    slug: "patches-or-badges",
    description: "Patches or badges are embroidered or printed pieces attached to clothing for branding or decoration.",
    image: "https://images.squarespace-cdn.com/content/v1/5f8fb8ef8b6352418b169f42/d595a2ff-c9af-46cc-8734-7cd64e4800e2/20240621_151555.jpg",
    categories: [
      {
        category: "WOVEN PATCHES OR BADGES",
        image: wovenBadgeImg,
        items: [],
      },
      {
        category: "PRINTED PATCHES OR BADGES",
        image: printedBadgeImg,
        items: [],
      },
      {
        category: "EMBROIDERY PATCHES OR BADGES",
        image: embroideryBadgeImg,
        items: [],
      },
      {
        category: "SUBLIMATION PATCHES OR BADGES",
        image: sublimationBadgeImg,
        items: [],
      },
      {
        category: "CHENILLE/BOUCLE PATCHES OR BADGES",
        image: chilleBadgeImg,
        items: [],
      },
    ],
  },
  {
    group: "FLEXIBLE LABELS",
    slug: "flexible-labels",
    description: "Flexible labels are soft and adaptable, made from rubber, silicone, or soft PVC, used on activewear, bags, or footwear.",
    image: "https://unitedlabelcorp.com/wdpr/wp-content/uploads/2023/04/shutterstock_1885945663.jpg",
    categories: [
      {
        category: "PVC LABEL / RUBBER LABEL",
        image: pvcLabelImg,
        items: [],
      },
      {
        category: "SILICONE BADGE",
        image: siliconeBadgeImg,
        items: [],
      },
      {
        category: "HIGH FREQUENCY BADGES",
        image: highFreqImg,
        items: [],
      },
    ],
  },
  {
    group: "LEATHER OR PU LABELS",
    slug: "leather-or-pu-labels",
    description: "Leather or PU labels are sewn onto garments like jeans, bags, or jackets. They can be genuine or synthetic leather.",
    image: "https://www.clothinglabels.cn/wp-content/uploads/2023/04/DSC0577.jpg",
    categories: [
      {
        category: "EMBOSSED LEATHER LABEL",
        image: embossedLeatherImg,
        items: [],
      },
      {
        category: "DEBOSS LEATHER LABEL",
        image: debossLeatherImg,
        items: [],
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
         image: softTagImg,
        items: ["AM SCENSOR", "RF SCENSOR"],
      },
      {
        category: "HARD TAGS",
         image:hardTagImg,
        items: [],
      },
    ],
  },
  {
    group: "METAL LABELS",
    slug: "metal-labels",
    description: "Metal labels are durable decorative pieces, usually with embossed logos, used on jeans, bags, or shoes.",
    image: "https://cdn.pixabay.com/photo/2015/03/01/12/42/tag-654697_1280.jpg",
    categories: [
      {
        category: "Brass",
        image: brassImg,
        items: [],
      },
      {
        category: "Stainless steel (SS)",
        image: stainlessImg,
        items: [],
      },
    ],
  },
];

export default labelHierarchy;
