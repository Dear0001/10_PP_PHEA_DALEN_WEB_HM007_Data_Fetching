import React from 'react';
import Image from "next/image";
import Bg from "../../../public/assets/bg-image.webp";

const Card = () => {
    return (
        <div className="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="relative mx-4 mt-4 h-35 h-35 overflow-hidden rounded-t-xl bg-white bg-clip-border shadow-lg">
                <Image
                    src={Bg}
                    alt="Picture"
                />
            </div>
            <div className="p-5">
                <h4 className="truncate leading-6 mb-2 block font-semibold text-blue-gray-900 antialiased">
                    True Beauty   True Beauty  True Beauty  True Beauty  True Beauty  True Beauty  True Beauty  True Beauty
                </h4>
                <p className="truncate-2-lines block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-medium text-xs leading-relaxed text-transparent antialiased">
                    When the menace known as the Joker wreaks havoc and chaos o lorem10
                </p>
            </div>
        </div>
    );
};

export default Card;
