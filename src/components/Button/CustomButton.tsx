import { NavLink } from "react-router-dom";
import "./Button.css";
import Button from "./Button";
const CustomButton = (
    props: {
        variant?: "dark" | "light";
        size?: "big" | "small";
        children?: any;
        className?: string;
        to?: string;
    } = { size: "small", variant: "light" }
) => {
    const fontSize = props.size === "big" ? "18px" : "16px";
    if (props.variant === "dark") {
        const classNames = `base-button hover:bg-slate-950 button-dark bg-slate-900 text-white ${props.className}`;
        if (props.to) {
            return (
                <NavLink to={props.to}>
                    <Button fontSize={fontSize} classNames={classNames} children={props.children} />
                </NavLink>
            );
        }
        return <Button fontSize={fontSize} classNames={classNames} children={props.children} />;
    }
    if (props.variant === "light") {
        const classNames = `base-button py-2 button-light hover:text-sky-500 hover:shadow-2xl bg-white text-black ${props.className}`;

        if (props.to) {
            return (
                <NavLink to={props.to}>
                    <Button fontSize={fontSize} classNames={classNames} children={props.children} />
                </NavLink>
            );
        }
        return <Button fontSize={fontSize} classNames={classNames} children={props.children} />;
    }
    return <button>{props.children}</button>;
};

export default CustomButton;
