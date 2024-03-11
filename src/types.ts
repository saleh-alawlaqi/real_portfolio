export type tools =
    | "react"
    | "vue"
    | "angular"
    | "svelte"
    | "tailwind"
    | "sass"
    | "nodejs"
    | "mongodb"
    | "redux"
    | "firebase"
    | "typescript"
    | "socketio"
    | "framer"
    | "csharp"
    | "python"
    | "java"
    | "figma"
    | "cplus"
    | "c"
    | "kotlin"
    | "mysql"
    | "express";

export interface IProject {
    id?: string;
    name: string;
    bigDescription: string;
    tools: tools[];
    gradient: gradients;
    // mainImage?: File | string;
    type: "software" | "frontend" | "noCode" | "uiDesign";
    demo: string;
    github: string;
    smallDescription: string;
    colors: { title: string; shades: { color: string; shade: string }[] }[];
    types: {
        title: string;
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
        fontFamily: string;
    }[];
    icons: { title: string; path: string }[];
    highlights: string[];
    // screenshots?: string[];
    ready: boolean;
}
export interface IBigProjectBox
    extends Omit<IProject, "bigDescription" | "highlights" | "screenshots" | "github"> {}

export interface ISmallProjectBoxProps extends IBigProjectBox {}

export type gradients =
    | "gradient-1"
    | "gradient-2"
    | "gradient-3"
    | "gradient-4"
    | "gradient-5"
    | "gradient-6"
    | "gradient-7"
    | "gradient-8"
    | "gradient-9"
    | "gradient-10"
    | "gradient-11"
    | "gradient-12"
    | "gradient-13";

export const projectTabsList = [
    { type: "all", name: "All" },
    { type: "frontend", name: "Front-end" },
    { type: "uiDesign", name: "UI Design" },
    { type: "noCode", name: "No-Code Websites" },
    { type: "software", name: "Softwares" },
];
