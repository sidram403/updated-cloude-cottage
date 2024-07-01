// src/components/ContentWithMap.js

import React from 'react';
// import GoogleMapImg from '../assets/google-map.png'

const ContentWithMap = () => {
    

  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-contain bg-center " style={{ backgroundImage: `url('./map-img.png')` }}>
      <div className="absolute top-0 left-0 w-full text-center p-4 bg-opacity-50 text-white">
        <h1 className="header-family text-black text-[25px] lg:text-[40px] uppercase text-center ">Locate Us</h1>
      </div>
      <div className="flex flex-col text-center items-center justify-center  h-full space-y-8 w-full ">
        <iframe className="md:w-[65%] lg:w-[70%] h-[70%] mt-16" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43857.14168760549!2d-85.06243986576413!3d46.605592799774215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4994b2a1f5804d%3A0x63aef93bad501ee5!2sCloud%20Nine%20Cottages!5e0!3m2!1sen!2sin!4v1718984475469!5m2!1sen!2sin"></iframe>
      </div>
    </div>
  );
};

export default ContentWithMap;
