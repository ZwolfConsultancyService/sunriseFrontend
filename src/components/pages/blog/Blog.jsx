import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const Blog = () => {
  const navigate = useNavigate();
  const [blogProducts, setBlogProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Fetch blog data from API
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs/fetch');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        
        // Check if data is an array, if not, check if it has a data property
        if (Array.isArray(data)) {
          setBlogProducts(data);
        } else if (data.data && Array.isArray(data.data)) {
          setBlogProducts(data.data);
        } else if (data.blogs && Array.isArray(data.blogs)) {
          setBlogProducts(data.blogs);
        } else {
          console.log('API Response:', data); // Debug log
          setBlogProducts([]); // Set empty array as fallback
        }
      } catch (err) {
        setError(err.message);
        setBlogProducts([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  // Function to strip HTML tags from content
  const stripHtmlTags = (html) => {
    if (!html) return '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blogs...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error: {error}</p>
            <button 
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!blogProducts || blogProducts.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 mb-4">No blogs found</p>
            <button 
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <div className="hidden md:block min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-16 space-y-32">
          {blogProducts.slice(0, 5).map((product, index) => (
            <section
              key={product._id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className={`flex justify-center items-center ${index % 2 === 1 ? 'order-1 md:order-2' : 'order-1'}`}>
                <img
                  src={product.images && product.images.length > 0 ? product.images[0].url : '/default-blog-image.jpg'}
                  alt={product.title}
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                  loading="lazy"
                />
              </div>

              <article className={`flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'order-2 md:order-1 text-right md:text-left' : 'order-2 text-left'}`}>
                <h2 className="text-3xl font-semibold leading-tight">{product.title}</h2>

                <p className="text-gray-600 max-w-xl leading-relaxed">
                  {(() => {
                    const plainText = stripHtmlTags(product.content);
                    return plainText && plainText.length > 160 ? plainText.slice(0, 160) + '...' : plainText;
                  })()}
                </p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>By {product.author}</span>
                  <span>•</span>
                  <span>{new Date(product.createdAt).toLocaleDateString()}</span>
                  {product.tags && product.tags.length > 0 && (
                    <>
                      <span>•</span>
                      <div className="flex flex-wrap gap-2">
                        {product.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className={`flex items-center space-x-6 ${index % 2 === 1 ? 'justify-end md:justify-start' : ''}`}>
                  <button
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded shadow hover:shadow-lg transition"
                    onClick={() => handleReadMore(product._id)}
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
          {blogProducts.slice(0, 5).map((product, index) => (
            <section
              key={product._id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
            >
              <div className={`flex justify-center items-center order-1 md:order-${index % 2 === 1 ? 2 : 1}`}>
                <img
                  src={product.images && product.images.length > 0 ? product.images[0].url : '/default-blog-image.jpg'}
                  alt={product.title}
                  className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                  loading="lazy"
                />
              </div>

              <article className={`flex flex-col justify-center space-y-6 order-2 md:order-${index % 2 === 1 ? 1 : 2} text-left md:text-${index % 2 === 1 ? 'left' : 'right'}`}>
                <h2 className="text-3xl font-semibold leading-tight">{product.title}</h2>

                <p className="text-gray-600 max-w-xl leading-relaxed">
                  {(() => {
                    const plainText = stripHtmlTags(product.content);
                    return plainText && plainText.length > 160 ? plainText.slice(0, 160) + '...' : plainText;
                  })()}
                </p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>By {product.author}</span>
                  <span>•</span>
                  <span>{new Date(product.createdAt).toLocaleDateString()}</span>
                  {product.tags && product.tags.length > 0 && (
                    <>
                      <span>•</span>
                      <div className="flex flex-wrap gap-2">
                        {product.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className={`flex items-center space-x-6 justify-start md:justify-${index % 2 === 1 ? 'start' : 'end'}`}>
                  <button
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded shadow hover:shadow-lg transition"
                    onClick={() => handleReadMore(product._id)}
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