import Features from "../Features";
import CTA from "../../../components/CTA";
import Footer from "../../../components/Footer";
import { motion } from "framer-motion";

const BottomSection = () => {
    return (
        <div className="flex flex-col z-10 items-center bg-slate-50 pb-12 w-full">
            <div className="flex flex-col w-full lg:max-w-[1300px]">
                <Features />
                <CTA />
                <Footer />
            </div>
        </div>
    );
};

export default BottomSection;
