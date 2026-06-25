"use client";
import React from 'react'
import reviews from '../data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { FaRegStar } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";


function Review() {

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 536,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };

  return (
    <div className=" py-12 mx-5 my-10  md:mx-10 lg:mx-40  " >
      <div className='mx-5 md:mx-10 lg:mx-40 text-center py-10'>
        <p className='text-lg md:xl font-bold text-primary uppercase '>Testimonials</p>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-gray-300 text-shadow-2xs '>What Our Travelers Say</h1>
      </div>

      <Slider {...settings}>
        {reviews.map((review, i) => (
          <div key={i} className="relative h-48  px-10  space-y-2.5 cursor-pointer md:mt-10">
            <p className='text-lg font-bold text-center'>{review.name}</p>
            <p className='text-yellow-400 flex gap-1 justify-center'>
              {Array.from({ length: review.rating }, (_, index) => <TiStarFullOutline  key={index} />)}
              {Array.from({ length: 5 - review.rating }, (_, index) => <FaRegStar key={index} />)}
            </p>
            <p className='text-gray-600 text-center'>{review.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Review
