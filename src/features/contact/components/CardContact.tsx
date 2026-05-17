"use client";

import { MoveRight } from "lucide-react";
import React from "react";

const CardContact = () => {
  return (
    <div className="w-full bg-[#131b2e] rounded-xl border border-gray-800 shadow-lg p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
        <div className="flex flex-col w-full sm:w-1/2 min-w-0">
          <label htmlFor="fullName" className="font-semibold">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="John Doe"
            className="bg-[#0b1326] mt-1 px-3 py-2 rounded-lg border border-gray-800 outline-none focus:border-[#004ff6]"
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/2 min-w-0">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="john@email.com"
            className="bg-[#0b1326] mt-1 px-3 py-2 rounded-lg border border-gray-800 outline-none focus:border-[#004ff6]"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <label htmlFor="project-type" className="font-semibold">
          Project Type
        </label>
        <select
          name=""
          id="project-type"
          className="bg-[#0b1326] mt-1 px-3 py-2 rounded-lg border border-gray-800 outline-none focus:border-[#004ff6]"
        >
          <option value="">Custom Software Development</option>
        </select>
      </div>
      <div className="mt-4 flex flex-col">
        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          name=""
          id="message"
          className="bg-[#0b1326] mt-1 px-3 py-2 rounded-lg border border-gray-800 outline-none focus:border-[#004ff6] resize-none"
          placeholder="Describe your technical requirement and business goals..."
          rows={5}
        ></textarea>
      </div>
      <button className="bg-blue-500 w-full sm:w-auto flex justify-center mt-4 px-5 py-3 rounded-lg cursor-pointer font-semibold hover:bg-blue-600 transition duration-300 items-center gap-2">
        Submit Engineering Request <MoveRight size={18} color="white" />
      </button>
    </div>
  );
};

export default CardContact;
