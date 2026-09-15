import React from 'react'
import { useWishlist } from '../../contexts/WishlistContext'
import Card from '../Products/Card'
import Heading from '../Heading/Heading'
import { motion, AnimatePresence } from 'framer-motion'
import { HeartCrack } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../Buttons/Button'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
}

const emptyVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", damping: 15 } }
}

const Wishlist = () => {
    const { wishlistItems } = useWishlist();

    return (
        <div className='min-h-screen bg-zinc-50 pb-20 pt-32'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className='bg-white pt-6 pb-5 mb-10 shadow-sm'
            >
                <Heading highlight="Your" normal="Wishlist" />
            </motion.div>

            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                <AnimatePresence mode="wait">
                    {wishlistItems.length === 0 ? (
                        <motion.div
                            key="empty"
                            variants={emptyVariant}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="flex flex-col items-center justify-center py-20 text-center"
                        >
                            <div className="bg-orange-100 p-6 rounded-full mb-6 text-orange-500">
                                <HeartCrack size={64} />
                            </div>
                            <h2 className="text-3xl font-bold text-zinc-800 mb-4">Your wishlist is empty</h2>
                            <p className="text-zinc-500 max-w-md mx-auto mb-8 text-lg">
                                Looks like you haven't added any favorite grocery items to your wishlist yet.
                            </p>
                            <Link to="/">
                                <Button content="Start Browsing" className="shadow-lg shadow-orange-500/40 text-lg py-3 px-8" />
                            </Link>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="grid"
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'
                        >
                            {wishlistItems.map(item => (
                                <motion.div key={item.id} variants={itemVariant} layout>
                                    <Card item={item} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Wishlist
