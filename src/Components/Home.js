import React from "react";
import myImage from "../Images/Images.png"
export default function Home(){
    return (
        <div className="flex justify-center w-[1000px] items-center">
            <div >
            <h4 className="text-xs block">Hey, I am Tsedenawit Lemma</h4>
            <h1 className="text-6xl block block mb-4">I create <span className="text-purple-400 ">Projects</span></h1>
            <h1 className="text-6xl block block mb-4">and new experience</h1>
            <h4 className="text-xs block block mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique.</h4>
            </div>
            <div>
                <img src={myImage} alt="not found"></img>
            </div>
        </div>
    )
}