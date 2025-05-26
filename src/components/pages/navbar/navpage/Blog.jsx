import Navbar from '../Navbar';
import Footer from '../../footer/Footer';
import { FaArrowRight, FaRegClock, FaRegComment, FaUser } from 'react-icons/fa';

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
    image: 'https://tse2.mm.bing.net/th?id=OIP.yYcDeE_2ElRZvMYnu_L1JgHaHa&pid=Api&P=0&h=220',
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
];


const Blog = () => {
  return (
    <>
      {/* Desktop version - hidden on small, visible on md and above */}
      <div className="hidden md:block min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-16 space-y-32">
          {products.slice(0, 5).map((product, index) => (
            <section
              key={product.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center
                ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
              `}
            >
              {/* Image Container */}
              <div
                className={`flex justify-center items-center ${
                  index % 2 === 1 ? 'order-1 md:order-2' : 'order-1'
                }`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <article
                className={`flex flex-col justify-center space-y-6 ${
                  index % 2 === 1 ? 'order-2 md:order-1 text-right md:text-left' : 'order-2 text-left'
                }`}
              >
                <h2 className="text-3xl font-semibold leading-tight">{product.title}</h2>
                <div
                  className={`flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-700 ${
                    index % 2 === 1 ? 'justify-end md:justify-start' : ''
                  }`}
                >
                  <span className="text-green-600 font-semibold uppercase tracking-wide">HTML</span>
                  <span className="flex items-center space-x-2">
                    <FaUser />
                    <span>Mark Rogers</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <FaRegClock />
                    <span>September 16, 2023</span>
                  </span>
                </div>
                <p className="text-gray-600 max-w-xl leading-relaxed">
                  {product.description.length > 160
                    ? product.description.slice(0, 160) + '...'
                    : product.description}
                </p>
                <div
                  className={`flex items-center space-x-6 ${
                    index % 2 === 1 ? 'justify-end md:justify-start' : ''
                  }`}
                >
                  <button className="bg-green-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-center space-x-3">
                    <span>Read more</span>
                    <FaArrowRight />
                  </button>
                  <div className="flex items-center space-x-2 text-gray-700 text-sm md:text-base">
                    <FaRegComment />
                    <span>25</span>
                  </div>
                </div>
              </article>
            </section>
          ))}
        </main>
        <Footer />
      </div>

      {/* Mobile version - visible on small, hidden on md and above */}
      <div className="block md:hidden min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-16 space-y-32">
          {products.slice(0, 5).map((product, index) => (
            <section
              key={product.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center
                ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}
              `}
            >
              <div
                className={`flex justify-center items-center order-1 md:order-${index % 2 === 1 ? 2 : 1}`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </div>

              <article
                className={`flex flex-col justify-center space-y-6 order-2 md:order-${index % 2 === 1 ? 1 : 2} text-left md:text-${index % 2 === 1 ? 'left' : 'right'}`}
              >
                <h2 className="text-3xl font-semibold leading-tight">{product.title}</h2>

                <div
                  className={`flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-700 justify-start md:justify-${index % 2 === 1 ? 'start' : 'end'}`}
                >
                  <span className="text-green-600 font-semibold uppercase tracking-wide">HTML</span>
                  <span className="flex items-center space-x-2">
                    <FaUser />
                    <span>Mark Rogers</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <FaRegClock />
                    <span>September 16, 2023</span>
                  </span>
                </div>

                <p className="text-gray-600 max-w-xl leading-relaxed">
                  {product.description.length > 160
                    ? product.description.slice(0, 160) + '...'
                    : product.description}
                </p>

                <div
                  className={`flex items-center space-x-6 justify-start md:justify-${index % 2 === 1 ? 'start' : 'end'}`}
                >
                  <button className="bg-green-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-center space-x-3">
                    <span>Read more</span>
                    <FaArrowRight />
                  </button>
                  <div className="flex items-center space-x-2 text-gray-700 text-sm md:text-base">
                    <FaRegComment />
                    <span>25</span>
                  </div>
                </div>
              </article>
            </section>
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
