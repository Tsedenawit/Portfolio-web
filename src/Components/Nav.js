import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Port from "./Port";
import Contact from "./Contact";

export default function Nav() {
  const Pages = [
    {name: "Home" , nav: "#"},
    {name: "About" , nav: "#about"},
    {name: "Process" , nav: "#pro"},
    {name: "Portfolio" , nav: "#port"},
    {name: "Contact me", nav:"#"}
 ] 
  return (
    <div className="w-full min-h-[70px] bg-white drop-shadow-md flex justify-center items-center">
      <ul className="flex space-x-10">
      <li>
          <Link to="./home">Home</Link>
        </li>
        <li>
          <Link to="./About">About Me</Link>
        </li>
        <li>
          <Link to={Port}>Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </div>
  );
}
