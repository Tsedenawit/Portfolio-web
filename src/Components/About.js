import React from "react";
import Image from "../Images/about.png"
export default function About(){
    return(
        <div id="about" className="flex justify-between ml-20 mt-[100px]">
            <div><img src={Image} className="w-[500px]"></img></div>
            <div className="w-[500px] mt-[200px] mr-[120px]">
                <h4 className="text-4xl"><b>About Me</b> </h4><br></br>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus
                    massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu 
                    neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet 
                    pellentesque.<br></br>
                    Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo 
                    vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.Sit turpis pretium 
                    eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque 
                    sit pulvinar lorem mi a, euismod risus r.</h6>
            </div>
        </div>
    )
}