import React from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Asidepage from './page/Asidepage';
import LabelGroupPage from './page/LabelgroupPage';
import Form from './page/Form';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Label = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex mt-16 px-4 max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <aside className="w-1/4 pr-6 sticky top-20 self-start">
          <Asidepage />
        </aside>

        {/* Main Content */}
        <main className="w-3/4">
          <LabelGroupPage />
          <Form />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Label;
