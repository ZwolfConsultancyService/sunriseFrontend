import React, { useEffect, useState } from 'react';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/anims/Preloader';
import Shop from './components/pages/shop/Shop';
import ProductDetail from './components/pages/shop/ProductDetail';
import Blog from './components/pages/blog/Blog';
import BlogDetail from './components/pages/blog/BlogDetail';


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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
         <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path = '/blog' element = {<Blog />} />
         <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
