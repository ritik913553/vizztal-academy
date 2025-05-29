import react from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="w-full  bg-[#080807] ">
            <footer className=" max-w-screen-xl p-5 text-white mx-auto  h-auto  flex flex-col py-20 xl:py-7  overflow-hidden ">
                <div className="relative z-[99] ">
                    <h1 className="text-6xl sm:text-8xl xl:text-9xl text-[#E0CCBB]">
                        Our
                    </h1>
                    <h1 className="text-6xl sm:text-8xl xl:text-9xl  text-[#E0CCBB]">
                        Story
                    </h1>
                    <div className="background -z-[99] absolute h-44 xl:h-[50vh] sm:h-[30vh] aspect-video -top-10 left-40 sm:left-[24%] sm:-top-20 xl:left-[30%]  md:left-[34%]  ">
                        <video
                            muted
                            autoPlay
                            loop
                            className="h-full w-full "
                            src="https://vizztal.com/assets/video-6-DO8Q7XSK.mp4"
                        ></video>
                    </div>
                </div>
                <p className="text-lg sm:text-xl mt-12 xl:mt-8 opacity-65 leading-[1.2] xl:text-lg xl:w-1/3">
                    The story behind Vizztal Solution is one of exploration,
                    creativity and curiosity.
                </p>

                <div className="divider w-full h-[1px] bg-[#E0CCBB] mt-10 xl:mt-16 opacity-70"></div>
                <div className="flex flex-wrap justify-center xl:justify-start items-center gap-20 gap-y-10 xl:gap-44  mt-5 xl:mt-14 sm:text-lg">
                    <ul className="">
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="#"
                            >
                                Jamshedpur
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="#"
                            >
                                Gangotri Enclave , Kadma
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="#"
                            >
                                Jharkhand
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="#"
                            >
                                +91 9973134651
                            </a>{" "}
                        </li>
                    </ul>
                    <ul className="">
                        <li>
                            {" "}
                            <a
                                href="https://vizztal.com"
                                target="_blank"
                                className="opacity-55 mt-1 inline-block"
                                to={"/website"}
                            >
                                Website
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                href="https://vizztal.com"
                                target="_blank"
                                className="opacity-55 mt-1 inline-block"
                                to={"/digital"}
                            >
                                Digital
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                href="https://vizztal.com"
                                target="_blank"
                                className="opacity-55 mt-1 inline-block"
                                to={"/contact"}
                            >
                                Contact us
                            </a>{" "}
                        </li>
                    </ul>
                    <ul>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="https://www.linkedin.com/in/vizztal/"
                                target="_blank"
                            >
                                Linkedin
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="https://www.instagram.com/vizztal/"
                                target="_blank"
                            >
                                Instagram
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="#"
                            >
                                Twitter
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="#"
                            >
                                Facebook
                            </a>{" "}
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
export default Footer;
