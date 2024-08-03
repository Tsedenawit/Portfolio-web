import React from "react";
import images2 from "../Images/coffee.jpg"
import images1 from "../Images/quiz.png"
export default function Port(){
    return(
        <div className="mt-[100px] mb-[50px] ">
            <h2 className="text-6xl ml-20">My Portfolio</h2>
            <div className="flex justify-between mr-20 ml-20">
                <div className="max-w-[300px] min-h-[450px] rounded-md mt-20 shadow-2xl ">
                    <img src={images1} className="max-w-100 max-h-50 min-h-[50px] rounded-md"></img>
                    <h2 className="mt-3 pl-5"><b>Country quiz</b></h2>
                    <h2 className="mt-2 pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h2>
                    <button className="underline-offset-8 underline mt-4 pl-5">View in Github</button>
                </div>
                <div className="max-w-[300px] min-h-[450px] rounded-md mt-20 shadow-lg">
                    <img src={images2} className="max-w-100 max-h-50 rounded-md"></img>
                    <h2 className="mt-3"><b>Country quiz</b></h2>
                    <h2 className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h2>
                    <button className="underline-offset-8 underline mt-4 ml-5">View in Github</button>
                </div>
                <div className="max-w-[300px] min-h-[450px] rounded-md mt-20 shadow-lg">
                    <img src={images1} className="max-w-100 max-h-50 rounded-md"></img>
                    <h2 className="mt-3"><b>Country quiz</b></h2>
                    <h2 className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h2>
                    <button className="underline-offset-8 underline mt-4 ml-5">View in Github</button>
                </div>
                <div className="max-w-[300px] min-h-[450px] rounded-md mt-20 shadow-2xl ">
                    <img src={images1} className="max-w-100 max-h-50 min-h-[50px] rounded-md"></img>
                    <h2 className="mt-3 pl-5"><b>Country quiz</b></h2>
                    <h2 className="mt-2 pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h2>
                    <button className="underline-offset-8 underline mt-4 pl-5">View in Github</button>
                </div>
            </div>
        </div>
    )
}