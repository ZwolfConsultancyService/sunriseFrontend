import React from 'react'

const Form = () => {
  return (
    	 <div className="max-w-7xl mx-auto px-6 py-10 bg-gray-100">
  <form className="max-w-7xl">
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
        defaultValue={""}
      />
    </div>
    <div className="mb-6 text-gray-900 text-sm">
      <label className="inline-flex items-center">
        <input type="checkbox" className="form-checkbox border-gray-300" />
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
  )
}

export default Form
