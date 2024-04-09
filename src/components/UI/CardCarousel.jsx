import React from 'react';
import AllMovies from "@/components/AllMovies";
import ActionMovies from "@/components/ActionMovies";
import DramaMovies from "@/components/DramaMovies";
import ScienceFictionMovies from "@/components/ScienceFictionMovies";
import HollywoodMovie from "@/components/HollywoodMovie";

const CardCarousel = () => {
    return (
        <div className="bg-red-950">
            <AllMovies/>
            <ActionMovies/>
            <DramaMovies/>
            <ScienceFictionMovies/>
            <HollywoodMovie/>
        </div>
    );
};

export default CardCarousel;