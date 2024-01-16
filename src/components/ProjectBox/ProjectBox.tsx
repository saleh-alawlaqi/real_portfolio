import { Button, Link } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { ISmallProjectBoxProps } from "../../types";

interface ProjectBoxProps extends ISmallProjectBoxProps {}

const ProjectBox = ({
    name,
    demo,
    gradient,
    id,
    mainImage,
    smallDescription,
    type,
}: ProjectBoxProps) => {
    return (
        <div className="project_box flex flex-col rounded-2xl shadow-custom bg-gray-50">
            <div
                className={`w-full ${gradient} bg-center py-10 px-8 items-stretch flex bg-cover h-[15em] rounded-tl-2xl rounded-tr-2xl`}
            >
                <div className="laptop bg-white w-full rounded-lg shadow-2xl"></div>
            </div>
            <div className="info flex flex-col mt-6 px-5 pb-5">
                <div className="name_and_description">
                    <h3 className="font-bold text-gray-700 text-[24px]">{name}</h3>
                    <p className="text-gray-500 mt-1">{smallDescription}</p>
                </div>
                <div className="buttons flex space-x-5 mt-6">
                    <Button
                        as={NavLink}
                        className="flex-1 rounded-full font-semibold font-inter"
                        color="primary"
                        to="/project/1"
                    >
                        View Project
                    </Button>
                    <Button
                        color="secondary"
                        variant="flat"
                        as={Link}
                        className="flex-1 rounded-full font-semibold font-inter"
                    >
                        View Demo
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProjectBox;
