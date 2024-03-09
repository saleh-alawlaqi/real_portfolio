import { motion } from "framer-motion";
interface FeatureBoxProps {
    heading: string;
    description: string;
    icon: "bg-software_dev" | "bg-brush" | "bg-trading" | "bg-web_code";
}

const FeatureBox = ({ heading, description, icon }: FeatureBoxProps) => {
    return (
        <motion.div className={`feature-box flex rounded-md flex-col p-6 lg:p-8 space-y-3`}>
            <div className="icon-and-heading gap-5 flex items-center">
                <span
                    className={`w-10 h-10 lg:w-12 lg:h-12 ${icon} bg-32 bg-no-repeat bg-center shadow-sm rounded-md bg-white border border-slate-300`}
                ></span>
                <h4 className="text-lg font-inter_semibold text-slate-700">{heading}</h4>
            </div>
            <p className="text-slate-500 leading-relaxed">{description}</p>
        </motion.div>
    );
};

export default FeatureBox;
