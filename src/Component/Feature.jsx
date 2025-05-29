import React, { useState } from "react";
import { motion } from "framer-motion";

const Feature = ({ feature, i }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative bg-[#1C1C2E] border border-purple-600 rounded-2xl p-6 shadow-lg overflow-hidden group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Animated Image Overlay */}
            <motion.img
                src={feature.image}
                alt={feature.title}
                className="absolute top-0 left-0 w-full h-full object-cover z-30"
                initial={{ x: "-100%" }}
                animate={{ x: hovered ? 0 : "-100%" }}
                transition={{  ease: "easeInOut", duration: 0.5 }}
            />
            {/* Content */}
            <div className="relative z-20 text-lg p-5 lg:p-10 lg:py-20 flex flex-col items-center justify-center">
                <h3 className=" text-[5vw] xl:text-[2vw] text-center font-semibold text-white mb-2">
                    {feature.title}
                </h3>
                <p className="text-gray-300 text-center text-sm xl:text-lg mt-5">
                    {feature.description}
                </p>
            </div>
        </div>
    );
};

export default Feature;