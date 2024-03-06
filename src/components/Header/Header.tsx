import { NavLink } from "react-router-dom";
import CustomButton from "../Button/CustomButton";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex px-7 z-20 w-full flex-col items-center md:px-10 lg:px-16 xl:px-[120px]"
        >
            <div className="flex items-center justify-between w-full rounded-xl lg:max-w-[1200px]">
                <NavLink
                    to={"/"}
                    className="font-inter_black text-gradient text-[18px] lg:text-[22px]"
                >
                    AlexDevStudio.
                </NavLink>
                <CustomButton to="/contact" variant="light" size="small">
                    Contact Me
                </CustomButton>
            </div>
        </motion.div>
    );
};

export default Header;
