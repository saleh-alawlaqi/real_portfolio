import { useProjectContext } from "../ProjectContext";

const Overview = () => {
    const { project } = useProjectContext();
    const { bigDescription } = project;

    return (
        <div className="flex flex-col">
            <h2 className="font-gt_light text-[32px]">Overview:</h2>
            <div className="mt-3" dangerouslySetInnerHTML={{ __html: bigDescription }}></div>
        </div>
    );
};

export default Overview;
