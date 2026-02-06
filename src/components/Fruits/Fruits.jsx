import React from 'react'
import { useState } from 'react'
import FruitsBanner from '../../assets/fruits-banner.jpg'
import Banner from '../Banner/Banner'
import { useProduct } from '../../contexts/ProductContext'
import Card from '../Products/Card'
import Button from '../Buttons/Button'
import Heading from '../Heading/Heading'

const Fruits = () => {
  const [viewAll, setViewAll] = useState(false);
  const { fruitsAndVeggies } = useProduct();
  const visibleProducts = viewAll ? fruitsAndVeggies : fruitsAndVeggies.slice(0, 8);

  return (
    <div>
        <Banner BannerImage={FruitsBanner}/>

        <Heading highlight="Fruits" normal=" and Veggies"/>

        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-15'>
                {visibleProducts.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>


            <div className='mt-10 w-fit mx-auto' onClick={() => setViewAll(!viewAll)}>
                <Button content={viewAll ? "View Less" : "View All"} />
            </div>
        </div>
    </div>
  )
}

export default Fruits