import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ToolBox from "../../../components/ToolBox";
import { IProject } from "../../../types";

interface ProjectBoxProps {
    project: IProject;
    index: number;
}
const ProjectBox = ({ project, index }: ProjectBoxProps) => {
    const { scrollY } = useScroll();
    let scrollStart = 0;
    let scrollEnd = 0;
    if (index === 0) {
        scrollStart = 300;
        scrollEnd = 800;
    } else if (index === 1) {
        scrollStart = 1000;
        scrollEnd = 1500;
    } else if (index === 2) {
        scrollStart = 1800;
        scrollEnd = 2300;
    }

    const projectWidth = useTransform(scrollY, [scrollStart, scrollEnd], ["80%", "100%"]);
    const [showOverlay, setShowOverlay] = useState(false);

    const handleMouseEnter = () => setShowOverlay(true);
    const handleMouseLeave = () => setShowOverlay(false);

    return (
        <motion.div
            style={{ width: projectWidth }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex project-image cursor-pointer w-full h-[40rem] rounded-xl items-center flex-col"
        >
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="project-info px-24 w-full justify-between flex items-center backdrop-blur-md h-full bg-black rounded-xl bg-opacity-50"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -150 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                            }}
                            className="left-section flex gap-5 flex-col w-[35rem]"
                        >
                            <div className="name-and-description flex gap-2 flex-col ">
                                <span className="text-[68px] text-white font-inter_extrabold">
                                    {project.name}
                                </span>
                                <p className="text-white text-base">{project.smallDescription}</p>
                            </div>
                            <div className="tools mt-5 grid">
                                {project.tools.map((tool) => (
                                    <ToolBox tool={tool} />
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 150 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: 0.2,
                            }}
                            className="w-[25rem] rounded-2xl h-[25rem] bg-project"
                        ></motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProjectBox;
