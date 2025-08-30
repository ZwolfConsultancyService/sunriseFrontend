import React from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Asidepage from './page/Asidepage';
import LabelGroupPage from './page/LabelgroupPage';
import Form from './page/Form';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';

const Label = () => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0); // Default to first group

  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex mt-16 px-4 max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <aside className="w-1/4 pr-6 sticky top-20 self-start">
          <Asidepage 
            activeGroupIndex={activeGroupIndex}
            setActiveGroupIndex={setActiveGroupIndex}
          />
        </aside>

        {/* Main Content */}
        <main className="w-3/4">
          <LabelGroupPage activeGroupIndex={activeGroupIndex} />
          <Form />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Label;