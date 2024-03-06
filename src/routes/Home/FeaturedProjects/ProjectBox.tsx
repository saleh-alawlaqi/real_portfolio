import { motion, useAnimation, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ToolBox from "../../../components/ToolBox";
import { IProject } from "../../../types";
import { useInView } from "framer-motion";

interface ProjectBoxProps {
    project: IProject;
    index: number;
}
const ProjectBox = ({ project, index }: ProjectBoxProps) => {
    const boxRef = useRef(null);
    const { scrollY } = useScroll();
    const [scrollStart, setScrollStart] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(0);

    useEffect(() => {
        const boxTop = (boxRef.current as any).offsetTop || 0;
        // Adjust these values based on your needs
        const offsetStart = 300;
        const offsetEnd = 700;
        setScrollStart(boxTop - offsetStart);
        setScrollEnd(boxTop + offsetEnd);
    }, [index]);

    const projectWidth = useTransform(scrollY, [scrollStart, scrollEnd], ["80%", "100%"]);
    const [showOverlay, setShowOverlay] = useState(false);

    const handleMouseEnter = () => setShowOverlay(true);
    const handleMouseLeave = () => setShowOverlay(false);

    return (
        <motion.div
            ref={boxRef}
            style={{ width: projectWidth }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex project-image cursor-pointer w-full h-auto lg:h-[90vh] rounded-[2rem] items-center flex-col"
        >
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="project-info overflow-hidden p-6 lg:px-24 w-full justify-between flex flex-col-reverse lg:flex-row items-center backdrop-blur-md h-full bg-black rounded-[2rem] bg-opacity-50"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -150 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -150 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                            }}
                            className="left-section flex gap-5 flex-col lg:w-[35rem]"
                        >
                            <div className="name-and-description mt-6 lg:mt-0 flex gap-2 flex-col ">
                                <span className="text-[26px] lg:text-[68px] text-white font-inter_extrabold">
                                    {project.name}
                                </span>
                                <p className="text-white text-base">{project.smallDescription}</p>
                            </div>
                            <div className="tools mt-2 lg:mt-5 grid">
                                {project.tools.map((tool) => (
                                    <ToolBox tool={tool} key={tool} />
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 150 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 150 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: 0.2,
                            }}
                            className="rounded-2xl w-full h-[10rem] lg:h-[25rem] lg:w-[25rem] bg-project"
                        ></motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProjectBox;
