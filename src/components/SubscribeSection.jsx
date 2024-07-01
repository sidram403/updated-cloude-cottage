import React from 'react'
import { Link } from 'react-router-dom'

const SubscribeSection = () => {
  return (
    <div className="relative h-[500px] md:h-[550px] bg-cover bg-center "style={{ backgroundImage: `url('./bg-contact.png')` }} >
      <div className="absolute bottom-0 w-full text-center p-6 bg-opacity-50 text-white">
        <h1 className="text-[35px] md:text-[60px] lg:text-[100px] mb-4 contact-family ">Tranquil Lakeside Rentals</h1>
        <Link to={'/contact'} >
        <button className="bg-[#F6BE2E] btn-family text-[25px] md:text-[30px] mt-2 hover:bg-[#F6BE2e] text-white font-bold py-2 px-8 rounded">
              Contact Us
            </button>
            </Link>
      </div>
    </div>
  )
}

export default SubscribeSection