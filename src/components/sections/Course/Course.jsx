import React from "react";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

const Course = ({ image, category, title, rating, participants, price }) => {
  return (
    <div className="min-w-[16rem] rounded-lg bg-white shadow-lg">
      <img src={image} alt="course" className="rounded-t-lg" />
      <div className="p-4">
        <div className="mt-2 text-xs text-teal-700">{category}</div>
        <div className="text-sm font-bold mt-2">{title}</div>
        <div className="text-sm font-medium text-gray my-2">${price}</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-solitude rounded-full">
              <AiOutlineUser className="text-teal-700" />
            </div>
            <div className="text-xs">{participants}</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-solitude rounded-full p-1">
              <AiOutlineStar className="text-yellow" />
            </div>
            <div className="text-xs">{rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
