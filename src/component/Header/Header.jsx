import React, { useState } from "react";
import Navbar from  '../Navbar/Navabar'

function Header() {
   
  return (
    <>
      <div
        className="min-h-screen mb-4 bg-center bg-cover flex bg-center items-center overflow-hidden w-full"
        style={{ backgroundImage: "url('/header_img.png')" }}
      >
       
        <Navbar/>
        <div>
          <h2>
            Explore homes that fit your dreams
          </h2>
          <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
            <a href="" className="font-bold text-white hover:bg-slate-500 ">Projects</a>
            <a href="" className="font-bold text-white hover:bg-slate-500 "> Contacts</a>
          </div>
        </div>
        
</div>
    </>
  );
}

export default Header;
