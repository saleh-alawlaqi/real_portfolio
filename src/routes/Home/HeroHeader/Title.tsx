import { motion } from "framer-motion";
import WritingEffect from "../../../components/WritingEffect";

const Title = () => {
    const highlightedText = "Hey, I'm Alex";
    const restOfText = "— your expert in crafting innovative and engaging web experiences.";

    return (
        <motion.div className="flex flex-col">
            <h1 className="mt-3 text-[32px] text-gray-800 font-inter_black font-semibold leading-[150%] md:text-center md:text-[32px] lg:text-[46px] lg:w-[750px] xl:w-[930px] xl:text-[58px]">
                <span className="text-sky-500">
                    <WritingEffect text={highlightedText} />
                </span>{" "}
                <WritingEffect text={restOfText} delay={highlightedText.length} />
            </h1>
        </motion.div>
    );
};

export default Title;
