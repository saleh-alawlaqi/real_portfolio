import { useState } from "react";
import Marquee from "react-fast-marquee";

const ProjectsMarquee = () => {
    return (
        <div className="projects-slider flex mt-8 self-center w-full">
            <Marquee autoFill pauseOnHover className="flex py-5">
                <div className="project-slide ml-3"></div>
                <div className="project-slide ml-3"></div>
                <div className="project-slide ml-3"></div>
                <div className="project-slide ml-3"></div>
            </Marquee>
        </div>
    );
};

export default ProjectsMarquee;
