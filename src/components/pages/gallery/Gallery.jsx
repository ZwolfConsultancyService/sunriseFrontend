import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// 🖼️ Images
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
  { src: CryoPatch, title: "Cryo Chamber" },
  { src: CyberOniPatch, title: "Cyber Oni" },
  { src: ActivityBadges, title: "Activity Badges" },
  { src: GarmentLabels1, title: "Branded Labels" },
  { src: GarmentLabels2, title: "Fashion Labels" },
  { src: SamuraiPatch, title: "Samurai Warrior" },
  { src: MixedPatchSet, title: "Multi-Patch Collection" },
  { src: AntlerSkeleton, title: "Antlered Skeleton" },
  { src: FashionTag, title: "Fashion Tag Design" },
  { src: FashionVOGUE, title: "VOGUE Label" },
  { src: cyberpunk, title: "Cyberpunk Aesthetic" },
  { src: NoTimetoDie, title: "No Time to Die" },
  { src: GirlguidingBadges, title: "Girlguiding Badges" },
  { src: GarmentHangTag, title: "Hang Tag Design" },
  { src: ClothingCareTag, title: "Clothing Care Tag" },
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [visibleTitleIndex, setVisibleTitleIndex] = useState(null); // 🔑 for mobile tap

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const interval = setInterval(() => {
      const container = scrollRef.current;
      const cardWidth = container.clientWidth / 3.5;

      container.scrollBy({ left: cardWidth, behavior: "smooth" });

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isDesktop]);

  const scroll = (dir) => {
    const container = scrollRef.current;
    const cardWidth = container.clientWidth / 3.5;
    container.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-gray-50 py-10" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-8">Our Gallery</h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className={`${
            isDesktop
              ? "flex overflow-x-auto scroll-smooth no-scrollbar space-x-4 px-10 snap-x py-4"
              : "grid grid-cols-1 gap-6 px-6"
          }`}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative group rounded-xl overflow-hidden shadow-lg ${
                isDesktop
                  ? "w-[28%] h-[400px] flex-shrink-0 snap-start"
                  : "w-full h-[400px]"
              }`}
              onClick={() =>
                setVisibleTitleIndex(
                  visibleTitleIndex === index ? null : index
                )
              }
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                  isDesktop
                    ? "opacity-0 group-hover:opacity-100"
                    : visibleTitleIndex === index
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <h3 className="text-white text-xl font-semibold">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows only on Desktop */}
        {isDesktop && (
          <>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
              onClick={() => scroll("left")}
            >
              <FaArrowLeft />
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
              onClick={() => scroll("right")}
            >
              <FaArrowRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
