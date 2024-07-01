import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const TestimonailCard = ({ rating, text, name }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <BsFillStarFill color="white" fontSize={"30px"} key={index} />
  ));
  return (
    <div className="inline-block px-3">
      <div className="relative max-w-xs overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out">
        <div className="flex text-lg sm:text-xs h-[20rem] w-[19rem] bg-[#C9FFFF] flex-col items-center justify-center p-2 md:p-6 rounded-[30px] shadow-md max-w-xs mx-auto">
          <div className="flex text-xl mb-2 gap-2">{stars}</div>
          <p className="text-center text-gray-700 mb-0 sm:mb-4">{text}</p>
          <h3 className="text-center font-bold text-gray-900">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonailCard;
