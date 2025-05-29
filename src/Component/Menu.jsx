import { IoMdClose } from "react-icons/io";
import AnimatedButton from "./AnimatedButton";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Menu = ({ setMenuIsOpen, menuIsOpen }) => {
    const closeMenu = () => {
        gsap.to(".menu", {
            rotate: -90,
            scale: 1.2,
            duration: 0.7,
            ease: "Power4.easeInOut",
            onComplete: () => {
                setMenuIsOpen(false);
            },
        });
    };
    useGSAP(() => {
        if (menuIsOpen) {
            gsap.to(".menu", {
                rotate: 0,
                scale: 1,
                duration: 0.7,
                ease: "Power4.easeInOut",
            });
        }
    }, [menuIsOpen]);

    return (
        <div className="menu w-full h-screen bg-black text-white p-8 lg:p-22 pt-10 z-[1000] fixed top-0 left-0 -rotate-[90deg] scale-[1.2] origin-bottom-left ">
            <div className="flex justify-end max-w-screen-2xl mx-auto 2xl:px-22">
                <h1
                    onClick={closeMenu}
                    className=" lg:text-4xl text-5xl cursor-pointer p-2 lg:p-0 lg:-mt-15 -mt-5"
                >
                    {" "}
                    <IoMdClose />{" "}
                </h1>
            </div>
            <div className=" flex flex-col  lg:flex lg:flex-row justify-between items-end lg:items-center lg:px-14 mt-10 lg:mt-5 ">
                <div className="flex flex-col gap-y-5 w-full px-5">
                    {[
                        "home",
                        "Web Development",
                        "Digital Marketing",
                        "Data Science"
                    ].map((text, index) => {
                       
                        return (
                            <div
                                key={index}
                                className='lg:mt-10 ' 
                            >
                                <AnimatedButton
                                    closeMenu={closeMenu}
                                    text={text}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className=" flex flex-col items-center w-full justify-center  p-10">
                    <h1 className="text-5xl hidden lg:block">Vizztal Acedemy</h1>
                    <div className="mt-20 flex gap-x-7 font-bold text-2xl flex-wrap gap-10 justify-between lg:text-xl">
                        {["Linkedin", "Instagram", "Facebook", "X"].map(
                            (text, index) => {
                                return (
                                    <a
                                        key={index}
                                        className="hover:filter hover:blur-[2px] transition duration-100"
                                        href=""
                                    >
                                        {text}
                                    </a>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
