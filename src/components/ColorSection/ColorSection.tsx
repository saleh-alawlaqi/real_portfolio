import ColorBox from "../ColorBox";
interface ColorSectionProps {
    title: string;
    colors: { color: string; shade: string }[];
}
const ColorSection = ({ colors, title }: ColorSectionProps) => {
    return (
        <div className="flex flex-col color-section">
            <h3 className="font-gt_light text-slate-600 text-[22px]">{title}</h3>
            <div className="flex flex-wrap mt-3 gap-5">
                {colors.map(({ color, shade }, i) => (
                    <ColorBox key={i} color={color} shade={shade} />
                ))}
            </div>
        </div>
    );
};

export default ColorSection;
