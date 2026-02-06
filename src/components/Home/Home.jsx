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

const Home = () => {
  return (
    <div className='ml-15 mr-15'>
        <Hero />
        <Category />
        <Values />
        <Products />
        <Discount />
        <Process />
        <Customer />
    </div>
  )
}

export default Home