import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-teal-700 p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="mb-6 font-bold">Get Started</div>
          <p className="text-sm leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            placeat quasi cum ratione voluptate quidem ut quos. Ullam, sapiente
            voluptatem?
          </p>
        </div>
        <div>
          <div className="mb-6 font-bold">Services</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Web Design
            </a>
            <a href="" className="text-sm hover:underline">
              Web Development
            </a>
            <a href="" className="text-sm hover:underline">
              Digital Marketing
            </a>
            <a href="" className="text-sm hover:underline">
              UI/UX Design
            </a>
          </div>
        </div>
        <div>
          <div className="mb-6 font-bold">Company</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="" className="text-sm hover:underline">
              Careers
            </a>
            <a href="" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="mb-6 font-bold">Follow Us</div>
          <div className="text-sm mb-4">skillseducation@gmail.com</div>
          <div className="text-sm">+61234567890</div>
          <div className="flex gap-8 mt-4">
            <a href="" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsPinterest />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
