
import { useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const slugify = (text) =>
  typeof text === 'string'
    ? text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
    : '';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Step 1: Try from location state (more instant)
  const productFromState = location.state?.product;

  // Step 2: Try from Redux (fallback)
  const productFromRedux = useSelector((state) =>
    state.products.products.find((p) => slugify(p.title) === slug)
  );

  // Final fallback if state is lost
  const product = productFromState || productFromRedux;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry!');
    setForm({ name: '', email: '', phone: '' });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="p-10 ">
        <p className="text-lg font-medium text-center text-red-500">Product not found</p>
        <div className="flex justify-center mt-4">
          <button
            className="px-5 py-2 bg-black text-white rounded hover:bg-gray-800"
            onClick={() => navigate('/')}
          >
            Go Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images */}
          <div className="flex flex-col md:flex-row gap-4" data-aos="fade-right">
            <div className="flex flex-col gap-4 w-full md:w-1/3">
              {[1, 2].map((_, idx) => (
                <img
                  key={idx}
                  src={product.image}
                  alt={`${product.title} ${idx + 1}`}
                  className="w-full h-40 object-cover rounded-lg border"
                />
              ))}
            </div>
            <div className="flex-1">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[400px] object-cover rounded-lg shadow"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6" data-aos="fade-left">
            <h1 className="text-3xl font-semibold">{product.title}</h1>
            <p className="text-gray-600">{product.description}</p>

            <div className="text-2xl font-bold text-black">
              ${product.price}
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-3 font-normal">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {product.badge && (
              <span className="inline-block bg-black text-white px-3 py-1 text-xs rounded">
                {product.badge}
              </span>
            )}

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 bg-gray-100 p-6 rounded-lg shadow space-y-4"
            >
              <h3 className="text-lg font-medium">Contact for this product</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 rounded w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 rounded w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-2 rounded w-full sm:col-span-2"
                />
              </div>
              <button
                type="submit"
                className="mt-2 bg-black text-white px-5 py-2 rounded hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* More Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-800">
          <div>
            <h4 className="font-semibold mb-1">Size & Fit</h4>
            <p>{product.sizeAndFit}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Shipping & Returns</h4>
            <p>{product.shippingAndReturns}</p>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-1">Customer Reviews</h4>
            <p>{product.reviews}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
