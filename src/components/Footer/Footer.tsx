import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden flex mx-8 lg:mx-12 flex-col pt-28 items-center pb-10 w-full ">
            <div className="footer-blur-2 absolute -bottom-5 right-0 w-1/2 h-[5rem]"></div>
            <div className="footer-blur-1 absolute -bottom-5 left-0 w-1/2 h-[5rem]"></div>
            <div className="footer-container footer-bg  p-8 z-10 gap-8 flex max-w-[1300px] flex-col xl:flex-row items-center justify-between w-full md:p-8 lg:p-10">
                <NavLink to={"/"} className="font-inter_black  text-[20px] lg:text-[22px]">
                    AlexDevStudio.
                </NavLink>
                <ul className="flex flex-wrap justify-center gap-5 lg:gap-2 items-center text-gray-900 dark:text-white">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Contact Me
                        </a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2022{" "}
                    <a href="#" className="hover:underline">
                        Alex Silver™
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
