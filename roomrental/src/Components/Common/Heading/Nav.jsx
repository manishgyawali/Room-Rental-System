import React from "react";

const Nav = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-between  bg-cyan-300 p-5 ">
      
      <div className="">
        <ul className="flex gap-20 cursor-pointer font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Rooms</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
          <h1 className="font-semibold cursor-pointer">LOGIN/REGISTER</h1>
        </div>
    </div>
  );
};

export default Nav;
