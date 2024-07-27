import React from 'react';

const Homebanner = () => {
  return (
    <div className="relative ">
      <img 
        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="banner" 
        className="h-full bg-cover  w-full  "
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold"></h1>
      </div>
    </div>
  );
}

export default Homebanner;
