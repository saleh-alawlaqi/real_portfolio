import ProjectsMarquee from "./ProjectsMarquee";
import Button from "../../../components/Button";
const HeroHeader = () => {
    return (
        <div className="flex mt-8 bd md:items-center pb-10  w-full flex-col rounded-xl ">
            <div className="flex flex-col px-7 md:w-[560px] md:items-center">
                <div className="flex flex-col md:items-center">
                    <span className="font-inter">WELCOME</span>
                    <h1 className="mt-3 text-[24px] text-gray-800 font-inter_extrabold font-semibold leading-[160%] md:text-center md:text-[32px] xl:w-[930px] xl:text-[60px] ">
                        <span className="hero-text-gradient">Hey, I'm Alex </span> — your expert in
                        crafting innovative and engaging web experiences.
                    </h1>
                </div>
                <Button to="/portfolio" variant="dark" className=" md:w-auto mt-4 w-full">
                    View Portfolio
                </Button>
            </div>
            <ProjectsMarquee />
        </div>
    );
};

export default HeroHeader;
