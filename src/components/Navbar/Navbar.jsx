import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavLinks from "./MobileNavLinks";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed w-full top-0 left-0 z-20">
      <div>
        <div className="container mx-auto py-4 flex items-center justify-between px-6">
          <div className="text-xl text-teal font-bold uppercase tracking-wide">
            Skills
          </div>
          <HiMenuAlt1
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setToggle(true)}
          />
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
            <button className="px-6 py-3 font-bold text-sm rounded-lg border border-gray">
              Sign Up
            </button>
          </div>
          {toggle && (
            <div className="fixed h-full w-11/12 top-0 right-0 z-20 bg-teal text-white flex flex-col items-center justify-center shadow-lg gap-8 p-8">
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <button className="px-6 py-3 font-bold text-sm rounded-lg border border-gray bg-white text-black">
                Sign Up
              </button>
              <HiX
                className="absolute right-6 top-6 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
