import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const Blog = () => {
  const navigate = useNavigate();
  const [blogProducts, setBlogProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalBlogs: 0,
    hasNext: false,
    hasPrev: false
  });
  
  const blogsPerPage = 5; // You can adjust this value

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    fetchBlogs(pagination.currentPage);
  }, [pagination.currentPage]);

  // Fetch blog data from API with pagination
  const fetchBlogs = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://zwolfconsultancyservice-newsunrisebackend.onrender.com/api/blogs/fetch?page=${page}&limit=${blogsPerPage}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      
      const data = await response.json();
      
      if (data.success && data.data) {
        setBlogProducts(data.data);
        setPagination(data.pagination);
      } else {
        console.log('API Response:', data);
        setBlogProducts([]);
      }
    } catch (err) {
      setError(err.message);
      setBlogProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination(prev => ({ ...prev, currentPage: newPage }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const { currentPage, totalPages } = pagination;
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }
    
    return pageNumbers;
  };

  // Pagination Component
  const PaginationControls = () => (
    <div className="flex flex-col items-center space-y-4 mt-16">
      {/* Page Info */}
      <div className="text-sm text-gray-600">
        Showing {((pagination.currentPage - 1) * blogsPerPage) + 1} to{' '}
        {Math.min(pagination.currentPage * blogsPerPage, pagination.totalBlogs)} of{' '}
        {pagination.totalBlogs} blogs
      </div>
      
      {/* Pagination Controls */}
      <div className="flex items-center space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(pagination.currentPage - 1)}
          disabled={!pagination.hasPrev}
          className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            pagination.hasPrev
              ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
          }`}
        >
          <FaChevronLeft className="w-3 h-3 mr-1" />
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex space-x-1">
          {pagination.currentPage > 3 && pagination.totalPages > 5 && (
            <>
              <button
                onClick={() => handlePageChange(1)}
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                1
              </button>
              {pagination.currentPage > 4 && (
                <span className="px-3 py-2 text-sm text-gray-500">...</span>
              )}
            </>
          )}

          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pageNum === pagination.currentPage
                  ? 'bg-green-600 text-white border border-green-600'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {pageNum}
            </button>
          ))}

          {pagination.currentPage < pagination.totalPages - 2 && pagination.totalPages > 5 && (
            <>
              {pagination.currentPage < pagination.totalPages - 3 && (
                <span className="px-3 py-2 text-sm text-gray-500">...</span>
              )}
              <button
                onClick={() => handlePageChange(pagination.totalPages)}
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {pagination.totalPages}
              </button>
            </>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(pagination.currentPage + 1)}
          disabled={!pagination.hasNext}
          className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            pagination.hasNext
              ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
          }`}
        >
          Next
          <FaChevronRight className="w-3 h-3 ml-1" />
        </button>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center mt-16">
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
        <main className="flex-grow flex items-center justify-center mt-16">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error: {error}</p>
            <button 
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              onClick={() => fetchBlogs(pagination.currentPage)}
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
        <main className="flex-grow flex items-center justify-center mt-16">
          <div className="text-center">
            <p className="text-gray-600 mb-4">No blogs found</p>
            <button 
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              onClick={() => fetchBlogs(1)}
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
        <main className="flex-grow container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-16 space-y-32 mt-16">
          {blogProducts.map((product, index) => (
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
          
          {/* Pagination Controls */}
          {pagination.totalPages > 1 && <PaginationControls />}
        </main>
        <Footer />
      </div>

      <div className="block md:hidden min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-16 space-y-32">
          {blogProducts.map((product, index) => (
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
          
          {/* Pagination Controls for Mobile */}
          {pagination.totalPages > 1 && <PaginationControls />}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;