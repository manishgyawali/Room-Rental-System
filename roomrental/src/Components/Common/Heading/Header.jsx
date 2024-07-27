import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex justify-between w-11/12 mx-auto bg-cyan-300 p-4">
      <div className="flex gap-10">
        <div className="flex  gap-2 items-center">
        <FaPhoneAlt />
          <h1>+977 987654321</h1>
        </div>
        <div className="flex  gap-2 items-center">
        <MdLocationPin />
          <h1>Butwal, Devinagar</h1>
        </div>
        <div className="flex gap-2 items-center">
        <MdMarkEmailUnread />
          <h1>roomfinder@gmail.com</h1>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex gap-4 items-center text-xl">
        <FaSquareFacebook />
        <FiInstagram />
        <FaTwitter />
        </div>
        <div>
        <h1 className="font-semibold">LOGIN/REGISTER</h1>

        </div>
      </div>
    </div>
  );
};

export default Header;
