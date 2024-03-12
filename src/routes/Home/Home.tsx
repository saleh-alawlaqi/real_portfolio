import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import FeaturedProjects from "./FeaturedProjects";
import Features from "./Features";
import HeroHeader from "./HeroHeader";
const Home = () => {
    return (
        <div className="flex flex-col items-center overflow-hidden relative w-full">
            {/* <div className="graphic-grid w-[24rem] h-[24rem] absolute"></div> */}
            <HeroHeader />
            <FeaturedProjects />
            <div className="flex section-seperator  flex-col w-full lg:max-w-[1300px]">
                <Features />
                <CTA />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
