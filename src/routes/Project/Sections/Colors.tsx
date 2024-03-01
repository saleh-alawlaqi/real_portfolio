import ColorSection from "../../../components/ColorSection";
import { useProjectContext } from "../ProjectContext";

const Colors = () => {
    const {
        project: { colors },
    } = useProjectContext();
    return (
        <div className="flex flex-col gap-5">
            <h3 className="font-gt_light text-slate-600 text-[32px]">Colors</h3>
            <hr />
            {colors && (
                <div className="flex flex-col color-sections gap-5">
                    {colors.map((color) => (
                        <ColorSection title={color.title} colors={color.shades} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Colors;
