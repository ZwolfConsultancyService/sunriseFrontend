import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Asidepage from './page/Asidepage';
import LabelGroupPage from './page/LabelgroupPage';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Label = () => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Mobile/Tablet: Top Grid Layout */}
      <div className="block lg:hidden mt-20 px-4 max-w-7xl mx-auto">
        <div className="mb-6">
          <Asidepage 
            activeGroupIndex={activeGroupIndex}
            setActiveGroupIndex={setActiveGroupIndex}
            isMobile={true}
          />
        </div>
        <div>
          <LabelGroupPage activeGroupIndex={activeGroupIndex} />
        </div>
      </div>

      {/* Desktop: Sidebar Layout */}
      <div className="hidden lg:flex mt-16 px-4 max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <aside className="w-1/4 pr-6 sticky top-20 self-start">
          <Asidepage 
            activeGroupIndex={activeGroupIndex}
            setActiveGroupIndex={setActiveGroupIndex}
            isMobile={false}
          />
        </aside>

        {/* Main Content */}
        <main className="w-3/4">
          <LabelGroupPage activeGroupIndex={activeGroupIndex} />
        </main>
      </div>
      
      <Footer />
    </>
  );
};

export default Label;