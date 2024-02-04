import CTA from "../../components/CTA";
import FeaturedProjects from "./FeaturedProjects";
import Features from "./Features";
import HeroHeader from "./HeroHeader";
const Home = () => {
    return (
        <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center w-full">
            <HeroHeader />
            <FeaturedProjects />
            <Features />
            <CTA />
        </div>
    );
};

export default Home;
