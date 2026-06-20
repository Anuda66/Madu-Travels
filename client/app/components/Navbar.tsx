'use client'
import React, { useEffect } from 'react'
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Navbar() {
    // const navigate = useNavigate();
    const [showMenu, setShowMenu] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 z-50 w-full transition-all duration-300  ${scrolled ? 'bg-gray-600/50 backdrop-blur-lg' : 'bg-transparent'}`}>
            <div className='mx-5  md:mx-10 lg:mx-40 '>
                <div className="flex items-center justify-between py-4 m-2 text-sm ">
                    {/* App Logo------------------------------------------------------------------ */}
                    <div>
                        <p onClick={() => router.push('/')} className="text-3xl font-bold text-white cursor-pointer">Wanderly</p>
                    </div>
                    <ul className="items-start hidden gap-5 font-medium md:flex">
                        <Link onClick={() => scrollTo(0, 0)} href={"/"}>
                            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-accent hover:-translate-y-1 hover:scale-110 hover:text-secondary-50">Home</li>
                            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                        </Link>
                        <Link onClick={() => scrollTo(0, 0)} href={"/cabanas"}>
                            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-accent hover:-translate-y-1 hover:scale-110 hover:text-secondary-50">Cabanas</li>
                            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                        </Link>
                        <Link onClick={() => scrollTo(0, 0)} href={"/experiences"}>
                            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-accent hover:-translate-y-1 hover:scale-110 hover:text-secondary-50">Experiences</li>
                            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                        </Link>

                        <Link onClick={() => scrollTo(0, 0)} href={"/gallery"}>
                            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-accent hover:-translate-y-1 hover:scale-110 hover:text-secondary-50">Gallery</li>
                            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200 " />
                        </Link>

                        <Link onClick={() => scrollTo(0, 0)} href={"/about"}>
                            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-accent hover:-translate-y-1 hover:scale-110 hover:text-secondary-50">About</li>
                            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200 " />
                        </Link>

                        <Link onClick={() => scrollTo(0, 0)} href={"/contact"}>
                            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-accent hover:-translate-y-1 hover:scale-110 hover:text-secondary-50"> Contact</li>
                            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                        </Link>
                        <div>
                            <p onClick={() => router.push('/booking')} className='px-3 py-2 bg-accent text-white hover:bg-secondary rounded-lg cursor-pointer text-xs '>Book Now</p>
                        </div>
                    </ul>
                    {/*Menu Icon ------------------------------------------------------------------------------------------------*/}
                    <RiMenuUnfold4Fill onClick={() => setShowMenu(true)} className="w-10 h-6 text-white md:hidden" />
                </div>
                <div className="flex items-center gap-4">
                    {/* Mobile menu---------------------------------------------------- */}
                    <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} lg:hidden right-0 top-0 bottom-0 overflow-hidden  transition-all fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-5 `} style={{ opacity: '1', transform: 'none', transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out' }}>
                        <div className="flex items-center justify-between px-7 ">
                            {/* App Logo-----------------------------------------------------------------------------------------*/}
                            <div>
                                <p onClick={() => router.push('/')} className="text-2xl font-bold text-white cursor-pointer">Wanderly</p>
                            </div>
                            {/* Close Icon-----------------------------------------------------------------------------------------*/}
                            <RxCross2 onClick={() => setShowMenu(false)} className="w-10 h-6 text-white md:hidden" />
                        </div>
                        <hr className=' mt-3 border-gray-300 ' />
                        <ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium text-white">
                            <Link onClick={() => setShowMenu(false)} href={'/'}>Home
                                <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                            </Link>
                            <Link onClick={() => setShowMenu(false)} href={'/cabanas'}>Cabanas
                                <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                            </Link>
                            <Link onClick={() => setShowMenu(false)} href={'/experiences'}>Experiences
                                <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                            </Link>
                            <Link onClick={() => setShowMenu(false)} href={'/gallery'}>Gallery
                                <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                            </Link>
                            <Link onClick={() => setShowMenu(false)} href={'/about'}>About
                                <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                            </Link>
                            <Link onClick={() => setShowMenu(false)} href={'/contact'}>Contact
                                <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary-200" />
                            </Link>
                            <div>
                                <p onClick={() => router.push('/booking')} className='px-4 py-2 bg-accent text-white hover:bg-secondary rounded-lg cursor-pointer text-sm '>Book Now</p>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
