"use client";

import { useForm, ValidationError } from "@formspree/react";
import { MoveRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const CardContact = () => {
  const [state, handleSubmit] = useForm("mredezgb");
  const [succeeded, setSucceeded] = useState(false);
  useEffect(() => {
    if (state.succeeded) {
      setSucceeded(true);
      const timeout = setTimeout(() => {
        setSucceeded(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [state.succeeded]);
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-[#131b2e] rounded-xl border border-gray-800 shadow-lg p-6 sm:p-8"
    >
      <AnimatePresence mode="wait">
        {succeeded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-green-500/20 p-2 w-full h-14 mb-4 border border-green-500 rounded-xl justify-center items-center flex "
          >
            <p className="text-green-500">
              Thank you! Your message has been sent successfully. We will get
              back to you shortly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
        <div className="flex flex-col w-full sm:w-1/2 min-w-0">
          <label htmlFor="fullName" className="font-semibold">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            disabled={state.submitting}
            name="full_name"
            placeholder="John Doe"
            className="bg-[#0b1326] mt-1 px-3 py-2 rounded-lg border border-gray-800 outline-none focus:border-[#004ff6]"
          />
          <ValidationError
            errors={state.errors}
            prefix="Full Name"
            field="full_name"
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/2 min-w-0">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            disabled={state.submitting}
            name="email"
            placeholder="john@email.com"
            className="bg-[#0b1326] mt-1 px-3 py-2 rounded-lg border border-gray-800 outline-none focus:border-[#004ff6]"
          />
          <ValidationError
            errors={state.errors}
            prefix="Email Address"
            field="email"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <label htmlFor="project-type" className="font-semibold">
          Project Type
        </label>
        <select
          name="project_type"
          id="project-type"
          disabled={state.submitting}
          className="bg-[#0b1326] mt-1 px-3 py-2 rounded-lg border border-gray-800 outline-none focus:border-[#004ff6]"
        >
          <option value="Custom Software Development">
            Custom Web Development
          </option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="UI/UX Research & Design">
            UI/UX Research & Design
          </option>
          <option value="Other">Other</option>
        </select>
        <ValidationError
          errors={state.errors}
          prefix="Project Type"
          field="project_type"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          disabled={state.submitting}
          className="bg-[#0b1326] mt-1 px-3 py-2 rounded-lg border border-gray-800 outline-none focus:border-[#004ff6] resize-none"
          placeholder="Describe your technical requirement and business goals..."
          rows={5}
        ></textarea>
        <ValidationError
          errors={state.errors}
          prefix="Message"
          field="message"
        />
      </div>
      <button
        disabled={state.submitting}
        className="bg-blue-500 w-full sm:w-auto flex justify-center mt-4 px-5 py-3 rounded-lg cursor-pointer font-semibold hover:bg-blue-600 transition duration-300 items-center gap-2"
      >
        Submit Engineering Request <MoveRight size={18} color="white" />
      </button>
    </form>
  );
};

export default CardContact;
