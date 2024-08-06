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
    {name: "Portfolio" , nav: "#port"},
    {name: "Contact me", nav:"#contact"}
 ] 
  return (
    <div className="w-full min-h-[70px] bg-white drop-shadow-md flex justify-center items-center">
      <ul className="flex space-x-10">
      {Pages.map((data)=>(
        <li key={data.name}><a href={data.nav}>{data.name}</a></li>
      ))}
      </ul>
    </div>
  );
}
