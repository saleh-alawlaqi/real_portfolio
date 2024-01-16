import { Button } from "@nextui-org/react";
import { IBigProjectBox, projectTabsList } from "../../types";
import ToolBox from "../ToolBox";
import CustomChip from "../CustomChip";
import { NavLink } from "react-router-dom";

interface BigProjectBoxProps extends IBigProjectBox {}
const BigProjectBox = (props: BigProjectBoxProps) => {
    return (
        <div className="flex flex-col bg-white pt-8 lg:pt-12 w-full rounded-xl">
            <div className="project_info flex flex-col px-8 lg:px-12 lg:pb-12 w-full pb-8">
                <div className="type_and_title flex flex-col">
                    <CustomChip color={props.type} variant="bordered" className="type text-[16px]">
                        {projectTabsList.find((tab) => tab.type === props.type)?.name}
                    </CustomChip>
                    <h3 className="title text-[40px] font-bold text-gray-800 mt-3">{props.name}</h3>
                </div>
                <div className="description_and_tools flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div className="description_and_button mt-2 space-y-6 lg:w-1/2">
                        <p className="description text-[18px] text-gray-600">
                            {props.smallDescription}
                        </p>
                        <Button
                            as={NavLink}
                            to={`/project/${props.id}`}
                            color="primary"
                            className="font-bold"
                            size="lg"
                            radius="full"
                        >
                            View Project
                        </Button>
                    </div>
                    <div className="tools mt-10 lg:mt-0 grid">
                        {props.tools.map((tool) => (
                            <ToolBox tool={tool} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="project_image w-full h-[30em] rounded-br-xl rounded-bl-xl bg-image bg-cover bg-no-repeat bg-center"></div>
        </div>
    );
};

export default BigProjectBox;
