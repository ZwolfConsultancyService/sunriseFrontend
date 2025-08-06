import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import wovenEdgeWovenImg from "../../../assets/web-img/woven edge woven label.jpg";
import waterbaseImg from "../../../assets/web-img/waterbase heat transfer.jpg";
import heatTransferGeneric from "../../../assets/web-img/high intensity heat transfer label.jpg";
import embossImg from "../../../assets/web-img/emboss printing.jpg";

const bestSellerItems = [
  {
    title: "HIGH DENSITY WOVEN LABELS",
    image: wovenEdgeWovenImg,
    link: "/label/woven-labels/rapier-label/high-density-woven-labels", 
  },
  {
    title: "WATERBASE HEAT TRANSFER",
    image: waterbaseImg,
    link: "/label/heat-transfer-labels/waterbase-heat-transfer", 
  },
  {
    title: "HIGH DENSITY HEAT TRANSFER",
    image: heatTransferGeneric,
    link: "/label/heat-transfer-labels/high-density-heat-transfer", 
  },
  {
    title: "EMBOSS PRINTING",
    image: embossImg,
    link: "/label/heat-transfer-labels/emboss-printing", 
  },
  {
    title: "TAGS",
    image: "https://images.pexels.com/photos/1111319/pexels-photo-1111319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    link: "/label/tags", 
  },
  {
    title: "TAG SEAL",
    image: "https://5.imimg.com/data5/KD/ZP/EC/SELLER-46123511/img-20200220-wa0020-500x500.jpg",
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
    <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100 py-12 mt-12">
      <div className="w-[90%] max-w-6xl mx-auto rounded-lg px-6 py-10 text-center ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8" data-aos="fade-up">
          Best Seller Categories
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="mb-8"
        >
          {bestSellerItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative w-full h-[300px] md:h-[400px] rounded-md overflow-hidden group cursor-pointer"
                onClick={() => handleItemClick(item.link)}
              >
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

              <p className="text-sm text-gray-700 font-medium mt-4">
                {item.title}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellerBanner;