import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CottageCarasoul from "../components/CottageCarasoul";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import SubscribeSection from "../components/SubscribeSection";
import ContactSection from "../components/ContactSection";
const images = [
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2FIMG_6324.jpg?alt=media&token=d1c5cf10-c1f0-4d31-834b-cf921ddff4b5",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2FIMG_6324.jpg?alt=media&token=d1c5cf10-c1f0-4d31-834b-cf921ddff4b5",
  },
  
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2FIMG_8597.jpg?alt=media&token=5c98648a-55bb-4972-b982-c74ef101ca31",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2FIMG_8597.jpg?alt=media&token=5c98648a-55bb-4972-b982-c74ef101ca31",
  },
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2FIMG_8598.jpg?alt=media&token=eee09107-e7a5-4d90-a55e-306fa2dc797f",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2FIMG_8598.jpg?alt=media&token=eee09107-e7a5-4d90-a55e-306fa2dc797f",
  },
 
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2Fcottage3-3.jpg?alt=media&token=556ea88c-b37c-4cbc-9a03-0984e99eb985",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2Fcottage3-3.jpg?alt=media&token=556ea88c-b37c-4cbc-9a03-0984e99eb985",
  },
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2Fcottage3-2.jpg?alt=media&token=3b34d778-f03d-4219-b7e1-1e08e54f0591",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2Fcottage3-2.jpg?alt=media&token=3b34d778-f03d-4219-b7e1-1e08e54f0591",
  },
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2Fcottage3-5.jpg?alt=media&token=87f2214e-cf8a-46ba-8e59-b23e1836a6d6",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2Fcottage3-5.jpg?alt=media&token=87f2214e-cf8a-46ba-8e59-b23e1836a6d6",
  },
 
 
  
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2Fcottage3-9.jpg?alt=media&token=c7b22b4b-057f-4592-861d-8475edbe7afe",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2Fcottage3-9.jpg?alt=media&token=c7b22b4b-057f-4592-861d-8475edbe7afe",
  },
];

const Cottage3 = () => {
  const Amenities = [
    {
      icon: "./icons/icon1.png",
      name: "One King Bed",
    },
    {
      icon: "./icons/icon2.png",
      name: "Small living room area",
    },
    {
      icon: "./icons/icon3.png",
      name: "Dining Table",
    },
    { icon: "./icons/icon331.png", name: "Stone Fire Place" },
    { icon: "./icons/icon4.png", name: "Smart TV " },
    {
      icon: "./icons/icon6.png",
      name: "Stove/Oven ",
    },
    {
      icon: "./icons/icon7.png",
      name: "Refrigerator",
    },
    { icon: "./icons/icon8.png", name: "Microwave" },
    {
      icon: "./icons/icon9.png",
      name: "Coffee maker",
    },
    { icon: "./icons/icon10.png", name: "Toaster" },
    {
      icon: "./icons/icon11.png",
      name: "Pots & Pans",
    },
    {
      icon: "./icons/icon12.png",
      name: "Silver ware",
    },
    {
      icon: "./icons/icon13.png",
      name: "Salt & Pepper",
    },
    {
      icon: "./icons/icon14.png",
      name: "Outdoor grill",
    },
    { icon: "./icons/icon15.png", name: "Hot water" },
    { icon: "./icons/icon16.png", name: "Showers " },
    { icon: "./icons/icon17.png", name: "Towel" },
    { icon: "./icons/icon18.png", name: "Shampoo" },
    { icon: "./icons/icon19.png", name: "Soap" },
    {
      icon: "./icons/icon20.png",
      name: "Toilet paper",
    },
    {
      icon: "./icons/icon21.png",
      name: "Extra blanket/pillows ",
    },
    {
      icon: "./icons/icon22.png",
      name: "Ceiling fan",
    },
    { icon: "./icons/icon23.png", name: "Hangers" },
    {
      icon: "./icons/icon24.png",
      name: "Vacumn Cleaner",
    },
    {
      icon: "./icons/icon25.png",
      name: "Fire extinguisher",
    },
    {
      icon: "./icons/icon26.png",
      name: "Fire alarm",
    },
    { icon: "./icons/icon27.png", name: "CO2 alarm" },
    { icon: "./icons/icon28.png", name: "No pets" },
    { icon: "./icons/icon29.png", name: "No AC" },
    {
      icon: "./icons/icon30.png",
      name: "Smoke free",
    },
    {
      icon: "./icons/icon31.png",
      name: "No Hairdryer",
    },
    { icon: "./icons/icon5.png", name: "Wifi" },
  ];
  const [showMore, setShowMore] = useState(false);
  const [itemsToShowCount, setItemsToShowCount] = useState(10);

  useEffect(() => {
    const updateItemsToShowCount = () => {
      if (window.innerWidth >= 1024) {
        // Assuming 1024px as the breakpoint for PCs
        setItemsToShowCount(10);
      } else {
        setItemsToShowCount(9);
      }
    };

    updateItemsToShowCount(); // Set the initial value
    window.addEventListener("resize", updateItemsToShowCount);

    return () => {
      window.removeEventListener("resize", updateItemsToShowCount);
    };
  }, []);
  const itemsToShow = showMore
    ? Amenities
    : Amenities.slice(0, itemsToShowCount);
  return (
    <div>
      <Header />
      <div className="py-32 px-8 md:px-16 ">
        <CottageCarasoul
          images={images}
          head1="Cottage 3"
          bed="1"
          bath="1"
          member="2"
          para="This one-bedroom haven, just steps away from the sandy shorelines of stunning Whitefish Bay on Lake Superior, is ideal for a romantic getaway or a peaceful solo escape."
        />

        <div className="para-family mt-[56px]">
          <h2 className="text-[16px] md:text-[20px] font-semibold leading-8 my-[10px]">
            6720 M-123 Paradise, MI 49768
          </h2>
          <h3 className="text-[16px] md:text-[20px] font-semibold leading-8 my-[10px]">
            New for 2024!
          </h3>
          <p className="text-[16px] md:text-[20px] font-extralight my-[30px]">
            This one-bedroom haven, just steps away from the sandy shorelines of
            stunning Whitefish Bay on Lake Superior, features a beautiful stone
            fireplace for cozying up with a good book or to reinspire the
            artist/writer in you! Cabin 3 is ideal for a romantic getaway or a
            peaceful solo retreat. Cabin 3 has one bedroom with a King size bed
            and stunning lake views. Listen to the peaceful sound of the waves
            roll in on the shoreline as you doze off – just feet from the
            stunning shoreline of the bay.
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight my-[30px]">
            Cloud Nine Cottages is located in Paradise, Michigan along Whitefish
            Bay. The property offers unmatched views of the stunning Lake
            Superior and is surrounded by some of the best attractions in the
            Upper Peninsula. Tahquamenon Falls State Park is 12.9 miles to the
            west and Whitefish Point Lighthouse is 12.9 to the north. Whether
            you seek serenity and tranquility on site at Cloud Nine for a long
            weekend or have a full itinerary planned to explore the area, there
            is simply so much to offer! 
          </p>
        </div>
        <div className="para-family">
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[6px]">
            Our Price :{" "} All bookings require 3 night minimum
          </h3>
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[6px]">
            $140 per night (May 15 - June 20)
          </h3>
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[6px]">
            $160 per night (June 21 - October 7)
          </h3>
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[6px]">
            $140 per night (October 8 - October 21)
          </h3>
          <p className="text-[16px] md:text-[20px] font-extralight mt-4">
            We accept payment via cash or check, credit/debit card (credit card
            payment is subjected to 3.6% processing fee)
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            Please note: to secure your visit, a deposit of one night’s stay
            will be required upon booking. If you’re paying deposit by
            cash/check, please send to:
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            P.O. Box 62{" "}
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            Paradise, MI 49768
          </p>
          

         
        </div>
        <div className="para-family">
          <p className="text-[16px] md:text-[20px] font-extralight my-[30px]">
            No pets allowed. No smoking.{" "}
          </p>
        </div>
        <div className="para-family mt-[56px] ">
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[25px]">
            Amenities
          </h3>
          <div className="grid grid-cols-3  md:w-auto lg:grid-cols-5 gap-4 lg:w-[1097px]">
            {itemsToShow.map((amenity, index) => (
              <span
                key={index}
                className="w-[102px] md:w-[205px] h-[85px] flex flex-col justify-center items-center text-[10px] md:text-[20px]"
              >
                <img src={amenity.icon} href={amenity.name} />
                {amenity.name}
              </span>
            ))}
          </div>
          <h6>
            <button
              className="btn flex ml-[5%] mt-[4%] justify-center items-center font-bold bg-[#F6BE2E] btn-family text-[30px] hover:bg-[#F6BE2e] text-white py-2 px-8 rounded"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
              {showMore ? (
                <IoIosArrowDropup className="ml-4 " />
              ) : (
                <IoIosArrowDropdown className="ml-4" />
              )}
            </button>
          </h6>
        </div>
        <ContactSection />
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Cottage3;
