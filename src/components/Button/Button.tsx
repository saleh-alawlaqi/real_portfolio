import { useState } from "react";
import { motion } from "framer-motion";
import "./Button.css";
import { useMediaQuery } from "usehooks-ts";
const Button = ({
    children,
    classNames,
    fontSize,
}: {
    fontSize?: any;
    classNames?: string;
    children?: any;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const matches = useMediaQuery("(min-width: 768px)");

    const handleMouseEnter = (event: any) => {
        setIsHovered(true);
        updateMousePosition(event);
    };

    const handleMouseMove = (event: any) => {
        if (isHovered) {
            updateMousePosition(event);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const updateMousePosition = (event: any) => {
        if (!matches) return;
        const rect = event.target.getBoundingClientRect();
        const scaleFactor = 6; // Increase for subtler movements
        setMousePosition({
            x: (event.clientX - rect.left - rect.width / 2) / scaleFactor,
            y: (event.clientY - rect.top - rect.height / 2) / scaleFactor,
        });
    };
    return (
        <motion.button
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                x: isHovered ? mousePosition.x : 0,
                y: isHovered ? mousePosition.y : 0,
                transition: { type: "tween" },
            }}
            style={{ fontSize }}
            className={classNames}
        >
            {children}
        </motion.button>
    );
};

export default Button;
