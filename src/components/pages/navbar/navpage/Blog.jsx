import React from 'react'
import Navbar from '../Navbar';
import Footer from '../../footer/Footer';

const Blog = () => {
  return (
    <div>
	<Navbar />
	<div className='text-5xl font-bold text-center mt-20 mb-10'>
		Blog
	</div>

	<Footer />
    </div>
  )
}

export default Blog;