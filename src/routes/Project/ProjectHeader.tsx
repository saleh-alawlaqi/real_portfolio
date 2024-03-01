import { Button } from "@nextui-org/react";
import ToolBox from "../../components/ToolBox";
import { useProjectContext } from "./ProjectContext";
import FullArrowLeftIcon from "../Portfolio/FullArrowLeftIcon";
import FullArrowRightIcon from "../Portfolio/FullArrowRightIcon";

const ProjectHeader = () => {
    const { project } = useProjectContext();
    const { name, smallDescription, tools } = project;
    return (
        <div className="info_and_tools border border-slate-200 p-8 lg:items-center rounded-2xl lg:space-x-14 bg-white flex flex-col w-full lg:flex-row">
            <Button color="primary" isIconOnly variant="bordered" className="rounded-full">
                <FullArrowLeftIcon />
            </Button>
            <div className="info flex flex-col lg:flex-row flex-1 lg:items-center lg:gap-14">
                <div className="name_and_description flex-1  flex flex-col ">
                    <h2 className="text-[32px] font-bold font-gt text-slate-700">{name}</h2>
                    <p className="mt-1 text-slate-600 ">{smallDescription}</p>
                </div>
                <div className="tools mt-6 lg:mt-0 grid">
                    {tools.map((tool) => (
                        <ToolBox tool={tool} />
                    ))}
                </div>
            </div>
            <Button color="primary" variant="bordered" isIconOnly className="rounded-full">
                <FullArrowRightIcon />
            </Button>
        </div>
    );
};

export default ProjectHeader;
