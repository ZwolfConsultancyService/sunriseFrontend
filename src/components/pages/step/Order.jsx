import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Form from '../label/page/Form'
import OrderProcess from './OrderProccess'

const Order = () => {
  return (
    <div>
	<Navbar />
	<div className='mt-16'>
		<OrderProcess />
		</div>
		<Footer />
    </div>
  )
}

export default Order