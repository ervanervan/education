import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavLinks from "./MobileNavLinks";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <div
      className={`${
        active ? "shadow-lg bg-solitude" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-3 transition-all duration-300" : "py-5"
          } container mx-auto py-4 flex items-center justify-between px-6`}
        >
          <a
            href="/"
            className="text-xl text-teal-700 font-bold uppercase tracking-wide"
          >
            Skills
          </a>
          <HiMenuAlt1
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setToggle(true)}
          />
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
            <button className="px-6 py-3 font-bold text-sm text-white rounded-lg bg-teal-700 hover:bg-teal-800 active:bg-teal-900">
              Sign Up
            </button>
          </div>
          {toggle && (
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-9/12 top-0 right-0 z-20 bg-teal-700 text-white flex flex-col items-center justify-center shadow-lg gap-8 p-8"
            >
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <button className="px-6 py-3 font-bold text-sm text-black border border-solid border-gray rounded-lg bg-slate-50 hover:bg-slate-100 active:bg-slate-200">
                Sign Up
              </button>
              <HiX
                className="absolute right-6 top-6 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
