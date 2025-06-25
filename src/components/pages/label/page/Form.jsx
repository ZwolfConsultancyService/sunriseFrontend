import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
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
      const res = await fetch('http://localhost:5000/api/comments', {
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
          website: '',
          comment: '',
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
          <div className="flex-1">
            <label htmlFor="website" className="block text-gray-900 text-sm mb-1">
              Website
            </label>
            <input
              id="website"
              type="url"
              className="w-full border border-gray-200 p-2"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="comment" className="block text-gray-900 text-sm mb-1">
            Comment *
          </label>
          <textarea
            id="comment"
            rows={8}
            className="w-full border border-gray-200 p-2 resize-y"
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6 text-gray-900 text-sm">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              id="saveInfo"
              className="form-checkbox border-gray-300"
              checked={formData.saveInfo}
              onChange={handleChange}
            />
            <span className="ml-2">
              Save my name, email, and website in this browser for the next time I
              comment.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default Form;
