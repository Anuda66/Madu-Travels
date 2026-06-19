"use client";
import React from 'react'
import { useState, useEffect } from "react";
import Image from "next/image";
import cover1 from '../assets/cover1.jpg'
import cover2 from '../assets/cover2.jpg'
import cover3 from '../assets/cover3.jpg'
import { useRouter } from 'next/navigation';

// Replace these with your own image paths (in /public) or remote URLs
const slides = [
    {
        image: cover1,
        title: "Discover Your Next",
        title2: "Adventure",
        tagline: "Explore breathtaking destinations worldwide.",
    },
    {
        image: cover2,
        title: "Conquer the Peaks of",
        title2: "Swiss Alps",
        tagline: "Crystal clear waters and luxury resorts.",
    },
    {
        image: cover3,
        title: "Paradise Awaits in",
        title2: "Maldives",
        tagline: "Majestic mountains and pristine natures.",
    },
];

const SLIDE_INTERVAL = 5000; // time between slides (ms)

function HeroSection() {

    const router = useRouter()
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, SLIDE_INTERVAL);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <section className="relative h-screen w-full overflow-hidden">
                {/* Slider images */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                            }`}>
                        <Image src={slide.image} alt={slide.title} fill priority={index === 0} sizes="100vw" className="object-cover" />
                    </div>
                ))}

                {/* Dark overlay for text readability------------------------------------------------------------------- */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Centered content — text changes with the background */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "pointer-events-none opacity-0"
                                }`}>
                            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                {slide.title} <br /> <span className='text-secondary'>{slide.title2}</span>
                            </h1>
                            <p className="mx-auto mt-4 max-w-xl text-base text-gray-200 sm:text-lg md:text-xl">
                                {slide.tagline}
                            </p>
                            <div className='flex flex-row gap-3 items-center justify-center mt-6'>
                                <p onClick={() => router.push('/booking')} className='px-4 py-2 bg-secondary text-white hover:bg-hoverSecondary rounded-lg cursor-pointer text-sm '>Explore Destinations</p>
                                <p onClick={() => router.push('/booking')} className='px-4 py-2 rounded-lg cursor-pointer text-sm  text-white border border-gray-300 bg-gray-600/50 hover:bg-gray-300/10 backdrop-blur-sm'>View Packages</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional dot indicators (display only, no click needed)-------------------------------------------- */}
                <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`h-1 w-1 rounded-full transition-all duration-300 ${index === current ? "w-4 bg-white" : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </section>

        </div>
    )
}

export default HeroSection
