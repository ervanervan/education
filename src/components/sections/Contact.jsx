import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="mx-auto text-center max-w-[600px]">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Subscribe Newsletter
        </div>
        <p className="text-gray text-sm leading-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          porro, culpa unde quo quis eos iste sapiente consequuntur libero
          reiciendis eveniet illo, nesciunt tempora enim itaque? Aliquam quidem
          accusantium laudantium.
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          action=""
          className="mt-5"
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="sm:p-3 p-2 outline-none text-sm rounded-l-lg shadow-md sm:w-72 w-60"
          />
          <button className="text-white font-bold rounded-r-lg text-sm bg-teal-700 hover:bg-teal-800 active:bg-teal-900 sm:p-3 p-2 shadow-md">
            Subscribe
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
