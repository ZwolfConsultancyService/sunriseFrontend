import React, { useEffect, useState } from 'react';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/anims/Preloader';
import Shop from './components/pages/shop/Shop';
import ProductDetail from './components/pages/shop/ProductDetail';
import Blog from './components/pages/blog/Blog';
import BlogDetail from './components/pages/blog/BlogDetail';
import Label from './components/pages/label/Label';
import Accessories from './components/pages/accessories/Accessories';
import AccessoryRouter from './components/pages/accessories/router/AccessoryRouter';
import AboutNav from './components/pages/about/AboutNav';
import LabelDetail from './components/pages/label/page/LabelDetail';
import ScrollToTop from './lib/ScrollToTop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
 
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;


  return (
    <>
        <Router>
          <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
         <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path = '/blog' element = {<Blog />} />
         <Route path="/blog/:slug" element={<BlogDetail />} />
         <Route path='/about' element={<AboutNav />} />
         <Route path='/label' element={<Label />} />
           <Route path="/label/:slug" element={<LabelDetail />} />
        <Route path='/accessories/:slug' element={<Accessories />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
