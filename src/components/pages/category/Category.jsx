import React from 'react'
import Bag from "../../../assets/bag.jpg"

const Category = () => {
  return (
    <div> <div className="bg-white font-sans mt-14 md:mt-20 p-10 shadow-lg">
      <main className="flex flex-col md:flex-row items-center justify-center  px-6 sm:px-10 md:px-24 lg:px-32">
        <div className="w-full md:w-1/2 flex items-center justify-center md:p-20">
          <img
            alt="Glossy black and blue backpack centered on a solid peach background"
            className="w-full h-4xl"
            height={400}
            src={Bag}
            width={400}
          />
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-20 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#111827] leading-snug">
            The quarter size experience
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg md:text-xl max-w-md leading-relaxed mx-auto md:mx-0">
            Create exactly what you need with our powerful bootstrap toolkit.
          </p>
        </div>
      </main>
    </div>
    </div>
  )
}

export default Category