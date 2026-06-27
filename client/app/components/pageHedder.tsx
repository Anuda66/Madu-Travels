import React from 'react'
import Image from 'next/image'
import Cover2 from '../assets/6.jpg'

function pageHedder() {
    
    return (
        <div>
            <div>
                <div className="relative w-full h-48 mb-24 sm:h-56 md:h-64 lg:h-72 xl:h-96">

                    {/* Image container----------------------------------------------- */}
                    <Image src={Cover2} alt="Cover" className="object-cover w-full h-full animate-fadeIn" />
                    {/* Dark overlay--------------------------------------------------------------------- */}
                    <div className="absolute inset-0 bg-black/40"></div>

                </div>
            </div>
        </div>
    )
}

export default pageHedder
