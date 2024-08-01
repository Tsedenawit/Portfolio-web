import React from "react";

export default function Nav(){
    return(
        <div className=" h-[70px] bg-white drop-shadow-md flex justify-center items-center overflow-x-hidden  ">
            <ul className="flex space-x-10">
                <li> <a href="/">Home</a> </li>
                <li> <a href="">About me</a> </li>
                <li> <a href="">Portfolio </a> </li>
                <li> <a href="">Contact me </a> </li>
            </ul>
        </div>
    )
}