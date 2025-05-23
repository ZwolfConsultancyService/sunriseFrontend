import React from 'react'
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import Category from './pages/category/Category';
const Home = () => {
  return (
    <div>
	<Navbar />
  <Homepage />
  	<Category />
	<Footer />

    </div>
  )
}

export default Home