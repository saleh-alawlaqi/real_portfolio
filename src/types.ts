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
    | "express";

export interface IProject {
    id: string;
    name: string;
    bigDescription: string;
    tools: tools[];
    gradient: gradients;
    mainImage: string;
    type: "software" | "frontend" | "noCode" | "fullStack";
    demo: string;
    github: string;
    smallDescription: string;
    highlights: string[];
    screenshots: string[];
}
export interface IBigProjectBox
    extends Omit<IProject, "bigDescription" | "highlights" | "screenshots" | "github"> {}

export interface ISmallProjectBoxProps extends Omit<IBigProjectBox, "tools"> {}

export const projectTypeMapper = {
    software: "Software Development",
    fullStack: "Full Stack Website",
    noCode: "No Code Website",
    frontend: "Front-end Website",
};

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
    { type: "fullStack", name: "Full stack" },
    { type: "noCode", name: "No-Code Websites" },
    { type: "software", name: "Softwares" },
];
