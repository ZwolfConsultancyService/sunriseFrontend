import Aos from "aos";
import React, { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";


const products = [
  {
    id: 1,
    title: 'Black baseball cap',
    price: 12,
    image: 'https://storage.googleapis.com/a1aa/image/95514d06-5f74-46d5-af8c-27ce876abe11.jpg',
    bg: '',
    badge: null,
    description: `This stylish black baseball cap is perfect for everyday wear. 
- Durable and breathable material
- Adjustable strap for a custom fit
- Suitable for all head sizes
- Ideal for sun protection
- Comes with a branded carry pouch.`,
    sizeAndFit: `One size fits all. Adjustable strap at the back ensures a snug fit.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 2,
    title: 'Iridescent iPhone case',
    price: 19,
    image: 'https://storage.googleapis.com/a1aa/image/f0e9b45e-4c01-42bc-efb5-d5728ce3865a.jpg',
    bg: '',
    badge: 'New',
    description: `This iridescent phone case with a silver chain is a perfect choice for any lady looking for quality phone protection. 
- Bright & lightweight
- Fits any phone or smartphone
- Offers full protection
- Has additional inside pockets
- Comes with a branded dust bag.`,
    sizeAndFit: `Universal fit for all standard-sized smartphones.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 3,
    title: 'Black analogue watch',
    price: 43,
    image: 'https://storage.googleapis.com/a1aa/image/c941ca74-026c-4b01-76b5-d6441955ad0e.jpg',
    bg: '',
    badge: null,
    description: `Elegant black analogue watch with a timeless design. 
- Water-resistant
- Quartz movement
- Comfortable leather strap
- Scratch-resistant glass
- Minimalist dial.`,
    sizeAndFit: `Adjustable strap fits wrist sizes from 6" to 9".`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 4,
    title: 'Ombré vinyl backpack',
    price: 29,
    image: 'https://storage.googleapis.com/a1aa/image/948030d8-a4dc-40c3-b9c5-f309f5d64004.jpg',
    bg: '',
    originalPrice: 37,
    badge: '-22%',
    description: `Trendy ombré vinyl backpack with functional design. 
- Spacious compartments
- Durable waterproof material
- Stylish ombré finish
- Comfortable shoulder straps
- Ideal for daily use or travel.`,
    sizeAndFit: `Fits up to 15" laptops with plenty of storage space.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 5,
    title: 'Golden earrings',
    price: 25,
    image: 'https://ld-wt73.template-help.com/intense/intense2/images/products/product-11-290x372.jpg',
    bg: '',
    badge: null,
    description: `Elegant golden earrings for all occasions. 
- Hypoallergenic metal
- Lightweight & comfortable
- Timeless design
- Suitable for sensitive ears
- Comes with a gift box.`,
    sizeAndFit: `One size. Approx. length: 2.5cm.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 6,
    title: 'Iridescent tote bag',
    price: 32,
    image: 'https://ld-wt73.template-help.com/intense/intense2/images/products/product-04-290x372.jpg',
    bg: '',
    badge: 'New',
    description: `Shiny and stylish tote bag that elevates your everyday look. 
- Iridescent finish
- Spacious main compartment
- Inner zipper pockets
- Magnetic button closure
- Easy to carry handles.`,
    sizeAndFit: `Size: 15" x 13". Ideal for books, laptops, and daily essentials.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 7,
    title: 'Stationery collection',
    price: 25,
    image: 'https://ld-wt73.template-help.com/intense/intense2/images/products/product-05-290x372.jpg',
    bg: '',
    originalPrice: 45,
    badge: '-33%',
    description: `Complete stationery collection to boost your creativity. 
- Includes pens, markers, notebooks, and stickers
- Vibrant colors
- Eco-friendly materials
- Ideal for school or office
- Comes in a premium organizer box.`,
    sizeAndFit: `Box size: 10" x 8". Perfect for backpacks and desks.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 8,
    title: 'Iridescent belt bag',
    price: 10,
    image: 'https://ld-wt73.template-help.com/intense/intense2/images/products/product-06-290x372.jpg',
    bg: '',
    badge: null,
    description: `Trendy iridescent belt bag for hands-free convenience. 
- Adjustable strap
- Secure zipper closure
- Lightweight and compact
- Eye-catching design
- Ideal for festivals or travel.`,
    sizeAndFit: `Fits waist sizes from 24" to 40".`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 9,
    title: 'White sneakers',
    price: 40,
    image: 'https://ld-wt73.template-help.com/intense/intense2/images/products/product-12-290x372.jpg',
    bg: '',
    badge: null,
    description: `Classic white sneakers that go with everything. 
- Breathable fabric
- Padded sole for comfort
- Anti-slip rubber outsole
- Timeless style
- Easy to clean.`,
    sizeAndFit: `Available in sizes US 6 to 11.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 10,
    title: 'Travel backpack',
    price: 60,
    image: 'https://th.bing.com/th/id/OIP.J9CgrEcGL6y6nHfJRqrJlQHaHa?cb=iwp2&rs=1&pid=ImgDetMain',
    bg: '',
    originalPrice: 80,
    badge: '-25%',
    description: `Rugged travel backpack built for adventure. 
- Water-resistant material
- Padded laptop sleeve
- Multiple compartments
- Breathable back support
- Fits in airplane cabin size requirements.`,
    sizeAndFit: `Dimensions: 18" x 12" x 7". Volume: 28L.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 11,
    title: 'Phone case with chain',
    price: 45,
    image: 'https://ld-wt73.template-help.com/intense/intense2/images/products/product-08-290x372.jpg',
    bg: '',
    originalPrice: 53,
    badge: null,
    description: `Elegant phone case with stylish detachable chain. 
- Full body protection
- Stylish chain strap
- Scratch-resistant shell
- Lightweight design
- Includes velvet pouch.`,
    sizeAndFit: `Universal fit for all major smartphone models.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
  },
  {
    id: 12,
    title: 'Rose eau de toilette',
    price: 55,
    image: 'https://ld-wt73.template-help.com/intense/intense2/images/products/product-09-290x372.jpg',
    bg: '',
    badge: 'New',
    description: `Charming rose fragrance perfect for daily wear. 
- Long-lasting scent
- Notes of rose, jasmine, and vanilla
- Elegant bottle design
- Great for gifting
- Comes in a luxury box.`,
    sizeAndFit: `50ml bottle. Travel-friendly size.`,
    shippingAndReturns: `Free worldwide shipping and 30-day free returns.
Shipping options:
- Standard: 2–4 business days
- Two-day: 2–3 business days
- Next-day: 1–2 business days`,
    reviews: `Customer reviews will be displayed here.`,
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
    key={item.id}
    className="group relative flex flex-col items-center text-center text-sm sm:text-base"
    data-aos="fade-up"
    data-aos-delay={idx * 100}
  >
    <Link to={`/product/${item.id}`} className="w-full">
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
    </Link>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default Product;
