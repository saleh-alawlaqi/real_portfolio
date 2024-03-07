import ProjectsMarquee from "./ProjectsMarquee";
import CustomButton from "../../../components/Button/CustomButton";
import CustomChip from "../../../components/CustomChip";
import Title from "./Title";
import { useScroll, useTransform, motion } from "framer-motion";
const HeroHeader = () => {
    const { scrollY } = useScroll();
    const marginTop = useTransform(scrollY, [0, 100], [0, -100]);
    return (
        <div className="flex mt-14 md:items-center pb-16 w-full flex-col rounded-xl ">
            <motion.div
                style={{ marginTop }}
                className="flex flex-col px-7  md:w-[560px] md:items-center"
            >
                {/* <div className="graphic-grid w-[24rem] h-[24rem] absolute"></div> */}
                <div className="flex flex-col md:items-center">
                    <CustomChip variant="solid" color="blue" className="font-inter">
                        WELCOME
                    </CustomChip>
                    <Title />
                </div>
                <CustomButton
                    to="/portfolio"
                    variant="dark"
                    className="md:px-8 md:w-auto mt-4 w-full"
                >
                    View Portfolio
                </CustomButton>
            </motion.div>
            <ProjectsMarquee id="first_marquee" direction="left" projects={["1", "2", "3"]} />
        </div>
    );
};

export default HeroHeader;
