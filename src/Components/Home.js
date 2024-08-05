import React from "react";
import myImage from "../Images/images.png"
export default function Home(){
    return (
        <div id="cont" className="max-w-full overflow-x-hidden mx-auto min-h-[600px]">
             <div className="flex justify-between items-center w-full overflow-x-hidden mx-auto lg:px-20 " >
            <div className="lg:w-[600px] w-full">
            <h4 className="text-xs block">Hey, I am Tsedenawit Lemma</h4>
            <h1 className="text-6xl  block mb-4">I create <span className="text-violet-600 ">Projects</span></h1>
            <h1 className="text-6xl  block mb-4">and new experience</h1>
            <h4 className="text-xs  block mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique.</h4>
            <button className="text-center bg-violet-600 w-[150px] h-[50px] text-white rounded"> Get in touch</button>
            </div>
            <div className="mt-10">
                <img src={myImage} alt="not found" className="w-[600px] mt-[40px]"></img>
            </div>
        </div> 
        </div>
      
    )
}