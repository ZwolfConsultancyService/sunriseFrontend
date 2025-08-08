import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

import Form from './Form';
import labelHierarchy from '../data/labelHierarchy';
import Asidepage from './Asidepage';
import HeroLabel from './HeroLabel';

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

     <HeroLabel
  title={label.group}
  description="Explore premium label categories"
 
/>

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
        <div className="p-4  rounded-lg shadow transition duration-300 flex flex-col h-full">
          <img
            src={cat.image}
            alt={cat.category}
            className="w-full h-[300px] object-cover rounded mb-4"
          />
          <h3 className="font-semibold text-lg mb-2 text-gray-800">{cat.category}</h3>
   
         {/* <ul className="text-sm text-gray-600 list-disc ml-4 space-y-1">
  {cat.items.slice(0, 3).map((item, i) => (
    <li key={i}>{item}</li>
  ))}


  {cat.items.length < 3 &&
    Array.from({ length: 3 - cat.items.length }).map((_, idx) => (
      <li key={`placeholder-${idx}`} className="opacity-0 select-none">Placeholder</li>
    ))
  }

  
  {cat.items.length > 3 && (
    <li className="text-orange-500 font-medium">
      + {cat.items.length - 3} more
    </li>
  )}
</ul> */}

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
