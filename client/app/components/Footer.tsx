import Link from 'next/link'
import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SiMinutemailer } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
 
function Footer() {
  return (
    <div>
      <footer className="-mb-10 bg-primary">
        <div className="py-12 mx-5 my-10  md:mx-10 lg:mx-40  ">
          <div className="flex flex-col items-center justify-center gap-4  md:flex-row md:justify-between py-10">
            <div className=''>
              <h3 className="text-2xl  tracking-wider text-white font-bold ">Get Travel Inspiration</h3>
              <p className="mt-2 text-sm text-gray-400">Subscribe for exclusive deals and travel tips</p>
            </div>
            {/* Email Subscription-------------------------------------------------------------------------------------------------------- */}
            <div className='flex  items-center justify-center gap-2 md:flex-row'>
              <input type="email" placeholder='Enter your email' className='px-4 py-2 text-sm rounded-lg focus:outline-none bg-gray-500/30 text-white placeholder:text-gray-400 border border-gray-500 ' />
              <button className='px-4 py-2 bg-accent text-white hover:bg-secondary rounded-lg cursor-pointer '><span className='inline-flex items-center gap-3'><SiMinutemailer />Subscribe</span> </button>
            </div>

          </div>
          <hr className="border-gray-600 mb-10" />

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-2xl  tracking-wider text-white font-bold ">
                Wanderly
              </h3>
              <p className="mt-4 text-sm text-gray-400">
                Your trusted partner for unforgettable travel experiences around the world. Discover, explore, and create memories that last a lifetime.
              </p>
              <div className='text-white  flex flex-row space-x-3 text-lg mt-5'>
                <Link className='hover:text-accent' href={'/'}><FaFacebookSquare /></Link>
                <Link className='hover:text-accent' href={'/'}><FaSquareInstagram /></Link>
                <Link className='hover:text-accent' href={'/'}><IoLogoYoutube /></Link>
                <Link className='hover:text-accent' href={'/'}><IoLogoLinkedin /></Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm  tracking-wider text-white uppercase font-bold">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                <li><a href="/" className="text-sm text-gray-400 hover:text-accent">Destinations </a></li>
                <li><a href="/cabanas" className="text-sm text-gray-400 hover:text-accent">Tour Packages</a></li>
                <li><a href="/gallery" className="text-sm text-gray-400 hover:text-accent">Travel Blog</a></li>
                <li><a href="/about" className="text-sm text-gray-400 hover:text-accent">About Us</a></li>
                <li><a href="/contact" className="text-sm text-gray-400 hover:text-accent">Contact</a></li>
                <li><a href="/contact" className="text-sm text-gray-400 hover:text-accent">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm  tracking-wider text-white uppercase font-bold">
                Travel Types
              </h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/experiences" className="text-sm text-gray-400 hover:text-accent">Adventure Tours</Link></li>
                <li><Link href="/experiences" className="text-sm text-gray-400 hover:text-accent">Honeymoon Packages</Link></li>
                <li><Link href="/experiences" className="text-sm text-gray-400 hover:text-accent">Family Trips</Link></li>
                <li><Link href="/experiences" className="text-sm text-gray-400 hover:text-accent">Corporate Travel</Link></li>
                <li><Link href="/experiences" className="text-sm text-gray-400 hover:text-accent">Cruise Packages</Link></li>
                <li><Link href="/experiences" className="text-sm text-gray-400 hover:text-accent">Cultural Tours</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm  tracking-wider text-white uppercase font-bold">
                Contact Us
              </h3>
              <ul className='mt-4 space-y-4'>
                <li className="text-sm text-gray-400"><span className="inline-block mr-2 text-accent "><HiOutlineLocationMarker /></span>123 Travel Avenue, Suite 500, New York</li>
                <li className="mt-1 text-sm text-gray-400"><span className="inline-block mr-2 text-accent"><BsTelephone /></span>+1 (800) 555-TRIP</li>
                <li className="mt-1 text-sm text-gray-400"><span className="inline-block mr-2 text-accent"><HiOutlineMail /></span>hello@wanderly.com</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-600 mt-10" />

          <div className="mt-8 space-y-4 text-center md:flex md:items-center md:justify-between md:space-y-0">
            <div>
              <p className=" text-center  text-sm font-light text-gray-300">
                &copy; 2026 Madu Travels. All rights reserved.
              </p>
            </div>
            <div className='flex flex-row space-x-7 '>
              <Link href="/terms" className=" text-gray-300 hover:text-white text-xs font-light">Terms & Conditions</Link>
              <Link href="/privacy" className=" text-gray-300 hover:text-white text-xs font-light">Privacy Policy</Link>
              <Link href="/refund" className=" text-gray-300 hover:text-white text-xs font-light">Refund Policy</Link>
            </div>
            <div>
              <p className=" text-center  text-sm font-light text-gray-300">Website Designed & Developed by <Link className='hover:text-accent' href={'https://www.flegoinnovation.com/'}>Flego Innovation</Link></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
