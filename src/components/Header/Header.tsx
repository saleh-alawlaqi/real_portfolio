import { NavLink } from "react-router-dom";
import Button from "../Button";

const Header = () => {
    return (
        <div className="flex bd px-7 z-20 backdrop-blur-sm w-full flex-col items-center md:px-10 lg:px-16 xl:px-[120px]">
            <div className="flex items-center justify-between w-full rounded-xl lg:max-w-[1200px]">
                <NavLink to={"/"} className="font-gt text-[22px] lg:text-[32px]">
                    Alex.
                </NavLink>
                <Button variant="light" size="small">
                    Contact Me
                </Button>
            </div>
        </div>
    );
};

export default Header;
