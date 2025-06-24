import React from 'react'
import labelHierarchy from '../data/labelHierarchy'
import { Link } from 'react-router-dom'

const LabelGroupPage = () => {
  return (
    <div>
	<div className="grid md:grid-cols-1 lg:grid-cols-2 px-3 md:px-8  gap-y-8 mb-5 ">
          {labelHierarchy.map((label, index) => (
            <div key={index} data-aos="fade-up">
              <Link to={`/label/${label.slug}`} className="flex flex-col items-center mb-5">
                <img
                  alt={label.title}
                  className="w-full max-w-[600px] lg:w-[400px] xl:w-[600px] object-contain"
                  height={200}
                  src={label.image}
                  width={500}
                />
                <h3 className="mt-4 font-semibold text-lg text-gray-900">{label.group}</h3>
                <p className="text-center text-sm leading-relaxed line-clamp-2 w-1/2">{label.description}</p>
              </Link>
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default LabelGroupPage;