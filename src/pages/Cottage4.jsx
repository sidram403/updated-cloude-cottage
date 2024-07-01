import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CottageCarasoul from "../components/CottageCarasoul";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import SubscribeSection from "../components/SubscribeSection";
import ContactSection from "../components/ContactSection";
const images = [
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-1.jpg?alt=media&token=ef94259e-eb69-4845-b43c-9b4e5e4891ce",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-1.jpg?alt=media&token=ef94259e-eb69-4845-b43c-9b4e5e4891ce",
  },
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-2.jpg?alt=media&token=c4903d64-364e-4df7-97e4-ec0a2ffec6f3",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-2.jpg?alt=media&token=c4903d64-364e-4df7-97e4-ec0a2ffec6f3",
  },
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-3.jpeg?alt=media&token=fc83920d-0a5e-45d6-ae43-8d8d8002da37",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-3.jpeg?alt=media&token=fc83920d-0a5e-45d6-ae43-8d8d8002da37",
  },
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-9.jpeg?alt=media&token=51121607-631c-4b4e-9ab5-929a44e72bc8",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-9.jpeg?alt=media&token=51121607-631c-4b4e-9ab5-929a44e72bc8",
  },
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-4.jpg?alt=media&token=8b85b02f-f8aa-48f2-a8e8-9a16f651601a",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-4.jpg?alt=media&token=8b85b02f-f8aa-48f2-a8e8-9a16f651601a",
  },
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-5.jpg?alt=media&token=c2fabaa2-065c-44e2-bf4b-6055e1a9d428",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-5.jpg?alt=media&token=c2fabaa2-065c-44e2-bf4b-6055e1a9d428",
  },
 
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-7.jpg?alt=media&token=9111d546-644f-4351-8afe-5dac5d030657",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-7.jpg?alt=media&token=9111d546-644f-4351-8afe-5dac5d030657",
  },
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-8.jpg?alt=media&token=6c99b6e9-a2c5-4c0a-8e26-b59535d903a5",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-8.jpg?alt=media&token=6c99b6e9-a2c5-4c0a-8e26-b59535d903a5",
  },
  {
    original: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-6.JPG?alt=media&token=40486f4d-989b-47ef-84d5-7f399a8c1b1e",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2Fcottage4-6.JPG?alt=media&token=40486f4d-989b-47ef-84d5-7f399a8c1b1e",
  }
];

const Cottage4 = () => {
  const Amenities = [
    {
      icon: "./icons/icon1.png",
      name: "One Queen Bed",
    },
    {
      icon: "./icons/icon2.png",
      name: "Small living room area",
    },
    {
      icon: "./icons/icon3.png",
      name: "Dining Table",
    },
    { icon: "./icons/icon4.png", name: "Smart TV " },
    { icon: "./icons/icon5.png", name: "Wifi" },
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
          head1="COTTAGE 4"
          bed="1"
          bath="1"
          member="2"
          para="This cozy A frame offers a spacious loft bedroom that overlooks the bay for stunning sunrise views and a back porch for sipping your morning coffee to the serenade of waves on the bay."
        />

        <div className="para-family mt-[56px]">
          <h2 className="text-[16px] md:text-[20px] font-semibold leading-8 my-[10px]">
            6720 M-123 Paradise, MI 49768
          </h2>
          <h3 className="text-[16px] md:text-[20px] font-semibold leading-8 my-[10px]">
            New for 2024!
          </h3>
          <p className="text-[16px] md:text-[20px] font-extralight my-[30px]">
            This charming A frame cabin offers the perfect blend of comfort and
            natural beauty – mere steps away from a private beach. Cabin 4
            offers a spacious loft bedroom that overlooks the bay for stunning
            sunrise views and a back porch for sipping your morning coffee to
            the serenade of waves on the bay.
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight my-[30px]">
            This newly remodeled A frame cabin is located steps away from the
            property’s secluded beach on Whitefish Bay. The home features 1
            bedroom and 1 full bathroom. The loft bedroom has a queen bed. The
            home has an open concept living room and dining area, with a fully
            equipped kitchen, a dining table, and a sitting area with a sofa and
            TV. The back porch has outdoor chairs and overlooks the bay.
          </p>
        </div>
        <div className="para-family">
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[6px]">
            Our Price :{" "}
          </h3>
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[6px]">
            $195 per night (May 15 - June 20)
          </h3>
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[6px]">
            $250 per night (June 21 - October 7)
          </h3>
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[6px]">
            $195 per night (October 8 - October 21)
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
          <p className="text-[16px] md:text-[20px] font-extralight mt-4">
            In addition to your initial deposit for booking, a $50 breakage fee
            will apply to cover any accidental damage caused during your stay,
            but will be refunded upon your departure as long as the unit remains
            in good condition. This fee ensures our continued commitment to maintaining high
            standards for all our guests. We appreciate your understanding and
            cooperation in helping us maintain our facilities for everyone's
            enjoyment.
          </p>

          
        </div>
        <div className="para-family">
          <p className="text-[16px] md:text-[20px] font-extralight my-[30px]">
            No pets allowed. No smoking.{" "}
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
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

export default Cottage4;
