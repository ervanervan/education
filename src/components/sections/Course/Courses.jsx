import React from "react";
import { categories, courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";
import { motion } from "framer-motion";

const Courses = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-teal-700">Categories</span>
        </div>
        <p className="text-sm mx-auto leading-7 text-gray max-w-[700px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          doloribus unde quisquam non porro odit nulla a omnis sit minus! Facere
          amet totam maiores consequatur iusto, eos pariatur aut rem doloribus
          blanditiis doloremque? Magni sunt accusamus ad aut commodi velit nihil
          illo molestiae, maiores maxime? Earum ab corrupti quisquam quibusdam.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mt-12"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
      <div className="text-xl font-bold mt-32">Most Popular Courses</div>
      <div className="mt-12 w-full overflow-x-hidden relative">
        <div className="flex md:w-full gap-8 sm:w-[170%] xs:w-[340%] w-[400%] animate-slide">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
