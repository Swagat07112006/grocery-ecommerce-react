import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";
import basketOfFruits from '../../assets/basket-full-vegetables.png';

const Values = () => {

    const values = [
        [
            {
                id: 1,
                title: "Trust",
                para: "It is a long established fact that a reader will be distracted by the reader",
                icon: <FaHeart className='text-white' />
            },
            {
                id: 2,
                title: "Food Safety",
                para: "It is a long established fact that a reader will be distracted by the reader",
                icon: <FaLeaf className='text-white' />
            }
        ],
        basketOfFruits,
        [
            {
                id: 3,
                title: "Food Safety",
                para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                icon: <FaShieldAlt className='text-white' />
            },
            {
                id: 4,
                title: "100% Organic",
                para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                icon: <PiPlantFill className='text-white' />
            }
        ]
    ]

    const renderItems = (item) => (
        <div className='flex justify-center items-center gap-5'>
            {/* Trust Content */}
            <div className='flex flex-col'>
                <h1 className='font-bold text-3xl'>{item.title}</h1>
                <p className='text-zinc-500'>{item.para}</p>
            </div>
            {/* Heart icon */}
            <div>
                <div className='bg-amber-600 rounded-full w-13 h-13 flex justify-center items-center text-[25px] text-center'>
                    {item.icon}
                </div>
            </div>
        </div>
    )

    return (
        <div className='flex flex-col'>
            {/* Heading of Our Values */}
            <div className=''>
                <Heading highlight="Our" normal="Values" />
            </div>

            {/* Content Part */}
            <div className='flex justify-center items-center h-170 gap-10 -mt-10'>

                {/* For value[0] */}
                <div className='flex flex-col justify-around h-full'>
                    {values[0].map((obj) => (
                        renderItems(obj)
                    ))}
                </div>

                {/* For value[1] */}
                <div className='flex flex-col object-cover h-screen justify-center items-center'>
                    <img src={values[1]} alt="Basket of fruits" className='w-150 h-150 object-contain'/>
                </div>


                {/* For value[2] */}
                <div className='flex flex-col h-full justify-around'>
                    {values[2].map((obj) => (
                        renderItems(obj)
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Values