import CTA from "../../components/CTA";
import Header from "../../components/Header";
import FeaturedProjects from "./FeaturedProjects";
import Features from "./Features";
import HeroHeader from "./HeroHeader";
const Home = () => {
    return (
        <div className="flex flex-col items-center overflow-hidden relative w-full">
            <div className="graphic-grid w-[24rem] h-[24rem] absolute"></div>
            <Header />
            <HeroHeader />
            <FeaturedProjects />
            <Features />
            <CTA />
        </div>
    );
};

export default Home;
