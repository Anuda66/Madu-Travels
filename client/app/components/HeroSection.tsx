"use client";
import React from 'react'
import { useState, useEffect } from "react";
import Image from "next/image";
import cover from '../assets/cover.jpg'

// Replace these with your own image paths (in /public) or remote URLs
const slides = [
    cover,
    cover,
    cover,
];

const SLIDE_INTERVAL = 5000; // time between slides (ms)

function HeroSection() {

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
                {slides.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            fill
                            priority={index === 0}
                            sizes="100vw"
                            className="object-cover"
                        />
                    </div>
                ))}

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Centered content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-3xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Welcome to Your Website
                    </h1>
                    <p className="mt-4 max-w-xl text-base text-gray-200 sm:text-lg md:text-xl">
                        A short tagline that describes what you do goes right here.
                    </p>
                </div>

                {/* Optional dot indicators (display only, no click needed) */}
                <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${index === current ? "w-6 bg-white" : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </section>

        </div>
    )
}

export default HeroSection
