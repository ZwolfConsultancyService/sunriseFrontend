import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import About from './About'
import Form from '../label/page/Form'
import ManufacturingProcess from './ManufacturingProcess'

const AboutNav = () => {
  return (
    <div>
	<Navbar />
	<div className='mt-16'>
		<About />
	</div>	
	<ManufacturingProcess />
	<Form />
	<Footer/>
    </div>
  )
}

export default AboutNav