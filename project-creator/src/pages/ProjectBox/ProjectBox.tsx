import { Button, Link } from "@nextui-org/react";
import { IProject } from "../../../../src/types";
import { Link as RouterLink } from "react-router-dom";
const ProjectBox = ({ name, mainImage, type, gradient, demo, id }: IProject) => {
    return (
        <div
            className={`flex relative row bd p-2 rounded-md items-center ${gradient} justify-between`}
        >
            <div className="flex z-10 justify-between rounded-md items-center bg-white p-5 w-full">
                <span
                    className="w-32 border border-slate-500 bg-cover bg-no-repeat bg-center h-24"
                    style={{ backgroundImage: `url(${mainImage})` }}
                ></span>
                <div className="flex w-[14rem] ml-5 gap-1 flex-col">
                    <h1 className=" text-2xl font-bold">{name}</h1>
                    <span className="w-[14rem] text-xl">{type}</span>
                </div>
                <Button as={Link} href={demo} target="_blank" color="primary" className="ml-auto">
                    View demo
                </Button>
                <Button as={RouterLink} to={`project/${id}`} className="ml-2">
                    View project
                </Button>
            </div>
        </div>
    );
};

export default ProjectBox;
