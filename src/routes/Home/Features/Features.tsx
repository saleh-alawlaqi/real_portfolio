import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CustomChip from "../../../components/CustomChip";
import FeatureBox from "../../../components/FeatureBox/FeatureBox";
import WritingEffect from "../../../components/WritingEffect";

const Features = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-300px", once: true });
    const heading = "I do more than just";
    const highlightedText = "design";
    return (
        <motion.div
            ref={ref}
            className="flex flex-col px-8 w-full lg:px-12 relative items-center gap-14"
        >
            <div className="skills-blur w-[32rem] top-0 h-[32rem] self-center absolute"></div>
            <div className="heading_and_description z-10 relative flex md:w-[40em] items-start md:items-center flex-col gap-3">
                <CustomChip color="orange">MY SKILLS</CustomChip>
                <h2 className="text-[34px] lg:text-[46px] font-gt text-slate-800">
                    <WritingEffect condition={isInView} text={heading} />{" "}
                    <span className="text-orange-400">
                        <WritingEffect
                            condition={isInView}
                            text={highlightedText}
                            delay={heading.length}
                        />
                    </span>
                </h2>
                <p className="text-[18px] md:text-center text-slate-600">
                    <WritingEffect
                        condition={isInView}
                        delay={heading.length + highlightedText.length}
                        text="With over a decade of design and development experience under my belt, I have
                        helped tens of companies with their goals in different ways."
                    />
                </p>
            </div>
            <motion.div className="features z-10 items-center features_grid w-full">
                <FeatureBox
                    heading="UI/UX Design"
                    description="Our app offers an insane level of security to protect all of your important
                        information. And more maybe."
                    icon="bg-brush"
                />

                <FeatureBox
                    heading="Software Development"
                    description="Our app offers an insane level of security to protect all of your important
                        information. And more maybe."
                    icon="bg-software_dev"
                />
                <FeatureBox
                    heading="Options Trading"
                    description="Our app offers an insane level of security to protect all of your important
                        information. And more maybe."
                    icon="bg-trading"
                />
            </motion.div>
        </motion.div>
    );
};

export default Features;
