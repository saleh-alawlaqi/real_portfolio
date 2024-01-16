import { createContext, useContext, useEffect, useState } from "react";
import { IProject } from "../../types";
import { useParams } from "react-router-dom";
import { projectsList } from "../../content/projects";

// Create the context
const ProjectContext = createContext<any>(null);

// Create a custom hook to access the context
export const useProjectContext = () => useContext<{ project: IProject }>(ProjectContext);

// Create a provider component
export const ProjectProvider = ({ children }: any) => {
    const [project, setProject] = useState<IProject | null>(null);
    const { projectId } = useParams();

    useEffect(() => {
        if (!projectId) return;
        const getProject = () => {
            setProject(projectsList.find((project) => project.id === projectId) as IProject);
        };
        getProject();
    }, [projectId, projectsList]);

    return <ProjectContext.Provider value={{ project }}>{children}</ProjectContext.Provider>;
};
