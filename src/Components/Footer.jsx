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
      <div id="footer" className="mt-20 mb-10">
        <div className="w-full min-h-[150px] flex items-center">
        <ul className="flex space-x-10 justify-center flex-grow">
        {Pages.map((data)=>(
          <li key={data.name}><a href={data.nav}>{data.name}</a></li>
        ))}
        </ul>
        <div className="flex space-x-2 ml-auto mr-5">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
        </div>
        </div>
        <div>
        <hr className="border-t-2 border-slate-300 ml-10 mr-10" />
        </div>
        <br></br>
        <div className="flex justify-between min-h-[80px] ml-5 mt-5">
        <h3>Made by Tsedenawit Lemma</h3>
        <div className="flex space-x-3 mr-5">
        <h3>Privacy policy</h3>
        <h3>Terms of service</h3>
        <h3>Cookies setting</h3>  
        </div>
        </div>
      </div>
    );
  }