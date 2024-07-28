import React from "react";

const Aboutus = () => {
  return (
    <div className="flex items-center mt-40 gap-10 w-11/12 mx-auto">
      <div>
        <img src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="" />
      </div>
      <div>
        <div>
          <h3 className="font-semibold">ABOUT US</h3>
          <h1 className="text-5xl font-semibold mt-3">RoomFinder A Room Finding Company</h1>
          <p className="mt-12 text-gray-600">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean
          </p>
        </div>

        <div className="flex gap-20 mt-10">
          <div>
            <h1 className="text-3xl font-semibold">50</h1>
            <h1 className="font-semibold text-sm mt-3">YEARS OF EXPERIENCED</h1>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">210K+</h1>
            <h1 className="font-semibold text-sm mt-3">TOTAL PROPERTIES</h1>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">100</h1>
            <h1 className="font-semibold text-sm mt-3">TOTAL BRANCHES</h1>
          </div>
        </div>
        <div className="mt-12">
            <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className=" "/>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
