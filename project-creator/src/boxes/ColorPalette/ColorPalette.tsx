import { Button, Input } from "@nextui-org/react";
import ColorBox from "../ColorBox";
interface ColorPaletteProps {
    index: number;
    title: string;
    shades: { color: string; shade: string }[];
    onChangeColorTitle: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    onRemoveColorPalette: (index: number) => void;
    onAddColor: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => void;
}
const ColorPalette = ({
    index,
    title,
    shades,
    onAddColor,
    onChangeColorTitle,
    onRemoveColorPalette,
}: ColorPaletteProps) => {
    // const { project, setProject } = useProjectForm();
    // const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setProject({
    //     ...project,
    //     colors: project.colors?.map((color, i) => {
    //         if (i === index) {
    //             return { ...color, title: e.target.value };
    //         }
    //         return color;
    //     }),
    // });
    // You need to update your state with newColors here
    // For example, if you have a setState method for colors:
    // setColors(newColors);
    // };

    return (
        <div className="flex border shadow-medium rounded-lg border-slate-300 gap-5 p-5 flex-col color-section">
            <div className="flex justify-between gap-5 items-center">
                <Input
                    value={title}
                    onChange={(e) => onChangeColorTitle(e, index)}
                    size="sm"
                    placeholder="Project Name"
                    disableAnimation
                    name="name"
                />
                <Button
                    onClick={(e) => onAddColor(e, index)}
                    className="rounded-full flex-1"
                    disableAnimation
                    variant="solid"
                    color="secondary"
                >
                    Add color
                </Button>
                <Button
                    variant="solid"
                    className="rounded-full flex-1"
                    disableAnimation
                    color="danger"
                    onClick={() => onRemoveColorPalette(index)}
                >
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

export default ColorPalette;
