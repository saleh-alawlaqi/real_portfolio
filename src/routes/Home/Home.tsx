import { useEffect, useRef, useState } from "react";
import FeaturedProjects from "./FeaturedProjects";
import HeroHeader from "./HeroHeader";
import Features from "./Features";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import { useScroll, useTransform, motion } from "framer-motion";
import BottomSection from "./BottomSection/BottomSection";
const Home = () => {
    const [height, setHeight] = useState(0);
    const { scrollY } = useScroll();

    useEffect(() => {
        window.scrollTo(0, 0);

        const featuredProjectsElement = document.getElementById("featured_projects");
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const contentBoxSize = entry.contentBoxSize[0].blockSize;

                const { height } = entry.contentRect;
                setHeight(contentBoxSize);
            }
        });

        if (featuredProjectsElement) {
            observer.observe(featuredProjectsElement);
        }

        return () => observer.disconnect(); // Cleanup observer when component unmounts or re-renders
    }, []);

    const right = useTransform(scrollY, [0, 1500], ["-100%", "0%"]);
    const [isFixed, setIsFixed] = useState(true);
    const [topPosition, setTopPosition] = useState("0%");

    useEffect(() => {
        const unsubscribe = right.on("change", (value) => {
            if (value === "0%") {
                setIsFixed(false);
                // Capture the current scrollY position and use it to set the top position
                scrollY.get() && setTopPosition(`${scrollY.get()}px`);
            } else {
                setIsFixed(true);
                setTopPosition("0%"); // Reset top position when it becomes fixed again
            }
        });

        return () => unsubscribe();
    }, [right, scrollY]);
    return (
        <div className="flex flex-col items-center w-full">
            <HeroHeader />
            <FeaturedProjects height={height} />
            <BottomSection />
        </div>
    );
};

export default Home;
