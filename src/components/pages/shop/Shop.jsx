import React, { useState, useEffect } from 'react'
import { FaShoppingCart, FaThLarge, FaThList } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useDispatch } from 'react-redux'
import { setProducts, setSelectedProduct } from '@/redux/productsSlice'
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import ShopData from "./ShopData";


const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [itemsPerPage, setItemsPerPage] = useState(12); // Set default items per page

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setProducts(ShopData)); // Store full products list in Redux
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


 const filteredProducts = ShopData.filter((product) => {
  const isInCategory =
    selectedCategories.length === 0 ||
    selectedCategories.includes('All') ||
    selectedCategories.some((selectedCat) =>
      product.category?.toLowerCase().includes(selectedCat.toLowerCase())
    );

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
  <div className="text-sm text-gray-700">{`Showing 1-${Math.min(
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