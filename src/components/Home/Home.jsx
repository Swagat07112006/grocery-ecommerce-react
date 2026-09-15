import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Customer from '../Customer/Customer'
import Footer from '../Footer/Footer'
import { motion } from 'framer-motion'

const FadeInView = ({ children, id }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <div className='w-full px-8 md:px-15 pb-20 flex flex-col gap-20 overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      <FadeInView>
        <Category />
      </FadeInView>

      <FadeInView id="about">
        <Values />
      </FadeInView>

      <FadeInView id="products">
        <Products />
      </FadeInView>

      <FadeInView>
        <Discount />
      </FadeInView>

      <FadeInView id="process">
        <Process />
      </FadeInView>

      <FadeInView>
        <Customer />
      </FadeInView>
    </div>
  )
}

export default Home