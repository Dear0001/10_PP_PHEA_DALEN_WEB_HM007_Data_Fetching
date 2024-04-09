import React from 'react';
import CardCarousel from "@/components/UI/CardCarousel";

const BackgroundImage = () => {
    return (
        <>
            <div
                className="relative overflow-hidden h-screen bg-cover bg-no-repeat p-12 text-center"
                style={{backgroundImage: `url('/assets/bg-image.webp')`}}>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}}>
                </div>
            </div>
            <CardCarousel/>
        </>
    )
};

export default BackgroundImage;