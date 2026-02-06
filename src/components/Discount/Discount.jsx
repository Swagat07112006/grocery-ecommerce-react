import React from 'react'
import Button from '../Buttons/Button'
import fruit_Banner from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <div className='mt-15'>
        <div className='bg-black/10 w-screen h-80 -ml-15 flex'>
            <div className='h-full flex justify-end items-center'>
                <div className='md:h-full md:w-1/2 flex'>
                    <div className='transform -rotate-90'>
                        <h1 className='text-6xl md:text-9xl font-bold text-orange-600'>20%</h1>
                    </div>
                </div>
            </div>

            <div className='flex-2 flex flex-col h-full justify-center items-center gap-5 md:gap-5 md:pl-10 pr-10 md:pr-0'>
                <div className='md:flex-2 w-full pt-5'>
                    <h1 className='text-4xl md:text-6xl font-bold text-zinc-900'>
                        First Order<br/>Discount!
                    </h1>
                </div>
                <div className='flex-1 w-full h-full'>
                    <p className='text-zinc-600'>
                        Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.
                    </p>
                </div>
                <div className='flex-1 w-full h-full'>
                    <Button content="Get a Discount"/>
                </div>
            </div>

            <div className='flex-1 h-full'>
                    <img src={fruit_Banner} alt="Fresh Fruit Banner" className='h-full w-full object-cover object-right'/>
            </div>
        </div>
    </div>
  )
}

export default Discount