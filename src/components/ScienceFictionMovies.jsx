import React from 'react';
import Image from "next/image";
import {getAllMoviesByGenre, getMovieById} from "@/service/movieService";
import Link from "next/link";

const ScienceFictionMovie = async () => {
    const ScienceFictionMovie = await getAllMoviesByGenre("Science Fiction");
    return (
        <>
            <div className="flex max-w-[1145px] flex-col mx-auto px-5">
                <h1 className="py-5 font-bold text-white"> Science Fiction Movie &gt;</h1>
                <div className="flex overflow-x-auto pb-5 hide-scroll-bar">
                    <div className="flex">
                        {ScienceFictionMovie?.payload?.map((movie) => (
                            // eslint-disable-next-line react/jsx-key
                            <Link href={`/view-movie/${movie.movie_id}`}>
                                <div className="inline-block px-2" key={movie.movie_id}>
                                <div
                                    className="w-64 h-60 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <div
                                        className="relative mx-4 mt-4 h-35 h-35 overflow-hidden rounded-t-xl bg-white bg-clip-border shadow-lg">
                                        <Image
                                            width={500}
                                            height={500}
                                            src={movie.image}
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
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};


export default ScienceFictionMovie;