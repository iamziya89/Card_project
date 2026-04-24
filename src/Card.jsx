import React from 'react'
// import salmanImg from '../SalmanKhan styles photo.jpg'
import { FaFacebook,FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const Card = () => {
  return (
    <div className="w-[18rem] rounded-2xl overflow-hidden shadow-lg bg-white">

      {/* Top Blue Section */}
      <div className="h-28 bg-blue-500 relative flex justify-center">
        
        {/* Profile Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3SzjK9DRtpZI8P3RnmbZb0T6bY2xMKOhrw&s"
          alt=""
          className="w-24 h-24 rounded-full object-cover border-4 border-white absolute top-full transform -translate-y-1/2"
        />
      </div>

      {/* Bottom Section */}
      <div className="pt-16 pb-6 flex flex-col items-center text-center">

        {/* Name */}
        <h2 className="text-lg font-bold">Mohd Ziya</h2>

        {/* Role */}
        <p className="text-gray-500 text-lg font-semibold">YouTuber & Blogger</p>

        {/* Social Icons */}
        <div className="flex gap-3 mt-3">
          <FaFacebook className="w-8 h-8 bg-blue-600 rounded-full" />
          <BsTwitterX className="w-8 h-8 bg-sky-400 rounded-full"></BsTwitterX>
          <GrInstagram className="w-8 h-8 bg-pink-500 rounded-full" />
          <FaYoutube className="w-8 h-8 bg-red-500 rounded-full"></FaYoutube>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
            Subscribe
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
            Message
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-4 mt-4 text-sm text-gray-600">
          <span>❤️ 60.4k</span>
          <span>💬 20k</span>
          <span>↗️ 12.4k</span>
        </div>

      </div>
    </div>
  )
}

export default Card

// export default Card
