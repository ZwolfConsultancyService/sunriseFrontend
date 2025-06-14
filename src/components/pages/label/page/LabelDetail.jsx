import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LabelData from './LabelData'; 
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import { FiSearch } from "react-icons/fi";


const LabelDetail = () => {

  
    const tags = [
    "CLOTHING ACCESSORIES",
    "CUSTOM",
    "GARMENT TRIMS",
    "HANG TAG STRING",
    "HANG TAGS",
    "TRIMS",
  ];
  const { slug } = useParams();

  const decodedSlug = decodeURIComponent(slug).toLowerCase();

  const label = LabelData.find(
    (item) => item.slug.trim().toLowerCase() === decodedSlug.trim()
  );

  if (!label) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Label not found</h2>
        <Link to="/label" style={{ color: '#007bff' }}>Back to Labels List</Link>
      </div>
    );
  }

 return (
  <>
  <Navbar />
  <div className='mt-14'>
      {/* Hero Section */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="flex justify-center items-center relative z-0">
              <img
                alt="Customized hang tag string with seal and cord"
                className="w-full object-cover h-72 md:h-72 lg:h-80 xl:h-96"
                src="https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
              <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
             
Custom care labels’ photo gallery
              </h1>
              <p className="text-white text-xs mt-2 sm:mt-3 max-w-3xl">
                by Nancy / fasteners, garment accessories, hang tag string, hang tags,
                ideas and inspirations
              </p>
            </div>
            
          </div>
    
          {/* Main Container with Sidebar */}
          <div className="bg-white text-gray-900 font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            <div className="flex flex-col lg:flex-row gap-20">
              {/* Left Main Content */}
               <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Link to="/label" style={{ textDecoration: 'none', color: '#007bff', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to Labels List
      </Link>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{label.title}</h1>

      <img
        src={label.image}
        alt={label.title}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '25px' }}
      />

      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#333' }}>
        {label.description}
      </p>
    </div>
              {/* Right Sidebar */}
              <aside className="w-full max-w-xs lg:max-w-sm flex-shrink-0 ml-6">
                {/* Search Form */}
                <form className="mb-6">
                  <label className="sr-only" htmlFor="search">Search for...</label>
                  <div className="relative text-gray-400 focus-within:text-gray-600">
                    <input
                      className="block w-full rounded border border-gray-300 py-2 pl-3 pr-10 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                      id="search"
                      name="search"
                      placeholder="Search for..."
                      type="search"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FiSearch className="text-gray-500" />
                    </span>
                  </div>
                </form>
    
                {/* Hot Products */}
                <div className="mb-8">
                  <h2 className="font-semibold text-gray-900 mb-3">Hot Products</h2>
                  <ul className="text-[#f79433] text-base font-medium space-y-2 leading-tight">
                    {[
                      'Leather tags', 'Metal tags', 'Hem tags', 'Damask woven labels',
                      'Silicone heat transfer labels', 'PVC labels', 'Iron on patches',
                      'Woven patches', 'Elastic band', 'Aglets for shoelaces and hoodies',
                      'Faux leather labels', 'Luxury hang tags', 'Custom price tags',
                      'Epoxy dome stickers', 'Wrapping paper', 'Velvet pouches',
                      'Ziplock bags', 'Metal eyelets', 'Rubber buttons', 'Brand labels',
                    ].map((item, index) => (
                      <li key={index}>
                        <a className="hover:underline" href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
    
                {/* Recent Posts */}
                <div className="mb-8">
                  <h2 className="font-bold text-base mb-2">Recent Posts</h2>
                  <ul className="text-base font-medium leading-relaxed text-gray-700 space-y-3">
                    {[
                      'Clothing name labels for business branding',
                      'White paper bags for brand business',
                      'Stock size: plastic PE packaging bags',
                      'Custom packaging boxes for business',
                      'Branded Custom Poly Mailers Make a Lasting Impression',
                      'In-stock size courier bags',
                      'Wholesale cotton drawstring bags for brands',
                      'Custom Logo Stickers to Elevate Your Brand Identity',
                      'Wholesale transparent plastic bags with personalized logos',
                      'Supply custom rigid boxes for brands'
                    ].map((post, index) => (
                      <li key={index} className="hover:text-orange-600 cursor-pointer">{post}</li>
                    ))}
                  </ul>
                </div>
    
                {/* Tags */}
                <div className="space-y-2 text-base font-medium text-gray-700">
                  {[
                    'bags', 'buttons', 'company news', 'fasteners',
                    'garment accessories', 'garment trims',"hang tag string", "hang tags", "hangers", "ideas and inspirations", "labels and tags", "leather", "metal accessories", "packaging solutions", "paper bags", "patches", "plastic bags", "project samples", "ribbon & tape & bands", "stickers", "textiles and fabrics", "tissue paper", "woven labels", "zipper pulls",
                  ].map((tag, index) => (
                    <a key={index} className="block text-orange-400 hover:underline" href="#">
                      {tag}
                    </a>
                  ))}
                </div>
    
                {/* Contact Form */}
                <form
                  action="#"
                  className="space-y-6 mt-10"
                  encType="multipart/form-data"
                  method="POST"
                  noValidate
                >
                  <div>
                    <label
                      className="block font-semibold text-sm text-gray-900 mb-1"
                      htmlFor="firstName"
                    >
                      Name <span className="text-red-600">*</span>
                    </label>
                    <div className="flex space-x-4">
                      <input
                        className="border border-gray-300 rounded px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="firstName"
                        name="firstName"
                        placeholder="First"
                        required
                        type="text"
                      />
                      <input
                        className="border border-gray-300 rounded px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="lastName"
                        name="lastName"
                        placeholder="Last"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block font-semibold text-sm text-gray-900 mb-1"
                      htmlFor="email"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      required
                      type="email"
                    />
                  </div>
                  <div>
                    <label
                      className="block font-semibold text-sm text-gray-900 mb-1"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="phone"
                      name="phone"
                      placeholder="Phone number"
                      type="tel"
                    />
                  </div>
                  <div>
                    <label
                      className="block font-semibold text-sm text-gray-900 mb-1"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="message"
                      name="message"
                      placeholder="Message"
                      rows={3}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="w-full bg-[#f79433] text-white font-bold py-2 rounded hover:bg-[#d5792b] transition"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </aside>
            </div>
          </div>
    <Footer />
    </div>
    </>
  );
};

export default LabelDetail;
