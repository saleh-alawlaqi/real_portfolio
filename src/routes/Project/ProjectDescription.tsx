import Overview from "./Sections/Overview";
import { useProjectContext } from "./ProjectContext";
import IconBox from "../../components/IconBox";
import TypeBox from "../../components/TypeBox";
import ColorBox from "../../components/ColorBox";
import ColorSection from "../../components/ColorSection";
import DesignSystem from "./Sections/DesignSystem";

const ProjectDescription = () => {
    const { project } = useProjectContext();
    return (
        <div className="project_description border border-slate-200 rounded-2xl bg-white p-8 mt-6 flex flex-col gap-10">
            <Overview />
            <DesignSystem />
        </div>
    );
};

export default ProjectDescription;
