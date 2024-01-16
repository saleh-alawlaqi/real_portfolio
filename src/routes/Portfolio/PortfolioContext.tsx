import { createContext, useContext, useEffect, useState } from "react";
import { IProject } from "../../types";
import { projectsList } from "../../content/projects";

const PortfolioContext = createContext<any>(null);

export const usePortfolioContext = () =>
    useContext<{
        projects: IProject[];
        activeTab: number;
        setActiveTab: React.Dispatch<React.SetStateAction<number>>;
    }>(PortfolioContext);

const PortfolioProvider = ({ children }: any) => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const getProjects = () => {
            setProjects(projectsList);
        };
        getProjects();
    }, [projectsList]);

    return (
        <PortfolioContext.Provider value={{ projects, activeTab, setActiveTab }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export default PortfolioProvider;
