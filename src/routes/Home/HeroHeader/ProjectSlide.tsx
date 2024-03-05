import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectSlide = ({ content }: any) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            className="relative flex project-slide-container items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseDown={() => setIsHovered(false)}
        >
            <div className="project-slide"></div>
            {isHovered && <div className="project-slide-shadow first"></div>}
        </motion.div>
    );
};
export default ProjectSlide;
