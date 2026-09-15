import React from 'react'
import { useState } from 'react'
import FruitsBanner from '../../assets/fruits-banner.jpg'
import Banner from '../Banner/Banner'
import { useProduct } from '../../contexts/ProductContext'
import Card from '../Products/Card'
import Button from '../Buttons/Button'
import Heading from '../Heading/Heading'
import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

const Fruits = () => {
    const [viewAll, setViewAll] = useState(false);
    const { fruitsAndVeggies } = useProduct();
    const visibleProducts = viewAll ? fruitsAndVeggies : fruitsAndVeggies.slice(0, 8);

    return (
        <div className='min-h-screen bg-zinc-50 pb-20'>
            <Banner BannerImage={FruitsBanner} />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className='bg-white pt-10 pb-5 mb-10 shadow-sm'
            >
                <Heading highlight="Fruits" normal=" and Veggies" />
            </motion.div>

            <div className='px-15'>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-15'
                >
                    {visibleProducts.map(item => (
                        <motion.div key={item.id} variants={itemVariant}>
                            <Card item={item} />
                        </motion.div>
                    ))}
                </motion.div>


                <div className='mt-10 w-fit mx-auto' onClick={() => setViewAll(!viewAll)}>
                    <Button content={viewAll ? "View Less" : "View All"} />
                </div>
            </div>
        </div>
    )
}

export default Fruits