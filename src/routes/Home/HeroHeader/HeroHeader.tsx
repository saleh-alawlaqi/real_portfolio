import ProjectsMarquee from "./ProjectsMarquee";
import CustomButton from "../../../components/Button/CustomButton";
import { motion } from "framer-motion";
const HeroHeader = () => {
    const highlightedText = "Hey, I'm Alex";
    const restOfText = "— your expert in crafting innovative and engaging web experiences.";

    return (
        <div className="flex mt-14 md:items-center pb-16 w-full flex-col rounded-xl ">
            <div className="flex flex-col px-7 md:w-[560px] md:items-center">
                <div className="flex flex-col md:items-center">
                    <span className="font-inter">— WELCOME —</span>
                    <h1 className="mt-3 text-[24px] text-gray-800  font-inter_black font-semibold leading-[150%] md:text-center md:text-[32px] lg:text-[40px] lg:w-[700px] xl:w-[930px] xl:text-[58px]">
                        <span className="text-sky-500">
                            {highlightedText.split("").map((character, index) => (
                                <motion.span
                                    aria-hidden="true"
                                    key={`highlighted-${index}`}
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
                </div>
                <CustomButton
                    to="/portfolio"
                    variant="dark"
                    className="md:px-8 md:w-auto mt-4 w-full"
                >
                    View Portfolio
                </CustomButton>
            </div>
            <ProjectsMarquee id="first_marquee" direction="left" projects={["1", "2", "3"]} />
        </div>
    );
};

export default HeroHeader;
