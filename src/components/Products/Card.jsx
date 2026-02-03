import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Button from '../Buttons/Button';

const Card = ({ item }) => {
    return (
        <div className='w-full h-100' key={item.id}>
            <div className='flex flex-col w-full h-full p-4 rounded-lg shadow-lg justify-between'>
                {/* Header */}
                <div className='flex justify-between items-center mb-2'>
                    <FaHeart className='text-xl' />
                    <div className='bg-orange-500 rounded-lg p-2 text-white'>
                        <FaPlus className='text-sm' />
                    </div>
                </div>

                {/* Image */}
                <div className='w-full h-32 flex justify-center'>
                    <img 
                        src={item.image} 
                        alt={item.name}
                        className='w-34 h-34 object-cover rounded-lg'
                    />
                </div>

                {/* Content */}
                <div className='flex flex-col items-center gap-2 justify-end'>
                    <div className='font-semibold text-center'>{item.name}</div>
                    <div className='font-bold text-lg'>{`$${item.price.toFixed(2)}`}</div>
                    <div className='w-full flex justify-center'>
                        <Button content="Shop Now" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card  // ✅ This line was missing!
