import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import About from './About'

const AboutNav = () => {
  return (
    <div>
	<Navbar />
	<div className='mt-16'>
		<About />
	</div>
	<Footer/>
    </div>
  )
}

export default AboutNav