import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
    return (
        <div
            
            className="w-full  flex flex-col border-purple-600 p-5 md:flex-row text-white bg-[#1C1C2E] shadow-xl shadow-gray-900 rounded-lg overflow-hidden my-15"
        >
            {/* Title Section */}
            <div className="flex-1 p-4 flex border-b md:border-b-0">
                <h2 className="text-2xl md:text-3xl font-bold  ">
                    {course.title}
                </h2>
            </div>
            {/* Description Section */}
            <div className="flex-1 opacity-80 p-4 flex flex-col justify-between  ">
                <p className=" text-sm md:text-base text-start">
                    {course.description}
                </p>
                <div className="py-4  hover:text-shadow-lg/30 text-shadow-white w-fit cursor-pointer">
                    <Link to={`${course.link}`} className="flex items-center gap-x-4 md:gap-x-10">
                        <h3 className="text-base md:text-lg  ">View Details</h3>
                        <span className="text-2xl md:text-3xl">
                            <IoIosArrowRoundForward />
                        </span>
                    </Link>
                    <hr  className="mt-2 opacity-70" />
                </div>
            </div>
            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden rounded-md">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-contain rounded-md"
                />
                <motion.div
                    className="absolute top-0 left-0 rounded-md w-full h-full bg-[#1C1C2E] z-10"
                    initial={{ y: 0 }}
                    whileInView={{ y: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                />
            </div>
        </div>
    );
};

export default Course;
