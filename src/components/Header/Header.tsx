import { useMediaQuery } from "usehooks-ts";
import { NavLink } from "react-router-dom";
import { Button } from "@nextui-org/react";

const Header = () => {
    const matches = useMediaQuery("(min-width: 768px)");
    return (
        <div className="flex bg-transparent sticky top-0 z-20 backdrop-blur-sm w-full flex-col items-center">
            <div className="flex py-7 items-center justify-between rounded-xl lg:max-w-[1300px] w-[90%]">
                <NavLink to={"/"} className="w-12 h-12 bg-logo bg-contain bg-no-repeat bg-center" />
                {matches ? (
                    <div className="flex items-center space-x-16">
                        <ul className="flex space-x-10">
                            <NavLink to="/" className="text-[18px] font-semibold">
                                Home
                            </NavLink>
                            <NavLink to="/portfolio" className="text-[18px] font-semibold">
                                Projects
                            </NavLink>
                            <NavLink to="/about" className="text-[18px] font-semibold">
                                About Me
                            </NavLink>
                            <NavLink to="/contact" className="text-[18px] font-semibold">
                                Contact Me
                            </NavLink>
                        </ul>
                        <Button
                            color="primary"
                            size="lg"
                            className="rounded-full font-semibold font-inter"
                        >
                            Download CV
                        </Button>
                    </div>
                ) : (
                    <span className="w-6 h-6 bg-menu bg-contain bg-no-repeat bg-center cursor-pointer" />
                )}
            </div>
        </div>
    );
};

export default Header;
