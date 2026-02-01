import React from 'react'
import { Search } from 'lucide-react'
import WishListAndCart from './WishListAndCart'
import { Menu } from 'lucide-react';
import { Logs } from 'lucide-react';

const SearchBar = ({ showMenu, toggleMenu }) => {

  return (
    <div className='flex items-center gap-4'>
      <form action="">
        <div className='md:flex border-2 hidden border-amber-600 p-2 rounded-3xl justify-between max-w-3xs max-h-11 items-center'>
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
      <WishListAndCart />

      <a href="#" className='text-3xl md:hidden' onClick={toggleMenu}>
        {showMenu ? <Logs /> : <Menu />}
      </a>
    </div>
  )
}

export default SearchBar
