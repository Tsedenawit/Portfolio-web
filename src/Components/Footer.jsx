import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Footer() {
    const Pages = [
      {name: "Home" , nav: "#"},
      {name: "About" , nav: "#about"},
      {name: "Portfolio" , nav: "#port"},
      {name: "Contact me", nav:"#contact"}
   ] 
    return (
      <div id="footer" className="w-full min-h-[70px] bg-white drop-shadow-md flex justify-center items-center">
        <ul className="flex space-x-10">
        {Pages.map((data)=>(
          <li key={data.name}><a href={data.nav}>{data.name}</a></li>
        ))}
        </ul>
        <div className="flex justify-end">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
        </div>
      </div>
    );
  }