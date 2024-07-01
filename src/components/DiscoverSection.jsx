import React from "react";

const DiscoverSection = ({ img, title }) => {
  return (
    <div className="relative w-full md:w-[90%] lg:w-[100%] p-2">
      <div className="relative overflow-hidden ">
        <img
          src={img}
          alt={`discover-img`}
          className="w-full h-[400px] md:h-96 lg:h-[450px] object-cover"
        />
        <div className="absolute bottom-6 w-full bg-black bg-opacity-70 text-white p-2">
          <p className=" btn-family text-[24px] text-center font-bold uppercase">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
