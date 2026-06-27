'use client'
import React from 'react'
import PageHedder from '../components/pageHedder'
import Image from 'next/image'
import Cover2 from '../assets/6.jpg'

function page() {
  return (
    <div>
      {/* Image container----------------------------------------------- */}
      <div className="relative w-full h-48 md:mb-20 sm:h-56 md:h-64 lg:h-72 xl:h-96 mb-10">
        <Image src={Cover2} alt="Cover" className="object-cover w-full h-full animate-fadeIn" />
        {/* Dark overlay--------------------------------------------------------------------- */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className='mx-5 md:mx-10 lg:mx-40'>
        <h1 className='text-xl md:text-3xl text-center'> Connect with Us,</h1>
        <h1 className=' text-2xl md:text-4xl font-bold text-center'>Start Your Journey</h1>
        <p className='text-sm text-gray-500 text-center mt-8'>
          Reach out to Walkers Tours for personalised assistance, inquiries, or bookings. Our dedicated team is ready to help you plan the perfect Sri Lankan adventure, offering expert guidance, timely support, and all the information you need to make your trip seamless and memorable.
        </p>
      </div>

      {/* contact form------------------------------------------------------------ */}

      <div className=''>
        
      </div>



    </div>
  )
}

export default page
