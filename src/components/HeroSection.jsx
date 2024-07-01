// src/HeroSection.js
import React, { useState, useEffect } from 'react';

const images = [
    'https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_01.JPG?alt=media&token=05da2e6a-889f-45f2-9983-6a7f0c71cb08',
    'https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_02.jpg?alt=media&token=92d9fbaa-e56d-474c-853d-1aa4e000f03e',
    'https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_03.jpg?alt=media&token=b22ca2a0-1058-40f6-9d86-995b06415cac',
    'https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_04.jpg?alt=media&token=584f5c2c-ec65-4a93-b9d9-9090a271f6f3',
    'https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_05.jpg?alt=media&token=606ed0a6-0fac-4b46-baae-d4a0638bc0f7',
    'https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_06.jpg?alt=media&token=460fdfe8-30c3-4d2c-884d-36624667ce8d',
    'https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_07.jpg?alt=media&token=7ee2c0c0-1a65-4825-b0c9-141fc8270b3c',

    // Add more image URLs as needed
];

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Preload images
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        const interval = setInterval(() => {
            setLoaded(false);
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Set loaded to true after the image has been changed
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, 400); // Short timeout to allow for image load

        return () => clearTimeout(timeout);
    }, [currentImage]);

    return (
        <div 
            className="w-full h-[650px] md:h-[700px] bg-cover bg-center bg-opacity-transition"
            style={{
                backgroundImage: `url(${images[currentImage]})`,
                opacity: loaded ? 1 : 0
            }}
        >
            <div className="w-full h-full flex flex-col justify-end items-center bg-black bg-opacity-40 pb-20">
                <h1 className="text-white hero-family text-center text-[24px] tracking-[6px] lg:text-[70px] lg:tracking-[20px] font-normal uppercase">CLOUD NINE COTTAGES</h1>
                <p className='hero-family text-white text-[24px] md:text-[40px]'>Paradise, Michigan</p>
            </div>
        </div>
    );
}

export default HeroSection;
