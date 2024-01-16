interface FeatureBoxProps {
    heading: string;
    description: string;
    color: "purple" | "orange" | "teal";
}

const FeatureBox = ({ heading, description, color }: FeatureBoxProps) => {
    return (
        <div
            className={`flex rounded-3xl flex-col p-6 lg:p-8 border border-gray-200 shadow-custom bg-white space-y-3`}
        >
            <span className={`w-10 h-10 lg:w-16 lg:h-16 rounded-2xl bg-${color}-500`}></span>
            <div className="flex flex-col info space-y-3">
                <div className="flex flex-col heading_description space-y-1">
                    <h4 className="text-[22px] font-bold text-gray-600">{heading}</h4>
                    <p className="text-gray-500">{description}</p>
                </div>
                <span className={`text-${color}-500 font-bold cursor-pointer`}>Learn More</span>
            </div>
        </div>
    );
};

export default FeatureBox;
