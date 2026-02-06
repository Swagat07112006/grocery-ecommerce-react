import React from "react";
import Heading from "../Heading/Heading";
import Fruits_and_Veggies from '../../assets/fruits-and-veggies.png'
import Dairy from '../../assets/dairy-and-eggs.png'
import Meat from '../../assets/meat-and-seafood.png'
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import Fruits from "../Fruits/Fruits";

const Category = () => {

    const CardCategories = [
        {
            id: 1,
            image: Fruits_and_Veggies,
            title: "Fruits & Veggies",
            details: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
            link: "fruits"
        },
        {
            id: 2,
            image: Dairy,
            title: "Dairy & Eggs",
            details: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
            link: "dairy"
        },
        {
            id: 3,
            image: Meat,
            title: 'Meat & SeaFood',
            details: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
            link: "meat"
        }
    ]

    const renderCards = CardCategories.map((card) => (
        <div key={card.id} className="">
            {/* Image */}
            <div className="w-full min-h-[30vh] relative -mb-10">
                <img src={card.image} alt={card.title} className="absolute bottom-0"/>
            </div>

            {/* Card */}
            <div className="bg-zinc-100 pt-17 p-8 rounded-xl mb-15">
                <h1 className="text-zinc-800 text-3xl font-bold">{card.title}</h1>
                <p className="text-zinc-600 mt-3 mb-9">{card.details}</p>
                <Link to={`/${card.link}`}>
                    <Button content="See All" />
                </Link>
            </div>
        </div>

    ))

    return (
        <div>
            {/* Shop by Category */}
            <Heading highlight="Shop" normal="by Category" />

            {/* Card Parent Element */}
            <div className="flex gap-10 mt-15 md:mt-0 lg:mt-15 flex-wrap md:flex-nowrap">
                {renderCards}
            </div>

        </div>
    );
};

export default Category;
