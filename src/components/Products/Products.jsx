import React from 'react'
import {useState} from 'react'
import Heading from '../Heading/Heading'
import Tabs from './Tabs'
import Items from './Items'

const Products = () => {
  const [currentCategory, setCurrentCategory] = useState("All");

  return (
    <div>
        <div className='mb-10'>
            <Heading highlight="Our" normal="Products" />
        </div>

        <Tabs currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
        <Items currentCategory={currentCategory}/>
    </div>
  )
}

export default Products