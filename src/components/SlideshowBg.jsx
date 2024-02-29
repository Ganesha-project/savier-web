'use client'
import { useEffect, useState } from "react";

export const SlideshowBg = () => {
    const data = [
        {
            alt: 'jelita_asset',
            imgUrl: 'https://images.unsplash.com/photo-1498747946579-bde604cb8f44?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'jelita_asset',
            imgUrl: 'https://images.unsplash.com/photo-1621682372775-533449e550ed?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'jelita_asset',
            imgUrl: 'https://images.unsplash.com/photo-1510332981392-36692ea3a195?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'jelita_asset',
            imgUrl: 'https://images.unsplash.com/photo-1489721775296-bd64cd2c4ddf?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'jelita_asset',
            imgUrl: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'jelita_asset',
            imgUrl: 'https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'jelita_asset',
            imgUrl: 'https://images.unsplash.com/36/xIsiRLngSRWN02yA2BbK_submission-photo-7.jpg?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                <div className="slideshow m-5 rounded-[30px] h-[89lvh]">
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
                                <img
                                    className="w-screen h-screen object-cover brightness-75"
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
