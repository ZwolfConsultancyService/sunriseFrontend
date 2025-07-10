import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import BlogProducts from './blogProducts';

const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <div className="hidden md:block min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-16 space-y-32">
          {BlogProducts.slice(0, 5).map((product, index) => (
            <section
              key={product.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className={`flex justify-center items-center ${index % 2 === 1 ? 'order-1 md:order-2' : 'order-1'}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg shadow-lg w-full max-w-[500px] h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <article className={`flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'order-2 md:order-1 text-right md:text-left' : 'order-2 text-left'}`}>
                <h2 className="text-3xl font-semibold leading-tight">{product.title}</h2>

                <p className="text-gray-600 max-w-xl leading-relaxed">
                  {product.description.length > 160 ? product.description.slice(0, 160) + '...' : product.description}
                </p>

                <div className={`flex items-center space-x-6 ${index % 2 === 1 ? 'justify-end md:justify-start' : ''}`}>
                  <button
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded shadow hover:shadow-lg transition"
                    onClick={() => handleReadMore(product.slug)}
                  >
                    Read more
                    <FaArrowRight />
                  </button>
                </div>
              </article>
            </section>
          ))}
        </main>
        <Footer />
      </div>

      <div className="block md:hidden min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-16 space-y-32">
          {BlogProducts.slice(0, 5).map((product, index) => (
            <section
              key={product.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
            >
              <div className={`flex justify-center items-center order-1 md:order-${index % 2 === 1 ? 2 : 1}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg shadow-lg w-full max-w-[500px] h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <article className={`flex flex-col justify-center space-y-6 order-2 md:order-${index % 2 === 1 ? 1 : 2} text-left md:text-${index % 2 === 1 ? 'left' : 'right'}`}>
                <h2 className="text-3xl font-semibold leading-tight">{product.title}</h2>

                <p className="text-gray-600 max-w-xl leading-relaxed">
                  {product.description.length > 160 ? product.description.slice(0, 160) + '...' : product.description}
                </p>

                <div className={`flex items-center space-x-6 justify-start md:justify-${index % 2 === 1 ? 'start' : 'end'}`}>
                  <button
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded shadow hover:shadow-lg transition"
                    onClick={() => handleReadMore(product.slug)}
                  >
                    Read more
                    <FaArrowRight />
                  </button>
                </div>
              </article>
            </section>
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
