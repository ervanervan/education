import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-teal-700 rounded-lg">
          <img src={about} alt="about" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875] text-[1.5rem] mb-5">
            We provide the <br /> best{" "}
            <span className="text-teal-700">online courses</span>{" "}
          </div>
          <p className="mb-4 text-sm leading-7 text-gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            repudiandae provident officiis rerum non cumque, et quae quo
            tempore. Nam maxime vero eaque unde sint adipisci praesentium
            delectus blanditiis quis?
          </p>
          <button className="px-6 py-3 font-bold text-sm border border-solid border-gray rounded-lg bg-slate-50 hover:bg-slate-100 active:bg-slate-200">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
