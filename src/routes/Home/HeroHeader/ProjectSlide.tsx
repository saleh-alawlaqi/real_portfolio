import { useState } from "react";
import { motion } from "framer-motion";

const ProjectSlide = () => {
    // State to track the hover status
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnterHandler = () => setIsHovered(true);
    const onMouseLeaveHandler = () => setIsHovered(false);

    return (
        <div
            className={`project-slide-container ${
                isHovered ? "scale-125 opacity-100 z-10" : "opacity-50"
            }`}
        >
            <motion.div
                className="relative flex w-[220px] h-[130px] xl:w-[240px] xl:h-[170px] ml-3 items-center justify-center"
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                <div className="project-slide w-full h-full relative cursor-pointer rounded-2xl"></div>
            </motion.div>
        </div>
    );
};
export default ProjectSlide;
