'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export const SlideshowBg = () => {
    const data = [
        {
            alt: 'savier_asset',
            imgUrl: 'https://images.unsplash.com/photo-1589827577276-65d717348780?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'savier_asset',
            imgUrl: 'https://images.unsplash.com/photo-1600664356348-10686526af4f?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'savier_asset',
            imgUrl: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'savier_asset',
            imgUrl: 'https://images.unsplash.com/photo-1593261893060-7d88ec1681dc?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'savier_asset',
            imgUrl: 'https://images.unsplash.com/photo-1605553378313-22d0dc541393?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'savier_asset',
            imgUrl: 'https://images.unsplash.com/photo-1487337860772-28ff2102fcc6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'savier_asset',
            imgUrl: 'https://images.unsplash.com/photo-1554794470-42d3cd193ecc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];
    const delay = 4000;
    const [index, setIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(prevIndex =>
                prevIndex === data.length - 1 ? 0 : prevIndex + 1
            );
            setIsLoaded(false); // Reset isLoaded state
        }, delay);

        return () => clearTimeout(timer);
    }, [index]);

    useEffect(() => {
        // Set isLoaded to true after the image has been loaded
        setIsLoaded(true);
    }, [index]);

    return (
        <>
            <div className="flex flex-col justify-end h-screen">
                <div className="slideshow lg:m-5 lg:rounded-[30px] lg:h-[89lvh]">
                    <div
                        className="slideshowSlider ransition-transform ease-in-out duration-700"
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                        {data.map((el, i) => (
                            <div
                                key={el.imgUrl}
                                className="slide "
                            // className={`slide ${isLoaded && i === index ? 'fade-in' : ''}`}
                            >
                                <Image
                                    width={1000}
                                    height={1000}
                                    className="w-screen h-screen object-cover brightness-50"
                                    src={el.imgUrl}
                                    alt={el.alt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
};
