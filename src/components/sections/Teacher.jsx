import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";

const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 gap-8 place-items-center">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem]">
            Become <span className="text-teal-700">An Instructor</span> <br />{" "}
            of Our Platform
          </div>
          <p className="my-4 text-sm leading-7 text-gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos facere
            quasi aliquam voluptates hic nulla ea tenetur dolore consectetur
            accusantium cumque aliquid maxime dignissimos alias, a iusto
            consequuntur officiis deleniti!
          </p>
          <button className="px-6 py-3 text-white font-bold rounded-lg text-sm bg-teal-700 hover:bg-teal-800 active:bg-teal-900">
            Start Teaching
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="teacher1" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem]">
            Become <span className="text-teal-700">An Instructor</span> <br />{" "}
            of Our Platform
          </div>
          <p className="my-4 text-sm leading-7 text-gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos facere
            quasi aliquam voluptates hic nulla ea tenetur dolore consectetur
            accusantium cumque aliquid maxime dignissimos alias, a iusto
            consequuntur officiis deleniti!
          </p>
          <button className="px-6 py-3 text-white font-bold rounded-lg text-sm bg-teal-700 hover:bg-teal-800 active:bg-teal-900">
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="teacher2" />
        </div>
      </div>
      <div className="my-8 text-center font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-teal-700">Asked Questions</span>
      </div>
      <div className="mt-12 mx-auto max-w-[700px]">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
