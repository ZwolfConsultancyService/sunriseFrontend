import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        alert(result.message);
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
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-gray-100">
      <form className="max-w-7xl" onSubmit={handleSubmit}>
        <h3 className="font-semibold text-gray-900 mb-3">Leave a Reply</h3>
        <p className="text-gray-800 mb-8 text-sm">
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="flex flex-col md:flex-row md:space-x-8 mb-6">
          <div className="flex-1 mb-6 md:mb-0">
            <label htmlFor="name" className="block text-gray-900 text-sm mb-1">
              Name *
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-200 p-2"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex-1 mb-6 md:mb-0">
            <label htmlFor="email" className="block text-gray-900 text-sm mb-1">
              Email *
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-200 p-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-900 text-sm mb-1">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            className="w-56 border border-gray-200 p-2"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
