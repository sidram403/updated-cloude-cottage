import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Cottage1 from "../assets/cottage_01.png";
import Cottage2 from "../assets/cottage_02.png";
import Cottage3 from "../assets/cottage_03.png";
import Cottage4 from "../assets/cottage_04.png";
import DiscoverImg1 from "../assets/discover-bg-01.png";
import DiscoverImg2 from "../assets/discover-bg-02.png";
import DiscoverImg3 from "../assets/discover-bg-03.png";
import DiscoverImg4 from "../assets/discover-bg-04.png";
import DiscoverImg5 from "../assets/discover-bg-05.png";
import DiscoverImg6 from "../assets/discover-bg-06.png";
import ServiceImg1 from "../assets/service_01.png";
import ServiceImg2 from "../assets/service_02.png";
import ServiceImg3 from "../assets/service_03.png";
import CottageCard from "../components/CottageCard";
import DiscoverSection from "../components/DiscoverSection";
import TestimonailCard from "../components/TestimonailCard";
import SubscribeSection from "../components/SubscribeSection";
import ContentWithMap from "../components/GoogleMap";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <div className="py-4 lg:py-12 ">
        <h1 className="header-family text-black text-[28px] md:text-[40px] py-10 uppercase text-center">
          Featured Cottages
        </h1>
        <div className="flex flex-wrap gap-4 md:gap-0 px-8 md:px-10 lg:px-10 w-full">
          <div className="w-full md:w-1/2 lg:w-1/4">
            <CottageCard
              image={'https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage1%2FIMG_6450.JPG?alt=media&token=abbe29f3-21d8-4a83-8b8c-65c451685068'}
              title="Cottage 1"
              description="This charming haven features rustic pine décor that’s perfect for relaxation and rejuvenation. Perfect for a honeymoon suite or romantic getaway!"
              bathroom="1"
              bedroom="1"
              guest="2"
              id="cottage1"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <CottageCard
              image={'https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage2%2FIMG_6342-HDR.jpg?alt=media&token=ad72e7d3-5b96-4734-bc46-b0c94af95285'}
              title="Cottage 2"
              description="This knotty pine cabin invites you to unwind with its overlooks of both Whitefish Bay and a tree-lined ravine."
              bathroom="1"
              bedroom="1"
              guest="2"
              id="cottage2"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <CottageCard
              image={'https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage3%2FIMG_6324.jpg?alt=media&token=d1c5cf10-c1f0-4d31-834b-cf921ddff4b5'}
              title="Cottage 3"
              description="This one-bedroom haven, just steps away from the sandy shorelines of stunning Whitefish Bay on Lake Superior, is ideal for a romantic getaway or a peaceful solo escape."
              bathroom="1"
              bedroom="1"
              guest="2"
              id="cottage3"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <CottageCard
              image={'https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/cottage4%2FIMG_6415.JPG?alt=media&token=36b3e149-0721-4bba-8f2c-1d19ac5ac89e'}
              title="Cottage 4"
              description="This cozy A frame offers a spacious loft bedroom that overlooks the bay for stunning sunrise views and a back porch for sipping your morning coffee to the serenade of waves on the bay."
              bathroom="1"
              bedroom="1"
              guest="2"
              id="cottage4"
            />
          </div>
        </div>
      </div>
      <div
        className="relative h-[500px] bg-cover bg-center "
        style={{ backgroundImage: `url('./bg-welcome.png')` }}
      >
        <div className="absolute inset-y-0 right-0 flex items-center justify-center bg-welcome-color bg-opacity-50 w-full md:w-1/2">
          <div className="text-center text-white py-12 px-8 md:px-12 lg:px-20 w-[100%]">
            <h1 className="text-[25px] lg:text-[32px] uppercase font-normal mb-4 header-family">
              Welcome to Paradise!
            </h1>
            <p className="font-normal mb-4 text-center text-[14px] md:text[18px]">
              Cloud Nine Cottages is located on the tranquil shores of Whitefish
              Bay along Lake Superior in the stunning Paradise, Michigan. We
              offer four cabin vacation rentals with breathtaking views of the
              water and private lake access. Whether you’re looking for serenity
              onsite for a weekend or have a full itinerary planned, these cozy,
              bayside cottages have so much to offer. Come share our piece of
              paradise with us!
            </p>
            <Link to={"/contact"}>
              <button className="bg-[#F6BE2E] btn-family text-[25px] md:text-[30px] mt-12 hover:bg-[#F6BE2e] text-white font-bold  py-2 px-6 md:px-8 rounded">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-20 px-4 sm:px-8 lg:px-10 bg-[#C9FFFF]">
        <h2 className="text-[28px] sm:text-4xl lg:text-[32px] font-normal text-center mb-8 uppercase header-family">
          Discover Things To Do In The Area
        </h2>
        <div className="flex flex-col bg-[#C9FFFF] m-auto p-auto">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap">
              <div className="w-full md:w-1/2 lg:w-1/4">
                <div className="inline-block px-3">
                  <div className="relative w-96 h-[400px] md:h-96 lg:h-[450px] max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out">
                    <DiscoverSection img={DiscoverImg1} title="Bird Watching" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4">
                <div className="inline-block px-3">
                  <div className="relative w-96 h-[410px] md:h-96 lg:h-[470px] max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out">
                    <DiscoverSection img={DiscoverImg2} title="Beaches" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4">
                <div className="inline-block px-3">
                  <div className="relative w-96 h-[400px] md:h-96 lg:h-[450px] max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out">
                    <DiscoverSection img={DiscoverImg3} title="Nature Parks" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4">
                <div className="inline-block px-3">
                  <div className="relative w-96 h-[400px] md:h-96 lg:h-[450px] max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out">
                    <DiscoverSection img={DiscoverImg4} title="Light House" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4">
                <div className="inline-block px-3">
                  <div className="relative w-96 h-[400px] md:h-96 lg:h-[450px] max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out">
                    <DiscoverSection img={DiscoverImg5} title="RECREATION" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4">
                <div className="inline-block px-3">
                  <div className="relative w-96 h-[400px] md:h-96 lg:h-[450px] max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out">
                    <DiscoverSection img={DiscoverImg6} title="ROCK HUNTING" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link to={"/thingstodo"}>
            <button className="bg-[#F6BE2E] btn-family text-[30px] mt-4 hover:bg-[#F6BE2e] text-white font-bold py-2 px-8 rounded">
              Explore Here
            </button>
          </Link>
        </div>
      </div>
      <div className="py-20 px-4 sm:px-6 md:px-8 lg:px-32 bg-white">
        <h2 className="text-[28px] sm:text-4xl lg:text-[32px] font-normal text-center uppercase header-family">
          COMING TO CLOUD NINE IN 2025!
        </h2>
        <p className="text-[18px] md:text-[20px] text-center mb-8">
          Stay tuned for an extraordinary experience launching soon!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-0 lg:gap-4">
          <div className="w-full md:w-1/3">
            <DiscoverSection img={'https://firebasestorage.googleapis.com/v0/b/cottage-527e5.appspot.com/o/hero%2FIMG_6244.jpg?alt=media&token=8c6f6f72-c774-4941-a929-33461a3943bc'} title="Motorcoach site" />
          </div>
          <div className="w-full md:w-1/3">
            <DiscoverSection img={ServiceImg2} title="Beach yoga" />
          </div>
          <div className="w-full md:w-1/3">
            <DiscoverSection img={ServiceImg3} title="EV charging" />
          </div>
        </div>
        <div className="mt-12">
          <h1 className="text-[28px] sm:text-4xl lg:text-[32px] font-normal text-center uppercase header-family mb-8">
            What Our Guests Say
          </h1>
          <div className="flex flex-col m-auto p-auto px-4">
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
              <div className="flex flex-nowrap">
                <div className="w-full md:w-1/3">
                  <TestimonailCard
                    rating={4}
                    text="We had such a wonderful time during our two night stay here! The owners are incredibly friendly, and the cabins and grounds are immaculate. We will be back for sure!"
                    name="Erin S"
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <TestimonailCard
                    rating={4}
                    text="I was impressed with our little A-frame cottage mini-vacation. The cottage was cute and very clean. We enjoyed a perfect sunrise every morning. Had everything we needed in the cabin to enjoy our time away from home. The innkeepers are very personable and very accommodating."
                    name="Debbra G"
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <TestimonailCard
                    rating={4}
                    text="It was the best place we stayed at up in the UP. I will be back. The owners were top notch."
                    name=" Randy B"
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <TestimonailCard
                    rating={4}
                    text="Perfect place to relax and peaceful area. We had really good time staying at Cloud Nine Cottage. The host was welcoming and the cabin we got was very beautiful and clean. The cottage is right next to water. You can see beautiful sunrise and sunset views. Can’t get any better!"
                    name="Ganesh P"
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <TestimonailCard
                    rating={4}
                    text="I cannot say enough about how clean our cabin was. We stayed in the A-frame for a girls' weekend/mom getaway. It was perfect! The cabin was well-stocked and so comfortable. We will definitely be back again. So glad we found this place. Would highly recommend."
                    name="Jessica B."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscribeSection />
      <div className="py-4 px-16 md:px-20 lg:px-32">
        <ContentWithMap />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
