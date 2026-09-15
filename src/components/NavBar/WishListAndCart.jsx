import React from 'react'
import { Heart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const WishListAndCart = () => {
  const { itemCount, toggleCart } = useCart();

  return (
    <div className='flex gap-4 items-center'>
      <button className='hover:text-orange-500 transition-colors cursor-pointer'>
        <Heart />
      </button>

      <button onClick={toggleCart} className='relative hover:text-orange-500 transition-colors cursor-pointer'>
        <ShoppingBag />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>
    </div>
  )
}

export default WishListAndCart