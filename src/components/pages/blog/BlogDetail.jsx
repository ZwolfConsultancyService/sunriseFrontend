import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import blogImg from "../../../assets/homew.jpg";

const BlogDetail = () => {
  const { slug } = useParams(); // This is the blog ID from URL
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Check if blog data exists in localStorage first
    const cachedBlogs = localStorage.getItem('blogProducts');
    if (cachedBlogs) {
      try {
        const parsedBlogs = JSON.parse(cachedBlogs);
        const foundBlog = parsedBlogs.find(blog => blog._id === slug);
        if (foundBlog) {
          setBlog(foundBlog);
          setAllBlogs(parsedBlogs);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.error('Error parsing cached blogs:', err);
      }
    }
    
    // Fetch from API if not in cache
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch('https://zwolfconsultancyservice-newsunrisebackend.onrender.com/api/blogs/fetch');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Handle different response structures
        let blogs = [];
        if (Array.isArray(data)) {
          blogs = data;
        } else if (data.data && Array.isArray(data.data)) {
          blogs = data.data;
        } else if (data.blogs && Array.isArray(data.blogs)) {
          blogs = data.blogs;
        } else {
          throw new Error('Invalid response format');
        }
        
        // Cache the blogs
        localStorage.setItem('blogProducts', JSON.stringify(blogs));
        setAllBlogs(blogs);
        
        // Find the specific blog by ID
        const foundBlog = blogs.find(blog => blog._id === slug);
        
        if (!foundBlog) {
          throw new Error('Blog not found');
        }
        
        setBlog(foundBlog);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [slug]);

  // Function to strip HTML tags from content
  const stripHtmlTags = (html) => {
    if (!html) return '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  // Get next and previous blogs
  const getCurrentIndex = () => allBlogs.findIndex(b => b._id === slug);
  const currentIndex = getCurrentIndex();
  const nextBlog = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;
  const prevBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center mt-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blog...</p>
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
            <div className="space-x-4">
              <button 
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                onClick={() => window.location.reload()}
              >
                Try Again
              </button>
              <button 
                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
                onClick={() => navigate('/blog')}
              >
                Back to Blogs
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center mt-16">
          <div className="text-center">
            <p className="text-gray-600 mb-4">Blog not found</p>
            <button 
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              onClick={() => navigate('/blog')}
            >
              Back to Blogs
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="w-full h-64 md:h-96 bg-cover bg-center mt-16"
        style={{ backgroundImage: `url(${blogImg})` }}
        data-aos="fade-down"
      >
        <div className="bg-black/50 bg-opacity-50 flex items-center justify-center h-full">
          <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Blog Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 space-y-6 sm:space-y-8">
        {/* Blog Title */}
        <div className="text-center space-y-4" data-aos="fade-up">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {blog.title}
          </h1>
          
          {/* Blog Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            {blog.tags && blog.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex flex-wrap gap-2 justify-center">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 sm:px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Blog Image */}
        {blog.images && blog.images.length > 0 && (
          <div className="space-y-4 sm:space-y-6">
            <img
              src={blog.images[0].url}
              alt={blog.title}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              data-aos="zoom-in"
            />
          </div>
        )}

        {/* Blog Content */}
        <div
          className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none text-gray-700 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {blog.content ? (
            <div 
              dangerouslySetInnerHTML={{ __html: blog.content }} 
              className="whitespace-pre-wrap"
            />
          ) : (
            <p className="whitespace-pre-wrap">{blog.description || 'No content available'}</p>
          )}
        </div>

        {/* Additional Blog Images */}
        {blog.images && blog.images.length > 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-up" data-aos-delay="400">
            {blog.images.slice(1, 3).map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`${blog.title} - Image ${index + 2}`}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t gap-4" data-aos="fade-up">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition text-sm sm:text-base"
          >
            ← Back to Blogs
          </button>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            {prevBlog && (
              <button
                onClick={() => navigate(`/blog/${prevBlog._id}`)}
                className="bg-gray-100 text-gray-600 px-3 sm:px-4 py-2 rounded hover:bg-gray-200 transition text-xs sm:text-sm"
              >
                ← Previous
              </button>
            )}
            {nextBlog && (
              <button
                onClick={() => navigate(`/blog/${nextBlog._id}`)}
                className="bg-green-600 text-white px-3 sm:px-4 py-2 rounded hover:bg-green-700 transition text-xs sm:text-sm"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogDetail;