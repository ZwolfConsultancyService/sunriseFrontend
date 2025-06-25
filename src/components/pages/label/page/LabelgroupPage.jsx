import React from 'react';
import labelHierarchy from '../data/labelHierarchy';
import { Link } from 'react-router-dom';

const LabelGroupPage = () => {
  return (
    <div className="px-3 md:px-8 mb-5">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-y-8">
        {labelHierarchy.map((label, index) => (
          <div key={index} data-aos="fade-up" className="flex justify-center">
            <Link to={`/label/${label.slug}`} className="flex flex-col items-center">
              <div className="w-full max-w-[600px] h-[300px] overflow-hidden flex items-center justify-center">
                <img
                  alt={label.title}
                  className="w-full h-full object-cover"
                  src={label.image}
                />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-900">{label.group}</h3>
              <p className="text-center text-sm leading-relaxed line-clamp-2 w-1/2">
                {label.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabelGroupPage;
