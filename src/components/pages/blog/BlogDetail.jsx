import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBlogProducts } from '@/redux/productsSlice';
import BlogProducts from './blogProducts';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import blogImg from "../../../assets/homew.jpg"


const BlogDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const blogProducts = useSelector((state) => state.products.blogProducts);

  useEffect(() => {
    dispatch(setBlogProducts(blogProducts));
  }, [dispatch]);

  const blog = BlogProducts.find(item => item.slug === slug);
  if (!blog) return <div>Blog not found.</div>;

  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);


  return (
    <>
      <Navbar />
   <section
  className="w-full h-64 md:h-96 bg-cover bg-center"
  style={{ backgroundImage: `url(${blogImg})` }}
  data-aos="fade-down"
>
  <div className="bg-black/50 bg-opacity-50 flex items-center justify-center h-full">
    <h1 className="text-white text-4xl font-bold">{blog.title}</h1>
  </div>
</section>

<main className="max-w-3xl mx-auto px-6 py-16 space-y-6">
  <img
    src={blog.image}
    alt={blog.title}
    className="w-full rounded shadow"
    data-aos="zoom-in"
  />
  <div
    className="text-lg text-gray-600 whitespace-pre-line"
    data-aos="fade-up"
  >
    {blog.description}
  </div>
  <div
    className="border-t pt-6 space-y-2 text-sm text-gray-500"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <p><strong>Size & Fit:</strong> {blog.sizeAndFit}</p>
    <p><strong>Shipping:</strong> {blog.shippingAndReturns}</p>
    <p><strong>Reviews:</strong> {blog.reviews}</p>
  </div>
</main>

      <Footer />
    </>
  );
};

export default BlogDetail;
