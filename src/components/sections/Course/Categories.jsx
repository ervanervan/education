import React from "react";
import { motion } from "framer-motion";

const Categories = ({ icon, category }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-md">
      <div className="text-4xl text-teal-700">{icon}</div>
      <div>{category}</div>
      <a href="" className="text-sm text-gray">
        View More
      </a>
    </div>
  );
};

export default Categories;
