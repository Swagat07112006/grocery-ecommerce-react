import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'

const Home = () => {
  return (
    <div className='ml-15 mr-15'>
        <NavBar />
        <Hero />
        <Category />
        <Values />
        <Products />
    </div>
  )
}

export default Home