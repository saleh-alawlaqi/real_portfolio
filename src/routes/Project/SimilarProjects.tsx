import { useParams } from "react-router-dom";
import { useAppContext } from "../../App";
import SmallProjectBox from "../../components/SmallProjectBox/SmallProjectBox";
import { IProject } from "../../types";

const SimilarProjects = () => {
    const { projectId } = useParams();
    const { projects } = useAppContext();
    const currentProject = projects.find((p) => p.id === projectId) as IProject;
    return (
        <div className="flex flex-col w-full gap-8">
            <h3 className="font-gt_light text-[32px]">Similar Projects</h3>
            <div className="projects projects_grid2">
                {/* {projects
                    .filter(
                        (p) =>
                            p.id !== projectId &&
                            p.newProjectType?.includes(currentProject.type as any)
                    )
                    .slice(0, 3)
                    .map((project, i) => (
                        <SmallProjectBox key={i} index={i} {...project} />
                    ))} */}
            </div>
        </div>
    );
};

export default SimilarProjects;
