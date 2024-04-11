import { viewDetails } from '@/Service/movieService'
import Image from "next/image";
import { FaStar } from "react-icons/fa";
async function Page({params: {slug}}) {
    console.log(slug)
    const {payload} = await viewDetails(slug);
    console.log(payload.posted_at,"payload")
    const releaseDate = new Date(payload.posted_at);



    const formateDate = releaseDate.toLocaleDateString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    const formateTime = releaseDate.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
    });

    const amAndPm = releaseDate.getHours() >= 12 ? 'PM' : 'AM';


    const roundedRating = Math.round(payload.rating);
    console.log(roundedRating,"hello")
    const numberOfStars = Math.max(0, roundedRating);
    console.log(numberOfStars,"welcome")
    const starsArray =  Array(numberOfStars).fill(
        <FaStar className='text-yellow-500' />
    );

    return (
        <div className='w-full h-screen px-16 text-white bg-red-950 py-28'>

            <div className='flex w-full h-full'>
                <div className='relative w-8/12 h-full'>
                    <Image
                        src={payload.image? payload.image :"https://prod-images.viu.com/2521856816/6feda49624fdc12682d3a83feb50a732252503f9" }
                            fill
                            className='object-cover'
                             alt={'hello'}/>
                            </div>
                            <div className='w-4/12 h-full px-10 py-0'>
                            <h1 className='text-2xl font-bold text-white'>{payload.director}</h1>
                <p className={'text-sm my-2 text-gray-400'}>{payload.runtime} min</p>
                <p className={'text-[15px mb-2 text-gray-300'}>{payload.genre}</p>
                <p className='flex'>
                    {starsArray.map((star, index) => (
                        <span key={index}>{star}</span>
                    ))}
                </p>
                <p className='mt-6 text-xl font-semibold'>{payload.movie_title}  ( {payload.released_year} )</p>
                <p className=' line-clamp-6 leading-relaxed'>
                    {payload.description}
                </p>
                <p className='mt-10 text-sm'>
                    {formateDate}, {formateTime} {amAndPm}
                </p>
            </div>
        </div>
</div>
);
}

export default Page;