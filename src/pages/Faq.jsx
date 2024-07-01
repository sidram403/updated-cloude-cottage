import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const faqs = [
  {
    question: "What is your cancellation policy?",
    answer: "We require a 72 hour notice for deposit refund or any changes/cancellation of reservation If you paid with a credit card, there will be 3.6% fee for refund to reverse the transaction",
  },
  {
    question: "Is a deposit required to secure my reservation?",
    answer:
      "Yes, a deposit of one night’s stay is required to secure your reservation. For more information, please submit an inquiry form and the host will reach out to you.",
  },
  {
    question: "How many guests per reservation?",
    answer: "Capacity of 2 per cabin No additional guests are allowed.",
  },
  {
    question: "Are there quiet hours?",
    answer:
      "Quiet hours between 11pm to 7am",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "Cash, check, credit/debit card (credit card payment is subjected to 3.6% processing fee)",
  },
  {
    question: "What if I am late for check-in?",
    answer:
      "Once the reservation is confirmed, you will receive contact information of the host. Please contact us to let us know what time you expect to arrive or if you will arrive later than expected.",
  },
  {
    question: "How do I check-in on the day of my reservation?",
    answer:
      "The host will be on site at the date/time of your expected arrival to check you in.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      <Header />
      <div
        className="w-full h-[400px] bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(./pagebackground.png)` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-white header-family text-center text-[45px] tracking-[10px] lg:text-[70px] font-normal uppercase">
            FAQS
          </h1>
        </div>
      </div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl header-family text-2xl font-medium title-font mb-4 text-gray-900 uppercase">
              QUESTIONS? WE GOT ANSWERS.
            </h1>
          </div>
         
            <div className="max-w-2xl mx-auto mt-10">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 ">
                    <button
                      className="flex justify-between p-4 bg-[#018E92]  items-center w-full text-left text-lg font-medium text-gray-900 focus:outline-none"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="text-white">{faq.question}</span>
                      <span className="ml-2 text-gray-500">
                        {activeIndex === index ? (
                          <IoIosArrowDropupCircle className="text-white"/>
                        ) : (
                          <IoIosArrowDropdownCircle className="text-white"/>
                        )}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all mt-1 duration-300 ${
                        activeIndex === index ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <div className="mt-2 p-4 bg-[#018E92]  text-white">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default Faq;
