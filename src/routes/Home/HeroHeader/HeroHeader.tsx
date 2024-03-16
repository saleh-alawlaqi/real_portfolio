import ProjectsMarquee from "./ProjectsMarquee";
import CustomButton from "../../../components/Button/CustomButton";
import CustomChip from "../../../components/CustomChip";
import Title from "./Title";
import { useScroll, motion, useTransform } from "framer-motion";
const HeroHeader = () => {
    const { scrollY } = useScroll();
    const marginTop = useTransform(scrollY, [0, 100], [56, 0]);
    return (
        <motion.div
            style={{ marginTop }}
            className="flex md:items-center relative mt-14 overflow-hidden pb-16 w-full flex-col rounded-xl "
        >
            <div className="flex flex-col px-7 z-10 md:w-[560px] md:items-center">
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
            </div>
            <ProjectsMarquee id="first_marquee" direction="left" />
        </motion.div>
    );
};

export default HeroHeader;
