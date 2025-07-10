import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import About from './About'
import Form from '../label/page/Form'

const AboutNav = () => {
  return (
    <div>
	<Navbar />
	<div className='mt-16'>
		<About />
	</div>
	<Form />
	<Footer/>
    </div>
  )
}

export default AboutNav