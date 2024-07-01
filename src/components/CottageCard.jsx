import React from "react";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { TbFriends } from "react-icons/tb";
import { useNavigate } from "react-router-dom";


const CottageCard = ({image, title, description, bathroom, bedroom, guest, id}) => {
  const navigate = useNavigate()
  return (
    <div 
      className="relative w-full md:w-[90%] cursor-pointer group" 
      onClick={() => navigate(`${id}`)}
    >
      <img src={image} alt="Cottage1" className="w-full h-[200px] object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-[rgba(122,69,29,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-[30px] font-semibold">View Details</span>
      </div>
      <h1 className="py-2 mt-4 px-2 text-[24px]">{title}</h1>
      <div className="flex items-center gap-4 py-2 px-2 ">
        <div className="flex items-center gap-2">
          <FaBed fontSize={"24px"} />
          <p>{bathroom}</p>
        </div>
        <div className="flex items-center gap-2">
          <GiBathtub fontSize={"24px"} />
          <p>{bedroom}</p>
        </div>
        <div className="flex items-center gap-2">
          <TbFriends fontSize={"24px"} />
          <p>{guest}</p>
        </div>
      </div>
      <p className="text-left py-2 text-[18px]">
        {description}
      </p>
    </div>
  );
};

export default CottageCard;
