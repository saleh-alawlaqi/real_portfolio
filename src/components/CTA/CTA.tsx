import { Button } from "@nextui-org/react";

const CTA = () => {
    return (
        <div className="cta relative pb-[22em] overflow-hidden mt-20 w-full pt-16 px-20 items-center flex flex-col">
            <div className="heading_and_button space-y-10 flex flex-col items-center">
                <div className="flex flex-col">
                    <h3 className="text-[54px] font-gt text-center leading-snug text-white font-medium w-[11em]">
                        Contact Me To Discuss Your Next Project
                    </h3>
                    <p className="text-[20px] mt-5 leading-relaxed font-inter text-center text-white font-normal w-[30em]">
                        I am available for freelance work. Connect with me via phone: +1 (234)
                        567-8901 or email:
                    </p>
                </div>
                <Button
                    color="default"
                    className="rounded-full text-white font-semibold font-inter"
                    variant="bordered"
                    size="lg"
                >
                    Contact Me
                </Button>
            </div>
            <div className="screens_wrap w-[45em] absolute -bottom-[25%] flex items-stretch h-[30em] space-x-6 mt-10">
                <div className="mobile bg-white w-[20%] rounded-2xl"></div>
                <div className="desktop bg-white w-[80%] rounded-2xl"></div>
            </div>
        </div>
    );
};

export default CTA;
{
    /* <div className="flex flex-col space-y-8 items-center mt-20">
<ul className="flex text-white !list-none space-x-10">
    <li className="text-[18px]">Home</li>
    <li className="text-[18px]">Projects</li>
    <li className="text-[18px]">About Me</li>
    <li className="text-[18px]">Contact Me</li>
</ul>
<span className="text-[18px] text-white">© 2088 Nayzak Design</span>
</div> */
}
