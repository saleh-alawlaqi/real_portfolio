import { Button } from "@nextui-org/react";
import { IProject } from "../../../../src/types";
import { Link as RouterLink } from "react-router-dom";
const ProjectBox = ({ name, mainImage, type, gradient, id, ready }: IProject) => {
    return (
        <div
            className={`flex relative row  p-2 rounded-md items-center ${gradient} justify-between`}
        >
            <div className="flex z-10 justify-between rounded-md items-center bg-white p-5 w-full">
                {ready ? (
                    <span className="absolute -top-2  z-10 -left-5 bg-emerald-500 text-white text-sm p-1 px-2 rounded-full ">
                        Ready
                    </span>
                ) : (
                    <span className="absolute -top-2  z-10 -left-5 bg-amber-500 text-white text-sm p-1 px-2 rounded-full ">
                        Not ready
                    </span>
                )}
                <span
                    className="w-40 border rounded-md border-slate-200 bg-cover bg-no-repeat bg-center h-28"
                    style={{ backgroundImage: `url(${mainImage})` }}
                ></span>
                <div className="flex w-[14rem] ml-5 gap-1 flex-col">
                    <h1 className="text-2xl  font-bold">{name}</h1>
                    <span className="w-[14rem] text-lg">{type}</span>
                </div>
                <Button as={RouterLink} to={`project/${id}`} className="ml-auto">
                    View project
                </Button>
            </div>
        </div>
    );
};

export default ProjectBox;
