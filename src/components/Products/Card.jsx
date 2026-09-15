import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Button from '../Buttons/Button';
import { useCart } from '../../contexts/CartContext';

const Card = ({ item }) => {
    const { addToCart } = useCart();

    return (
        <div className='w-full h-100 group' key={item.id}>
            <div className='flex flex-col w-full h-full p-4 rounded-lg shadow-lg justify-between transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl bg-white'>
                {/* Header */}
                <div className='flex justify-between items-center mb-2'>
                    <div className='text-3xl text-zinc-300 hover:text-red-500 transition-colors cursor-pointer'>
                        <FaHeart className='text-xl' />
                    </div>

                    <div
                        onClick={() => addToCart(item)}
                        className='bg-orange-500 rounded-lg p-2 text-white cursor-pointer hover:bg-orange-600 transition-colors'
                    >
                        <FaPlus className='text-sm' />
                    </div>
                </div>

                {/* Image */}
                <div className='w-full h-32 flex justify-center'>
                    <img
                        src={item.image}
                        alt={item.name}
                        className='w-34 h-34 rounded-lg object-contain transition-transform duration-300 group-hover:scale-110'
                    />
                </div>

                {/* Content */}
                <div className='flex flex-col items-center gap-2 justify-end'>
                    <div className='font-semibold text-center line-clamp-1'>{item.name}</div>
                    <div className='font-bold text-lg'>{`$${item.price.toFixed(2)}`}</div>
                    <div className='w-full flex justify-center'>
                        <Button
                            content="Shop Now"
                            className='w-full'
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart(item);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card  // ✅ This line was missing!
