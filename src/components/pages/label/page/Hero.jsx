import React from 'react'

const Hero = () => {
  return (
    <div>
	   <div className="relative w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px]">
          <img
            alt="Collage of different types of garment labels including fabric patches, printed tags, metal pins, and plastic labels arranged in a grid"
            className="w-full h-full object-cover"
            height={280}
            src="https://acctrims.com/wp-content/uploads/2022/10/Different-types-of-labels-in-garments.jpg"
            width={1920}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <h1 className="text-white font-extrabold text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[48px] leading-tight text-center px-4">
              Different types of labels in garments
            </h1>
          </div>
        </div>
    </div>
  )
}

export default Hero