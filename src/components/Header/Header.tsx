import { NavLink } from "react-router-dom";
import CustomButton from "../Button/CustomButton";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <div className="flex mt-10 z-20 w-full bd bg-transparent flex-col items-center">
            <div className="flex items-center bd justify-between w-[90%] rounded-xl lg:max-w-[1300px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ delay: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <NavLink to={"/"} className="font-gt text-black text-[18px] lg:text-[20px]">
                        AlexDevStudio.
                    </NavLink>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ delay: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
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
