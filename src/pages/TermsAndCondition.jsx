import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function TermsAndCondition() {
  return (
    <div>
      <Header />
      <div
        className="w-full h-[400px] bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(./pagebackground.png)` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-white header-family text-center text-[45px] tracking-[10px] lg:text-[70px] font-normal uppercase">
            Terms & conditions
          </h1>
        </div>
      </div>
      <div className="pt-12 mx-16 lg:mx-16 ">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="sm:text-3xl header-family text-2xl font-medium title-font mb-4 uppercase">
            learn our Terms & conditions
          </h2>
        </div>
        <div className="para-family mt-[56px]">
          <h2 className="text-[16px] md:text-[20px] font-semibold leading-8 my-[30px]">
            Terms and Conditions
          </h2>
          <h3 className="text-[16px] md:text-[20px] font-semibold leading-8 my-[10px]">
            Cancellation Policy
          </h3>
          <p className="text-[16px] md:text-[20px] font-extralight">
            By making a reservation with us, and providing a credit card number
            or making a payment via cash/check, you agree that you will pay a
            deposit of one night’s stay to secure your reservation within 7 days
            of booking. The remaining amount will be paid full on the day of
            your arrival date.
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            If you cancel at 72 hours or more before your arrival date, you are
            eligible for a full refund of your deposit, with the exception of a
            3% credit card fee if you paid with card. If you cancel within 72
            hours of your arrival date, your deposit becomes non-refundable.
          </p>
        </div>
        <div className="para-family mt-[56px]">
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
            Payment Policy
          </h3>
          <p className="text-[16px] md:text-[20px] font-extralight">
            To confirm your reservation we require a deposit in the amount of
            one night’s rate for the cabin you have booked. The deposit must be
            sent to the host within 7 days of confirming the booking. For
            example, if you booked cabin 1, we require $110 deposit within 7
            days of booking in the form of a credit card payment over the phone
            with the host or cash/checked mailed to: 6720 M-123, Paradise, MI
            49768
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            The remaining balance is due on the day of arrival. You may pay this
            balance by Visa or MasterCard, or with cash/check. All payments must
            be made in U.S. funds.
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            Pricing and Online Booking
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            Rates and fees are updated regularly to reflect the most current and
            accurate charges on cabin listings. However, Cloud Nine Cottages
            reserves the right to adjust charges to the proper amounts after a
            booking in the event of a clerical or technical error. 
          </p>
        </div>
        <div className="para-family mt-[56px]">
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
            Pet Policy
          </h3>
          <p className="text-[16px] md:text-[20px] font-extralight">
            Our cabin has a strict no pets policy to ensure a clean,
            comfortable, and allergen-free environment for all our guests. We
            kindly request that you respect this policy. Any violation may
            result in termination of your stay. For any questions or
            clarifications, please contact us directly.
          </p>
        </div>
        <div className="para-family mt-[56px]">
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
            General Liability 
          </h3>
          <p className="text-[16px] md:text-[20px] font-extralight">
            Guests acknowledge that staying at Cloud Nine Cottages could result
            in certain inherent risks, including but not limited to, risks of
            property damage, personal injury, and loss or theft of personal
            items. By booking a cabin, Guests assume full responsibility for any
            risks of injury, damage, or loss that may occur during their stay.
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            The Property owner shall not be liable for any injury, loss, or
            damage to persons or property arising from or related to the Guest's
            stay at the property, regardless of whether such injury, loss, or
            damage is caused by the owners' negligence or otherwise. The Guest
            agrees to indemnify and hold harmless the Owners from any claims,
            actions, damages, costs, and expenses, including attorney’s fees,
            arising from or related to the Guest's use of the Site or their stay
            at the Property.
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            Guests agree to maintain the Property in the same condition as when
            they arrived. The Guest is responsible for any damage to the
            Property, its contents, or grounds caused by the Guest or their
            party. The Owners reserve the right to charge the Guest for any such
            damages. Guests agree to follow all safety guidelines provided by
            the owners and understand that failure to adhere to these guidelines
            may result in accidents or injuries for which the owners are not
            liable.
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            The Owners shall not be liable for any loss, damage, or
            inconvenience arising from or attributable to causes beyond their
            control, including but not limited to natural disasters, weather
            events, acts of God, or governmental actions.
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            The property may be located in a natural setting with wildlife and
            other environmental features. Guests acknowledge that they are
            responsible for their safety and the safety of their party in such
            surroundings. The owners are not liable for any injury or damage
            resulting from encounters with wildlife or other natural elements.
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            By using this site and booking a cabin rental, Guests acknowledge
            that they have read, understood, and agree to be bound by these
            General Liability Terms and Conditions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TermsAndCondition;
