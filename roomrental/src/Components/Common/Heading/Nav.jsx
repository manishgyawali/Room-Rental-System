import React from "react";

const Nav = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-between mt-3">
      <div>
        <h1 className="font-semibold text-xl">ROOMFINDER</h1>
      </div>
      <div className="">
        <ul className="flex gap-20">
          <li>Home</li>
          <li>About</li>
          <li>Rooms</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
