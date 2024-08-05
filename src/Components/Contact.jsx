import React from "react";
import { useState } from "react";

export default function Contact(){
   const [data, setData] = useState({
    fullname: "",
    email: "",
    service:"",
    area:"",
   })

   function handle(event){
    const {value , name } = event.target
    setData({...data,
      [name]:value
    })
   }
   
   function submit(){
    
   }

    return(
        <div className="grid place-items-center">
            <h2 className="text-center text-2xl">Contact me </h2>
        <div className=" bg-white rounded-xl shadow-lg p-8 text-gray-600 max-w-[600px]  md:w-full">
          <form className="flex flex-col space-y-4">
            <div>
              <label for="names" className="text-sm">Full Name</label>
              <input type="text" placeholder="Name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
              value={data.fullname}
              id="names"
              onChange={handle}
              name="fullname"/>
            </div>
            <div>
              <label for="emails" className="text-sm">Your Email</label>
              <input type="email" placeholder="Email" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
              value={data.checked}
              id="emails"
              onChange={handle}
              name="email"/>
            </div>
            <div>
              <label for="selected" className="text-sm">Service Required</label><br></br>
              <select id="selected" value={data.service} onChange={handle} 
              name="service" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300" >
              <option value="">Select</option>
              <option value="Front-end">Front-end Development</option>
              <option value="UI/UX">UI/UX Design</option>
              <option value="End-end">Back-end Development</option>
              </select>
            </div>
            <div>
              <label for="" className="text-sm">Your Message</label>
              <textarea type="email" placeholder="Message" rows="4" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
              value={data.area} onChange={handle} name="area"
              ></textarea>
            </div>
            <button type="submit"
            className="inline-block self-end bg-blue-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Send Message</button>
          </form>
        </div>
      </div>
    )
}