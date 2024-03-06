import Marquee from "react-fast-marquee";
import ProjectSlide from "./ProjectSlide";

interface ProjectsMarqueeProps {
    projects: string[];
    direction?: "down" | "left" | "right" | "up";
    id?: string;
}

const ProjectsMarquee = ({ direction, projects, id }: ProjectsMarqueeProps) => {
    return (
        <div
            id={id}
            className="projects-slider mt-16 overflow-visible  flex self-center w-full relative"
        >
            <Marquee
                autoFill
                pauseOnHover
                direction={direction}
                className="flex relative !overflow-visible"
            >
                {projects.map((_, index) => (
                    <ProjectSlide key={index} />
                ))}
            </Marquee>
        </div>
    );
};

export default ProjectsMarquee;
