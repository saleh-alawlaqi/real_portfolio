import CTA from "../../components/CTA";
import FeaturedProjects from "../../components/FeaturedProjects";
import Features from "../../components/Features";
import Header from "../../components/Header";
import HeroHeader from "../../components/HeroHeader";
const Home = () => {
    return (
        <div className="flex flex-col items-center overflow-auto">
            <Header />
            {/* <div className="flex flex-col mx-8 lg:mx-12 space-y-32 mb-20"> */}
            <HeroHeader />
            {/* </div> */}
            <FeaturedProjects />
            <Features />
            <CTA />
        </div>
    );
};

export default Home;
