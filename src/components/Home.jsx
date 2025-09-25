import React, { useState, useEffect } from 'react'
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About';
import WhyChooseUs from './pages/whyChoose/WhyChooseUs';
import FaqSection from './pages/faq/FaqSection';
import Testimonials from './pages/Testimonial/Testimonials';
import Product from './pages/product/Product';
import BestSellerBanner from './pages/bestseller/BestSellerBanner';
import Form from './pages/label/page/Form';
import InfraBanner from './pages/infraData/InfraBanner';



const Home = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Show form after 10 seconds with animation
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [" "]);

  return (
    <div>
      <Navbar />
      <div className='mt-16'>
        <Homepage />
        <Product />
        <About />
        <BestSellerBanner />
        <WhyChooseUs />
        {/* <Gallery /> */}
        {/* <OrderProccess /> */}
        <InfraBanner />
        <Testimonials />
        <FaqSection />
        
        {/* Form Popup Component with Center Animation */}
        {showForm && (
          <div 
            className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-all duration-500 ${
              showForm ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className={`transform transition-all duration-700 ease-out pointer-events-auto ${
                showForm 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-8 opacity-0 scale-95'
              }`}
            >
              <Form onClose={() => setShowForm(false)} />
            </div>
          </div>
        )}
        
        <Footer />
      </div>
    </div>
  )
}

export default Home;