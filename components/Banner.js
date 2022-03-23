import Image from 'next/image'
import React from 'react'
import banner from '../public/assets/banner.jpg'

function Banner() {
  return (
    <div className="relative h-[580px] sm:h-[500px] lg:h-[550px] xl:[600px]">
        <Image 
            src={banner}
            alt="banner"
            layout="fill"
            objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute w-full h-full top-1/3 pl-[20px] md:pl-[160px] items-center">
            <h2 className="text-3xl md:text-5xl text-white font-bold">Learning Today,</h2> 
            <h2 className="text-3xl md:text-5xl text-white font-bold">Leading Tomorrow</h2>
            <p className="text-xl md:text-2xl text-gray-200 py-4">We are team of talented designers making websites with Next.js</p>
            <button className="border-2 text-white px-6 py-2 rounded-full hover:bg-green-600 hover:border-0 hover:transition duration-150 ">Get Started</button>
        </div>
    </div>
  )
}

export default Banner