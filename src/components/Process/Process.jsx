import React from 'react'
import Heading from '../Heading/Heading'
import { BsTruck } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { MdOutlineFactory } from "react-icons/md";
import { PiPlant } from "react-icons/pi";

const Process = () => {

    const cardValues = [
        {
            id: 1,
            title: "Sourcing",
            desc: "It is a long estaablished fact that a reader",
            icon: <PiPlant />
        },
        {
            id: 2,
            title: "Manufacturing",
            desc: "It is a long estaablished fact that a reader",
            icon: <MdOutlineFactory />
        },
        {
            id: 3,
            title: "Quality Control",
            desc: "It is a long estaablished fact that a reader",
            icon: <SlBadge />
        },
        {
            id: 4,
            title: "Logistics",
            desc: "It is a long estaablished fact that a reader",
            icon: <BsTruck />
        },
    ]

    const renderCards = (card) => (
        <div className='flex gap-3 justify-center items-center mt-3 md:mb-0 mb-4' key={card.id}>
            <div className='md:text-4xl text-3xl rounded-full flex justify-center items-center text-white flex-1 h-12 md:h-15'>
                <div className='w-fit h-fit p-2 rounded-full flex justify-center items-center bg-orange-400'>
                    {card.icon}
                </div>
            </div>
            <div className='flex flex-col flex-4 gap-2'>
                <div className='font-bold text-xl'>
                    {card.title}
                </div>
                <div className='text-zinc-500'>
                    {card.desc}
                </div>
            </div>
        </div>
    )
    return (
        <div>
            <div className=''>
                <div className='w-fit mb-5'>
                    <Heading highlight="Our" normal="Process" />
                </div>

                <div className='md:flex gap-5 w-full h-100'>
                    <div className='w-full md:h-full flex flex-col justify-end'>
                        <div className='h-1/2 w-full flex flex-col justify-center items-center'>
                            {/* Numbers */}
                            <div className='border-2 border-dashed h-17.5 w-17.5 rounded-full flex justify-center items-center'>
                                <div className='border-4 h-14 w-14 rounded-full flex justify-center items-center'>
                                    <h1 className='text-3xl font-bold'>1</h1>
                                </div>
                            </div>

                            {/* Card */}
                            <div className='flex justify-center items-center p-3'>
                                {renderCards(cardValues[0])}
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:h-full flex flex-col'>
                        <div className='h-1/2 w-full flex flex-col justify-center items-center'>
                            {/* Numbers */}
                            <div className='border-2 border-dashed h-17.5 w-17.5 rounded-full flex justify-center items-center'>
                                <div className='border-4 h-14 w-14 rounded-full flex justify-center items-center'>
                                    <h1 className='text-3xl font-bold'>2</h1>
                                </div>
                            </div>

                            {/* Card */}
                            <div className='p-3'>
                                {renderCards(cardValues[1])}
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:h-full flex flex-col justify-end'>
                        <div className='h-1/2 w-full flex flex-col justify-center items-center'>
                            {/* Numbers */}
                            <div className='border-2 border-dashed h-17.5 w-17.5 rounded-full flex justify-center items-center'>
                                <div className='border-4 h-14 w-14 rounded-full flex justify-center items-center'>
                                    <h1 className='text-3xl font-bold'>3</h1>
                                </div>
                            </div>

                            {/* Card */}
                            <div className='p-3'>
                                {renderCards(cardValues[2])}
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:h-full flex flex-col'>
                        <div className='h-1/2 w-full flex flex-col justify-center items-center'>
                            {/* Numbers */}
                            <div className='border-2 border-dashed h-17.5 w-17.5 rounded-full flex justify-center items-center'>
                                <div className='border-4 h-14 w-14 rounded-full flex justify-center items-center'>
                                    <h1 className='text-3xl font-bold'>4</h1>
                                </div>
                            </div>

                            {/* Card */}
                            <div className='p-3'>
                                {renderCards(cardValues[3])}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process