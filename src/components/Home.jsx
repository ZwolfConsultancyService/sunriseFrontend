import React from 'react'
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import Product from './pages/product/Product';
import About from './pages/about/About';
import WhyChooseUs from './pages/whyChoose/WhyChooseUs';
import FaqSection from './pages/faq/FaqSection';
import Testimonials from './pages/Testimonial/Testimonials';
import OrderProccess from './pages/step/OrderProccess';
import Gallery from './pages/gallery/Gallery';
const Home = () => {
  return (
    <div>
	<Navbar />
  <div className='mt-16'>
  <Homepage />
  <About />
  <OrderProccess />
  <WhyChooseUs />
  <Gallery />
    {/* <Product /> */}
    <Testimonials />
    <FaqSection />
	<Footer />
  </div>
    </div>
  )
}

export default Home;