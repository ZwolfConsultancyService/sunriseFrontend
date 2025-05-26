import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Preloader from './components/anims/Preloader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/pages/navbar/navpage/Shop';
import ProductDetail from './components/pages/navbar/navpage/ProductDetail';
import Blog from './components/pages/navbar/navpage/Blog';


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
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path = '/blog' element = {<Blog />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
