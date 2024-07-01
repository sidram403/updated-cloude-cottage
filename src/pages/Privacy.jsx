import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Privacy() {
  return (
    <div>
      <Header />
      <div
        className="w-full h-[400px] bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(./pagebackground.png)` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-white header-family text-center text-[45px] tracking-[10px] lg:text-[70px] font-normal uppercase">
            Privacy policy
          </h1>
        </div>
      </div>

      <div className="pt-12 mx-16 lg:mx-16 ">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="sm:text-3xl header-family text-2xl font-medium title-font mb-4 uppercase">
            learn our privacy policy
          </h2>
        </div>
        <div className="para-family mt-[56px]">
          <h2 className="text-[16px] md:text-[20px] font-semibold leading-8 my-[30px]">
            Privacy Policy
          </h2>
          <h3 className="text-[16px] md:text-[20px] font-semibold leading-8 my-[10px]">
            Effective Date: May 20, 2024
          </h3>
          <p className="text-[16px] md:text-[20px] font-extralight">
            Welcome to Cloud Nine Cottages. We are committed to protecting your
            privacy and ensuring the security of your personal information. This
            Privacy Policy outlines how we collect, use, disclose, and protect
            your information when you visit our website, book a cabin rental, or
            interact with us in any other way.
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            Information We Collect: We collect various types of information to
            provide and improve our cabin rental services:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li className="text-[16px] md:text-[20px] font-extralight">
              Personal Information: Name, email address, phone number, postal
              address, payment information, and identification documents (e.g.,
              driver’s license).
            </li>
            <li className="text-[16px] md:text-[20px] font-extralight">
              Reservation Information: Booking dates, cabin preferences, special
              requests, and number of guests.
            </li>
            <li className="text-[16px] md:text-[20px] font-extralight">
              Communication Information: Emails, messages, and feedback
              submitted through our website or during your stay.
            </li>
          </ul>
        </div>
        <div className="para-family mt-[56px]">
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
            How We Use Your Information: We use the collected information for
            the following purposes:
          </h3>
          <ul className="list-disc pl-5 mt-2">
            <li className="text-[16px] md:text-[20px] font-extralight">
              Reservation Management: To process and manage your cabin bookings
              and provide you with our services.
            </li>
            <li className="text-[16px] md:text-[20px] font-extralight">
              Communication: To send you booking confirmations or updates.
            </li>
            <li className="text-[16px] md:text-[20px] font-extralight">
              Legal Compliance: To comply with applicable laws, regulations, and
              legal processes.
            </li>
          </ul>
        </div>
        <div className="para-family mt-[56px]">
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
            Sharing Your Information: We may share your information with:
          </h3>
          <ul className="list-disc pl-5 mt-2">
            <li className="text-[16px] md:text-[20px] font-extralight">
              Legal Authorities: Only if/when required by law, regulation, or
              legal process, or to protect the rights, property, or safety of
              our guests and staff.
            </li>
            <li className="text-[16px] md:text-[20px] font-extralight">
              Data Security: We implement appropriate technical and
              organizational measures to protect your personal information from
              unauthorized access, disclosure, alteration, or destruction. 
            </li>
            <li className="text-[16px] md:text-[20px] font-extralight">
              Your Rights: You have the following rights regarding your personal
              information:
            </li>
            <li className="text-[16px] md:text-[20px] font-extralight">
              Access: You can request access to the personal information we hold
              about you.
            </li>
            <li className="text-[16px] md:text-[20px] font-extralight">
              Correction: You can request correction of any inaccurate or
              incomplete information.
            </li>
          </ul>
        </div>
        <div className="para-family mt-[56px]">
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
            Children’s Privacy:
          </h3>
          <p className="text-[16px] md:text-[20px] font-extralight">
            Our services are not directed at children under the age of 16, and
            we do not knowingly collect personal information from children
            without appropriate consent from a parent or guardian.
          </p>
        </div>
        <div className="para-family mt-[56px]">
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
            Changes to This Privacy Policy:
          </h3>
          <p className="text-[16px] md:text-[20px] font-extralight">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will post the
            updated policy on our website and indicate the effective date of the
            update.
          </p>
        </div>
        <div className="para-family mt-[56px]">
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
            Contact Us:
          </h3>
          <p className="text-[16px] md:text-[20px] font-extralight">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at : cloudninebooking7@gmail.com


          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
