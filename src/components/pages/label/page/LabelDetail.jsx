import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

import Form from './Form';
import labelHierarchy from '../data/labelHierarchy';
import Asidepage from './Asidepage';

const LabelDetail = () => {
  const { slug } = useParams();
  const decodedSlug = decodeURIComponent(slug).toLowerCase();

  const label = labelHierarchy.find(
    (item) => item.slug.trim().toLowerCase() === decodedSlug.trim()
  );


  if (!label) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Label not found</h2>
        <Link to="/label" className="text-blue-500 underline">Back to Labels List</Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full mt-14">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg"
          alt="Customized hang tag string"
          className="w-full object-cover h-64 sm:h-72 md:h-80 lg:h-96"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl">
            Custom care labels’ photo gallery
          </h1>
          <p className="text-white text-sm sm:text-base mt-2 max-w-3xl">
            by Nancy / fasteners, garment accessories, hang tag string, hang tags, ideas and inspirations
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white text-gray-900 font-sans max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">

          {/* Left Content */}
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
            <Link to="/label" className="text-blue-500 hover:underline mb-4 inline-block">
              ← Back to Labels List
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold mb-6">{label.title}</h1>

            <img
              src={label.image}
              alt={label.title}
              className="w-full h-72 object-cover rounded-lg mb-8"
            />

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10">
              {label.description}
            </p>

{/* Category Cards for this Group */}
<div className="mb-12">
  <h2 className="text-xl font-bold mb-4 text-orange-600">Explore Categories in {label.group}</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {label.categories?.map((cat, idx) => (
      <Link
        key={idx}
        to={`/label/${label.slug}/${cat.category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/gi, '')}`}
        className="h-full"
      >
        <div className="p-4 border rounded-lg hover:shadow transition duration-300 flex flex-col h-[350px]">
          <img
            src={cat.image}
            alt={cat.category}
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="font-semibold text-lg mb-2 text-gray-800">{cat.category}</h3>
   
         <ul className="text-sm text-gray-600 list-disc ml-4 space-y-1">
  {cat.items.slice(0, 3).map((item, i) => (
    <li key={i}>{item}</li>
  ))}

  {/* If less than 3, add invisible placeholders to equalize height */}
  {cat.items.length < 3 &&
    Array.from({ length: 3 - cat.items.length }).map((_, idx) => (
      <li key={`placeholder-${idx}`} className="opacity-0 select-none">Placeholder</li>
    ))
  }

  {/* If more than 3, show "+ N more" */}
  {cat.items.length > 3 && (
    <li className="text-orange-500 font-medium">
      + {cat.items.length - 3} more
    </li>
  )}
</ul>

          <div className="mt-auto text-orange-500 text-sm font-medium">
            Learn More →
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>




            <div className="mt-10">
              <Form />
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:max-w-sm mt-10 lg:mt-0">
            {/* Search */}
           <Asidepage />
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LabelDetail;
