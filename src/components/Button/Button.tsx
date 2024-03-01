import { NavLink } from "react-router-dom";

const Button = (
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
        if (props.to) {
            return (
                <NavLink
                    to={props.to}
                    style={{ fontSize }}
                    className={`px-4 py-3 text-center font-inter_semibold bg-slate-900 border-0 text-white rounded-md ${props.className}`}
                >
                    {props.children}
                </NavLink>
            );
        }
        return (
            <button
                style={{ fontSize }}
                className={`px-4 py-3 font-inter_semibold bg-slate-900 border-0 text-white rounded-md ${props.className}`}
            >
                {props.children}
            </button>
        );
    }
    if (props.variant === "light") {
        if (props.to) {
            return (
                <NavLink
                    to={props.to}
                    style={{ fontSize }}
                    className={`px-4 py-2 text-center font-inter_semibold bg-white border-2 border-slate-300 text-black rounded-md ${props.className}`}
                >
                    {props.children}
                </NavLink>
            );
        }
        return (
            <button
                style={{ fontSize }}
                className={`px-4 py-2 font-inter_semibold bg-white border-2 border-slate-300 text-black rounded-md ${props.className}`}
            >
                {props.children}
            </button>
        );
    }
    return <button>{props.children}</button>;
};

export default Button;
