interface ColorBoxProp {
    color: string;
    shade: string;
}
const ColorBox = ({ color, shade }: ColorBoxProp) => {
    return (
        <div className="color-box flex flex-col items-center">
            <div className="color_box  rounded-2xl w-16 h-16" style={{ background: color }}></div>
            <p className="text-slate-700 mt-2">{shade}</p>
        </div>
    );
};

export default ColorBox;
