import React, { useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// 🖼️ Import images from assets
import CryoPatch from "../../../assets/label/l-1.jpg";
import CyberOniPatch from "../../../assets/label/l-2.jpg";
import ActivityBadges from "../../../assets/label/l-3.jpg";
import GarmentLabels1 from "../../../assets/label/l-4.jpg";
import GarmentLabels2 from "../../../assets/label/l-5.jpg";
import SamuraiPatch from "../../../assets/label/l-6.jpg";
import MixedPatchSet from "../../../assets/label/l-7.jpg";
import AntlerSkeleton from "../../../assets/label/l-8.jpg";
import FashionTag from "../../../assets/label/l-10.jpg";
import FashionVOGUE from "../../../assets/label/l-11.jpg";
import cyberpunk from "../../../assets/label/l-12.jpg";
import NoTimetoDie from "../../../assets/label/l-13.jpg";
import GirlguidingBadges from "../../../assets/label/l-14.jpg";
import GarmentHangTag from "../../../assets/label/l-15.jpg";
import ClothingCareTag from "../../../assets/label/l-16.jpg";

const images = [
  {
    src: CryoPatch,
    title: "Cryo Chamber",
    description:
      "A futuristic figure floats in a glowing cryo-pod, symbolizing stasis and sci-fi preservation.",
  },
  {
    src: CyberOniPatch,
    title: "Cyber Oni",
    description:
      "A fierce cybernetic demon mask blending fire, tusks, and mechanical chaos.",
  },
  {
    src: ActivityBadges,
    title: "Activity Badges",
    description:
      "Colorful cartoon-style badges representing fun skills and creative achievements.",
  },
  {
    src: GarmentLabels1,
    title: "Branded Labels",
    description:
      "Professional loop tags with brand names for clothing and accessories.",
  },
  {
    src: GarmentLabels2,
    title: "Fashion Labels",
    description:
      "Vibrant woven labels for fashion branding with bold text and colors.",
  },
  {
    src: SamuraiPatch,
    title: "Samurai Warrior",
    description:
      "A warrior's red mask and armor evoke power, tradition, and mysticism.",
  },
  {
    src: MixedPatchSet,
    title: "Multi-Patch Collection",
    description:
      "A collage of diverse patches including brands, police, beer, and fun icons.",
  },
  {
    src: AntlerSkeleton,
    title: "Antlered Skeleton",
    description:
      "A dark skeletal figure with antlers and a red eye, radiating eerie mysticism.",
  },
  {
    src: FashionTag,
    title: "Fashion Tag Design",
    description:
      "Elegant transparent fashion tag with gold print and the Sunrise branding.",
  },
  {
    src: FashionVOGUE,
    title: "VOGUE Label",
    description:
      "High-end woven label reading “VOGUE” in bold, minimalist font for fashion-forward apparel.",
  },
  {
    src: cyberpunk,
    title: "Cyberpunk Aesthetic",
    description:
      "Bright neon label with glitch effects, evoking a futuristic urban streetwear theme.",
  },
  {
    src: NoTimetoDie,
    title: "No Time to Die",
    description:
      "Label inspired by action and espionage, featuring bold typography and filmic design.",
  },
  {
    src: GirlguidingBadges,
    title: "Girlguiding Badges",
    description:
      "Cute, mission-based badges used in girl guiding programs to reward achievements.",
  },
  {
    src: GarmentHangTag,
    title: "Hang Tag Design",
    description:
      "Minimalist hang tag for garments, combining eco-friendly paper and fine print.",
  },
  {
    src: ClothingCareTag,
    title: "Clothing Care Tag",
    description:
      "Detailed wash and care instructions label, typically found inside garments.",
  },
];

const Gallery = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      const cardWidth = container.clientWidth / getVisibleCards();

      container.scrollBy({ left: cardWidth, behavior: "smooth" });

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (dir) => {
    const container = scrollRef.current;
    const cardWidth = container.clientWidth / getVisibleCards();
    container.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // 📱 Determine visible cards based on window width
  const getVisibleCards = () => {
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3.5;
  };

  return (
    <div className="w-full bg-gray-50 py-10" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-8">Our Gallery</h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar space-x-4 px-2 sm:px-4 md:px-6 lg:px-10 snap-x py-4"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="
                  w-[92%] 
                   sm:w-[85%] 
                 md:w-[48%] 
                 lg:w-[28%] 
                 h-[400px]
                 flex-shrink-0 
                 bg-white 
                  rounded-xl 
                  shadow-lg 
                hover:shadow-2xl 
                 transition-shadow 
                duration-300 
                   snap-start
                   space-y-4
                   "
            >
              <img
                src={img.src}
                alt={img.title}
                className="h-56 w-full object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{img.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{img.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
          onClick={() => scroll("left")}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
          onClick={() => scroll("right")}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
