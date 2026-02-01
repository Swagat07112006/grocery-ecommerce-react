import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'

const Home = () => {
  return (
    <div className='ml-15 mr-15'>
        <NavBar />
        <Hero />
        <Category />
    </div>
  )
}

export default Home