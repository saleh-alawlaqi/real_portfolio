import { Button } from "@nextui-org/react";
import ToolBox from "../../components/ToolBox";
import { useProjectContext } from "./ProjectContext";
import FullArrowLeftIcon from "../Portfolio/FullArrowLeftIcon";
import FullArrowRightIcon from "../Portfolio/FullArrowRightIcon";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

const ProjectHeader = () => {
    const { project } = useProjectContext();
    const { name, smallDescription, tools } = project;
    const matches = useMediaQuery("(min-width: 1024px)");
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="info_and_tools border border-slate-100 p-8 lg:items-center rounded-lg lg:space-x-14 bg-white flex flex-col w-full lg:flex-row"
        >
            {matches && (
                <Button color="primary" isIconOnly variant="bordered" className="rounded-full">
                    <FullArrowLeftIcon />
                </Button>
            )}
            <div className="info flex flex-col lg:flex-row flex-1 lg:items-center lg:gap-14">
                <div className="name_and_description flex-1  flex flex-col ">
                    <h2 className="text-[32px] font-bold font-gt text-slate-700">{name}</h2>
                    <p className="mt-1 text-slate-600 ">{smallDescription}</p>
                </div>
                <div className="tools  flex flex-wrap mt-6 lg:mt-0 lg:flex-nowrap lg:grid gap-2 lg:grid-cols-4">
                    {tools.map((tool, i) => (
                        <ToolBox bgColor="bg-slate-50" key={i} tool={tool} />
                    ))}
                </div>
            </div>
            {matches && (
                <Button color="primary" variant="bordered" isIconOnly className="rounded-full">
                    <FullArrowRightIcon />
                </Button>
            )}
            {!matches && (
                <div className="flex mt-5 justify-between">
                    <Button color="primary" isIconOnly variant="bordered" className="rounded-full">
                        <FullArrowLeftIcon />
                    </Button>
                    <Button color="primary" variant="bordered" isIconOnly className="rounded-full">
                        <FullArrowRightIcon />
                    </Button>
                </div>
            )}
        </motion.div>
    );
};

export default ProjectHeader;
