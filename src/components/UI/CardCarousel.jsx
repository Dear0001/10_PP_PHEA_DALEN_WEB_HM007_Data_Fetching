import React from 'react';
import List from "@/components/UI/List";

const CardCarousel = async () => {
    // const data = await AllMovies();
    const data = await fetch("https://movie-api-get-only-bmc3.vercel.app/api");
    const result = await data.json();
    const genresSet = new Set();
    result.payload.forEach((movie) => {
        if (movie.genre) {
            genresSet.add(movie.genre);
        }
    });
    console.log(genresSet)

    let genres = Array.from(genresSet);

    return (
        <div className="bg-red-950">

                <div className="flex max-w-[1345px] flex-col mx-auto px-5 py-4">
                    <h1 className="py-5 text-2xl font-bold text-white"> All Movie &gt;</h1>
                    <div className="flex overflow-x-auto hide-scroll-bar gallery">
                        <div className="flex">
                            {genres.map((genre) => (
                                // eslint-disable-next-line react/jsx-key
                                <List genre={genre}/>
                            ))}
                        </div>
                    </div>
                </div>

            {/*<div >*/}
            {genres.map((genre) => (
                // eslint-disable-next-line react/jsx-key
                <div className="flex max-w-[1345px] flex-col mx-auto px-5">
                    <h1 className="py-5 text-2xl font-bold text-white">{genre} Movie &gt;</h1>
                    <div className="flex overflow-x-auto hide-scroll-bar">
                        <div className="flex">
                            <List genre={genre}/>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}
export default CardCarousel;