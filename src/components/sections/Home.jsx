import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";

const Home = () => {
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-teal-700 mb-4 mt-8">
            Your E-Learning Partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is <br /> the new way <br /> to learn online
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eos nam
            aliquid ad reiciendis est?
          </p>
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 text-white font-bold rounded-lg text-sm bg-teal-700 hover:bg-teal-800 active:bg-teal-900">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold text-sm border border-solid border-gray rounded-lg bg-slate-50 hover:bg-slate-100 active:bg-slate-200">
              Discover
            </button>
          </div>
        </div>
        <div className="md:w-60%">
          <img src={hero} alt="education" />
        </div>
      </div>
      <div>
        <p className="text-xl text-center">
          We collaborate with{" "}
          <span className="text-teal-700">100+ universities and companies</span>
        </p>
        <div className="flex gap-8 flex-wrap items-center justify-center p-2">
          {logos.map((logo, index) => (
            <div className="w-28" key={index}>
              <img src={logo} alt="partner" className="w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
