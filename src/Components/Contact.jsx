import React from "react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
export default function Contact() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    Phone: "",
    service: "",
    area: "",
  });

  function handle(event) {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g4jbn0m', 'template_xrwbdae', form.current, {
        publicKey: 'nCb8bXLRL1edwYAPV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id="contact" className="grid place-items-center mt-20">
      <h2 className="text-center text-5xl">Contact me </h2>
      <div className=" bg-white rounded-xl shadow-lg p-8 text- max-w-[800px]  md:w-full">
        <form ref={form} className="flex flex-col space-y-3">
          <div className="flex justify-between ">
            <div>
              <label for="names" className="text-sm w-24">
                First Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="ring-1 ring-violet-500 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                value={data.firstname}
                id="names"
                onChange={handle}
                name="firstname"
                required
              />
            </div>
            <div>
              <label for="names" className="text-sm">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="ring-1 ring-violet-500 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                value={data.lastname}
                id="names"
                onChange={handle}
                name="lastname"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <label for="names" className="text-sm">
                Email
              </label>
              <input
                type="text"
                placeholder="Name"
                className="ring-1 ring-violet-500 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                value={data.email}
                id="names"
                onChange={handle}
                name="email"
                required
              />
            </div>
            <div>
              <label for="names" className="text-sm">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Name"
                className="ring-1 ring-violet-500 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                value={data.Phone}
                id="names"
                onChange={handle}
                name="phone"
              />
            </div>
          </div>
          <div>
            <label for="selected" className="text-sm">
              Choose a topic
            </label>
            <br></br>
            <select
              id="selected"
              value={data.service}
              onChange={handle}
              name="service"
              className="ring-1 ring-violet-500 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
            >
              <option value="">Select</option>
              <option value="Front-end">Front-end Development</option>
              <option value="UI/UX">UI/UX Design</option>
              <option value="End-end">Back-end Development</option>
            </select>
          </div>
          <div>
            <label for="" className="text-sm">
              Your Message
            </label>
            <textarea
              type="email"
              placeholder="Type your message..."
              rows="4"
              className="ring-1 ring-violet-500 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
              value={data.area}
              onChange={handle}
              name="area"
              required
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button
              onSubmit={sendEmail}
              type="submit"
              className="w-28 h-12 bg-violet-700 text-white rounded-lg px-6 py-2 text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
