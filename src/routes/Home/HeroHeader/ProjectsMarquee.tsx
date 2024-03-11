import ProjectSlide from "./ProjectSlide";

interface ProjectsMarqueeProps {
    projects: string[];
    direction?: "down" | "left" | "right" | "up";
    id?: string;
}

const ProjectsMarquee = ({ id }: ProjectsMarqueeProps) => {
    return (
        <div
            id={id}
            className="projects-slider mt-16 overflow-visible  flex self-center w-full relative"
        >
            {/* <Marquee
                autoFill
                loop={1}

                pauseOnHover
                direction={direction}
                className="flex relative !overflow-visible"
            > */}
            {[...Array(20)].map((_, index) => (
                <ProjectSlide key={index} />
            ))}
            {/* </Marquee> */}
        </div>
    );
};

export default ProjectsMarquee;
