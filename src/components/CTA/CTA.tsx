import { useEffect, useRef, useState } from "react";
import CustomButton from "../Button/CustomButton";
import { motion, useScroll, useTransform } from "framer-motion";

const CTA = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({ target: ref });
    const [divTop, setDivTop] = useState(0);

    useEffect(() => {
        const divTop = ((ref.current as any).getBoundingClientRect().top +
            window.scrollY) as number;
        setDivTop(divTop);
    }, [ref]);

    const marginTop = useTransform(scrollY, [divTop - 500, divTop + 500], [0, 100]);

    return (
        <div
            ref={ref}
            className="flex flex-col lg:px-0 lg:max-w-[1300px] section-seperator w-full px-8 items-center"
        >
            <div className="cta relative rounded-xl  w-full  pb-[20em] md:pb-[25em] overflow-hidden p-8 lg:p-20 flex flex-col">
                <div className="heading_and_button w-full lg:w-[45%] flex flex-col items-start">
                    <div className="flex flex-col w-full">
                        <h3 className="text-[30px] lg:text-[48px] font-inter_bold leading-snug text-white">
                            Contact me to discuss your project
                        </h3>
                        <p className="text-[16px] lg:text-[20px] mt-4 leading-relaxed font-inter text-white ">
                            I am available for freelance work. Connect with me right here right now
                        </p>
                    </div>
                    <CustomButton className="mt-6" variant="dark">
                        Contact Me
                    </CustomButton>
                </div>
                {/* {isInView && ( */}
                <motion.div
                    // initial={{ opacity: 0, y: 150 }}
                    // animate={{ opacity: 1, y: 0 }}
                    style={{ marginTop }}
                    transition={{ duration: 0.3, ease: "easeInOut", type: "tween" }}
                    className="screen_wrap w-[100%] lg:w-[60%] absolute -right-[2em] lg:-right-[10%] -bottom-[12em] lg:bottom-auto lg:top-[5%] rounded-2xl flex items-stretch h-[30em] md:h-[35em] mt-10 "
                ></motion.div>
                {/* // )} */}
            </div>
        </div>
    );
};

export default CTA;
{
    /*
<div className="flex flex-col w-full items-center">
            <div className="cta relative rounded-xl w-[80%] overflow-hidden mt-20 p-20  flex flex-col">
                <div className="heading_and_button w-[45%] flex flex-col items-start">
                    <div className="flex flex-col w-full">
                        <h3 className="text-[42px] font-gt leading-snug text-white font-medium">
                            Contact Me To Discuss Your Next Project
                        </h3>
                        <p className="text-[18px] mt-5 leading-relaxed font-inter text-white font-normal ">
                            I am available for freelance work. Connect with me via phone: +1 (234)
                            567-8901 or email:
                        </p>
                    </div>
                    <Button
                        color="default"
                        className="rounded-full bg-white mt-5 text-black font-semibold font-inter"
                        variant="solid"
                        size="lg"
                    >
                        Contact Me
                    </Button>
                </div>
                <div className="screens_wrap w-[35em] bg-white absolute -right-[5%] top-[5%] rounded-2xl flex items-stretch h-[30em] space-x-6 mt-10"></div>
            </div>
        </div>
    */
}
