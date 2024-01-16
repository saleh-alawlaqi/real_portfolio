import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const HeroHeader = () => {
    return (
        <div className="flex mt-4 py-8  lg:max-w-[1300px] w-[90%] flex-col rounded-xl items-start space-y-5 lg:space-y-8 ">
            <span className="w-[110px] flex justify-center items-center h-[110px] lg:w-[150px] lg:h-[150px] profile-pic-border rounded-full  ">
                <span className="bg-profilePic bg-top bg-cover bg-no-repeat rounded-full w-full h-full"></span>
            </span>
            <h1 className=" text-[30px] text-gray-800 font-gt -tracking-[1.5px] md:text-[60px] lg:text-[94px] font-semibold leading-[1.3em]">
                Alex Silver, <br /> Full Stack Developer
            </h1>
            <div className="flex flex-col space-y-5 mt-5 items-start lg:flex-row-reverse lg:space-y-0 lg:justify-between lg:w-full lg:items-center">
                <p className="text-[18px] font-inter leading-[1.7em] md:max-w-[33em] ">
                    Unique and minimalistic portfolio template for UX Designers, Developers and
                    other creative fields that your users will love.
                </p>
                <Button
                    as={NavLink}
                    to="/portfolio"
                    color="primary"
                    size="lg"
                    className="rounded-full font-semibold font-inter"
                >
                    View Portfolio
                </Button>
            </div>
        </div>
    );
};

export default HeroHeader;
