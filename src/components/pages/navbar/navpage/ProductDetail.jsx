import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../../footer/Footer';
import Navbar from '../Navbar';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === Number(id))
  );
  const navigate = useNavigate();

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
    console.log('Form submitted:', form);
    alert('Thank you for your inquiry!');
    setForm({ name: '', email: '', phone: '' });
  };

  if (!product) {
    return (
      <div className="p-10">
        <p>Product not found</p>
        <button
          className="mt-4 px-4 py-2 bg-black text-white rounded"
          onClick={() => navigate('/')}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 space-y-10">
        {/* Product Info */}
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm rounded shadow"
          />

          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold">{product.title}</h2>
            <p className="text-gray-700">{product.description}</p>
            <div className="text-xl font-semibold text-black">
              ${product.price}
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-3">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            {product.badge && (
              <span className="inline-block mt-2 px-3 py-1 bg-black text-white rounded text-xs">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Additional Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-800">
          <div className="space-y-2">
            <h4 className="font-semibold text-base">Size & Fit</h4>
            <p>{product.sizeAndFit}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-base">Shipping & Returns</h4>
            <p>{product.shippingAndReturns}</p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <h4 className="font-semibold text-base">Customer Reviews</h4>
            <p>{product.reviews}</p>
          </div>
        </div>

        {/* Inquiry Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-md shadow space-y-4"
        >
          <h3 className="text-lg font-semibold">Contact for this product</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
