import React from 'react'

const Heading = ({highlight, normal}) => {
  return (
    <div className=' w-fit mx-auto mt-10'>
        <h1 className='text-center md:text-5xl text-4xl font-bold'>
            <span className='text-orange-500'>{highlight}</span> {normal}
        </h1>
        <div className='bg-orange-500 h-1 w-35 ml-auto mt-3'></div>
    </div>
  )
}

export default Heading