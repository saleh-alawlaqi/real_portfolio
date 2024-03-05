import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
        const classNames = `px-4 py-3 hover:bg-slate-950 button-dark text-center font-inter_semibold bg-slate-900  text-white rounded-full ${props.className}`;
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
        const classNames = `px-4 py-2 button-light text-center hover:text-sky-500  hover:shadow-2xl relative font-inter_semibold bg-white text-black rounded-full ${props.className}`;

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
