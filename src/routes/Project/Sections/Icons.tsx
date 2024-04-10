import IconBox from "../../../components/IconBox";
import { useProjectContext } from "../ProjectContext";

const Icons = () => {
    const {
        project: { icons },
    } = useProjectContext();
    return (
        <div className="flex flex-col gap-5">
            <h3 className="font-gt_light text-slate-600 text-[32px]">Iconography</h3>
            {icons && (
                <div className="flex flex-wrap color-sections gap-5">
                    {icons.map((icon, i) => (
                        <IconBox key={i} path={icon} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Icons;
