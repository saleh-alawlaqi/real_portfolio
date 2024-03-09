import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Title = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseMove = (event: any) => {
        setPosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    const highlightedText = "Hey, I'm Alex";
    const restOfText = "— your expert in crafting innovative and engaging web experiences.";

    return (
        <>
            <h1 className="mt-3 text-[24px] text-gray-800  font-inter_black font-semibold leading-[150%] md:text-center md:text-[32px] lg:text-[40px] lg:w-[700px] xl:w-[930px] xl:text-[58px]">
                <span className="text-sky-500">
                    {highlightedText.split("").map((character, index) => (
                        <motion.span
                            aria-hidden="true"
                            key={`highlighted-${index}`}
                            onMouseMove={handleMouseMove}
                            className="cursor-none"
                            onMouseEnter={() => setIsVisible(true)}
                            onMouseLeave={() => setIsVisible(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.02,
                            }}
                        >
                            {character}
                        </motion.span>
                    ))}
                </span>{" "}
                {restOfText.split("").map((character, index) => (
                    <motion.span
                        aria-hidden="true"
                        key={`rest-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: (highlightedText.length + index) * 0.02,
                        }}
                    >
                        {character}
                    </motion.span>
                ))}
            </h1>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: -50, y: -50 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0, x: -50, y: -50 }}
                        className="w-28 h-28 absolute pointer-events-none profile-pic rounded-full"
                        style={{
                            position: "absolute",
                            left: position.x,
                            top: position.y,
                        }}
                    ></motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Title;
