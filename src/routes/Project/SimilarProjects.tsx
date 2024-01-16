import ProjectBox from "../../components/ProjectBox/ProjectBox";
import { projects } from "../../content/projects";

const SimilarProjects = () => {
    return (
        <div className="flex flex-col">
            <h3 className="text-[32px] font-gt font-semibold">Similar Projects</h3>
            <div className="projects mt-10 projects_grid2">
                {projects.slice(0, 3).map((project) => (
                    <ProjectBox {...project} />
                ))}
            </div>
        </div>
    );
};

export default SimilarProjects;
