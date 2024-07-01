import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaBed } from "react-icons/fa";
import { LiaBathSolid } from "react-icons/lia";
import { BiMaleFemale } from "react-icons/bi";

const CottageCarasoul = ({images, head1, bed, bath, member, para}) => {
  return (
    <>
      <div>
        <h1 className="header-family text-[30px] md:text-[64px] my-[35px] md:my-[45px]">
         {head1}
        </h1>
        <div className="flex my-[20px] md:my-[35px]">
          <span className="flex items-center">
            <FaBed className="w-[73.21px] h-[33px]" /> {bed}
          </span>
          <span className="flex items-center">
            <LiaBathSolid className="w-[73.21px] h-[33px]" /> {bath}
          </span>
          <span className="flex items-center">
            <BiMaleFemale className="w-[73.21px] h-[33px]" /> {member}
          </span>
        </div>
        <p className="para-family text-[16px] md:text-[20px] top-6 my-[20px] md:my-[35px]">
          {para}
        </p>
      </div>
      <ImageGallery
        items={images}
        showThumbnails={true}
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={false}
      />
    </>
  );
};

export default CottageCarasoul;
