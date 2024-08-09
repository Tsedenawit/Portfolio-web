import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from 'react-phone-number-input';

export default function Contact() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "", 
    service: "",
    area: "",
  });

  const [errors, setErrors] = useState({});
  const form = useRef();

  const handle = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setData({ ...data, phone: value });
  };

  const validate = () => {
    const newErrors = {};
console.log(26)
    // Regex patterns
    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const phonePattern = /^\d{10}$/; 
    // const cleanedPhone = data.phone.replace(/\D/g, '');

    if (!data.firstname || !namePattern.test(data.firstname)) {
      newErrors.firstname = "Name must contain only letters and spaces";
    }

    if (!data.lastname || !namePattern.test(data.lastname)) {
      newErrors.lastname = "Name must contain only letters and spaces";
    }

    if (!data.email || !emailPattern.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!data.phone || !isValidPhoneNumber(data.phone)) {
      newErrors.phone = "Phone number must be a 10-digit number";
    }
    if (!data.area.trim()) {
      newErrors.area = 'Message cannot be empty';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      sendEmail(e); 
      console.log("Form data is valid:", data);
    } else {
      console.log("Form data is invalid:", errors);
    }
     };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g4jbn0m", "template_xrwbdae", form.current, {
        publicKey: "nCb8bXLRL1edwYAPV",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="grid place-items-center mt-20">
      <h2 className="text-center text-5xl">Contact me </h2>
      <div className="bg-white rounded-xl shadow-lg p-8 text- max-w-[800px] md:w-full">
        <form onSubmit={handleSubmit} ref={form} className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <div>
              <label htmlFor="firstname" className="text-sm">
                First Name
              </label>
              <input
                type="text"
                className="ring-1 ring-violet-500 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                value={data.firstname}
                id="firstname"
                onChange={handle}
                name="firstname"
                required
                pattern="[a-zA-Z\s]+" 
                title="Last Name must contain only letters and spaces"
              />
              {errors.firstname && <p className="text-red-500">{errors.firstname}</p>}
            </div>
            <div>
              <label htmlFor="lastname" className="text-sm">
                Last Name
              </label>
              <input
                type="text"
                className="ring-1 ring-violet-500 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                value={data.lastname}
                id="lastname"
                onChange={handle}
                name="lastname"
                required
                pattern="[a-zA-Z\s]+"
                title="Last Name must contain only letters and spaces"
              />
              {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                className="ring-1 ring-violet-500 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                value={data.email}
                id="email"
                onChange={handle}
                name="email"
                required
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="text-sm">
                Phone Number
              </label>
              <PhoneInput
                className="ring-1 ring-violet-500 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                value={data.phone}
                id="phone"
                onChange={handlePhoneChange}
                name="phone"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="selected" className="text-sm">
              Choose a topic
            </label>
            <br />
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
            <label htmlFor="area" className="text-sm">
              Your Message
            </label>
            <textarea
              placeholder="Type your message..."
              rows="4"
              className="ring-1 ring-violet-500 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
              value={data.area}
              onChange={handle}
              name="area"
              required
            > </textarea>
          {errors.area && <p className="text-red-500">{errors.area}</p>}</div>
          <div className="flex justify-center items-center">
            <button
              onClick={handleSubmit} // Changed from onSubmit to onClick
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
