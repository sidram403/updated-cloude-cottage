// src/Header.js
import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png"; // Make sure to replace with your actual logo path
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { CottageContext } from "../context/cottageSelect";
import { GuestContext } from "../context/guestSelect";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoveredCottage, setIsHoveredCottage] = useState(false);
  const [isHoveredGuest, setIsHoveredGuest] = useState(false);
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
    <header
      className={`  w-full flex justify-between items-center py-4 px-12 md:px-4 header-bg absolute top-0 left-0 right-0 z-50`}
    >
      <div>
        <Link to={"/"} onClick={resetNavbar}>
          <img src={Logo} alt="Logo" className="h-30 w-20" />
        </Link>
      </div>
      <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <MdClose fontSize={"50px"} color="white" />
        ) : (
          <MdOutlineMenu fontSize={"50px"} color="white" />
        )}
      </div>
      <nav
        className={`${
          isMenuOpen ? "flex header-bg md:bg-transparent" : "hidden"
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 text-white absolute md:static top-28 left-0  right-0 md:top-auto md:left-auto md:right-auto  md:bg-none p-4 md:p-0 z-10 md:z-auto`}
      >
        <Link to={"/"} onClick={resetNavbar}>
          <a href="" className="hover:text-[#008080] text-[24px]">
            Home
          </a>
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setIsHoveredCottage(true)}
          onMouseLeave={() => setIsHoveredCottage(false)}
        >
          <p className="hover:text-[#008080] text-[24px]">{selectedCottage}</p>
          {isHoveredCottage && (
            <div className="absolute top-6 mt-2 w-28 bg-[#008080] rounded-md shadow-lg flex flex-col text-left z-20">
              <Link to={"/cottage1"}>
                <a
                  href=""
                  className="px-2 py-[1px] hover:bg-gray-700 text-[16px]"
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
        <div
          className="relative"
          onMouseEnter={() => setIsHoveredGuest(true)}
          onMouseLeave={() => setIsHoveredGuest(false)}
        >
          <p className="hover:text-[#008080] text-[24px]">{selectedGuest}</p>
          {isHoveredGuest && (
            <div className="absolute top-6 mt-2 w-48 bg-[#008080] rounded-md shadow-lg flex flex-col text-left z-20">
              <Link to={"/thingstodo"} onClick={() => handleGuestClick("Things To Do")}>
                <a href="" className="px-2 py-[1px] hover:bg-gray-700">
                  Things To Do
                </a>
              </Link>
              <Link to={"/faq"} onClick={() => handleGuestClick("Faq")}>
                <a href="" className="px-2 py-[1px] hover:bg-gray-700">
                  FAQs
                </a>
              </Link>
            </div>
          )}
        </div>
        <Link to={"/contact"}>
          <a
            href=""
            className="py-2 px-10 border text-[24px] border-white rounded-full"
          >
            Contact Us
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
