import React from 'react';
import Image from "next/image";

const Navbar = () => {
    return (
        <nav id="nav" className="absolute z-10 inset-x-0 px-4 flex flex-row justify-between text-white items-center text-center">
            <div className="max-w-[300px]">
                <Image src={'/assets/Legend-Cinema-600x600-removebg-preview.png'}
                       width={130}
                       height={100}
                       alt={'logo'}
                />
            </div>
            <div className="p-4 hidden md:flex flex-row justify-between font-bold">
                <a id="hide-after-click" href=""
                   className="mx-4 text-lg  rounded-2xl p-3 py-2 border-transparent hover:bg-white hover:px-3 hover:py-2 hover:text-black hover:border-indigo-300 transition duration-500">Home</a>
                <a href=""
                   className="mx-4 text-lg rounded-2xl p-3 py-2 border-transparent hover:bg-white hover:px-3 hover:py-2 hover:text-black hover:border-indigo-300 transition duration-500">Popular</a>
                <a href=""
                   className="mx-4 text-lg rounded-2xl p-3 py-2 border-transparent hover:bg-white hover:px-3 hover:py-2 hover:text-black hover:border-indigo-300 transition duration-500">Romance</a>
                <a href=""
                   className="mx-4 text-lg rounded-2xl p-3 py-2 border-transparent hover:bg-white hover:px-3 hover:py-2 hover:text-black hover:border-indigo-300 transition duration-500">Amine</a>
                <div className="flex w-[300px] items-center justify-between bg-white rounded-xl">
                    <input
                        type="search"
                        className="relative m-0 block min-w-0 flex-auto rounded-2xl border-solid py-2.5 border-secondary-500 bg-transparent bg-clip-padding px-3 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;