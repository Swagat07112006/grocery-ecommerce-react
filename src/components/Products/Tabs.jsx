import React, { useState } from 'react'

const Tabs = ({currentCategory, setCurrentCategory}) => {


    const tabCat = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']

    const renderTabs = tabCat.map((tab) => (
        <div key={tab} className={`p-1 pl-4 pr-4 font-semibold cursor-pointer

        ${currentCategory === tab ? 'bg-orange-400 text-white shadow-lg' : 'bg-black/5 hover:bg-orange-400 hover:text-white'}`}
        
        onClick={() => setCurrentCategory(tab)}
        >
            {tab}
        </div>
    ))

    return (
        <div className='flex gap-5 justify-center items-center'>
            {renderTabs}
        </div>
    )
}

export default Tabs