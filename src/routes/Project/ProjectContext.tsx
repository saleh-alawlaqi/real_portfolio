import { createContext, useContext, useEffect, useState } from "react";
import { IProject } from "../../types";
import { useParams } from "react-router-dom";
import { projectsList } from "../../content/projects";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

// Create the context
const ProjectContext = createContext<any>(null);

// Create a custom hook to access the context
export const useProjectContext = () => useContext<{ project: IProject }>(ProjectContext);

// Create a provider component
export const ProjectProvider = ({ children }: any) => {
    const [project, setProject] = useState<IProject | null>(null);
    const { projectId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!projectId) return;
        const getAllProjects = async () => {
            try {
                const querySnapshot = await getDoc(doc(db, "projects", projectId));
                setProject(querySnapshot.data() as IProject);
            } catch (e) {
                setLoading(false);
                console.error("Error getting documents: ", e);
            }
        };
        getAllProjects();
        return () => {};
    }, [projectId]);

    return <ProjectContext.Provider value={{ project }}>{children}</ProjectContext.Provider>;
};
