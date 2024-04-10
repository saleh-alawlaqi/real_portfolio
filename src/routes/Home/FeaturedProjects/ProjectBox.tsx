import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ToolBox from "../../../components/ToolBox";
import { IProject } from "../../../types";
import { NavLink } from "react-router-dom";

interface ProjectBoxProps {
    project: IProject;
    index: number;
}
const ProjectBox = ({ project }: ProjectBoxProps) => {
    const boxRef = useRef(null);
    const showInView = useInView(boxRef, { margin: "-300px", once: true });
    const fullInView = useInView(boxRef, { amount: "all", margin: "80px 0px 80px 0px" });

    const [showOverlay, setShowOverlay] = useState(false);

    const handleMouseEnter = () => setShowOverlay(true);
    const handleMouseLeave = () => setShowOverlay(false);

    return (
        <motion.div
            ref={boxRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            transition={{ duration: 0.5, type: "spring", damping: 10, stiffness: 100 }}
            initial={{ opacity: 0, y: -50 }}
            animate={showInView ? { opacity: 1, y: 1 } : { opacity: 0, y: -50 }}
            style={project.bigCover ? { backgroundImage: `url(${project.bigCover})` } : {}}
            className="flex cursor-pointer big-cover w-full h-[90vh] rounded-[1rem] items-center flex-col"
        >
            <AnimatePresence>
                {(fullInView || showOverlay) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex w-full h-full bg-black rounded-[1rem] bg-opacity-55 backdrop-blur-md"
                    >
                        <NavLink
                            className="project-info overflow-hidden p-6 lg:px-24 lg:gap-20 w-full lg:justify-between flex flex-col-reverse lg:flex-row items-center h-full "
                            to={`/project/${project.id}`}
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
                                className="left-section flex gap-5 flex-col lg:flex-1"
                            >
                                <div className="name-and-description mt-6 lg:mt-0 flex gap-2 flex-col ">
                                    <span className="text-[26px] lg:text-[54px] leading-snug text-white font-gt">
                                        {project.name}
                                    </span>
                                    <p className="text-white leading-relaxed text-base">
                                        {project.smallDescription}
                                    </p>
                                </div>
                                <div className="tools mt-2 lg:mt-5 grid">
                                    {project.tools.map((tool) => (
                                        <ToolBox tool={tool} bgColor="bg-white" key={tool} />
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
                                style={{
                                    backgroundImage: `url(${project.mainImage})`,
                                }}
                                className="rounded-2xl w-full h-full small-cover bg-top lg:h-[23rem] bd lg:w-[33rem] bg-project"
                            ></motion.div>
                        </NavLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProjectBox;
