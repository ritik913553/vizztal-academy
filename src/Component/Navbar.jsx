import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Menu from "./Menu";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const location = useLocation();

    return !menuIsOpen ? (
        <div className={`w-full fixed z-[999] transition-colors duration-300 bg-transparent backdrop-blur-sm`}>
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-22 py-5 sm:py-5 flex items-center justify-between text-white">
                <div>
                    <h1 className="text-2xl sm:text-4xl font-bold">
                        Vizztal Academy
                    </h1>
                </div>
                <div className="flex items-center gap-20">
                    {/* Web Development */}
                    <h1 className="hidden lg:block text-xl cursor-pointer group relative">
                        <Link to="/webdevelopment" className="relative z-10">
                            Web Development
                            <span
                                className={`absolute left-0 -bottom-1 h-[2.5px] transition-all duration-300 
                                    ${location.pathname === "/webdevelopment"
                                        ? "w-full bg-purple-400"
                                        : "w-0 bg-white group-hover:w-full"
                                    }`}
                            />
                        </Link>
                    </h1>
                    {/* Digital Marketing */}
                    <h1 className="hidden lg:block text-xl cursor-pointer group relative">
                        <Link to="/digitalmarketing" className="relative z-10">
                            Digital Marketing
                            <span
                                className={`absolute left-0 -bottom-1 h-[2.5px] transition-all duration-300 
                                    ${location.pathname === "/digitalmarketing"
                                        ? "w-full bg-purple-400"
                                        : "w-0 bg-white group-hover:w-full"
                                    }`}
                            />
                        </Link>
                    </h1>
                    {/* Data Science */}
                    <h1 className="hidden lg:block text-xl cursor-pointer group relative">
                        <Link to="/datascience" className="relative z-10">
                            Data Science
                            <span
                                className={`absolute left-0 -bottom-1 h-[2.5px] transition-all duration-300 
                                    ${location.pathname === "/datascience"
                                        ? "w-full bg-purple-400"
                                        : "w-0 bg-white group-hover:w-full"
                                    }`}
                            />
                        </Link>
                    </h1>
                    <h1
                        className="text-4xl cursor-pointer"
                        onClick={() => setMenuIsOpen(true)}
                    >
                        <IoMdMenu />
                    </h1>
                </div>
            </div>
        </div>
    ) : (
        <Menu setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
    );
};

export default Navbar;