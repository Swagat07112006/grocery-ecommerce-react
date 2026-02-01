import React from "react";
import Button from "../Buttons/Button";
import Grocery from "../../assets/grocery.png";
const Hero = () => {
    return (
        <div className="flex mt-20 md:pt-20 pt-15 min-h-screen md:flex-row flex-col">
            <div className="flex-1">
                {/* Hero Content */}
                <div className="max-w-45 text-center p-1 rounded-full bg-orange-100 text-orange-500 font-semibold border-none">
                    Export Best Quality...
                </div>

                <p className="font-bold md:text-7xl/20 text-5xl/14 mt-5">
                    Tasty Organic <br /><span className="text-orange-500">Fruits</span> &{" "}
                    <span className="text-orange-500">Veggies</span> <br />In Your City
                </p>

                <p className="text-zinc-700 md:text-xl/relaxed text-lg/relaxed mt-5 mb-10">
                    Bred for a high content of beneficial substances.Our products are <br />all
                    fresh and healthy.
                </p>

                <Button content="Shop Now" />
            </div>

            {/* COntent Image */}
            <div className="flex-1">
                <img src={Grocery} alt="" className="w-170 h-130"/>
            </div>
        </div>
    );
};

export default Hero;
