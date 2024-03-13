import { createContext, useContext, useEffect, useState } from "react";
import { IProject } from "../../types";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../App";

// Create the context
const ProjectContext = createContext<any>(null);

// Create a custom hook to access the context
export const useProjectContext = () => useContext<{ project: IProject }>(ProjectContext);

// Create a provider component
export const ProjectProvider = ({ children }: any) => {
    const [project, setProject] = useState<IProject | null>(null);
    const { projectId } = useParams();
    const { projects } = useAppContext();

    useEffect(() => {
        if (!projectId) return;
        setProject(projects.find((p) => p.id === projectId) as IProject);
    }, [projectId, projects]);

    return <ProjectContext.Provider value={{ project }}>{children}</ProjectContext.Provider>;
};
