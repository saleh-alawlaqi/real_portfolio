import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CustomChip from "../../../components/CustomChip";
import FeatureBox from "../../../components/FeatureBox/FeatureBox";

const Features = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-300px", once: true });
    return (
        <motion.div
            ref={ref}
            className="flex flex-col  w-[90%] lg:max-w-[1300px] section-seperator relative items-center gap-8 lg:gap-10"
        >
            <div className="skills-blur w-[32rem] top-0 h-[32rem] self-center absolute"></div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="heading_and_description z-10 relative flex md:w-[40em] items-start md:items-center flex-col gap-3"
            >
                <CustomChip color="orange">MY SKILLS</CustomChip>
                <h2 className="text-[34px] lg:text-[46px] font-gt text-slate-800">
                    I do more than just <span className="text-orange-400">design</span>
                </h2>
                <p className="text-[18px] md:text-center text-slate-600">
                    With over a decade of design and development experience under my belt, I have
                    helped tens of companies with their goals in different ways.
                </p>
            </motion.div>
            <motion.div className="features z-10 items-center features_grid w-full">
                <FeatureBox
                    heading="UI/UX Design"
                    description="Our app offers an insane level of security to protect all of your important
                        information. And more maybe."
                    icon="bg-brush"
                    delay={0.2}
                    isInView={isInView}
                />

                <FeatureBox
                    heading="Software Development"
                    description="Our app offers an insane level of security to protect all of your important
                        information. And more maybe."
                    icon="bg-software_dev"
                    delay={0.4}
                    isInView={isInView}
                />
                <FeatureBox
                    heading="Options Trading"
                    description="Our app offers an insane level of security to protect all of your important
                        information. And more maybe."
                    icon="bg-trading"
                    delay={0.6}
                    isInView={isInView}
                />
            </motion.div>
        </motion.div>
    );
};

export default Features;
