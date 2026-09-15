import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Button from '../Buttons/Button';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { motion, AnimatePresence } from 'framer-motion';

const Card = ({ item }) => {
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    const isLiked = isInWishlist(item.id);

    return (
        <motion.div
            className='w-full h-[380px] relative rounded-2xl bg-white shadow-md border border-zinc-100 overflow-hidden group cursor-pointer'
            whileHover={{ y: -10, boxShadow: "0px 25px 50px -12px rgba(249, 115, 22, 0.15)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            key={item.id}
        >
            {/* Background Blur Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            <div className='flex flex-col w-full h-full p-5 justify-between relative z-10'>
                {/* Header (Heart & Plus) */}
                <div className='flex justify-between items-center z-20'>
                    <motion.div
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(item);
                        }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.8 }}
                        className={`text-2xl transition-colors duration-300 p-2 rounded-full cursor-pointer ${isLiked ? 'text-red-500 bg-red-50' : 'text-zinc-300 hover:text-red-400 bg-zinc-50'}`}
                    >
                        <FaHeart className='text-lg' />
                    </motion.div>

                    <motion.div
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item);
                        }}
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9, rotate: -90 }}
                        className='bg-orange-100 text-orange-500 rounded-full p-3 cursor-pointer hover:bg-orange-500 hover:text-white transition-colors duration-300 shadow-sm'
                    >
                        <FaPlus className='text-sm' />
                    </motion.div>
                </div>

                {/* Animated Image */}
                <div className='w-full h-40 flex justify-center items-center relative mt-2'>
                    {/* Radial glow behind image */}
                    <motion.div
                        className="absolute w-32 h-32 bg-orange-200/40 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ opacity: 1, scale: 1.5 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.img
                        src={item.image}
                        alt={item.name}
                        className='w-36 h-36 rounded-lg object-contain drop-shadow-xl z-10'
                        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.4 }}
                    />
                </div>

                {/* Content */}
                <div className='flex flex-col items-center gap-3 mt-4'>
                    <div className='font-bold text-zinc-800 text-lg text-center line-clamp-1 group-hover:text-orange-600 transition-colors'>{item.name}</div>

                    <div className='w-full flex justify-between items-center mt-2'>
                        <div className='font-black text-xl text-zinc-900'>
                            <span className="text-orange-500 text-sm align-top mr-1">$</span>
                            {item.price.toFixed(2)}
                        </div>
                        <Button
                            content="Shop Now"
                            className='w-auto py-2 px-5 text-sm shadow-md shadow-orange-500/30'
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart(item);
                            }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card
