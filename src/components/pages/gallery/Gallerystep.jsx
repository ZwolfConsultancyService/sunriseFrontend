import React from 'react';
import Navbar from '../navbar/Navbar';
import Gallery from './Gallery';
import Form from '../label/page/Form';
import Footer from '../footer/Footer';

const Gallerystep = () => {
  return (
    <>
    <div>
	<Navbar />
    </div>
    <div className='mt-16'>
<Gallery />
    </div>
    <Form />
    <Footer />
    </>
  )
}

export default Gallerystep;