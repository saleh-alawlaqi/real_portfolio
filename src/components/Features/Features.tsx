import FeatureBox from "../FeatureBox/FeatureBox";

const Features = () => {
    return (
        <div className="flex flex-col mt-28 p-8 w-full lg:p-12 items-center space-y-14 lg:max-w-[1300px]">
            <div className="heading_and_description flex md:w-[40em] items-center flex-col space-y-4">
                <hr className="line border-b w-[4em] border-slate-300" />
                <h2 className="text-[34px] lg:text-[46px] font-gt capitalize text-gray-900 font-semibold">
                    I do more than just design.
                </h2>
                <p className="text-[18px] text-center">
                    With over a decade of design and development experience under my belt, I have
                    helped tens of companies with their goals in different ways.
                </p>
            </div>
            <div className="features features_grid w-full">
                <FeatureBox
                    heading="UI/UX Design"
                    description="Our app offers an insane level of security to protect all of your important
                        information."
                    color="purple"
                />
                <FeatureBox
                    heading="Software Development"
                    description="Our app offers an insane level of security to protect all of your important
                        information."
                    color="orange"
                />
                <FeatureBox
                    heading="Options Trading"
                    description="Our app offers an insane level of security to protect all of your important
                        information."
                    color="teal"
                />
            </div>
        </div>
    );
};

export default Features;
