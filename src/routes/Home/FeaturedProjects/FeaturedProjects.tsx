import { motion } from "framer-motion";
import { useAppContext } from "../../../App";
import CustomButton from "../../../components/Button/CustomButton";
import ProjectBox from "./ProjectBox";

const FeaturedProjects = () => {
    const { projects } = useAppContext();
    return (
        <motion.div
            id="featured_projects"
            className={`bg-black w-full p-8 lg:p-12 lg:py-24 z-10 gap-5 mt-10 flex flex-col items-center overflow-hidden`}
        >
            <div className="flex flex-col w-full bd lg:max-w-[1300px] items-center gap-16">
                <h2 className="text-[32px] text-white font-gt_medium xl:text-[62px] self-start">
                    Featured projects
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
        </motion.div>
    );
};

export default FeaturedProjects;
