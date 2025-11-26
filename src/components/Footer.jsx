import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className="md:grid grid-cols-3 md:gap-9 bg-black text-white p-10">
        <div>
          <h4 className="font-bold">ABOUT US</h4>
          <p className="text-justify mt-5">We believe books are more than just pages — they are windows into new worlds, teachers of wisdom, and companions for life. Our journey began with a passion for storytelling and a mission to make reading accessible, enjoyable, and inspiring for everyone.</p>
        </div>
        <div className='md:ms-40 mt-5 md:mt-0'>
          <h4 className="font-bold">NEWS LETTER</h4>
          <p className="my-5">Stay updated with our latest trends</p>
          <div className="flex ">
            <input type="text" placeholder=' Email Id here' className='p-2 bg-white placeholder-gray-400 text-black'/>
            <button className="p-2 bg-yellow-500"><FaArrowRight/> </button>
          </div>
        </div>
        <div className='md:ms-40 mt-5 md:mt-0'>
          <h4 className="font-bold">FOLLOW US</h4>
          <p className="my-5">Let us be social</p>
          <div className="flex">
            <FaFacebook/>
            <FaInstagram className='mx-5'/>
            <FaTwitter className='me-5'/>
            <FaEnvelope/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer