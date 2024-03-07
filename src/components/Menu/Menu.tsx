import { useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
const Menu = () => {
    const controls = useAnimation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const matches = useMediaQuery("(min-width: 768px)");

    // State to track the last scroll position
    const [lastYPos, setLastYPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;

            // Adjust values as needed for your design
            const visibleBottom = "20px";
            const hiddenBottom = "-500px";

            if (isScrollingUp) {
                controls.start({ bottom: visibleBottom, opacity: 1 });
            } else {
                controls.start({ bottom: hiddenBottom, opacity: 0 });
            }

            setLastYPos(yPos);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastYPos, controls]);

    return (
        <motion.div
            initial={{ bottom: "20px" }}
            animate={controls}
            transition={{ type: "tween", duration: 0.4 }}
            className="bottom-nav p-2 background-blur shadow-medium rounded-xl fixed z-50 w-[80%] md:w-[23rem] md:rounded-full"
        >
            {!matches ? (
                <div className="flex-col flex">
                    <motion.ul
                        className="flex flex-col overflow-hidden"
                        animate={{
                            height: isMenuOpen ? "auto" : 0,
                            marginBottom: isMenuOpen ? "20px" : "0px",
                        }}
                        initial={false}
                        transition={{ duration: 0.2 }}
                    >
                        <NavLink to="/" className="menu-button">
                            Home
                        </NavLink>
                        <NavLink to="/portfolio" className="menu-button">
                            Projects
                        </NavLink>
                        <NavLink to="/about" className="menu-button ">
                            About
                        </NavLink>
                        <NavLink to="/contact" className="menu-button">
                            Contact
                        </NavLink>
                    </motion.ul>

                    <button onClick={toggleMenu} className="menu-button font-inter_bold">
                        Menu
                    </button>
                </div>
            ) : (
                <div className="flex">
                    <NavLink to="/" className="menu-button md:rounded-full">
                        Home
                    </NavLink>
                    <NavLink to="/portfolio" className="menu-button md:rounded-full">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="menu-button md:rounded-full ">
                        About
                    </NavLink>
                    <NavLink to="/contact" className="menu-button md:rounded-full">
                        Contact
                    </NavLink>
                </div>
            )}
        </motion.div>
    );
};

export default Menu;
