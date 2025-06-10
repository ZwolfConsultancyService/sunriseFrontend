import React from 'react'
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import Product from './pages/product/Product';
import About from './pages/about/About';
const Home = () => {
  return (
    <div>
	<Navbar />
  <div className='mt-16'>
  <Homepage />
  <About />
    <Product />
	<Footer />
  </div>
    </div>
  )
}

export default Home