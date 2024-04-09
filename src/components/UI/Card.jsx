import React from 'react';
import Image from "next/image";

const Card = ({image, movie_title, description}) => {
    return (
        <div className="no-scrollbar w-64 h-64 max-w-xs overflow-hidden rounded-[10px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out m-2">

                <div className="relative mx-4 mt-4 overflow-hidden rounded bg-white bg-clip-border shadow-lg">
                    <Image
                        width={500}
                        height={500}
                        src={image ? image : "https://prod-images.viu.com/2521856816/6feda49624fdc12682d3a83feb50a732252503f9"}
                        alt="Picture"
                    />
                </div>
                <div className="p-5">
                    <h4 className="truncate text-[20px] leading-6 mb-2 block font-bold text-blue-gray-900 antialiased">
                        {movie_title}
                    </h4>
                    <p className="line-clamp-2 block text-gray-600">
                        {description}
                    </p>
                </div>

        </div>
    );
};

export default Card;
