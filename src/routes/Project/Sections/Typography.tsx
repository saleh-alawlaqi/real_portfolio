import TypeBox from "../../../components/TypeBox";
import { useProjectContext } from "../ProjectContext";

const Typography = () => {
    const {
        project: { types },
    } = useProjectContext();
    return (
        <div className="flex flex-col gap-5">
            <h3 className="font-gt_medium text-slate-600 text-[32px]">Typography</h3>
            <hr />
            {types && (
                <div className="flex flex-col color-sections gap-5">
                    {types.map(({ fontFamily, fontSize, fontWeight, lineHeight, title }) => (
                        <TypeBox
                            fontFamily={fontFamily}
                            fontSize={fontSize}
                            fontWeight={fontWeight}
                            lineHeight={lineHeight}
                            title={title}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Typography;
