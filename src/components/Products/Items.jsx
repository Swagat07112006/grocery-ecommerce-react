import React from 'react'
import { useState } from 'react'
import Card from './Card'
import Button from '../Buttons/Button'
import { useProduct } from '../../contexts/ProductContext'

const Items = ({ currentCategory }) => {

    // Here Now we will use ContextAPI to get All Products
    const { allProducts } = useProduct();

    const [viewAll, setViewAll] = useState(false);

    const filteredProducts = currentCategory === 'All' ? allProducts : allProducts.filter((item) => item.category === currentCategory);

    const visibleProducts = viewAll ? filteredProducts : filteredProducts.slice(0, 8);

    return (
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
    )

}

export default Items