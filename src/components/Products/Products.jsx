import React from 'react'
import {useState} from 'react'
import Heading from '../Heading/Heading'
import Tabs from './Tabs'
import Items from './Items'

const Products = () => {
  const [currentCategory, setCurrentCategory] = useState("All");

  return (
    <div className='w-full'>
        <div className='mb-10'>
            <Heading highlight="Our" normal="Products" />
        </div>

        <div className='w-full'>
          <Tabs currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
        </div>
        <Items currentCategory={currentCategory}/>
    </div>
  )
}

export default Products