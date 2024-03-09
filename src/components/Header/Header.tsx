import { NavLink } from "react-router-dom";
import CustomButton from "../Button/CustomButton";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <div className="flex px-7 z-20 w-full flex-col items-center md:px-10 lg:px-16">
            <div className="flex items-center justify-between w-full rounded-xl lg:max-w-[1300px]">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", damping: 20, stiffness: 110 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <NavLink
                        to={"/"}
                        className="font-inter_black text-gradient text-[18px] lg:text-[22px]"
                    >
                        AlexDevStudio.
                    </NavLink>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", damping: 20, delay: 0.3, stiffness: 110 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <CustomButton to="/contact" variant="light" size="small">
                        Contact Me
                    </CustomButton>
                </motion.div>
            </div>
        </div>
    );
};

export default Header;
