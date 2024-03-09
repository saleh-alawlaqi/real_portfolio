import { Button } from "@nextui-org/react";
import { useProjectForm } from "../../ProjectForm";
import ColorPalette from "../../boxes/ColorPalette";

const ColorSection = () => {
    const { setProject, project } = useProjectForm();
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
    return (
        <div className="flex flex-col colors gap-5">
            <div className="colors-heading flex justify-between">
                <span className="text-2xl">Colors</span>
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
