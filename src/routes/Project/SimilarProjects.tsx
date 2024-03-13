import SmallProjectBox from "../../components/SmallProjectBox/SmallProjectBox";
import { projectsList } from "../../content/projects";

const SimilarProjects = () => {
    return (
        <div className="flex flex-col gap-8">
            <h3 className="font-gt_light text-[32px]">Similar Projects</h3>
            <div className="projects projects_grid2">
                {projectsList.slice(0, 3).map((project, i) => (
                    <SmallProjectBox key={i} index={i} {...project} />
                ))}
            </div>
        </div>
    );
};

export default SimilarProjects;
