// import React from "react";
// import { assets } from "../../assets/assets";
// import { useState } from "react";
// // import {logo_black} from '../../assets/logo-black.png';
// // import {logo_white} from '../../assets/logo-white.png'
// // import toggle_night from '../../assets/night.png';
// import toggle_light from '../../assets/light.png';

// function Navabar() {
//      const [val,setval] = useState("light")
//   const toggleClick=()=>{
//        val =='light'? setval('dark'):setval('light')
//   }
//   return (
//     <div className="absolute top-0 left-0 w-full z-10 ">
//       <div className="container mx-auto bg-transparent flex justify-between items-center py-6 px-6 lg:px-32">
//         <img
//           src={assets.logo}
//           alt=""
//           className="my-6 mx-5 flex center center "
//         />
//         <ul className="hidden md:flex gap-7 text-white">
//           <a href="#Header" className="cursor-pointer hover:text-gray-400">
//             Home
//           </a>
//           <a href="#Header" className="cursor-pointer hover:text-gray-500 ">
//             About
//           </a>
//           <a href="#Header" className="cursor-pointer hover:text-gray-500 ">
//             Project
//           </a>
//           <a href="#Header" className="cursor-pointer hover:text-gray-500 ">
//             Testimonial
//           </a>
//         </ul>
//         <img src={toggle_light} alt="" />
//         <button className="rounded-full  border-spacing-2 hidden md:block bg-white px-8 py-2 rounded-full"

//         >
//           Sign Up
//         </button>
//         <img src={assets.menu_icon} alt="" className="md:hidden width-7" />
//         <div className="fixed top-0 right-0 bottom-0  overflow-hidden  md:hidden w-full items-center transition-all bg-white">
//           <div className="flex justify-end p-6 cursor-pointer">
//             <img src={assets.cross_icon} alt="" className=""/>
//           </div>
//           <ul className="w-full text-lg flex items-center flex-col px-5  bg-white mx-24 mt-5 rounded-lg gap-2 font-medium">
//             <a href="#Header"className="rounded-full px-4 py-3 inline-block">Home</a>
//             <a href="#About"className="rounded-full px-4 py-3 inline-block">About</a>
//             <a href="#Project"className="rounded-full px-4 py-3 inline-block">Project</a>
//             <a href="#Testimonial"className="rounded-full px-4 py-3 inline-block">Testimonail</a>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navabar;

//..............................................................

//  Code for the  light and dark website ..............Navbar

import React, { useState } from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo-white.png";
import logo_black from "../../assets/logo-black.png";
import search_icon_white from "../../assets/search-w.png";
import search_icon_black from "../../assets/search-b.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";

function Navabar({ theme, setTheme }) {
  const togglebtn = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <div className="Navbar h-24 w-full flex  bg-slate-400 font-white  flex items-center justify-between p-5 border rounded-lg">
        <img
          src={theme == "light" ? logo_light : logo_black}
          alt=""
          className="h-12"
        />

        <ul className="flex px-8">
          <li className="px-4 cursor-pointer text-white text-lg ">Home </li>
          <li className="px-4 cursor-pointer text-white text-lg ">About</li>
          <li className="px-4 cursor-pointer text-white text-lg ">Contact</li>
          <li className="px-4 cursor-pointer text-white text-lg ">Project</li>
        </ul>
        <div className="search-box flex items-center justify-center p-1 border rounded-2xl border-black bg-white ">
          <input
            type="text"
            placeholder="Search"
            className="border  bg-transparent border-none outline-none  placeholder:text-white  font-white "
          />
          <img src={theme=='light'? search_icon_black:search_icon_white} alt="" className="h-9 w-6" />
        </div>
        <img
          src={theme=='light'?toggle_light:toggle_dark}
          alt=""
          className="h-20 cursor-pointer"
          onClick={() => {
            togglebtn()
          }}
        />
      </div>
      
    </>
  );
}

export default Navabar;
