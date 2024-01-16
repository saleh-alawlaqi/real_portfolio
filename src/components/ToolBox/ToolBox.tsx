import { useState } from "react";
import { tools } from "../../types";
import { AnimatePresence, motion } from "framer-motion";

interface ToolBoxProps {
    tool: tools;
}
const toolToTooltip: { [key in tools]: string } = {
    react: "React",
    angular: "Angular",
    vue: "Vue",
    tailwind: "Tailwind",
    sass: "Sass",
    svelte: "Svelte",
    express: "Express",
    nodejs: "Node",
    mongodb: "MongoDB",
    firebase: "Firebase",
    redux: "Redux",
    socketio: "Socket.io",
    typescript: "TypeScript",
    csharp: "C#",
    cplus: "C++",
    c: "C",
    java: "Java",
    python: "Python",
    framer: "Framer",
    kotlin: "Kotlin",
    mysql: "MySQL",
};
const ToolBox = ({ tool }: ToolBoxProps) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    return (
        <div className="flex flex-col relative items-center">
            <AnimatePresence>
                {show && (
                    <motion.span
                        animate={{ opacity: 1, y: "-40px" }}
                        initial={{ opacity: 0, y: "-25px" }}
                        exit={{ opacity: 0, y: "-25px" }}
                        className="p-2 px-3 rounded-full text-[16px] leading-none font-semibold absolute textt text-white "
                    >
                        {toolToTooltip[tool]}
                    </motion.span>
                )}
            </AnimatePresence>
            <span
                onMouseEnter={handleShow}
                onMouseLeave={handleHide}
                className={`tool_box bg-gray-100 rounded-md w-10 h-10 ${tool}`}
            ></span>
        </div>
    );
};

export default ToolBox;
