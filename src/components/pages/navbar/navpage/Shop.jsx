import React, { useState, useEffect } from 'react'
import { FaShoppingCart, FaThLarge, FaThList } from 'react-icons/fa'
import Navbar from '../Navbar'
import Footer from '../../footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useDispatch } from 'react-redux'
import { setProducts, setSelectedProduct } from '@/redux/productsSlice'
import { useNavigate } from 'react-router-dom';

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

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [itemsPerPage, setItemsPerPage] = useState(12); // Set default items per page

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setProducts(products)); // Store full products list in Redux
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCardClick = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/product/${product.id}`);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };


  const filteredProducts = products.filter((product) => {
    const isInCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes('All') ||
      selectedCategories.includes(product.category);
    const isInPriceRange =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return isInCategory && isInPriceRange;
  });

  return (
    <>
      <Navbar />
      <div className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0">
            <h2 className="text-base font-normal">Categories list</h2>

            <div className="flex items-center space-x-4">
              <button aria-label="Grid view" className="text-black text-lg">
                <FaThLarge />
              </button>
              <button
                aria-label="List view"
                className="text-gray-300 text-lg"
                disabled
              >
                <FaThList />
              </button>
            </div>

            <div className="text-sm text-gray-700">{`1-${Math.min(
              itemsPerPage,
              filteredProducts.length
            )} of ${filteredProducts.length}`}</div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Show:</span>
              <input
                className="w-12 h-8 text-center border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none"
                readOnly
                type="text"
                value={itemsPerPage}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-12">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 flex-shrink-0">
              <form className="space-y-8">
                <fieldset>
                  <legend className="text-base font-normal mb-4">Categories list</legend>
                  <div className="space-y-2 text-gray-600 text-sm font-normal">
                    {[
                      'All',
                      'Accessories',
                      'Glasses',
                      'iPhone Cases',
                      'Purses',
                      'Hats & Beanie',
                      'Hair accessories',
                      'Eau de Toilette',
                      'Stationery',
                    ].map((cat, i) => (
                      <label
                        key={i}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          className="w-4 h-4 rounded border-gray-300"
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => handleCategoryChange(cat)}
                        />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </form>
            </aside>

            {/* Product Grid */}
      <main className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-0">

              {filteredProducts.slice(0, itemsPerPage).map((product) => (
                <article
                  key={product.id}
                  className="group cursor-pointer"
                  onClick={() => handleCardClick(product)}
                  data-aos="fade-up"
                >
                  <div className={`relative p-8 ${product.bg} overflow-hidden`}>
                    <img
                      alt={product.title}
                      className="mx-auto transition-transform duration-300 group-hover:scale-105"
                      height={320}
                      width={240}
                      src={product.image}
                    />

                    {product.badge && (
                      <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-0.5 rounded shadow-md">
                        {product.badge}
                      </span>
                    )}

                    <button
                      aria-label="Add to cart"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform">
                        <FaShoppingCart className="text-xl" />
                      </div>
                    </button>
                  </div>

                  <h3 className="mt-4 text-base font-normal">{product.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.originalPrice ? (
                      <>
                        <span className="line-through">${product.originalPrice}</span>{' '}
                        <span>${product.price}</span>
                      </>
                    ) : (
                      `$${product.price}`
                    )}
                  </p>
                </article>
              ))}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;