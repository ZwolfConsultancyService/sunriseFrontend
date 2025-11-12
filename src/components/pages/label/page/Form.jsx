import React, { useState } from 'react';

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    saveInfo: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://zwolfconsultancyservice-newsunrisebackend.onrender.com/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          onClose(); // Close popup after successful submission
        }, 2000);
        setFormData({
          name: '',
          email: '',
          phone: '',
          saveInfo: false,
        });
      } else {
        alert(result.error || 'Failed to submit');
      }
    } catch (error) {
      alert('Something went wrong!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-white/90 backdrop-blur-md relative overflow-hidden rounded-2xl shadow-2xl border border-white/20">
      
      {/* Close Button - Very Visible */}
      <div className="absolute -top-3 -right-3 z-50">
        <button 
          onClick={onClose}
          className="bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold hover:scale-110 transition-all duration-200 shadow-2xl border-4 border-white"
          title="Close Form"
        >
          ×
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>
      
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-yellow-400 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          ✅ Form submitted successfully!
        </div>
      )}

      <form className="max-w-2xl relative z-10" onSubmit={handleSubmit}>
        <div className="text-center mb-8">
          <h3 className="font-bold text-3xl text-gray-900 mb-3 animate-fadeIn">
            Get In Touch With Us
          </h3>
          <p className="text-gray-600 text-lg animate-fadeIn animation-delay-200">
            Your email address will not be published. Required fields are marked *
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200/50 hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row md:space-x-8 mb-6">
            <div className="flex-1 mb-6 md:mb-0 group">
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2 group-focus-within:text-yellow-500 transition-colors duration-200">
                Name *
              </label>
              <input
                id="name"
                type="text"
                className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200 hover:border-gray-300 bg-white/80 backdrop-blur-sm"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="flex-1 mb-6 md:mb-0 group">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2 group-focus-within:text-yellow-500 transition-colors duration-200">
                Email *
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200 hover:border-gray-300 bg-white/80 backdrop-blur-sm"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          <div className="mb-8 group">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2 group-focus-within:text-yellow-500 transition-colors duration-200">
              Phone *
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full md:w-64 border-2 border-gray-200 p-3 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-200 hover:border-gray-300 bg-white/80 backdrop-blur-sm"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                bg-gradient-to-r from-yellow-400 to-yellow-500 
                hover:from-yellow-500 hover:to-yellow-600 
                text-black font-bold py-4 px-8 rounded-lg
                transform transition-all duration-200
                hover:scale-105 hover:shadow-lg
                focus:outline-none focus:ring-4 focus:ring-yellow-300
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                ${isSubmitting ? 'animate-pulse' : 'hover:-translate-y-1'}
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Form'
              )}
            </button>
          </div>
        </div>
      </form>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Form;