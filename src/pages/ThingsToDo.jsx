import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HorizontalCard from "../components/HorizontalCard";

const cardsData = [
  {
    imageSrc: "./thingstodo/lighthouses.png",
    title: "Lighthouses",
    items: [
      {
        description: "Whitefish Point Lighthouse, 12.9 miles from cottage",
        link: "https://shipwreckmuseum.com/visit/whitefish-point-light/",
      },
      {
        description: "Crisp Point Lighthouse, 29 miles from Cloud Nine",
        link: "https://www.crisppointlighthouse.org/crisp2.html",
      },
      {
        description: "Point Iroquois Lighthouse, 35 miles from Cloud Nine",
        link: "https://www.fs.usda.gov/recarea/hiawatha/recarea/?recid=13342",
      },
    ],
  },
  {
    imageSrc: "./thingstodo/Rectangle15.png",
    title: "Beaches, Nature Parks, & Wildlife",
    items: [
      {
        description: "Whitefish Point Beach, 13 miles from Cloud Nine",
        link: "https://lakesuperiorcircletour.info/location/whitefish-point-beach/",
      },
      {
        description: "Vermilion Point Nature Preserve, 15 miles from Cloud Nine ",
        link: "https://landtrust.org/explore/vermilion-point-nature-preserve/",
      },
      {
        description: "W. Curley Lewish Highway, 10 miles from Cloud Nine",
        link: "https://www.michiganwatertrails.org/location.asp?ait=av&aid=4928",
      },
      {
        description: "Big Pine Picnic Area, 28 miles from Cloud Nine",
        link: "https://www.fs.usda.gov/recarea/hiawatha/recreation/beaches-dunes/recarea/?recid=18191&actid=19",
      },
      {
        description: "Oswald’s Bear Ranch, 39 miles from Cloud Nine",
        link: "https://www.oswaldsbearranch.com/",
      },
      {
        description: "Birdwatching at Whitefish Point Bird Observatory, 13 miles from Cloud Nine ",
        link: "https://wpbo.org/",
      },
    ],
  },
  {
    imageSrc: "./thingstodo/reareation.png",
    title: "Recreation",
    items: [
      {
        description: "Hiking - Naomikong Point Site,  2.2 miles from Cloud Nine ",
        link: "https://www.alltrails.com/trail/us/michigan/naomikong-point-blue-trail",
      },
      {
        description: "Mountain Biking - Paradise Pathway 2.2 miles from Cloud Nine",
        link: "https://explorem123.com/mountain-biking-trails/",
      },
      {
        description: "Fishing - Pendills Creek National Fish Hatchery, 25 miles from Cloud Nine ",
        link: "https://www.fws.gov/fish-hatchery/pendills-creek",
      },
      {
        description: "Scuba Diving -  Whitefish Point Underwater Preserve | 12.3 miles from Cloud Nine ",
        link: "https://www.michiganpreserves.org/whitefish-point-underwater-preserve/",
      },
    ],
  },
  {
    imageSrc: "./thingstodo/historicsites.png",
    title: "Historic Sites & Museums",
    items: [
      {
        description: "Great Lakes Shipwreck Museum, 13 miles from Cloud Nine ",
        link: "https://shipwreckmuseum.com/",
      },
      {
        description: "Mission Hill Cemetery Scenic Overlook, 34 miles from Cloud Nine ",
        link: "https://lakesuperiorcircletour.info/location/mission-hill-trail/ ",
      },
      
    ],
  },
  {
    imageSrc: "./thingstodo/fooddining.png",
    title: "Food, Dining, & Festivals ",
    items: [
      {
        description: "Brown Fisheries Fish House, 2 miles from Cloud Nine ",
        link: "https://www.tripadvisor.com/Restaurant_Review-g42575-d1845587-Reviews-Brown_Fisheries_Fish_House-Paradise_Upper_Peninsula_Michigan.html",
      },
      {
        description: "Pickles Bar and Grill, 40 miles from Cloud Nine ",
        link: "https://www.tripadvisor.com/Restaurant_Review-g42017-d7159385-Reviews-Pickle_s_Bar_Grill-Brimley_Upper_Peninsula_Michigan.html",
      },
      {
        description: "Sugar Daddy’s Bakery, 45 miles from Cloud Nine ",
        link: "https://www.uptravel.com/listing/sugar-daddy-bakery-sault-ste-marie/5598/ ",
      },
      {
        description: "Dancing Crane Coffee House, 38 miles from Cloud Nine ",
        link: "https://www.uptravel.com/listing/dancing-crane-coffee-house/992/",
      },
      {
        description: "Wild Blueberry Festival, 0.5 miles from Cloud Nine ",
        link: " https://wildblueberryfestival.org/ ",
      },
    ],
  },
];

const ThingsToDo = () => {
  return (
    <div>
      <Header />
      <div
        className="w-full h-[400px] bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(./pagebackground.png)` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-white header-family text-center text-[45px] tracking-[10px] lg:text-[70px] font-normal uppercase">
            THINGS TO DO
          </h1>
        </div>
      </div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12 ">
            <h2 className="sm:text-3xl header-family text-2xl font-medium title-font mb-4 text-[#018E92] uppercase">
              Must See Attractions Near Cloud Nine Cottages
            </h2>
            <p className="text-gray-700 mt-1 mx-14">
              Discover the Upper Peninsula's unspoiled beauty, with its rugged
              landscapes, pristine lakes, and charming small towns offering
              endless opportunities for outdoor adventures and cultural
              experiences. Immerse yourself in the natural wonders of Paradise
              and explore the northeastern region of Michigan’s Upper Peninsula,
              where you can experience the breathtaking beauty of Tahquamenon
              Falls, stroll along the scenic shores of Lake Superior, and
              venture into the pristine wilderness of the Upper Peninsula.
            </p>
          </div>
          {cardsData.map((card, index) => (
            <HorizontalCard key={index} {...card} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ThingsToDo;
