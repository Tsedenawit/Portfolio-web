import React from "react";
import { useState } from "react";

export default function Contact(){
   const [data, setData] = useState({
    firstname: "",
    lastname:"",
    email: "",
    Phone:"",
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
        <div id="contact" className="grid place-items-center mt-20">
            <h2 className="text-center text-5xl">Contact me </h2>
        <div className=" bg-white rounded-xl shadow-lg p-8 text-gray-600 max-w-[600px]  md:w-full">
          <form className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <div>
              <label for="names" className="text-sm">First Name</label>
              <input type="text" placeholder="Name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
              value={data.firstname}
              id="names"
              onChange={handle}
              name="firstname"/>
              </div>
              <div>
               <label for="names" className="text-sm">Last Name</label>
              <input type="text" placeholder="Name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
              value={data.lastname}
              id="names"
              onChange={handle}
              name="lastname"/>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
              <label for="names" className="text-sm">Email</label>
              <input type="text" placeholder="Name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
              value={data.email}
              id="names"
              onChange={handle}
              name="email"/>
              </div>
              <div>
               <label for="names" className="text-sm">Phone Number</label>
              <input type="text" placeholder="Name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
              value={data.Phone}
              id="names"
              onChange={handle}
              name="phone"/>
              </div>
            </div>
            <div>
              <label for="selected" className="text-sm">Choose a topic</label><br></br>
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