import React, { useState, useEffect, useRef } from 'react'
import { Search } from 'lucide-react'
import WishListAndCart from './WishListAndCart'
import { Menu, Logs } from 'lucide-react';
import { useProduct } from '../../contexts/ProductContext';
import { useCart } from '../../contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = ({ showMenu, toggleMenu }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const { allProducts } = useProduct();
  const { addToCart } = useCart();
  const searchRef = useRef(null);

  const filteredProducts = query
    ? allProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='flex items-center gap-4'>
      <div className='relative' ref={searchRef}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='md:flex border-2 hidden border-amber-600 p-2 rounded-3xl justify-between max-w-3xs max-h-11 items-center bg-white z-50 relative'>
            <input
              type="text"
              placeholder="Search..."
              className="focus:outline-none px-2 w-full"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
            />

            <button type="submit" className="inline-flex items-center gap-1 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-400">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>

        <AnimatePresence>
          {isFocused && query && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-14 left-0 w-[400px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[100]"
            >
              {filteredProducts.length > 0 ? (
                <div className="max-h-[60vh] overflow-y-auto">
                  {filteredProducts.map(product => (
                    <div key={product.id} className="flex items-center justify-between p-4 hover:bg-orange-50 border-b border-gray-50 transition-colors group">
                      <div className="flex items-center gap-3">
                        <img src={product.image} alt={product.name} className="w-12 h-12 object-contain" />
                        <div>
                          <p className="font-semibold text-gray-800">{product.name}</p>
                          <p className="text-sm font-bold text-orange-500">${product.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          addToCart(product);
                          setIsFocused(false);
                          setQuery('');
                        }}
                        className="text-orange-500 bg-orange-100 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-200"
                      >
                        <Search className="w-4 h-4 hidden" /> {/* Hidden search replaced by "Add" semantic */}
                        <span className="text-xs font-bold px-2">Add</span>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-gray-500">
                  No products found matching "{query}"
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <WishListAndCart />

      <a href="#" className='text-3xl md:hidden' onClick={(e) => { e.preventDefault(); toggleMenu(); }}>
        {showMenu ? <Logs /> : <Menu />}
      </a>
    </div>
  )
}

export default SearchBar
