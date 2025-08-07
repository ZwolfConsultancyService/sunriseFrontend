import React, { useEffect, useState } from "react";
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
  const [visibleTitleIndex, setVisibleTitleIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  
  const reduceWidthIndexes = [2, 3, 5, 7, 11, 13]; 
  const reduceHeightIndexes = [1, 4, 8, 12]; 
  
  // Helper functions
  const shouldReduceWidth = (index) => reduceWidthIndexes.includes(index);
  const shouldReduceHeight = (index) => reduceHeightIndexes.includes(index);

  return (
    <div className="w-full bg-gray-50 py-10" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-8">Our Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative group rounded-xl overflow-hidden shadow-lg cursor-pointer ${
              shouldReduceWidth(index) 
                ? "md:col-span-1 lg:w-3/4 mx-auto" 
                : "md:col-span-1" 
            } ${
              shouldReduceHeight(index)
                ? "h-[250px]" 
                : "h-[400px]" 
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
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                visibleTitleIndex === index
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <h3 className="text-white text-xl font-semibold text-center px-4">
                {img.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;