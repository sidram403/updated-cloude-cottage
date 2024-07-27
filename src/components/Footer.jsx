import React, { useContext, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";
import { CottageContext } from "../context/cottageSelect";
import { GuestContext } from "../context/guestSelect";

const Footer = () => {
  const [isHoveredCottage, setIsHoveredCottage] = useState(false);
  const { selectedCottage, setSelectedCottage } = useContext(CottageContext);
  const { selectedGuest, setSelectedGuest } = useContext(GuestContext);
  

  const handleCottageClick = (cottageName) => {
    setSelectedCottage(cottageName);
  };

  const handleGuestClick = (guestName) => {
    setSelectedGuest(guestName);
  };

  const resetNavbar = () =>{
    setSelectedCottage("Cottages");
    setSelectedGuest("Guest");
  }

  return (
    <div className="flex flex-col mt-4">
      <div
        className="relative h-[400px] bg-cover bg-center  text-white"
        style={{ backgroundImage: `url('./bg-footer.png')` }}
      >
        <div className="bg-overlay-footer"></div>

        <div className="relative z-10 flex flex-col text-left md:text-center gap-8 md:flex-row md:justify-between md:items-center  w-full h-full px-8 md:px-20 text-white">
          <div className="flex flex-col lg:text-center w-full md:w-[350px]">
            <h1 className="header-family mt-4 text-[20px] md:text-[35px] mb-8 uppercase md:text-left">
              Make Your Stay Count With Us
            </h1>
            <div className="flex items-center gap-2 mb-1 para-family ">
              <CiLocationOn fontSize={"30px"} />
              <p>6720 M-123 Paradise, MI 49768</p>
            </div>
            <div className="flex items-center gap-2 para-family mb-1">
              <MdOutlineEmail fontSize={"30px"} />
              <p>cloudninebooking7@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 para-family ">
              <IoIosCall fontSize={"30px"} />
              <p>906 630 7115</p>
            </div>
          </div>
          <div className="flex flex-row mt-8 md:mt-0 flex-wrap gap-4 md:gap-2 md:flex-nowrap md:flex-col md:text-right para-family">
            <p className="cursor-pointer">
              {" "}
              <Link to={"/"} onClick={resetNavbar}>
                <a href="">Home</a>
              </Link>
            </p>
            <div
              className="relative"
              onMouseEnter={() => setIsHoveredCottage(true)}
              onMouseLeave={() => setIsHoveredCottage(false)}
            >
              <p className="hover:text-[#008080] text-[18px]">
                {selectedCottage}
              </p>
              {isHoveredCottage && (
                <div className="absolute top-4 mt-2 w-28 bg-[#008080] rounded-md shadow-lg flex flex-col text-left z-20">
                  <Link to={"/cottage1"}>
                    <a
                      href=""
                      className="px-2 py-[1px] hover:bg-gray-700"
                      onClick={() => handleCottageClick("Cottage 1")}
                    >
                      Cottage 1
                    </a>
                  </Link>
                  <Link to={"/cottage2"}>
                    <a
                      href=""
                      className="px-2 py-[1px] hover:bg-gray-700"
                      onClick={() => handleCottageClick("Cottage 2")}
                    >
                      Cottage 2
                    </a>
                  </Link>
                  <Link to={"/cottage3"}>
                    <a
                      href=""
                      className="px-2 py-[1px] hover:bg-gray-700"
                      onClick={() => handleCottageClick("Cottage 3")}
                    >
                      Cottage 3
                    </a>
                  </Link>
                  <Link to={"/cottage4"}>
                    <a
                      href=""
                      className="px-2 py-[1px] hover:bg-gray-700"
                      onClick={() => handleCottageClick("Cottage 4")}
                    >
                      Cottage 4
                    </a>
                  </Link>
                </div>
              )}
            </div>
            <p className="cursor-pointer">
              <Link to={"/termsandcondition"}>
                {" "}
                <a href="">Terms & Conditions</a>
              </Link>
            </p>
            <p className="cursor-pointer">
              <Link to={"/privacy"}>
                {" "}
                <a href="">Privacy Policy</a>
              </Link>
            </p>
            <p className="cursor-pointer">
              <Link to={"/contact"}>
                <a href="/contact">Contact Us</a>
              </Link>
            </p>
            <p className="cursor-pointer">
              <Link to={"/thingstodo"} onClick={() => handleGuestClick("Things To Do")}>
                <a href="">Things To Do</a>
              </Link>
            </p>
            <p className="cursor-pointer">
              <Link to={"/faq"} onClick={() => handleGuestClick("Faq")}>
                <a href="">FAQs</a>
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-[#018E92] text-white text-center py-4">
          <p>Copyright@ 2024. All Rights Reserved | Cloud Nine Cottages</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
