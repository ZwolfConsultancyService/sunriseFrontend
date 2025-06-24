import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Form from './Form';
// import labelHierarchy from '../data/labelHierarchy';
import LabelGroupPage from './LabelgroupPage';

const Labeltyp = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
	<div className="bg-white text-gray-900 font-sans">
  <div className="max-w-7xl mx-auto px-6 py-10">
    <h1 className="text-2xl font-extrabold mb-4">
      14 types of labels in garments listed with pictures
    </h1>
    <div className="border-b border-dotted border-[#f87171] w-[600px] max-w-full mb-8"></div>
    <div className="flex flex-col md:flex-row md:space-x-10">
      <div className="grid  gap-0 max-w-[600px] w-full sm:w-[400px] ">
        <img
          alt="Two white garment labels with black line drawings on a gray background"
          className="w-full h-auto object-cover "
          height={150}
          src="https://acctrims.com/wp-content/uploads/2022/08/types-of-labels-in-garments.jpg"
          width={300}
        />
     
      </div>
      <div className="bg-gray-100 p-8 mt-8 md:mt-0 flex-1">
        <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">
          <li>WOVEN LABEL</li>
          <li>PRINTED LABELS</li>
          <li>HEAT TRANSFER LABEL</li>
          <li>NARROW FABRIC</li>
          <li>TAGS</li>
          <li>TAG SEAL</li>
          <li>STICKERS</li>
          <li>PATCHES or BADGES</li>
          <li>FLEXIBLE LABELS</li>
          <li>LEATHER OR PU LABELS</li>
          <li>SECURITY LABEL</li>
          <li>METAL LABEL</li>
        </ul>
      </div>
    </div>
  </div>
</div>
 
{/* card details */}
<LabelGroupPage />

<Form />

    </div>
  )
}

export default Labeltyp;