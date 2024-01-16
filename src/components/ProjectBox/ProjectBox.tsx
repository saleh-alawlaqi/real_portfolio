import { Button, Link } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { ISmallProjectBoxProps } from "../../types";
import { motion } from "framer-motion";
import { Chip } from "@nextui-org/react";

interface ProjectBoxProps extends ISmallProjectBoxProps {
    index: number;
}

const ProjectBox = ({ name, demo, gradient, smallDescription, index, ready }: ProjectBoxProps) => {
    const delay = index * 0.15;

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay, ease: "linear" }}
            className="project_box border border-slate-200 flex flex-col rounded-2xl  bg-gray-50"
        >
            <div
                className={`w-full ${gradient} bg-center py-10 px-8 items-stretch flex bg-cover h-[15em] rounded-tl-2xl rounded-tr-2xl`}
            >
                <div className="laptop bg-white w-full rounded-lg shadow-2xl"></div>
            </div>
            <div className="info flex-1 flex flex-col mt-6 px-5 pb-5">
                <div className="name_and_description mb-auto">
                    {ready ? (
                        <Chip
                            color="success"
                            className="font-bold bg-teal-500 font-inter text-[14px] text-white"
                        >
                            Ready
                        </Chip>
                    ) : (
                        <Chip
                            color="warning"
                            className="font-bold font-inter bg-amber-500 text-[14px] text-white"
                        >
                            In Progress
                        </Chip>
                    )}

                    <h3 className="font-bold mt-1 text-gray-700 text-[24px]">{name}</h3>
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
                        href={demo}
                        className="flex-1 rounded-full font-semibold font-inter"
                    >
                        View Demo
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectBox;
