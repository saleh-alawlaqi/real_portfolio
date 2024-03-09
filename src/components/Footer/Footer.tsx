import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative w-full mt-32 lg:px-12">
            {/* <div className="footer-blur-1 absolute w-1/2 h-[15rem]"></div>
            <div className="footer-blur-2 absolute w-1/2 h-[15rem]"></div> */}
            <div className="footer-container footer-bg p-4 flex items-center justify-between w-full  md:p-8 lg:p-10 ">
                <NavLink
                    to={"/"}
                    className="font-inter_black text-gradient text-[18px] lg:text-[22px]"
                >
                    AlexDevStudio.
                </NavLink>
                <ul className="flex flex-wrap justify-center items-center text-gray-900 dark:text-white">
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
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Privacy & Policy
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
