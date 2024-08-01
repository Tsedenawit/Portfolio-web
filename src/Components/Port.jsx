import React from "react";
import images2 from "../Images/coffee.png"
import images1 from "../Images/quiz.png"
export default function Port(){
    return(
        <div className="mt-[100px] mb-[50px]">
            <h2 className="text-6xl">My Portfolio</h2>
            <div className="flex">
                <div className="max-w-[300px] rounded">
                    <img src={images1} className="max-w-100 max-h-50"></img>
                    <h2 className=""><b>Country quiz</b></h2>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h2>
                </div>
                {/* <div className=" rounded">
                    <img src={images2} className="max-w-100 max-h-50"></img>
                    <h2 className=""><b>Country quiz</b></h2>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h2>
                </div> */}
            </div>
        </div>
    )
}