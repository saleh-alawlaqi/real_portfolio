import ProjectsMarquee from "./ProjectsMarquee";
import CustomButton from "../../../components/Button/CustomButton";
import CustomChip from "../../../components/CustomChip";
import Title from "./Title";
const HeroHeader = () => {
    return (
        <div className="flex md:items-center relative mt-14 pb-16 w-full flex-col rounded-xl overflow-hidden">
            <div className="flex flex-col px-7 z-10  md:w-[560px] md:items-center">
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
            <ProjectsMarquee id="first_marquee" direction="left" projects={["1", "2", "3"]} />
        </div>
    );
};

export default HeroHeader;
