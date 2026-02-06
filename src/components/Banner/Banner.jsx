import React from 'react'

const Banner = ({ BannerImage }) => {
  return (
    <div className='bg-zinc-400 h-[50vh] mt-25 flex justify-center items-center'>
        <img src={BannerImage} alt="" className='w-full h-full object-fill'/>
    </div>
  )
}

export default Banner