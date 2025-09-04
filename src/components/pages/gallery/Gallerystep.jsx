import React from 'react';
import Navbar from '../navbar/Navbar';
import Gallery from './Gallery';
import Footer from '../footer/Footer';

const Gallerystep = () => {
  return (
    <>
    <div>
	<Navbar />
    </div>
    <div className='mt-16 mb-16'>
<Gallery />
    </div>
  
    <Footer />
    </>
  )
}

export default Gallerystep;