import { Button } from "@nextui-org/react";
import BigProjectBox from "../BigProjectBox";
import Graphic from "../Graphic";
import { Link } from "react-router-dom";
import { projectsList } from "../../content/projects";

const FeaturedProjects = () => {
    return (
        <div className="bg-gray-950 mt-28 w-full p-8 py-32 lg:p-12 lg:py-32 relative flex flex-col items-center overflow-hidden">
            <span className="text-white opacity-10 font-bold font-gt tracking-wide text-[140px] absolute left-0 top-[2em] -rotate-90">
                FEATURED
                <br />
                WORK
            </span>
            <Graphic position="top" />
            <div className="flex z-10 flex-col w-full lg:max-w-[1100px] items-start space-y-10">
                <div className="flex flex-col space-y-6 items-start w-full">
                    <div className="heading_and_button flex flex-col space-y-6 items-start lg:flex-row lg:justify-between w-full">
                        <h2 className="text-[34px] lg:text-[46px] text-white font-bold font-gt">
                            Featured Work
                        </h2>
                        <Button
                            size="lg"
                            as={Link}
                            to="/portfolio"
                            className="rounded-full font-semibold bg-white text-sky-500 shadow-lg"
                        >
                            View all projects
                        </Button>
                    </div>
                    <hr className="border-slate-500 border w-full" />
                </div>
                <div className="projects flex flex-col w-full space-y-12">
                    {projectsList.slice(0, 3).map((project) => (
                        <BigProjectBox {...project} />
                    ))}
                </div>
            </div>
            <Graphic position="bottom" />
        </div>
    );
};

export default FeaturedProjects;
