import React from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Hero from './page/Hero';
import Labeltyp from './page/Labeltyp';

const Label = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
     <Hero />
      </div>
      <div className='xl:w-5xl lg:w-3xl md:w-xl  w-full px-4 mx-auto mt-4'>
	<p className='font-semibold text-xs md:text-sm lg:text-base xl:text-lg  text-gray-600'>
		There are different types of labels in garments, like care, neck, size, main labels, metal/leather/PVC/TPU/woven/heat-transfer/satin/cotton/embroidered labels. These clothing labels are a way of expressing the intangible assets of a brand, a business. It is also a clothing auxiliary material with the role of the brand information carrier. There are many materials used for clothing labels. Such as tape, plastic, cotton fabric, satin, leather, metal, etc. In addition, label printing methods are ever-changing, such as weaving, printing, embroidery, laser engraving, ironing, etc.
	</p>
      </div>
      <Labeltyp />
      <Footer />
    </>
  )
}

export default Label;
