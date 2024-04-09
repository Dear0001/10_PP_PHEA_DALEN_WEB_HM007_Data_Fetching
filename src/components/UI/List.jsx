import React from 'react'
import Card from './Card';
import { getAllMoviesByGenre, getAllMovies } from '@/Service/movieService';
import Link from "next/link";

async function List({genre}) {

    const movie = await getAllMoviesByGenre(genre);
    console.log("The action",movie.payload)

    return (
        <div className='flex flex-row h-full'>
            {
                movie.payload?.map(item => (
                    // eslint-disable-next-line react/jsx-key
                    <Link href={`/view-movie/${item.movie_id}`}>
                        <Card key={item.movie_id} {...item} />
                    </Link>
                ))
            }
        </div>
    )
}

export default List