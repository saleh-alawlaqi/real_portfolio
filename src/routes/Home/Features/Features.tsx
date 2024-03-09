import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import CustomChip from "../../../components/CustomChip";
import FeatureBox from "../../../components/FeatureBox/FeatureBox";

const Features = () => {
    const { scrollY } = useScroll();
    const ref = useRef(null); // Ref for the div you want to track
    const [startY, setStartY] = useState(0); // State to hold the startY position

    useEffect(() => {
        const handleResize = () => {
            const rect = (ref.current as any).getBoundingClientRect();
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const offsetTop = rect.top + rect.bottom + scrollTop;
            setStartY(offsetTop); // Update startY with the div's current position
        };

        handleResize(); // Set initial startY
        window.addEventListener("resize", handleResize); // Adjust startY on window resize

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.div className="flex flex-col mt-32 px-8 w-full lg:px-12 relative items-center gap-14">
            <div className="skills-blur w-[32rem] top-0 h-[32rem] self-center absolute"></div>
            <div
                className="heading_and_description z-10 relative flex md:w-[40em] items-center flex-col gap-3"
                ref={ref}
            >
                <CustomChip color="orange">MY SKILLS</CustomChip>
                <h2 className="text-[34px] lg:text-[46px] font-gt capitalize text-slate-800">
                    I do more than just <span className="text-orange-400">design</span>
                </h2>
                <p className="text-[18px] text-center text-slate-600">
                    With over a decade of design and development experience under my belt, I have
                    helped tens of companies with their goals in different ways.
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
