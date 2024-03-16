import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface IconBoxProps {
    path: string;
}
const IconBox = ({ path }: IconBoxProps) => {
    const [showIcon, setShowIcon] = useState(false);

    const onShowIcon = () => setShowIcon(true);
    const onHideIcon = () => setShowIcon(false);
    const variants = {
        hidden: {
            y: "10px",
            opacity: 0,
            transition: { type: "spring", stiffness: 400, damping: 25 },
        },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 400, damping: 25 } },
        exit: {
            y: "-10px",
            opacity: 0,
            transition: { type: "spring", stiffness: 400, damping: 25 },
        },
    };
    return (
        <div
            onMouseEnter={onShowIcon}
            onMouseLeave={onHideIcon}
            style={{
                backgroundImage: `url("${path}")`,
            }}
            className="icon-box rounded-md bg-slate-100 bg-center  center relative flex items-center justify-center bg-18 bg-no-repeat w-10 h-10"
        >
            <AnimatePresence>
                {showIcon && (
                    <motion.span
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-black bg-opacity-60 rounded-xl text-[14px] font-bold font-inter text-white p-2 px-3 bottom-[105%] absolute w-max "
                    >
                        {"title"}
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
    );
};

export default IconBox;
