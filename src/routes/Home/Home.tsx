import CTA from "../../components/CTA";
import FeaturedProjects from "../../components/FeaturedProjects";
import Features from "../../components/Features";
import HeroHeader from "../../components/HeroHeader";
const Home = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <HeroHeader />
            <FeaturedProjects />
            <Features />
            <CTA />
        </div>
    );
};

export default Home;
