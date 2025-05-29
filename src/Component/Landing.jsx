import React from "react";
import { motion } from "framer-motion";
const Landing = () => {
    return (
        <div className=" bg-[url(/bg.png)] bg-cover bg-center 2xl:bg-bottom">
            {" "}
            <div className="h-screen max-w-screen-xl mx-auto px-5 lg:px-15 2xl:text-center ">
                <section className="relative py-26 w-full text-white">
                    <div className="  absolute top-0 left-0 w-full h-full -z-10"></div>
                    <div className="">
                        <h1 className="text-4xl text-center  md:text-7xl font-bold z-10 sm:mt-10 mt-15 2xl:mt-35  overflow-hidden">
                            <motion.span
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    ease: [0.22, 1, 0.36, 1],
                                    duration: 0.8,
                                }}
                                className="inline-block origin-left"
                            >
                                {" "}
                                Welcome to Vizztal Academy
                            </motion.span>
                        </h1>
                        <p className=" text-md lg:text-xl text-center md:text-2xl max-w-3xl mx-auto mt-10  overflow-hidden">
                            <motion.span
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    ease: [0.22, 1, 0.36, 1],
                                    duration: 0.8,
                                    delay: 0.3,
                                }}
                                className="inline-block origin-left"
                            >
                                In a world driven by technology, having the
                                right digital skills is no longer optional —
                                it’s essential. Vizztal Academy is your
                                launchpad into the most in-demand and
                                future-ready careers.
                            </motion.span>
                        </p>
                        <p className=" text-md lg:text-xl text-center md:text-2xl max-w-3xl mx-auto  mt-10  overflow-hidden">
                            <motion.span
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    ease: [0.22, 1, 0.36, 1],
                                    duration: 0.8,
                                    delay: 0.6,
                                }}
                                className="inline-block origin-left"
                            >
                                Whether you're a student aiming to break into
                                tech, a professional looking to upskill, or an
                                entrepreneur ready to master digital strategies,
                                we’ve crafted industry-focused learning
                                experiences to help you grow and succeed.
                            </motion.span>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Landing;
