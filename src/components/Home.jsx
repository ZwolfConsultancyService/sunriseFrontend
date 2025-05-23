import React from 'react'
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import Category from './pages/category/Category';
import ProductSection from './pages/category/ProductSection';
import Product from './pages/product/Product';
const Home = () => {
  return (
    <div>
	<Navbar />
  <Homepage />
  	<Category />
    <ProductSection />
    <Product />
	<Footer />
    </div>
  )
}

export default Home