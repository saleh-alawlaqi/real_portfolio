import { NavLink } from "react-router-dom";
import { ISmallProjectBoxProps, projectTabsList } from "../../types";
import { motion, useMotionValue, useTransform } from "framer-motion";
import CustomChip from "../CustomChip";

interface SmallProjectBoxProps extends ISmallProjectBoxProps {
    index: number;
}
const SmallProjectBox = ({ name, gradient, id, type, mainImage }: SmallProjectBoxProps) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Transform motion values to rotate values
    // Adjust the '100' value to control the sensitivity of the tilt
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    // Handle mouse move event
    const handleMouseMove = (event: any) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const xPos = (event.clientX - rect.left) / rect.width;
        const yPos = (event.clientY - rect.top) / rect.height;
        const offsetX = xPos * 200 - 100; // Range -100 to 100
        const offsetY = yPos * 200 - 100; // Range -100 to 100

        x.set(offsetX);
        y.set(offsetY);
    };
    return (
        <NavLink className={"flex flex-col"} to={`/project/${id}`}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                    x.set(0);
                    y.set(0);
                }}
                style={{
                    rotateX: rotateX,
                    perspective: 1000, // Add perspective

                    rotateY: rotateY,
                }}
                whileHover={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="project_box border border-slate-200 cursor-pointer flex flex-col rounded-2xl  bg-white"
            >
                <div
                    className={`w-full ${gradient} bg-center p-8 items-stretch flex  h-[18em] bg-cover rounded-tl-2xl rounded-tr-2xl`}
                >
                    <div
                        style={{ backgroundImage: `url(${mainImage})` }}
                        className="laptop bg-transparent w-full rounded-lg shadow-2xl thumbnail"
                    ></div>
                </div>
                <div className="info flex-1 flex flex-col mt-6 px-5 pb-5">
                    <div className="name_and_description mb-auto">
                        <div className="flex flex-col">
                            <h3 className="font-medium  text-gray-700 text-[20px] truncate">
                                {name}
                            </h3>
                            <CustomChip
                                color={"blue"}
                                variant="bordered"
                                className="type mt-4 w-full"
                            >
                                {projectTabsList.find((tab) => tab.type === type)?.name}
                            </CustomChip>
                        </div>
                        {/* {!hideDescription && <p className="text-gray-500 mt-3">{smallDescription}</p>} */}
                    </div>
                    {/* <div className="buttons flex space-x-5 mt-6">
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
                </div> */}
                </div>
            </motion.div>
        </NavLink>
    );
};

export default SmallProjectBox;
