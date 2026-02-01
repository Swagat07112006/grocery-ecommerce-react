import React from 'react'
import { Heart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

const WishListAndCart = () => {
  return (
    <div className='flex gap-4'>
        <Heart />
        <ShoppingBag />
    </div>
  )
}

export default WishListAndCart