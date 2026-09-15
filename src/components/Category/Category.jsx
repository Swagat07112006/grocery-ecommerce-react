import React from "react";
import Heading from "../Heading/Heading";
import Fruits_and_Veggies from '../../assets/fruits-and-veggies.png'
import Dairy from '../../assets/dairy-and-eggs.png'
import Meat from '../../assets/meat-and-seafood.png'
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import Fruits from "../Fruits/Fruits";
import { motion } from "framer-motion";

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

    const renderCards = CardCategories.map((card, index) => (
        <motion.div
            key={card.id}
            className="flex-1 min-w-[300px] group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            {/* Image */}
            <div className="w-full min-h-[30vh] relative -mb-10 z-10">
                <motion.img
                    src={card.image}
                    alt={card.title}
                    className="absolute bottom-0 w-full drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-4 group-hover:scale-105"
                />
            </div>

            {/* Card */}
            <div className="bg-zinc-100 pt-17 p-8 rounded-2xl mb-15 relative overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:bg-white group-hover:ring-1 group-hover:ring-orange-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h1 className="text-zinc-800 text-3xl font-bold group-hover:text-orange-500 transition-colors">{card.title}</h1>
                <p className="text-zinc-600 mt-3 mb-9 leading-relaxed">{card.details}</p>
                <Link to={`/${card.link}`}>
                    <Button content="See All" className="shadow-md" />
                </Link>
            </div>
        </motion.div>

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
