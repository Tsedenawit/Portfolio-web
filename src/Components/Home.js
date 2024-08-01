import React from "react";
import myImage from "../Images/Images.png"
export default function Home(){
    return (
        <div id="cont" className="max-w-full overflow-x-hidden mx-auto">
             <div className="flex justify-between items-center w-full overflow-x-hidden mx-auto lg:px-20 ml-20" >
            <div className="lg:w-[600px] w-full">
            <h4 className="text-xs block">Hey, I am Tsedenawit Lemma</h4>
            <h1 className="text-6xl block block mb-4">I create <span className="text-violet-600 ">Projects</span></h1>
            <h1 className="text-6xl block block mb-4">and new experience</h1>
            <h4 className="text-xs block block mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique.</h4>
            <button className="text-center bg-violet-600 w-[150px] h-[50px] text-white rounded"> Get in touch</button>
            </div>
            <div>
                <img src={myImage} alt="not found" className="w-[600px]"></img>
            </div>
        </div> 
        </div>
      
    )
}