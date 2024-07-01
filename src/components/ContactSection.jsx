import React from "react";
import { IoMdContact } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function ContactSection() {
  return (
    <div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24">
          <div className="lg:w-1/2 md:w-2/3">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full  rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Your Name"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <IoMdContact />
                  </div>
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full  rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Email Address"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <IoMdMail />
                  </div>
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <input
                    type="phoneno"
                    id="phoneno"
                    name="phoneno"
                    className="w-full  rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Mobile Number"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FaPhoneAlt />
                  </div>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    className="w-full  rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    placeholder="Please let us know here the reason for your visit, the dates you’re interested in, and anything else you’d like us to know about your visit...."
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="bg-[#F6BE2E] btn-family text-[18px] md:text-[24px] hover:bg-[#F6BE2e] text-white font-bold  py-2 px-6 md:px-8 rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
