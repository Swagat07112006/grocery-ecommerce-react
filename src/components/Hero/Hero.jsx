import React from "react";
import Button from "../Buttons/Button";
import Grocery from "../../assets/grocery.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="flex pt-10 md:pt-12 min-h-[80vh] md:flex-row flex-col items-center">
            <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                {/* Hero Content */}
                <div className="max-w-45 text-center p-2 text-sm rounded-full bg-orange-100 text-orange-500 font-semibold border-none shadow-sm shadow-orange-500/20">
                    ✨ Export Best Quality
                </div>

                <p className="font-bold md:text-6xl text-4xl mt-5 leading-tight">
                    Tasty Organic <br /><span className="text-orange-500 relative inline-block">
                        Fruits
                        <motion.span
                            className="absolute -bottom-2 left-0 w-full h-2 bg-orange-200 -z-10 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 1 }}
                        />
                    </span> &{" "}
                    <span className="text-orange-500">Veggies</span> <br />In Your City
                </p>

                <p className="text-zinc-700 md:text-lg text-base mt-4 mb-8 max-w-md">
                    Bred for a high content of beneficial substances. Our products are all
                    fresh and healthy, delivered right to your door.
                </p>

                <a href="#products">
                    <Button content="Shop Now" className="shadow-lg shadow-orange-500/40 text-base py-3 px-6" />
                </a>
            </motion.div>

            {/* COntent Image */}
            <motion.div
                className="flex-1 flex justify-center relative mt-10 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
                <div className="absolute inset-0 bg-orange-400 blur-3xl opacity-20 rounded-full -z-10 w-3/4 h-3/4 m-auto"></div>
                <motion.img
                    src={Grocery}
                    alt="Grocery"
                    className="w-[90%] md:w-[110%] max-w-none h-auto z-10"
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Hero;
