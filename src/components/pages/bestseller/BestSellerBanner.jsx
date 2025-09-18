import React from "react";
import { useNavigate } from "react-router-dom";

import wovenEdgeWovenImg from "../../../assets/web-img/woven edge woven label.jpg";
import waterbaseImg from "../../../assets/web-img/waterbase heat transfer.jpg";
import heatTransferGeneric from "../../../assets/web-img/high intensity heat transfer label.jpg";
import embossImg from "../../../assets/web-img/emboss printing.jpg";

const bestSellerItems = [
  {
    title: "HIGH DENSITY WOVEN LABELS",
    image: "https://globaltrim.com/wp-content/uploads/2018/06/DSC_2441.jpg",
    link: "/label/woven-labels/rapier-label/high-density-woven-labels", 
  },
  {
    title: "WATERBASE HEAT TRANSFER",
    image: "https://cdn.prod.website-files.com/670fe58f410a6c2d407036b1/671172f3ff11abf6fcb9856b_6553afb3c1ed762c23c5095d_5fd3a4a0aaebb0d5c536f357_printed-tee-heat-transfer-1024x512.jpeg",
    link: "/label/heat-transfer-labels/waterbase-heat-transfer", 
  },
  {
    title: "HIGH DENSITY HEAT TRANSFER",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/4/409782195/QT/ZC/NK/11019494/heat-transfer-label.png",
    link: "/label/heat-transfer-labels/high-density-heat-transfer", 
  },
  {
    title: "EMBOSS PRINTING",
    image: "https://superlabels.in/wp-content/uploads/2025/01/Blog4b-1024x683.jpg",
    link: "/label/heat-transfer-labels/emboss-printing", 
  },
  {
    title: "TAGS",
    image: "https://paulgordonbrown.com/wp-content/uploads/2017/01/tags2.png?w=1400",
    link: "/label/tags", 
  },
  {
    title: "TAG SEAL",
    image: "https://s.alicdn.com/@sc04/kf/H5a25f17ef0504745be4824956d12a6edB/Custom-Gold-logo-Label-Design-Plastic-Seal-Tag-Garment-Plastic-hang-Tag-With-String.jpg",
    link: "/label/tag-seals", 
  },
  {
    title: "CHENILLE / BOUCLE PATCHES OR BADGES",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXLy7M2by830jyi6wBTBgOvE3XMBqAsFAL_WkNletP-vQvnXSje11RcJpbr7WvRC25Fg&usqp=CAU",
    link: "/label/patches-or-badges/chenilleboucle-patches-or-badges",
  },
];

const BestSellerBanner = () => {
  const navigate = useNavigate();

  const handleItemClick = (link) => {
    navigate(link);
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100 py-8 mt-12">
      <div className="w-[90%] max-w-6xl mx-auto rounded-lg px-6 py-10 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8" data-aos="fade-up">
         Our Hot Trims
        </h2>

        {/* Grid layout instead of slider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bestSellerItems.map((item, index) => (
           <div
  key={index}
  onClick={() => handleItemClick(item.link)}
  className="group cursor-pointer border border-gray-400"
  data-aos="fade-up"
  data-aos-delay={index * 100}
>

              <div className="relative w-full h-[300px] md:h-[350px] rounded-md overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                    Explore Collection
                  </button>
                </div>
              </div>

              <p className="text-base text-gray-700 font-medium mt-4 py-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellerBanner;
