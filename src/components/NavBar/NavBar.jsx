import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'
import { Search } from 'lucide-react'

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 10);
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    return (
        <header className={`pt-5 pb-5 fixed top-0 left-0 right-0 bg-white transition-all duration-300 z-50 ${isScroll ? 'shadow-xl' : 'shadow-none'}`}>
            <nav className='flex justify-between items-center pl-15 pr-15'>
                <Link to="/">
                    <h1 className='text-2xl font-bold'>Gr<span className='font-bold text-orange-500 text-2xl'>O</span>cify</h1>
                </Link>

                {/* Desktop menu */}
                <ul className='md:flex hidden gap-10'>
                    <li className='font-medium'>
                        <Link to="/" className='-tracking-tighter text-orange-500 hover:text-orange-600 hover:underline'>Home</Link>
                    </li>
                    <li className='font-medium'>
                        <a href="/#about" className='-tracking-tighter hover:text-orange-600 hover:underline'>About Us</a>
                    </li>
                    <li className='font-medium'>
                        <a href="/#process" className='-tracking-tighter hover:text-orange-600 hover:underline'>Process</a>
                    </li>
                    <li className='font-medium'>
                        <a href="#contact" className='-tracking-tighter hover:text-orange-600 hover:underline'>Contact Us</a>
                    </li>
                </ul>

                <SearchBar showMenu={showMenu} toggleMenu={toggleMenu} />

                {/* Mobile Menu */}
                <ul className={`flex flex-col md:hidden gap-y-10 absolute bg-orange-500/15 backdrop-blur-xl rounded-xl shadow-xl items-center gap-x-10 p-10 top-30 transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : '-left-full'}`}>
                    <li className='font-medium'>
                        <Link to="/" onClick={toggleMenu} className='-tracking-tighter text-orange-500 hover:text-orange-600 hover:underline'>Home</Link>
                    </li>
                    <li className='font-medium'>
                        <a href="/#about" onClick={toggleMenu} className='-tracking-tighter hover:text-orange-600 hover:underline'>About Us</a>
                    </li>
                    <li className='font-medium'>
                        <a href="/#process" onClick={toggleMenu} className='-tracking-tighter hover:text-orange-600 hover:underline'>Process</a>
                    </li>
                    <li className='font-medium'>
                        <a href="#contact" onClick={toggleMenu} className='-tracking-tighter hover:text-orange-600 hover:underline'>Contact Us</a>
                    </li>

                    <li>
                        <form action="">
                            <div className='flex border-2 md:hidden border-amber-600 p-2 rounded-3xl justify-between max-w-3xs max-h-11 items-center'>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="focus:outline-none"
                                />

                                <button type="submit" className="inline-flex items-center gap-1 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-400">
                                    <Search className="w-5 h-5" />  {/* React icon */}
                                </button>
                            </div>
                        </form>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar