import Marquee from "react-fast-marquee";
import ProjectSlide from "./ProjectSlide";
import { useAppContext } from "../../../App";

interface ProjectsMarqueeProps {
    direction?: "down" | "left" | "right" | "up";
    id?: string;
}

const ProjectsMarquee = ({ direction, id }: ProjectsMarqueeProps) => {
    const { projects } = useAppContext();
    return (
        <div
            id={id}
            className="projects-slider mt-16 overflow-visible  flex self-center w-full relative"
        >
            <Marquee
                autoFill
                loop={1}
                speed={60}
                pauseOnHover
                direction={direction}
                className="flex relative !overflow-visible"
            >
                {projects.map((project, index) => (
                    <ProjectSlide
                        id={project.id}
                        gradient={project.gradient}
                        projectImage={project.mainImage}
                        key={index}
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default ProjectsMarquee;
