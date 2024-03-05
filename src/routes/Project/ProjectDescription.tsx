import Overview from "./Sections/Overview";
import DesignSystem from "./Sections/DesignSystem";

const ProjectDescription = () => {
    return (
        <div className="project_description border border-slate-200 rounded-2xl bg-white p-8 mt-6 flex flex-col gap-10">
            <Overview />
            <DesignSystem />
        </div>
    );
};

export default ProjectDescription;
