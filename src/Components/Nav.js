import React from "react";

export default function Nav(){
    return(
        <div className=" h-[70px] bg-white drop-shadow-md flex justify-center items-center justify-betwwen">
            <ul className="flex space-x-12">
                <li>Home</li>
                <li>About me</li>
                <li>Portfolio</li>
                <li>Contact me</li>
            </ul>
        </div>
    )
}