import { Button, Input } from "@nextui-org/react";
import ColorBox from "../ColorBox";
import { useProjectForm } from "../ProjectForm";
interface ColorSectionProps {
    index: number;
    title: string;
    shades: { color: string; shade: string }[];
}
const ColorSection = ({ index, title, shades }: ColorSectionProps) => {
    const { project, setProject } = useProjectForm();
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const newColors = colors.map((color) => {
        //     if (color.title === e.target.value) {
        //         // Assuming you meant to compare to the input value
        //         return { ...color, title: e.target.value };
        //     }
        //     return color;
        // });
        setProject({
            ...project,
            colors: project.colors?.map((color, i) => {
                if (i === index) {
                    return { ...color, title: e.target.value };
                }
                return color;
            }),
        });
        // You need to update your state with newColors here
        // For example, if you have a setState method for colors:
        // setColors(newColors);
    };
    const onRemoveColorSection = () => {
        setProject({
            ...project,
            colors: project.colors?.filter((_, i) => i !== index),
        });
    };
    // When it adds a new color increment 100 then 200 and so on

    const onAddColor = () => {
        setProject((prev) => {
            return {
                ...prev,
                colors: prev.colors.map((color, i) => {
                    if (i === index) {
                        return {
                            ...color,
                            shades: [...color.shades, { color: "#000000", shade: i + 1 + "00" }],
                        };
                    }
                    return color;
                }),
            };
        });
    };
    return (
        <div className="flex border border-slate-300 gap-5 p-5 flex-col color-section">
            <div className="flex justify-between gap-5 items-center">
                <Input
                    value={title}
                    onChange={onChangeTitle}
                    size="sm"
                    placeholder="Project Name"
                    name="name"
                />
                <Button onClick={onAddColor} variant="solid" color="secondary">
                    Add color
                </Button>
                <Button variant="solid" color="danger" onClick={onRemoveColorSection}>
                    Remove
                </Button>
            </div>
            <div className="flex flex-wrap mt-3 gap-5">
                {shades.map(({ color, shade }, i) => (
                    <ColorBox sectionIndex={index} index={i} key={i} color={color} shade={shade} />
                ))}
            </div>
        </div>
    );
};

export default ColorSection;
