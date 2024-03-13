import { Button, Select, SelectItem } from "@nextui-org/react";
import { useProjectForm } from "../../ProjectForm";
import ColorPalette from "../../boxes/ColorPalette";
import { useState } from "react";
import { tailwindColors } from "../../includes";

const ColorSection = () => {
    const { setProject, project, error } = useProjectForm();
    const [selectedTailwindColor, setSelectedTailwindColor] = useState<string>("Green");
    const addColorSection = () => {
        setProject((prev) => ({
            ...prev,
            colors: [
                ...prev.colors!,
                {
                    title: "New Color Section",
                    shades: [
                        { color: "#000000", shade: "100" },
                        { color: "#000000", shade: "200" },
                        { color: "#000000", shade: "300" },
                    ],
                },
            ],
        }));
    };

    const addTailwindColorSection = () => {
        const selectedColor = tailwindColors[selectedTailwindColor as keyof typeof tailwindColors];
        setProject((prev) => ({
            ...prev,
            colors: [
                ...prev.colors!,
                {
                    title: selectedTailwindColor,
                    shades: selectedColor,
                },
            ],
        }));
    };

    return (
        <div
            id="color_section"
            className={`flex flex-col colors gap-5 ${
                error === "color_section" ? "border-2 border-red-500" : ""
            }`}
        >
            <div className="colors-heading flex justify-between">
                <span className="text-2xl">Colors</span>

                <div className="quick-add-tailwind-colors w-[25rem] mr-10 gap-3 ml-auto flex">
                    <Select
                        placeholder="Select Type"
                        name="type"
                        className="flex-1"
                        labelPlacement="outside"
                        value={"Green"}
                        selectedKeys={[selectedTailwindColor]}
                        onChange={(e) => setSelectedTailwindColor(e.target.value as string)}
                    >
                        <SelectItem key={"Green"} value={"Green"}>
                            Green
                        </SelectItem>
                        <SelectItem key={"Blue"} value={"Blue"}>
                            Blue
                        </SelectItem>
                        <SelectItem key={"Red"} value={"Red"}>
                            Red
                        </SelectItem>
                        <SelectItem key={"Yellow"} value={"Yellow"}>
                            Yellow
                        </SelectItem>
                        <SelectItem key={"Purple"} value={"Purple"}>
                            Purple
                        </SelectItem>
                        <SelectItem key={"Emerald"} value={"Emerald"}>
                            Emerald
                        </SelectItem>
                        <SelectItem key={"Cyan"} value={"Cyan"}>
                            Cyan
                        </SelectItem>
                        <SelectItem key={"Gray"} value={"Gray"}>
                            Gray
                        </SelectItem>
                        <SelectItem key={"Slate"} value={"Slate"}>
                            Slate
                        </SelectItem>
                    </Select>
                    <Button
                        onClick={addTailwindColorSection}
                        className="rounded-full font-medium"
                        variant="solid"
                        color="secondary"
                    >
                        Add tailwind section
                    </Button>
                </div>
                <Button
                    onClick={addColorSection}
                    className="rounded-full font-medium"
                    variant="solid"
                    color="primary"
                >
                    Add color section
                </Button>
            </div>
            {project.colors.length > 0 &&
                project.colors
                    ?.slice()
                    .reverse()
                    .map((color, index) => (
                        <ColorPalette
                            key={index}
                            index={project.colors.length - 1 - index} // Adjust index for descending order
                            title={color.title}
                            shades={color.shades}
                        ></ColorPalette>
                    ))}
        </div>
    );
};

export default ColorSection;
