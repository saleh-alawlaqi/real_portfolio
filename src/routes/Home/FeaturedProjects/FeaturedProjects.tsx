import { motion, useInView } from "framer-motion";
import { useAppContext } from "../../../App";
import CustomButton from "../../../components/Button/CustomButton";
import ProjectBox from "./ProjectBox";
import WritingEffect from "../../../components/WritingEffect";
import { useRef } from "react";

const FeaturedProjects = () => {
    const { projects } = useAppContext();
    const featuredProjectsRef = useRef(null);
    const isInView = useInView(featuredProjectsRef, { margin: "-300px", once: true });
    return (
        <motion.div
            id="featured_projects"
            ref={featuredProjectsRef}
            className={`featured_projects w-full p-8 relative lg:p-12 lg:py-24 z-10 gap-5 mt-10 flex flex-col items-center overflow-hidden`}
        >
            <div className="flex flex-col w-full lg:max-w-[1300px] items-center gap-16">
                <h2 className="text-[32px] text-white font-gt_medium xl:text-[62px] self-start">
                    {isInView && <WritingEffect text="Featured Projects" />}
                </h2>
                <div className="projects gap-10 items-center flex flex-col w-full">
                    {projects.slice(0, 3).map((project, index) => (
                        <ProjectBox key={index} index={index} project={project} />
                    ))}
                </div>
                <CustomButton className="w-full md:w-auto" variant="light">
                    View all projects
                </CustomButton>
            </div>
            <div className="featured-blur-1"></div>
            <div className="featured-blur-2"></div>
            <div className="featured-blur-3"></div>
            <div className="featured-blur-4"></div>
        </motion.div>
    );
};

export default FeaturedProjects;
