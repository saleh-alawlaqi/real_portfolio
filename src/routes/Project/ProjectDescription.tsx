import { useProjectContext } from "./ProjectContext";

const ProjectDescription = () => {
    const { project } = useProjectContext();
    const { bigDescription } = project;
    return (
        <div className="project_description border border-slate-200 rounded-2xl bg-white p-8 mt-6 flex flex-col">
            <h2 className="font-bold font-gt text-[32px]">Overview:</h2>
            <div className="mt-3" dangerouslySetInnerHTML={{ __html: bigDescription }}></div>
        </div>
    );
};

export default ProjectDescription;
