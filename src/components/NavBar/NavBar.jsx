import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'
import { Search } from 'lucide-react'

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 10);

            // Scroll Spy Logic
            const sections = ['about', 'products', 'process', 'contact'];
            let current = 'home'; // default

            if (window.scrollY > 300) {
                // Find which section is currently active in the viewport
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        // If element is actively taking up the middle of the screen
                        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 4) {
                            current = section;
                            break;
                            // Or if the element has scrolled past the top (fallback for overlapping/short sections)
                        } else if (rect.top <= window.innerHeight / 2) {
                            current = section;
                        }
                    }
                }
            }
            setActiveSection(current);
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    const navLinks = [
        { name: 'Home', href: '/', id: 'home' },
        { name: 'About Us', href: '/#about', id: 'about' },
        { name: 'Products', href: '/#products', id: 'products' },
        { name: 'Process', href: '/#process', id: 'process' },
        { name: 'Contact Us', href: '#contact', id: 'contact' }
    ];

    return (
        <header className={`pt-5 fixed top-0 left-0 right-0 bg-white transition-all duration-300 z-50 ${isScroll ? 'shadow-xl' : 'shadow-none'}`}>
            <nav className='flex justify-between items-center pl-15 pr-15'>
                <Link to="/">
                    <h1 className='text-2xl font-bold'>Gr<span className='font-bold text-orange-500 text-2xl'>O</span>cify</h1>
                </Link>

                {/* Desktop menu */}
                <ul className='md:flex hidden gap-10'>
                    {navLinks.map((link) => (
                        <li key={link.id} className='font-medium'>
                            <a
                                href={link.href}
                                className={`-tracking-tighter transition-colors duration-300 ${activeSection === link.id ? 'text-orange-500 font-bold underline decoration-2 underline-offset-4' : 'text-zinc-600 hover:text-orange-400 hover:underline'}`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <SearchBar showMenu={showMenu} toggleMenu={toggleMenu} />

                {/* Mobile Menu */}
                <ul className={`flex flex-col md:hidden gap-y-10 absolute bg-white/95 backdrop-blur-xl rounded-b-xl shadow-xl items-center gap-x-10 p-10 top-20 w-full transform transition-all duration-500 ${showMenu ? 'left-0' : '-left-full'}`}>
                    {navLinks.map((link) => (
                        <li key={link.id} className='font-medium'>
                            <a
                                href={link.href}
                                onClick={toggleMenu}
                                className={`-tracking-tighter text-xl transition-colors duration-300 ${activeSection === link.id ? 'text-orange-500 font-bold underline decoration-2 underline-offset-4' : 'text-zinc-600 hover:text-orange-400'}`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}

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