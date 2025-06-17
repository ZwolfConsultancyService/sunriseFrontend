import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Anjali Mehta",
    position: "Founder, Urban Threads",
    feedback:
      "Working with Sunrise Label has been a game-changer. Their commitment to quality and detail reflects in every product we receive.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Rahul Kapoor",
    position: "Creative Head, Trendwear",
    feedback:
      "Exceptional service, professional communication, and fast delivery – everything you’d expect from a global-standard label partner.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sara Ali",
    position: "Production Manager, Indigo Apparel",
    feedback:
      "Sunrise Label provides world-class trims and always delivers on time. Their eco-friendly options are perfect for our sustainability goals.",
    avatar: "https://i.pravatar.cc/150?img=36",
  },
  {
    name: "Karan Malhotra",
    position: "Brand Director, LuxeLine",
    feedback:
      "They understand brand identity and translate it into trims that elevate our garments. Impressive every time.",
    avatar: "https://i.pravatar.cc/150?img=18",
  },
  {
    name: "Priya Sharma",
    position: "Merchandiser, StreetSoul",
    feedback:
      "Reliable partners who never compromise on aesthetics or deadlines. Our go-to for premium woven labels.",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
  {
    name: "Zara Khan",
    position: "Sourcing Lead, ModaNova",
    feedback:
      "From concept to execution, Sunrise Label delivers precision and consistency. Their team is proactive and skilled.",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
  {
    name: "Vikram Desai",
    position: "Operations Head, PureWear",
    feedback:
      "What sets them apart is the attention to eco-materials and compliance. True partners in sustainable fashion.",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
];


// const Testimonials = () => {

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     speed: 600,
//     autoplaySpeed: 5000,
//     slidesToShow: 2.5,
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1.5,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="bg-white py-20 px-4 md:px-10 lg:px-20">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
//           Hear From Our Clients
//         </h2>
//         <Slider {...settings}>
//           {testimonials.map((t, index) => (
//             <div key={index} className="px-3">
//               <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col justify-between">
//                 <div>
//                   <FaQuoteLeft className="text-indigo-500 text-xl mb-4" />
//                   <p className="text-gray-700 text-base leading-relaxed mb-6">“{t.feedback}”</p>
//                 </div>
//                 <div className="flex items-center mt-auto">
//                   <img
//                     src={t.avatar}
//                     alt={t.name}
//                     className="w-12 h-12 rounded-full object-cover border border-indigo-100 mr-4"
//                   />
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-800">{t.name}</h4>
//                     <p className="text-xs text-gray-500">{t.position}</p>
//                     <div className="flex mt-1 text-yellow-400 text-xs">
//                       {[...Array(5)].map((_, i) => (
//                         <FaStar key={i} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

const PrevArrow = ({ className, style, onClick }) => (
  <button
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md hover:bg-indigo-100 transition"
    onClick={onClick}
    aria-label="Previous testimonial"
  >
    <svg
      className="w-6 h-6 text-indigo-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md hover:bg-indigo-100 transition"
    onClick={onClick}
    aria-label="Next testimonial"
  >
    <svg
      className="w-6 h-6 text-indigo-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 5000,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="bg-white  px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Hear From Our Clients
        </h2>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col justify-between">
                <div>
                  <FaQuoteLeft className="text-indigo-500 text-xl mb-4" />
                  <p className="text-gray-700 text-base leading-relaxed mb-6">“{t.feedback}”</p>
                </div>
                <div className="flex items-center mt-auto">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-indigo-100 mr-4"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.position}</p>
                    <div className="flex mt-1 text-yellow-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials