import CTA from "../../components/CTA";
import FeaturedProjects from "./FeaturedProjects";
import Features from "./Features";
import HeroHeader from "./HeroHeader";
const Home = () => {
    return (
        <div className="flex flex-col items-center relative overflow-hidden w-full">
            <div className="graphic-grid w-[24rem] h-[24rem] absolute"></div>

            <HeroHeader />
            <FeaturedProjects />
            <div className="flex section-seperator flex-col w-full lg:max-w-[1300px]">
                <Features />
                <CTA />
            </div>
        </div>
    );
};

export default Home;
