import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex justify-between w-11/12 mx-auto bg-cyan-100 p-4">
      <div>
        <h1 className="font-bold text-2xl cursor-pointer">ROOMFINDER</h1>
        <h2 className="font-semibold text-sm">ONLINE ROOM FINDING AGENCY</h2>
      </div>
      <div className="flex gap-24">
        <div className="flex  gap-4 items-center">
          <FaPhoneAlt className="text-2xl" />
          <div>
            <h1 className="font-semibold">Call Us Now</h1>
            <h1>+977 987654321</h1>
          </div>
        </div>
        <div className="flex  gap-4 items-center">
          <MdLocationPin className="text-2xl" />
          <div>
            <h1 className="font-semibold">Our Location</h1>
            <h1>Butwal, Devinagar</h1>
          </div>
          </div>

        <div className="">
          <div>
            <h1 className="font-semibold">Connect With Us</h1>
          </div>
          <div className="flex gap-4 items-center  cursor-pointer mt-2 text-2xl">
            <FaSquareFacebook />
            <FiInstagram />
            <FaTwitter />
          </div>
        </div>
        
      </div>
   
    </div>
  );
};

export default Header;
