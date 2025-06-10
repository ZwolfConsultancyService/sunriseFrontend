import React from 'react';
import { Link } from 'react-router-dom';
import LabelData from '../page/LabelData'; // Import label data
import { FaArrowRight } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Form from './Form';


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
          <li>Care labels</li>
          <li>Neck labels</li>
          <li>Size labels</li>
          <li>Main labels</li>
          <li>Metal labels</li>
          <li>Leather labels</li>
          <li>PVC rubber labels</li>
          <li>Clear TPU labels</li>
          <li>Woven labels</li>
          <li>Heat transfer labels</li>
          <li>Satin labels</li>
          <li>Cotton labels</li>
          <li>Woven patches</li>
          <li>Embroidered patches</li>
        </ul>
      </div>
    </div>
  </div>
</div>
 
{/* card details */}
<div className="grid md:grid-cols-1 lg:grid-cols-2 px-3 md:px-8  gap-y-8 mb-5 ">
          {LabelData.map((label, index) => (
            <div key={index} data-aos="fade-up">
              <Link to={`/labels/${label.slug}`} className="flex flex-col items-center mb-5">
                <img
                  alt={label.title}
                  className="w-full max-w-[600px] lg:w-[400px] xl:w-[600px] object-contain"
                  height={200}
                  src={label.image}
                  width={500}
                />
                <h3 className="mt-4 font-semibold text-lg text-gray-900">{label.title}</h3>
                <p className="text-center text-sm leading-relaxed line-clamp-2 w-1/2">{label.description}</p>
              </Link>
            </div>
          ))}
        </div>

<Form />

    </div>
  )
}

export default Labeltyp;