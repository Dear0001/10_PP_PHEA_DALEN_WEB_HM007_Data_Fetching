import React from 'react';
import Card from "@/components/UI/Card";
import {getAllMoviesByGenre} from "@/service/movieService";
import Image from "next/image";
import Link from "next/link";

const DramaMovie = async () => {
    const DramaMovie = await getAllMoviesByGenre("Drama");
    return (
        <>
            <div className="flex max-w-[1145px] flex-col mx-auto px-5">
                <h1 className="py-5 font-bold text-white"> Drama Movie &gt;</h1>
                <div className="flex overflow-x-auto pb-5 hide-scroll-bar">
                    <div className="flex">
                        {DramaMovie?.payload?.map((movie) => (
                            <div className="inline-block px-2" key={movie.movie_id}>
                                <Link href={`/view-movie/${movie.movie_id}`}>
                                <div className="w-64 h-60 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <div
                                        className="relative mx-4 mt-4 h-35 h-35 overflow-hidden rounded-t-xl bg-white bg-clip-border shadow-lg">
                                        <Image
                                            width={500}
                                            height={500}
                                            src={movie.image?movie.image : "https://prod-images.viu.com/2521856816/6feda49624fdc12682d3a83feb50a732252503f9"}
                                            alt={movie.movie_title}
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h4 className="truncate leading-6 mb-2 block font-semibold text-blue-gray-900 antialiased">
                                            {movie.movie_title}
                                        </h4>
                                        <p className="truncate-2-lines block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-medium text-xs leading-relaxed text-transparent antialiased">
                                            {movie.description}
                                        </p>
                                    </div>
                                </div>

                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};


export default DramaMovie;