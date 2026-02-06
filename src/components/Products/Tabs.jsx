import React, { useState } from 'react'

const Tabs = ({currentCategory, setCurrentCategory}) => {
    const tabCat = ['All', 'Fruits', 'Vegetables', 'Dairy','Meat', 'SeaFood']

    const renderTabs = tabCat.map((tab) => (
        <div key={tab} className={`p-1 pl-2 pr-2 md:pl-4 md:pr-4 font-semibold cursor-pointer

        ${currentCategory === tab ? 'bg-orange-400 text-white shadow-lg' : 'bg-black/5 hover:bg-orange-400 hover:text-white'}`}
        
        onClick={() => setCurrentCategory(tab)}
        >
            {tab}
        </div>
    ))

    return (
        <div className='flex flex-wrap gap-5 justify-center items-center md:w-full'>
            {renderTabs}
        </div>
    )
}

export default Tabs