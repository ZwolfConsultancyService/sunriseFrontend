import Aos from "aos";
import React, { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";

const products = [
  {
    name: "Black baseball cap",
    price: "$12",
    image:
      "https://storage.googleapis.com/a1aa/image/95514d06-5f74-46d5-af8c-27ce876abe11.jpg",
  },
  {
    name: "Iridescent iPhone case",
    price: "$19",
    image:
      "https://storage.googleapis.com/a1aa/image/f0e9b45e-4c01-42bc-efb5-d5728ce3865a.jpg",
    badge: "New",
  },
  {
    name: "Black analogue watch",
    price: "$43",
    image:
      "https://storage.googleapis.com/a1aa/image/c941ca74-026c-4b01-76b5-d6441955ad0e.jpg",
  },
  {
    name: "Ombré vinyl backpack",
    price: "$29",
    oldPrice: "$37",
    image:
      "https://storage.googleapis.com/a1aa/image/948030d8-a4dc-40c3-b9c5-f309f5d64004.jpg",
    discount: "-22%",
  },
  {
    name: "Golden earrings",
    price: "$25",
    image:
      "https://ld-wt73.template-help.com/intense/intense2/images/products/product-11-290x372.jpg",
  },
  {
    name: "Iridescent tote bag",
    price: "$32",
    image:
      "https://ld-wt73.template-help.com/intense/intense2/images/products/product-04-290x372.jpg",
    badge: "New",
  },
  {
    name: "Stationery collection",
    price: "$25",
    oldPrice: "$45",
    image:
      "https://ld-wt73.template-help.com/intense/intense2/images/products/product-05-290x372.jpg",
    discount: "-33%",
  },
  {
    name: "Iridescent belt bag",
    price: "$10",
    image:
      "https://ld-wt73.template-help.com/intense/intense2/images/products/product-06-290x372.jpg",
  },
  {
    name: "White sneakers",
    price: "$40",
    image:
      "https://ld-wt73.template-help.com/intense/intense2/images/products/product-12-290x372.jpg",
  },
  {
    name: "Travel backpack",
    price: "$60",
    oldPrice: "$80",
    image:
      "https://th.bing.com/th/id/OIP.J9CgrEcGL6y6nHfJRqrJlQHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
    discount: "-25%",
  },
  {
    name: "Phone case with chain",
    price: "$45",
    oldPrice: "$53",
    image:
      "https://ld-wt73.template-help.com/intense/intense2/images/products/product-08-290x372.jpg",
  },
  {
    name: "Rose eau de toilette",
    price: "$55",
    badge: "New",
    image:
      "https://ld-wt73.template-help.com/intense/intense2/images/products/product-09-290x372.jpg",
  },
];

const Product = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-white font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center leading-tight">
          Your fit. Your style
        </h1>
        <p className="mt-3 text-center text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Create exactly what you need with our powerful bootstrap toolkit.
        </p>

        <div className="mt-10 grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center text-center text-sm sm:text-base"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="relative w-full max-w-[160px] sm:max-w-[200px] md:max-w-[240px] h-40 sm:h-48 md:h-60">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain rounded-md"
                />

                {/* Hover Cart Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-green-500 p-2 sm:p-3 rounded-full shadow-lg">
                    <FiShoppingCart className="text-white text-sm sm:text-lg" />
                  </div>
                </div>

                {/* Badges */}
                {item.badge && (
                  <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
                {item.discount && (
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-red-500 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded">
                    {item.discount}
                  </span>
                )}
              </div>
              <h2 className="mt-4 text-sm sm:text-base font-medium">{item.name}</h2>
              <p className="mt-1 text-xs sm:text-sm text-gray-400">
                {item.oldPrice && (
                  <span className="line-through mr-1">{item.oldPrice}</span>
                )}
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
