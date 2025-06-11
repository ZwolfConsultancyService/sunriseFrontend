import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const QuoteForm = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="flex justify-center items-center relative z-0">
          <img
            alt="Customized hang tag string with seal and cord"
            className="w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] object-cover"
            src="https://storage.googleapis.com/a1aa/image/fd333c08-54a4-46a3-4671-6abbf6215dcf.jpg"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight max-w-4xl">
            Get Free Quote
          </h1>
        </div>
      </div>

      {/* Contact Info Section */}
      <header className="bg-gray-100 py-10 mt-16">
        <h1 className="text-center text-gray-800 font-semibold text-xl md:text-2xl">
          Contact us by email or fill out the form below
        </h1>
      </header>

      {/* Email CTA */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-green-600 font-bold text-2xl mb-4">Email us:</h2>
        <a
          href="mailto:Info@Intense.com"
          className="inline-block bg-red-500 text-white font-semibold text-sm rounded-full px-6 py-2 mb-4 hover:bg-red-600 transition-colors"
        >
          Info@Intense.com
        </a>
        <p className="text-gray-700 text-sm max-w-xl">
          If you do not receive our email response, please check your spam folder.
        </p>
      </main>

      {/* Form Section */}
      <main className="max-w-5xl mx-auto  py-8">
        <h2 className="text-green-600 font-semibold text-2xl mb-6">
          Request Your Quote
        </h2>

        <form>
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="firstName" className="block font-bold text-sm mb-1">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <p className="text-xs text-gray-600 mt-1">First</p>
            </div>
            <div>
              <label htmlFor="lastName" className="block invisible">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <p className="text-xs text-gray-600 mt-1">Last</p>
            </div>
          </div>

          {/* Email Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="email" className="block font-bold text-sm mb-1">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <p className="text-xs text-gray-600 mt-1">Email</p>
            </div>
            <div>
              <label htmlFor="confirmEmail" className="block invisible">
                Confirm Email
              </label>
              <input
                id="confirmEmail"
                name="confirmEmail"
                type="email"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <p className="text-xs text-gray-600 mt-1">Confirm Email</p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label htmlFor="phone" className="block font-bold text-sm mb-1">
              WhatsApp/Phone
            </label>
            <PhoneInput
              country={'in'}
              enableSearch
              inputClass="!w-full !px-3 !py-2 !border !border-gray-300 !rounded"
              dropdownClass="!z-50"
              placeholder="Enter phone number"
              inputProps={{
                name: 'phone',
                required: true,
              }}
            />
          </div>

          {/* Website URL */}
          <div className="mb-6">
            <label htmlFor="website" className="block font-bold text-sm mb-1">
              Website / URL
            </label>
            <input
              id="website"
              name="website"
              type="url"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="https://yourwebsite.com"
            />
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block font-bold text-sm mb-1">File Upload</label>
            <label
              htmlFor="fileUpload"
              className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded h-24 cursor-pointer text-center text-gray-500 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 15a4 4 0 004 4h10a4 4 0 100-8h-1m-4-4v8m0 0l-3-3m3 3l3-3"
                />
              </svg>
              Click or drag a file to this area to upload
              <input
                id="fileUpload"
                name="fileUpload"
                type="file"
                className="hidden"
              />
            </label>
          </div>

          {/* Request Message */}
          <div className="mb-6">
            <label htmlFor="request" className="block font-bold text-sm mb-1">
              Your Request <span className="text-red-600">*</span>
            </label>
            <textarea
              id="request"
              name="request"
              rows={5}
              className="border border-gray-300 rounded px-3 py-2 w-full resize-y"
              placeholder="Describe your needs or questions here..."
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="bg-green-600 text-white font-bold px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Final Tips */}
        <p className="text-sm text-gray-700">
          <strong>Tips:</strong> Make sure your email and phone number are correct so we can reach you. Thank you!
        </p>
      </main>
    </>
  );
};

export default QuoteForm;
