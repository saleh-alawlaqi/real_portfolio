import Highlights from "./Highlights";
import SimilarProjects from "./SimilarProjects";
import { useProjectContext } from "./ProjectContext";
import ProjectHeader from "./ProjectHeader";
import ProjectScreenshots from "./ProjectScreenshots";
import ProjectDescription from "./ProjectDescription";
import CTA from "../../components/CTA";
import Header from "../../components/Header";

const Project = () => {
    const { project } = useProjectContext();
    if (!project) return <></>;
    const { highlights } = project;
    return (
        <div className="flex flex-col overflow-visible items-center self-stretch">
            <Header />
            <div className="top_header mt-12 w-[90%] lg:max-w-[1300px] flex flex-col overflow-visible lg:justify-between rounded-lg items-start">
                <ProjectHeader />
                <div className="flex flex-col w-full lg:flex-row mt-6 lg:space-x-6 overflow-visible lg:items-start">
                    <div className="images_and_project_description flex flex-col lg:w-[62%]">
                        <ProjectScreenshots />
                        <ProjectDescription />
                    </div>
                    <Highlights highlights={highlights} />
                </div>
                <hr className="my-10 border border-slate-200" />
                <SimilarProjects />
            </div>
            <CTA />
        </div>
    );
};

export default Project;
