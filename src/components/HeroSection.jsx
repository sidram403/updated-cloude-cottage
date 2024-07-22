// src/HeroSection.js
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_01.JPG?alt=media&token=05da2e6a-889f-45f2-9983-6a7f0c71cb08",
  "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_02.jpg?alt=media&token=92d9fbaa-e56d-474c-853d-1aa4e000f03e",
  "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_03.jpg?alt=media&token=b22ca2a0-1058-40f6-9d86-995b06415cac",
  "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_04.jpg?alt=media&token=584f5c2c-ec65-4a93-b9d9-9090a271f6f3",
  "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_05.jpg?alt=media&token=606ed0a6-0fac-4b46-baae-d4a0638bc0f7",
  "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_06.jpg?alt=media&token=460fdfe8-30c3-4d2c-884d-36624667ce8d",
  "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2Fhero_07.jpg?alt=media&token=7ee2c0c0-1a65-4825-b0c9-141fc8270b3c",

  // Add more image URLs as needed
];

const HeroSection = () => {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={true}
      stopOnHover={false}
      swipeable={false}
      dynamicHeight={true}
      emulateTouch={true}
      showStatus={false}
      showThumbs={false}
      animationHandler="fade"
      swipeAnimationHandler={false}
      showIndicators={false}
      thumbWidth={100}
      selectedItem={1}
      interval={5000}
      transitionTime={700}
      swipeScrollTolerance={5}
    >
      {images.map((eachImage, key) => (
        <div
          key={key}
          className="w-full h-[650px] bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${eachImage})`, backgroundColor: '#000' }}
        >
          <div className="w-full h-full flex flex-col justify-end items-center bg-black bg-opacity-50 pb-20">
            <h1 className="text-white hero-family text-center text-[25px] tracking-[5px] lg:text-[70px] lg:tracking-[20px] font-normal uppercase">
              CLOUD NINE COTTAGES
            </h1>
            <p className="hero-family text-white text-[25px] md:text-[40px]">
              Paradise Michigan
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroSection;
