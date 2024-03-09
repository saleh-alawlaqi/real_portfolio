import { useScroll, useTransform, motion } from "framer-motion";
import { useAppContext } from "../../../App";
import CustomButton from "../../../components/Button/CustomButton";
import ProjectBox from "./ProjectBox";
import { useEffect, useState } from "react";

const FeaturedProjects = ({ height }: any) => {
    const { projects } = useAppContext();
    // const { scrollY } = useScroll();
    // const right = useTransform(scrollY, [0, 1000], ["-100%", "0%"]);
    // const [isFixed, setIsFixed] = useState(true);
    // const [topPosition, setTopPosition] = useState("0px");

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const value = right.get();
    //         // Delay switching back to fixed to smooth the transition
    //         if (value === "0%") {
    //             setIsFixed(false);
    //             setTopPosition(`${scrollY.get()}px`);
    //         } else {
    //             // Adjust this value as needed to reduce lag
    //             // Use a condition with a small buffer (like scrollY being less than a threshold) before switching back to fixed
    //             setTimeout(() => {
    //                 setIsFixed(true);
    //                 setTopPosition("0px");
    //             }, 500);
    //         }
    //     };
    //     const unsubscribe = right.on("change", handleScroll);
    //     return () => {
    //         unsubscribe();
    //     };
    // }, [right]);

    return (
        <motion.div
            id="featured_projects"
            className={`bg-black w-full p-8 lg:p-12 lg:py-24 z-10 gap-5 flex flex-col items-center overflow-hidden`}
        >
            <div className="flex flex-col w-full bd lg:max-w-[1300px] items-center gap-16">
                <h2 className="text-[32px] text-white font-inter xl:text-[62px] self-start">
                    Featured projects
                </h2>
                <div className="projects gap-10 items-center flex flex-col w-full">
                    {projects.slice(0, 3).map((project, index) => (
                        <ProjectBox key={index} index={index} project={project} />
                    ))}
                </div>
                <CustomButton className="w-full xl:w-auto" variant="light">
                    View all projects
                </CustomButton>
            </div>
        </motion.div>
    );
};

export default FeaturedProjects;
