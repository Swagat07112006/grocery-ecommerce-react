import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Customer1 from '../../assets/customer1.jpg';
import Customer2 from '../../assets/customer2.jpg';
import Customer3 from '../../assets/customer3.jpg';
import Customer4 from '../../assets/customer4.jpg';
import Customer5 from '../../assets/customer5.jpg';
import { FaStar } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Customer = () => {

    const [start, setStart] = useState(0);
    const [overFlow, setOverFlow] = useState(false);

    const nextCustomer = () => {
        start > Customer.length ? setOverFlow(true) : setOverFlow(false);
        !overFlow ? setStart(start+3) : null;
    }

    const previousCustomer = () => {
        start > 2 ? setStart(start-3) : null
        setOverFlow(false)
    }

    const Customers = [
        {
            id: 1,
            name: 'Emily Johnson',
            image: Customer1,
            occupation: 'Food Blogger',
            stars: 5,
            feedback: 'GrOcify is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
        },
        {
            id: 2,
            name: "David Smith",
            image: Customer2,
            occupation: "Chef",
            stars: 4,
            feedback: "As a chef, quality ingredients are everything. GrOcify consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
        },
        {
            id: 3,
            name: "Alya Zahra",
            image: Customer3,
            occupation: "Model",
            stars: 5,
            feedback: "Shopping online with GrOcify has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
        },
        {
            id: 4,
            name: "Carlos Mendes",
            image: Customer4,
            occupation: "Fitness Coach",
            stars: 4,
            feedback: "I appreciate the selection of healthy foods and clean-label products. GrOcify has been a great partner in my wellness journey!",
        },
        {
            id: 5,
            name: "Natcha Phongchai",
            image: Customer5,
            occupation: "Nutritionist",
            stars: 5,
            feedback: "GrOcify offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
        },
        {
            id: 6,
            name: "Scarlette Johnson",
            image: Customer1,
            occupation: "Actress",
            stars: 4,
            feedback: "GrOcify offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
        },
        {
            id: 7,
            name: "Alexa Bliss",
            image: Customer3,
            occupation: "Wrestler",
            stars: 2,
            feedback: "GrOcify offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
        }
    ]

    const renderCards = (card) => (
        <div className='bg-black/10 w-110 flex flex-col p-8 rounded-xl gap-10'>
            <div className='flex gap-5'>
                <div className='w-15 h-15 border-3 border-orange-500 rounded-full flex justify-center items-center'>
                    <img src={card.image} alt={`Customer ${card.id}`} className='rounded-full p-1'/>
                </div>

                <div className='flex flex-col justify-center gap-1'>
                    <h1 className='font-bold'>{card.name}</h1>
                    <div className='text-zinc-500 w-full'>{card.occupation}</div>
                    <div className='flex gap-1'>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar
                                key={i}
                                className={`text-lg ${i < card.stars
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-yellow-200'
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </div>

            <div>
                <p className='text-zinc-500'>
                    {card.feedback}
                </p>
            </div>
        </div>
    )
    return (
        <div className='flex flex-col items-center gap-10 md:mt-0 mt-120'>
            <div>
                <Heading highlight="Customers" normal="Saying" />
            </div>
            
            <div className='w-full flex justify-end'>
                <div className='flex gap-5 text-2xl'>
                    <button type="button" className='bg-black/15 cursor-pointer p-2 hover:bg-orange-500 hover:text-white rounded-lg' onClick={previousCustomer}>
                        <FaAngleLeft />
                    </button>
                    <button type="button" className='bg-black/15 cursor-pointer p-2 hover:bg-orange-500 hover:text-white rounded-lg' onClick={nextCustomer}>
                        <FaAngleRight />
                    </button>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <div className='flex md:flex-row flex-col gap-4'>
                        {Customers.slice(start,start+3).map(renderCards)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Customer