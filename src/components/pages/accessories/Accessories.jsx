import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Form from '../label/page/Form'
import AccessoryRouter from './router/AccessoryRouter'

const Accessories = () => {
  return (
    <>
    <Navbar />
    <div className='mt-16 mb-6'>
     <AccessoryRouter />
    </div>
   <Form />
    <Footer />
    </>
  )
}

export default Accessories;
